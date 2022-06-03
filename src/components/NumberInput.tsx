import { useState } from 'react';

interface NumberInputProps {
    minValue?: number;
    maxValue?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
}

function NumberInput(props: NumberInputProps) {
    const [value, setValue] = useState(props.defaultValue ?? 0);
    const increment = () => { setValue(value + 1); props.onChange && props.onChange(value + 1); };
    const decrement = () => { setValue(value - 1); props.onChange && props.onChange(value - 1); };
    const setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const intValue = +event.target.value

        if ((props.minValue && props.minValue > intValue) || (props.maxValue && props.maxValue < intValue)) { return; }
        else { setValue(intValue); props.onChange && props.onChange(intValue); }
    };

    return (
        <div className="number-input relative w-full h-10">
            <input type="text" value={value} onChange={e => setInputValue(e)}
                className="rounded-md px-2 py-1 border-0 outline-none font-extrabold bg-transparent text-neutral hover:bg-neutral/10 focus:bg-neutral/10 w-full h-10" />
            <button onClick={_ => increment()} className="absolute w-3 h-3 right-2 top-2 rounded-sm bg-transparent focus:bg-neutral/10 hover:bg-neutral/10 active:bg-neutral-focus/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
            <button onClick={_ => decrement()} className="absolute w-3 h-3 right-2 bottom-2 rounded-sm bg-transparent focus:bg-neutral/10 hover:bg-neutral/10 active:bg-neutral-focus/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
}

export default NumberInput;
