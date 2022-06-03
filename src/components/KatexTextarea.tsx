import katex from 'katex';
import React from 'react';

import { RootState } from '../store/config';
import { setContent } from '../store/slice/editor';
import { useAppSelector, useAppDispatch } from '../store/hooks';

import Hint from './Hint';

function KatexTextarea() {
    const fontSize = useAppSelector((state: RootState) => state.editor.fontSize);
    const isRender = useAppSelector((state: RootState) => state.editor.isRender);
    const content = useAppSelector((state: RootState) => state.editor.content);
    const hintKey = useAppSelector((state: RootState) => state.hint.key);

    const dispatch = useAppDispatch();

    const renderedEquations = katex.renderToString(content, { displayMode: false, throwOnError: false });
    
    const renderBlockStyles: React.CSSProperties = { fontSize: `${fontSize}px` };
    const textAreaStyles: React.CSSProperties = { resize: "none", fontSize: `${fontSize}px` };

    return (
        <div className="relative w-full h-full">
            {isRender ? (
                <>
                    <div className="bg-transparent p-4 text-sm leading-loose w-full h-full" style={renderBlockStyles} dangerouslySetInnerHTML={{__html: renderedEquations}} ></div>
                </>
            ) : (
                <>
                    <textarea className="rounded-md bg-transparent p-4 text-md leading-loose w-full h-full border-0 outline-none"
                        style={textAreaStyles} value={content} onChange={e => dispatch(setContent(e.target.value))}
                        placeholder="Type your text or formulas here. To render equations wrap them into $ ... $."></textarea>
                    <span className="absolute left-4 bottom-4 font-mono text-xs"><Hint hintKey={hintKey} /></span>
                </>
            )}
        </div>
    );
}

export default KatexTextarea;
