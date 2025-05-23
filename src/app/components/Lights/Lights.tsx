"use client"

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
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
        <Button onClick={handlePause} className="lights__pause-button simple" title={`${isPaused? "play" : "pause"} background animation`} style="icon">
            {isPaused ? 
                <FontAwesomeIcon icon={faPlay} size="2x" /> : 
                <FontAwesomeIcon icon={faPause} size="2x" />}
            </Button>
    </div>
  );
}
