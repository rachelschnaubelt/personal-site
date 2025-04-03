import Link from "next/link";
import Nav from "../Nav/Nav";
import "./Header.scss";
import { useEffect, useRef } from "react";
import Heading from "../Heading/Heading";
import ProgressBar from "../ProgressBar/ProgressBar";

interface HeaderProps {
  setTheme: (value: boolean) => void,
  setTemp: (value: boolean) => void,
  setFont: React.ChangeEventHandler<HTMLSelectElement >,
  isScrolled: boolean
}

export default function Header({ setTheme = () => { }, setTemp = () => { }, setFont , isScrolled}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  

  return (
    <header ref={headerRef} className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/">
        <Heading className="header__text" level={1} text="Rachel Schnaubelt" />
      </Link>

      {/* <Nav setTheme={setTheme} setTemp={setTemp} setFont={setFont} /> */}
      {/* <div className="glass-effect-wrapper">
        <div className="glass-effect"></div>
      </div> */}
      {/* <ProgressBar /> */}
        
    </header>
  );
}
