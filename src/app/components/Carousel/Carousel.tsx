"use client";

import Heading from "../Heading/Heading";
import CarouselItem from "./CarouselItem";
import "./Carousel.scss";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Carousel() {
    const [activeItem, setActiveItem] = useState(0);
    const [direction, setDirection] = useState("right");

    useEffect(() => {

    }, [activeItem])

    const carouselItems = [
        <>
                    <Heading level={3} text="Inclusion & Collaboration" />
                    <p>Great ideas thrive in diverse, inclusive communities where everyone’s voice is heard. I actively work to foster environments where all perspectives are valued. By bridging gaps and creating space for diverse viewpoints, I help build stronger, more impactful solutions that reflect the needs of everyone involved.</p>
        </>,
        <>
                    <Heading level={3} text="User-Centered Solutions" />
                    <p>Engaging web experiences put users and their needs first. No matter the ask, my priority is always to understand the core problem directly from the user. From there, I partner with cross-functional teams to create solutions that directly address those needs — not just check boxes.</p>

        </>,       
        <>
                    <Heading level={3} text="Creativity" />
                    <p>Curiosity, experimentation, and collaboration drive the way I bring ideas to life. Whether I’m developing a project at work or pursuing a passion outside of it, creativity keeps me engaged, inspired, and always looking for new opportunities to grow.</p>
        </>
        // ,
        // <>
        //             <Heading level={3} text="User Focused" />
        //             <p>Engaging web experiences put users first. From accessibility best practices to measurable A/B testing to intuitive internal tools, I aim for thoughtful, collaborative design and implementation that meets actual needs and doesn't just check boxes.</p>

        // </>
    ];

    const handleActiveChange = (index: number) => {
        if(activeItem > index) {
            setDirection("left");
        } else {
            setDirection("right");
        }
        setActiveItem(index);
    }

    const handlePrev = () => {
        if(activeItem <= 0) {
            setActiveItem(carouselItems.length - 1);
        }
        else {
            setActiveItem(activeItem - 1);
        }
        setDirection("left");
    }
    const handleNext = () => {
        if(activeItem >= carouselItems.length - 1) {
            setActiveItem(0);
        }
        else {
            setActiveItem(activeItem + 1);
        }
        setDirection("right");
    }

    return (
        <div className="carousel">
            <div className="carousel__body">
                <Button onClick={handlePrev} className="carousel__button carousel__button--prev simple">
                    <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
                </Button>
                <div className={`carousel__items carousel__move--${direction}`}>
                {carouselItems.map((entry: React.ReactNode, index: number) => {
                    return(
                        <CarouselItem key={index} className={`${activeItem === index ? "carousel__item--active" : ""}`}>
                            {entry}
                        </CarouselItem>
                    )
                })}
                </div>
                <Button onClick={handleNext} className="carousel__button carousel__button--next simple">
                    <FontAwesomeIcon icon={faChevronRight} size="2x"/>
                </Button>
            </div>
            <div className="carousel__bullets">
                {carouselItems.map((entry: React.ReactNode, index: number) => {
                    return (
                        <Button
                            key={index}
                            onClick={() => { handleActiveChange(index) }}
                            className={`carousel__bullet simple ${activeItem === index ? "carousel__bullet--active" : ""}`}
                            title={`Go to slide ${index + 1}`}>
                            <FontAwesomeIcon icon={faCircle} />
                        </Button>
                    )
                })}
            </div>
        </div>
    );
}