import { useEffect, useState } from "react";
import "./ProgressBar.scss";

export default function ProgressBar() {
    const [percentScrolled, setPercentScrolled] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const percentScrolled = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
            setPercentScrolled(percentScrolled);
        }


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="progress-bar">
            <div className="progress-bar__completed" style={{ width: `${percentScrolled}%`}}></div>
        </div>
    );
}