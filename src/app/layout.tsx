'use client'

import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.scss";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('default');
  const [font, setFont] = useState('default');

  const handleThemeChange = (isDark: boolean) => {
    if(isDark)
      setTheme("dark");
    else
      setTheme("default");
  }

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(event.target?.value);
  }

  return (
    <html lang="en" className={`theme--${theme} theme--font-${font}`}>
      <body>
        <Link 
          href="#main-content" 
          className="skip-nav-link hidden "
          onFocus={(e) => {e.target.classList.remove('hidden')}}
          onBlur={(e) => {e.target.classList.add('hidden')}}>
            Skip to main content
        </Link>
        <Header setTheme={handleThemeChange} setFont={handleFontChange}/>
        <main id="main-content" className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
