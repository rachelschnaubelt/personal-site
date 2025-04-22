"use client";

import { useEffect, useRef } from "react";
import Heading from "../Heading/Heading";
import "./SkillList.scss";


interface SkillListProps {
  item: string
}

export default function SkillList({item}: SkillListProps) {
  const jsonItem = JSON.parse(item);
  const {category, skill} = jsonItem.fields;
  const skillListRef = useRef(null);

  const options: IntersectionObserverInit = {
    root: skillListRef.current,
    threshold: 0.2,
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('initialized');
          }
        });
      }, options);

    if (skillListRef.current) {
      observer.observe(skillListRef.current);
    }

    return () => {
      if (skillListRef.current) {
         observer.unobserve(skillListRef.current)
      }
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="skill-list" ref={skillListRef}>
      <Heading level={2} text={category} className="skill-list__heading" />
      <ul className="skill-list__list">
        {skill.map((skillItem: string, index: number) => {
            return(
            <li key={index} className="skill-list__item">
                <span className="skill-list__item-inner inner">
                    {skillItem}
                </span>
            </li>
        )
        })}
      </ul>
    </div>
  )
}