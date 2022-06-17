import React from 'react';

import { RootState } from '../store/config';
import { renderToClipboard, renderToFile } from '../store/slice/render';
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
                        <div className="basis-18 min-w-18 p-1">
                            <Button onClick={_ => dispatch(renderToFile())} disabled={isRendering}>
                                {
                                    isRendering ?
                                        (<span className="spinner"></span>) :
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-icons w-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        )
                                }
                            </Button>
                            <Button onClick={_ => dispatch(renderToClipboard())} disabled={isRendering}>
                                {
                                    isRendering ?
                                        (<span className="spinner"></span>) :
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-icons w-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
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
