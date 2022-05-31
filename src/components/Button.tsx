import React, { ReactNode } from 'react';

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <button type="button" onClick={props.onClick} className="w-6 h-6 inline-block p-1 bg-neutral-focus rounded-md bg-blue-600 text-base-100 leading-normal uppercase">{props.children}</button>
    );
}

export default Button;