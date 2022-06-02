import React from 'react';

import { RootState } from '../store/config';
import { useAppSelector } from '../store/hooks';

import Hint from './Hint';

function KatexTextarea() {
    const hintKey = useAppSelector((state: RootState) => state.hint.key);
    const textAreaStyles: React.CSSProperties = {
        resize: "none"
    };

    return (
        <div className="relative w-full h-full">
            <textarea className="rounded-md bg-transparent p-4 text-md leading-loose w-full h-full" style={textAreaStyles}
                placeholder="Type your text or formulas here. To render equations wrap them into $ ... $."></textarea>
            <span className="absolute left-4 bottom-4 font-mono text-xs"><Hint hintKey={hintKey} /></span>
        </div>
    );
}

export default KatexTextarea;
