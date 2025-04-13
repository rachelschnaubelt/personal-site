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
    title?: string,
    style?: "icon" | ""
}

const Button = ({children, type="button", label, className, onClick, ref, link, title, style = ""}: ButtonProps) => {
    return (
      <button type={type} aria-label={label} onClick={onClick} className={`button ${style ? "button--"+style : ""} ${link ? "button--link": ""} ${className ? className : ""}`} ref={ref} title={title}>
        <span className="button__inner">
          {link ? 
            (<Link href={link}>
              {children}
            </Link>
            ) : children
          }
        </span>
      </button>
    )
}

export default Button;