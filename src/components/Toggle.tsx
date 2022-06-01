import { useState, ReactNode } from 'react';
import Button from './Button';

interface ToggleProps {
    onClick?: (value: boolean) => void,
    children: ReactNode;
}

function Toggle(props: ToggleProps) {
    const [isToggled, setIsToggled] = useState(false);
    const backgroundClass = isToggled ? "toggle-active" : "toggle";

    return (
        <Button backgroundClass={backgroundClass} onClick={_ => { setIsToggled(!isToggled); props.onClick && props.onClick(!isToggled) }}>{props.children}</Button>
    );
}

export default Toggle;
