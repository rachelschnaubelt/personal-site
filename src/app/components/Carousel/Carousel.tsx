"use client";

import Heading from "../Heading/Heading";
import CarouselItem from "./CarouselItem";
import "./Carousel.scss";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

export default function Carousel() {
    const [activeItem, setActiveItem] = useState(0);
    const [direction, setDirection] = useState("right");

    useEffect(() => {

    }, [activeItem])

    const carouselItems = [<></>
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