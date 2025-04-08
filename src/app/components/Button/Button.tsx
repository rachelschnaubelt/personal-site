import "./Button.scss";
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined, 
    label?: string,
    className?: string,
    onClick?: () => void,
    ref?: React.RefObject<HTMLButtonElement | null>,
    link?: string,
    title?: string
}

const Button = ({children, type="button", label, className, onClick, ref, link, title}: ButtonProps) => {
    return (
      <button type={type} aria-label={label} onClick={onClick} className={`button ${className ? className : ""}`} ref={ref} title={title}>
        {link ? 
          (<Link href={link}>
            {children}
          </Link>
          ) : children
        }
      </button>
    )
}

export default Button;