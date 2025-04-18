"use client";

// import { useRef, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Toggle from "../Toggle/Toggle";
import "./Nav.scss";
import Link from 'next/link';
import Select from "../Select/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBriefcase, faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";



interface NavProps {
  setTheme?: (value: boolean) => void,
  setTemp?: (value: boolean) => void,
  setFont?: React.ChangeEventHandler<HTMLSelectElement >
}

export default function Nav({ setTheme = () => { }, setTemp = () => { }, setFont }: NavProps) {
  const pathname = usePathname();
  // const [settingsModalState, setSettingsModalState] = useState(false);
  // const buttonRef = useRef<HTMLButtonElement>(null);

//   const handleOpenSettings = () => {
//     buttonRef.current?.classList.add('rotate');
//     setTimeout(() => {
//       buttonRef.current?.classList.remove('rotate');
//     }, 1500)
//     setSettingsModalState(true);
//   }

//   const handleCloseModal = () => {
//     setSettingsModalState(false);
// }

  return (
    <nav className="nav">
      <ul>
        <li><Link className={`nav-link ${pathname === "/professional" ? "active" : ""}`} href="/professional"><FontAwesomeIcon className="nav-link__icon" icon={faHome} /><span className="nav-link__text">Overview</span></Link></li>
        <li><Link className={`nav-link ${pathname === "/professional/experience" ? "active" : ""}`} href="/professional/experience"><FontAwesomeIcon className="nav-link__icon" icon={faBriefcase} /><span className="nav-link__text">Experience</span></Link></li>
        <li><Link className={`nav-link ${pathname === "/professional/skills" ? "active" : ""}`} href="/professional/skills"><FontAwesomeIcon className="nav-link__icon" icon={faStar} /><span className="nav-link__text">Skills</span></Link></li>
        <li><Link className={`nav-link ${pathname === "/professional/about" ? "active" : ""}`} href="/professional/about"><FontAwesomeIcon className="nav-link__icon" icon={faAddressCard} /><span className="nav-link__text">About</span></Link></li>
      </ul>

      {/* <ul className="nav__social-links">
        <li>
          <Link href="https://www.linkedin.com/in/rachelschnaubelt/" target="_blank">
            <img src="/icons/user.svg" alt="User Icon" />LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://github.com/rachelschnaubelt" target="_blank">
            <img src="/icons/code-branch.svg" alt="Git Branch Icon"/>GitHub
          </Link>
        </li>
      </ul>
      <ul className="">
        <li>Experience</li>
        <li>Technical Skills</li>
        <li>About</li>
        <li>Interests</li>
        <li>Fun Stuff</li>
        <li>Projects</li>
        <li>
          <Button label="Open site settings" onClick={handleOpenSettings} className="nav__settings-button transparent-button" ref={buttonRef}>
            <img src="/icons/gear.svg" alt="Gear icon" />
          </Button>
        </li>
      </ul>
      <Modal state={settingsModalState} handleClose={handleCloseModal}>
        <div className="temp-toggle">
          <span>cool</span>
          <Toggle onChange={setTemp} />
          <span>warm</span>
        </div>
        <div className="theme-toggle">
          <img src="/icons/sunrise.svg" alt="Sunrise icon"/>
          <Toggle onChange={setTheme} />
          <img  src="/icons/moon-stars.svg" alt="Moon and stars icon"/>
        </div>
        <Select label="Select Font" options={[{text: "Default", value: "default"}, {text: "Open Dyslexic", value: "dyslexic"}]} onChange={setFont}/>
      </Modal> */}
    </nav>
  );
}
