import { RootState } from '../store/config';
import { setFilename } from '../store/slice/editor';
import { useAppSelector, useAppDispatch } from '../store/hooks';

function FilenameInput() {
    const isDraft = useAppSelector((state: RootState) => state.editor.isDraft);
    const filename = useAppSelector((state: RootState) => state.editor.filename);

    const dispatch = useAppDispatch();
    const draftDotStyles: React.CSSProperties = { top: "1rem", left: "0.5rem" };
    const draftInputStyles: React.CSSProperties = { paddingLeft: "1.5rem" };

    return (
        <div className="relative w-full h-10">
            {isDraft ? (<span className="absolute bg-neutral rounded-full w-2 h-2" style={draftDotStyles}></span>) : (<></>)}
            <input type="text" name="file-name" id="file-name" placeholder="Filename" style={isDraft ? draftInputStyles : {}}
                spellCheck="false" autoComplete="false" value={filename} onChange={e => dispatch(setFilename(e.target.value))}
                className="rounded-md px-2 py-1 border-0 outline-none font-extrabold bg-transparent text-neutral hover:bg-neutral/10 focus:bg-neutral/10 w-full h-10" />
        </div>
    );
}

export default FilenameInput;