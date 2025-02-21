import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { gridItems } from '../data'

function Grid() {
  return (
    <div className='mt-10 md:nt-20'>
       <BentoGrid className="max-w-6xl  mx-auto ">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          imgClassName={item.imgClassName}
          img={item.img}
          titleClassName={item.titleClassName}
        />
      ))}
    </BentoGrid>
    </div>
   
  )
}

export default Grid
