import React from 'react';

import { setAlignment } from '../store/slice/editor';
import { useAppDispatch } from '../store/hooks';

import Button from './Button';

function EditorToolbar() {
    const dispatch = useAppDispatch();
    const customButtonStyle: React.CSSProperties = { width: "2.5rem", height: "2.5rem", padding: "0.5rem" }

    return (
        <div className="flex flex-row flex-nowrap justify-center gap-x-1 w-full h-10">
            <Button style={customButtonStyle} onClick={_ => dispatch(setAlignment("left"))}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </Button>
            <Button style={customButtonStyle} onClick={_ => dispatch(setAlignment("center"))}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </Button>
            <Button style={customButtonStyle} onClick={_ => dispatch(setAlignment("right"))}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </Button>
            <Button style={customButtonStyle} onClick={_ => dispatch(setAlignment("justify"))}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </Button>
        </div>
    );
}

export default EditorToolbar;
