import React from 'react';

import { RootState } from '../store/config';
import { renderToImage } from '../store/slice/render';
import { setContent, setFontSize } from '../store/slice/editor';
import { useAppSelector, useAppDispatch } from '../store/hooks';

import FilenameInput from './FilenameInput';
import NumberInput from './NumberInput';
import EditorRender from './EditorRender';
import EditorToolbar from './EditorToolbar';
import Button from './Button';

function Editor() {
    const filename = useAppSelector((state: RootState) => state.editor.filename);
    const fontSize = useAppSelector((state: RootState) => state.editor.fontSize);
    const isRender = useAppSelector((state: RootState) => state.editor.isRender);
    const alignText = useAppSelector((state: RootState) => state.editor.alignText);
    const content = useAppSelector((state: RootState) => state.editor.content);

    const isRendering = useAppSelector((state: RootState) => state.render.isRendering);

    const dispatch = useAppDispatch();
    const textAreaStyles: React.CSSProperties = { resize: "none", fontSize: `${fontSize}px`, textAlign: alignText };

    return (
        <div className="w-full h-full bg-base-100 dark:bg-base-900">
            {isRender ? (
                <div className="flex flex-col p-4 w-full h-full">
                    <div className="flex flex-row gap-x-1 w-full h-10">
                        <div className="flex-auto">
                            <div className="p-2 font-extrabold text-base-800 dark:text-base-300">{filename}</div>
                        </div>
                        <div className="basis-10 min-w-10 p-1">
                            <Button onClick={_ => dispatch(renderToImage())}>
                                {
                                    isRendering ?
                                        (<span className="spinner"></span>) :
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        )
                                }
                            </Button>
                        </div>
                    </div>
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
