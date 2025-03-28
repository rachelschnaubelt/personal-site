interface SelectProps {
    label: string,
    options: {value: string, text: string}[],
    onChange: React.ChangeEventHandler<HTMLSelectElement >
}

export default function Select({label, options, onChange}: SelectProps) {

    return (
        <label>
            {label}
            <select onChange={onChange}>
                {options.map((option: {value: string, text: string}, index: number) => {
                    return(<option key={index} value={option.value}>{option.text}</option>);
                })}
            </select>
        </label>
    );
}