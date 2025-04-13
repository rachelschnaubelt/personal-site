"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";

interface generatorProps {
    generatorContent: string
}

export default function Generator({generatorContent}: generatorProps) {
    const [currentItem, setCurrentItem] = useState<string>("");
    const {items} = JSON.parse(generatorContent).fields;

    const handleGenerate = () => {
        const newItem = items[Math.floor(Math.random() * items.length)];
        setCurrentItem(newItem);
    }

    useEffect(() => {
        handleGenerate();
    }, [])

  return (
    <>
        <p>{currentItem}</p>
        <Button onClick={handleGenerate}>Generate!</Button>
    </>
  );
}
