import React, { ReactNode } from 'react';

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <button type="button" onClick={props.onClick} className="w-14 h-14 inline-block p-2 bg-neutral-focus rounded-md bg-blue-600 text-base-100 leading-normal uppercase">{props.children}</button>
    );
}

export default Button;
