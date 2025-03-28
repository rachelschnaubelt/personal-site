import './Toggle.scss';

interface ToggleProps {
    onChange: (value: boolean) => void;
  }
  
export default function Toggle({onChange = () => {} }: ToggleProps) {
    return (
        <label className="toggle">
            <input type="checkbox" className="hidden" 
                onChange={(event) => {onChange(event?.target.checked)}}/>
            <span className="slider"></span>
        </label>
    );
}
  