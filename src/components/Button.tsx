import React, { ReactNode } from 'react';

interface ButtonProps {
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <button type="button" onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}
            className="w-10 h-10 inline-block p-2 rounded-md text-neutral leading-normal uppercase bg-transparent focus:bg-neutral/10 hover:bg-neutral/10 active:bg-neutral-focus/50">{props.children}</button>
    );
}

export default Button;
