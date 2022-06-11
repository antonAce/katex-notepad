import { RootState } from '../store/config';
import { setFilename, renameProject } from '../store/slice/editor';
import { useAppSelector, useAppDispatch } from '../store/hooks';

function FilenameInput() {
    const isDraft = useAppSelector((state: RootState) => state.editor.isDraft);
    const isRenaming = useAppSelector((state: RootState) => state.editor.isRenaming);
    const isRenamingSaved = useAppSelector((state: RootState) => state.editor.isRenamingSaved);
    const filename = useAppSelector((state: RootState) => state.editor.filename);
    const filepath = useAppSelector((state: RootState) => state.editor.filepath);
    const isFilenameValid = useAppSelector((state: RootState) => state.editor.isFilenameValid);

    const dispatch = useAppDispatch();
    const draftInputStyles: React.CSSProperties = { paddingLeft: "1.5rem" };

    let inputClassName = "rounded-md pl-2 pr-8 border-0 outline-none font-extrabold align-middle bg-transparent dark:bg-base-900 text-base-800 dark:text-base-300 hover:bg-base-800/10 focus:bg-base-800/10 dark:hover:bg-base-200/10 dark:focus:bg-base-200/10 w-full h-10";

    if (isFilenameValid === false) { inputClassName += " text-red-700 dark:text-red-700"; }

    return (
        <div className="relative w-full h-10">
            {isDraft ? (<span className="absolute bg-base-800 dark:bg-base-200 rounded-full w-2 h-2 top-4 left-2"></span>) : (<></>)}
            <input type="text" name="file-name" id="file-name" placeholder="Filename" style={isDraft ? draftInputStyles : {}}
                spellCheck="false" autoComplete="false" value={filename} onChange={e => dispatch(setFilename(e.target.value))}
                onBlur={e => isFilenameValid && dispatch(renameProject({ filepath: filepath, name: filename }))} className={inputClassName} />
            {isFilenameValid === false ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-red-700 w-icons h-icons top-2 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ) : (<></>)}
            {isRenaming ? (<span className="absolute spinner top-2 right-2"></span>) : (<></>)}
            {isRenamingSaved ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-base-800 dark:text-base-200 w-icons h-icons top-2 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            ) : (<></>)}
        </div>
    );
}

export default FilenameInput;
