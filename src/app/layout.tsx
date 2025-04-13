"use client";

import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.scss";
import { useEffect, useState } from "react";
import { createClient, CreateClientParams, Entry, EntrySkeletonType } from "contentful";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('dark');
  const [temp, setTemp] = useState('cool');
  const [font, setFont] = useState('default');
  const [pageContent, setPageContent] = useState<Entry<EntrySkeletonType, undefined, string>[]>();
  const [contentLoaded, setContentLoaded] = useState<boolean>(false);

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

  useEffect(() => {
    const getPageContent = async () => {
      try{
      const clientProps: CreateClientParams = {
          space: process.env.CONTENTFUL_SPACE_ID!,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
        }
        const client = createClient(clientProps);
      
        const pageQueryParams = {
          content_type: "page",
          'fields.slug[in]': 'home'
        };
      
        const results = await client.getEntries(pageQueryParams);
        setPageContent(results.items);
      }
      catch(err) {

      }
      finally {
        setContentLoaded(true);
      }
      }
      getPageContent();
  }, [])

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
        {contentLoaded && <Header 
          setTheme={handleThemeChange} 
          setTemp={handleTemperatureChange} 
          setFont={handleFontChange}
          headerContent={JSON.stringify(pageContent && pageContent[0].fields.header)}/>}
          {children}
      </body>
    </html>
  );
}
