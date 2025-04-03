"use client"

import { useEffect, useRef, useState } from "react";
import "./Accordion.scss";
import Heading from "../Heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
        const contentDiv = contentRef.current;
        if(contentDiv) {
            const height = contentDiv?.clientHeight;
            contentDiv.style.height = `${height}px`;
        }
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
