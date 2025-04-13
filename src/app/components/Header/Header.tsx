
import Link from "next/link";
import Nav from "../Nav/Nav";
import "./Header.scss";
import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import ProgressBar from "../ProgressBar/ProgressBar";
import { usePathname } from "next/navigation";

interface HeaderProps {
  setTheme?: (value: boolean) => void,
  setTemp?: (value: boolean) => void,
  setFont?: React.ChangeEventHandler<HTMLSelectElement>,
  headerContent: string
}

export default function Header({ setTheme = () => { }, setTemp = () => { }, setFont, headerContent}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparentBg, setIsTransparentBg] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const {headerText} = JSON.parse(headerContent).fields;
  const pathName = usePathname();

  useEffect(() => {

    const handleResize = () => {
      const bodyScrollHeight = document.body.scrollHeight;

      setBodyHeight(bodyScrollHeight);

      if(bodyScrollHeight <= window.innerHeight) {
        setIsTransparentBg(true);
      }
      else {
        setIsTransparentBg(false);
      }
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }

      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [pathName]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for(const entry of entries) {
        setBodyHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(document.body);
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/">
        <Heading className="header__text" level={1} text={headerText} />
      </Link>
      <ProgressBar />
      {!isTransparentBg && 
        <div className="header__background" style={{"height": `${bodyHeight}px`, "top": `-${scrollPosition}px`}}></div>
      }

      {/* <Nav setTheme={setTheme} setTemp={setTemp} setFont={setFont} /> */}
      {/* <div className="glass-effect-wrapper">
        <div className="glass-effect"></div>
      </div> */}

    </header>
  );
}
