"use client"

import { useEffect, useRef, useState } from "react";
import "./Accordion.scss";
import Heading from "../Heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
    heading: string,
    children: React.ReactNode
}

export default function Accordion({heading, children}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);
    
    const handleOpenClose = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {

        const handleResize = () => {
            const contentDiv = contentRef.current;
            if(contentDiv) {
                contentDiv.style.height = "auto";
                const height = contentDiv?.scrollHeight;
                contentDiv.style.height = height + "px";
            }
          };
      
          handleResize();

          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, [])
  

  return (
    <div className={`accordion ${isOpen ? "open" : "closed"}`}>
        <div className="accordion__head" onClick={handleOpenClose}>
            <FontAwesomeIcon icon={faChevronDown} className="accordion__chevron"/>
            <Heading text={heading} level={3}/>
        </div>
        <div className="accordion__content" ref={contentRef}>
            {children}
        </div>
    </div>
  );
}
