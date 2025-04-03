import "./Screen.scss";

interface ScreenProps {
    children?: React.ReactNode
}

export default function Screen({children}: ScreenProps) {
    
      return (
        <div className="screen">
            {children}
        </div>
      );
    }
    