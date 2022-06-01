import { useState, ReactNode } from 'react';
import Button from './Button';

interface ToggleProps {
    onClick?: (value: boolean) => void,
    defaultNode: ReactNode;
    toggledNode: ReactNode;
}

function Toggle(props: ToggleProps) {
    const [isToggled, setIsToggled] = useState(false);
    const children = isToggled ? props.toggledNode : props.defaultNode;

    return (
        <Button onClick={_ => { setIsToggled(!isToggled); props.onClick && props.onClick(!isToggled); }}>{children}</Button>
    );
}

export default Toggle;
