"use client"

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import Button from "../Button/Button";
import "./Lights.scss";

export default function Lights() {
    const [isPaused, setIsPaused] = useState(false);

    const handlePause = () => {
        setIsPaused(!isPaused);
    }

  const lightNodes = () => {
    let nodes = [];
    for(let i = 0; i < 30; i++) {
        nodes.push(
            <span key={i} className={`light-${i}`}>
                <span className={`y`}>
                    <span id="x" className="x">
                        <span className="light" />
                    </span>
                </span>
            </span>
        );
    }
    return nodes;
  }

  return (
    <div className={`lights animated ${isPaused ? "pause" : ""}`}>
        {lightNodes()}
        <Button onClick={handlePause} className="lights__pause-button" title={`${isPaused? "play" : "pause"} background animation`}>
            {isPaused ? 
                <FontAwesomeIcon icon={faCirclePlay} size="2x" /> : 
                <FontAwesomeIcon icon={faCirclePause} size="2x" />}
            </Button>
    </div>
  );
}
