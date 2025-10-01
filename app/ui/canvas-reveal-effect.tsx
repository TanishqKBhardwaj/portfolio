"use client";
import { cn } from "@/lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

/** ----- Top-level Types ----- */
export type UniformType =
  | { type: "uniform1f"; value: number }
  | { type: "uniform1fv"; value: number[] }
  | { type: "uniform2f"; value: [number, number] | THREE.Vector2 }
  | { type: "uniform3f"; value: [number, number, number] | THREE.Vector3 }
  | { type: "uniform3fv"; value: number[][] | THREE.Vector3[] };

export type ShaderUniforms = Record<string, UniformType>;

/** ----- CanvasRevealEffect Component ----- */
export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          shader={`
            float animation_speed_factor = ${animationSpeed.toFixed(1)};
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
            opacity *= step(intro_offset, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          `}
         
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

/** ----- DotMatrix Component ----- */
interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
}) => {
  const uniforms: ShaderUniforms = useMemo(() => {
    let colorsArray = [colors[0], colors[0], colors[0], colors[0], colors[0], colors[0]];
    if (colors.length === 2) {
      colorsArray = [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]];
    } else if (colors.length === 3) {
      colorsArray = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
    }

    return {
      u_colors: { value: colorsArray.map(c => new THREE.Vector3(...c.map(v => v / 255))), type: "uniform3fv" },
      u_opacities: { value: opacities, type: "uniform1fv" },
      u_total_size: { value: totalSize, type: "uniform1f" },
      u_dot_size: { value: dotSize, type: "uniform1f" },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return <Shader source={shader} uniforms={uniforms} />;
};

/** ----- Shader Component ----- */
interface ShaderProps {
  source: string;
  uniforms: ShaderUniforms;
  maxFps?: number;
}

const Shader: React.FC<ShaderProps> = ({ source, uniforms, maxFps = 60 }) => {
  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
    </Canvas>
  );
};

/** ----- ShaderMaterial Component ----- */
interface ShaderMaterialProps {
  source: string;
  uniforms: ShaderUniforms;
  maxFps?: number;
}

const ShaderMaterial: React.FC<ShaderMaterialProps> = ({ source, uniforms, maxFps = 60 }) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null);
  let lastFrameTime = 0;

  // Update time uniform on each frame
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) return;
    lastFrameTime = timestamp;

    const material = ref.current.material as THREE.ShaderMaterial;
    if (material.uniforms.u_time) {
      (material.uniforms.u_time as THREE.IUniform).value = timestamp;
    }
  });

  const getUniforms = (): Record<string, THREE.IUniform> => {
    const preparedUniforms: Record<string, THREE.IUniform> = {};

    for (const uniformName in uniforms) {
      const u = uniforms[uniformName];
      preparedUniforms[uniformName] = { value: u.value as any };
    }

    preparedUniforms["u_time"] = { value: 0 };
    preparedUniforms["u_resolution"] = { value: new THREE.Vector2(size.width * 2, size.height * 2) };
    return preparedUniforms;
  };

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main() {
          vec2 pos = position.xy;
          gl_Position = vec4(pos, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: getUniforms(),
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [size.width, size.height, source]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};
