import { JSX } from "react";
import './Heading.scss';

interface HeadingProps {
    text: string,
    level?: number,
    className?: string
}

export default function Heading({text, level = 1, className = ""}: HeadingProps) {
    if(level <= 0) {
        level = 1;
    }
    else if (level > 6) {
        level = 6;
    }

    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    
    return (
        <Tag className={`heading ${className}`}>
            {text}
        </Tag>
    );
}