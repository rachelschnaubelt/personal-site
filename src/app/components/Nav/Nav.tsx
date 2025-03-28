import { useRef, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Toggle from "../Toggle/Toggle";
import "./Nav.scss";
import Link from 'next/link';
import Select from "../Select/Select";


interface NavProps {
  setTheme: (value: boolean) => void,
  setFont: React.ChangeEventHandler<HTMLSelectElement >
}

export default function Nav({ setTheme = () => { }, setFont }: NavProps) {
  const [settingsModalState, setSettingsModalState] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpenSettings = () => {
    buttonRef.current?.classList.add('rotate');
    setTimeout(() => {
      buttonRef.current?.classList.remove('rotate');
    }, 1500)
    setSettingsModalState(true);
  }

  const handleCloseModal = () => {
    setSettingsModalState(false);
}

  return (
    <nav className="nav">
      <ul className="nav__social-links">
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
        <div className="theme-toggle">
          <img src="/icons/sunrise.svg" alt="Sunrise icon"/>
          <Toggle onChange={setTheme} />
          <img  src="/icons/moon-stars.svg" alt="Moon and stars icon"/>
        </div>
        <Select label="Select Font" options={[{text: "Default", value: "default"}, {text: "Open Dyslexic", value: "dyslexic"}]} onChange={setFont}/>
      </Modal>
    </nav>
  );
}
