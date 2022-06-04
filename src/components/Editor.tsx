import React from 'react';

import { RootState } from '../store/config';
import { setContent, setFontSize } from '../store/slice/editor';
import { useAppSelector, useAppDispatch } from '../store/hooks';

import FilenameInput from './FilenameInput';
import NumberInput from './NumberInput';
import EditorRender from './EditorRender';
import EditorToolbar from './EditorToolbar';

function Editor() {
    const filename = useAppSelector((state: RootState) => state.editor.filename);
    const fontSize = useAppSelector((state: RootState) => state.editor.fontSize);
    const isRender = useAppSelector((state: RootState) => state.editor.isRender);
    const alignText = useAppSelector((state: RootState) => state.editor.alignText);
    const content = useAppSelector((state: RootState) => state.editor.content);

    const dispatch = useAppDispatch();
    const textAreaStyles: React.CSSProperties = { resize: "none", fontSize: `${fontSize}px`, textAlign: alignText };

    return (
        <div className="w-full h-full bg-base-100 dark:bg-base-900">
            {isRender ? (
                <div className="flex flex-col p-4 w-full h-full">
                    <div className="p-2 font-extrabold w-full h-10 text-base-800 dark:text-base-300">{filename}</div>
                    <EditorRender content={content} fontSize={fontSize} align={alignText} />
                </div>
            ) : (
                <div className="flex flex-col p-4 w-full h-full">
                    <div className="flex flex-row gap-x-1">
                        <div className="flex-auto"><FilenameInput /></div>
                        <div className="basis-44 min-w-44"><EditorToolbar /></div>
                        <div className="basis-20 min-w-20"><NumberInput minValue={8} maxValue={36} defaultValue={fontSize} onChange={val => dispatch(setFontSize(val))} /></div>
                    </div>
                    <textarea className="flex-auto mt-2 rounded-md bg-transparent dark:bg-base-900 text-base-800 dark:text-base-300 px-2 py-1 w-full h-content 
                            border-0 outline-none hover:bg-base-800/10 focus:bg-base-800/10 dark:hover:bg-base-200/10 dark:focus:bg-base-200/10"
                        style={textAreaStyles} value={content} onChange={e => dispatch(setContent(e.target.value))}
                        placeholder="Type your text or formulas here. Hold 'ALT' to toggle render mode. To render equations wrap them into $ ... $.">
                    </textarea>
                </div>
            )}
        </div>
    );
}

export default Editor;
