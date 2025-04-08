'use client'

import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.scss";
import { useState, useEffect, useRef } from "react";
import MobileNav from "./components/MobileNav/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('dark');
  const [temp, setTemp] = useState('cool');
  const [font, setFont] = useState('default');

  const handleThemeChange = (isDark: boolean) => {
    if(isDark)
      setTheme("dark");
    else
      setTheme("default");
  }

  const handleTemperatureChange = (isWarm: boolean) => {
    if(isWarm)
      setTemp("warm");
    else
      setTemp("cool");
  }

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(event.target?.value);
  }

  return (
    <html lang="en" className={`theme--${temp}--${theme} theme--font-${font}`}>
      <body>
        <Link 
          href="#main-content" 
          className="skip-nav-link hidden "
          onFocus={(e) => {e.target.classList.remove('hidden')}}
          onBlur={(e) => {e.target.classList.add('hidden')}}>
            Skip to main content
        </Link>
        <Header setTheme={handleThemeChange} setTemp={handleTemperatureChange} setFont={handleFontChange}/>
        <main id="main-content" className="main-content">
          {children}
        </main>
        <MobileNav />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
