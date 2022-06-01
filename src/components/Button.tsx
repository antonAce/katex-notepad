import React, { ReactNode } from 'react';

interface ButtonProps {
    backgroundClass?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: ReactNode;
}

function Button(props: ButtonProps) {
    const backgroundClass = props.backgroundClass ?? "toggle";
    const className = "w-10 h-10 inline-block p-2 rounded-md text-neutral leading-normal uppercase " + backgroundClass;

    return (
        <button type="button" onClick={props.onClick} className={className}>{props.children}</button>
    );
}

export default Button;
