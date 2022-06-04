import { useState } from 'react';

interface NumberInputProps {
    minValue?: number;
    maxValue?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
}

function NumberInput(props: NumberInputProps) {
    const [value, setValue] = useState(props.defaultValue ?? 0);
    const increment = () => {
        if (props.maxValue && props.maxValue > value) {
            setValue(value + 1);
            props.onChange && props.onChange(value + 1);
        }
    };
    const decrement = () => {
        if (props.minValue && props.minValue < value) {
            setValue(value - 1);
            props.onChange && props.onChange(value - 1);
        }
    };
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        let intValue = +event.target.value;

        if (props.minValue && props.minValue > intValue) { intValue = props.minValue }
        if (props.maxValue && props.maxValue < intValue) { intValue = props.maxValue }

        setValue(intValue);
        props.onChange && props.onChange(intValue);
    };

    return (
        <div className="number-input relative w-full h-10">
            <input type="text" value={value} onChange={e => setValue(+e.target.value)} onBlur={e => onBlur(e)}
                className="rounded-md px-2 py-1 border-0 outline-none font-extrabold bg-transparent dark:bg-base-900 text-base-800 dark:text-base-300 hover:bg-base-800/10 focus:bg-base-800/10 dark:hover:bg-base-200/10 dark:focus:bg-base-200/10 w-full h-10" />
            <button onClick={_ => increment()} className="absolute w-3 h-3 right-2 top-2 rounded-sm 
                    bg-transparent text-base-800 dark:text-base-300 hover:bg-base-800/10 focus:bg-base-800/10 active:bg-base-900/50 dark:hover:bg-base-200/10 dark:focus:bg-base-200/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
            <button onClick={_ => decrement()} className="absolute w-3 h-3 right-2 bottom-2 rounded-sm 
                    bg-transparent text-base-800 dark:text-base-300 hover:bg-base-800/10 focus:bg-base-800/10 active:bg-base-900/50 dark:hover:bg-base-200/10 dark:focus:bg-base-200/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
}

export default NumberInput;
