import Link from "next/link";
import Nav from "../Nav/Nav";
import "./Header.scss";
import { useEffect, useRef } from "react";
import Heading from "../Heading/Heading";
import ProgressBar from "../ProgressBar/ProgressBar";

interface HeaderProps {
  setTheme: (value: boolean) => void,
  setFont: React.ChangeEventHandler<HTMLSelectElement >
}

export default function Header({ setTheme = () => { }, setFont }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      let headerTop = headerRef.current?.getBoundingClientRect().top;
      if(headerTop && headerTop >= 0) {
        headerRef.current?.classList.remove('sticky');
      }
      else {
        headerRef.current?.classList.add('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <Link href="/">
        <Heading className="header__text" level={1} text="Rachel Schnaubelt" />
      </Link>

      <Nav setTheme={setTheme} setFont={setFont} />
      <div className="glass-effect-wrapper">
        <div className="glass-effect"></div>
      </div>
      <ProgressBar />
        
    </header>
  );
}
