import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";



export const metadata: Metadata = {
  title: "Tanishq Bhardwaj Portfolio",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor:'#03001C'}}>
        <head />
        <body >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
