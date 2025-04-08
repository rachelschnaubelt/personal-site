interface CarouselItemProps {
    children: React.ReactNode,
    className: string
}
export default function CarouselItem({children, className} : CarouselItemProps) {

    return (
        <div className={`carousel__item ${className}`}>
            {children}
        </div>
    );
}