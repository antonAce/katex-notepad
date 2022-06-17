import { useState, ReactNode } from 'react';
import Button from './Button';

interface ToggleProps {
    disabled?: boolean | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>,
    onClick?: (value: boolean) => void,
    defaultNode: ReactNode;
    toggledNode: ReactNode;
}

function Toggle(props: ToggleProps) {
    const [isToggled, setIsToggled] = useState(false);
    const children = isToggled ? props.toggledNode : props.defaultNode;

    return (
        <Button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={_ => { setIsToggled(!isToggled); props.onClick && props.onClick(!isToggled); }} disabled={props.disabled}>{children}</Button>
    );
}

export default Toggle;
