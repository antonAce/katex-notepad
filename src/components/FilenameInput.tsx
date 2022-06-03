import { RootState } from '../store/config';
import { setFilename } from '../store/slice/toolbar';
import { useAppSelector, useAppDispatch } from '../store/hooks';

function FilenameInput() {
    const filename = useAppSelector((state: RootState) => state.toolbar.filename);

    const dispatch = useAppDispatch();

    return (
        <input type="text" name="file-name" id="file-name" placeholder="Filename" spellCheck="false" autoComplete="false" value={filename} onChange={e => dispatch(setFilename(e.target.value))}
            className="rounded-md px-2 py-1 border-0 outline-none font-extrabold bg-transparent text-neutral hover:bg-neutral/10 focus:bg-neutral/10 w-full h-10" />
    );
}

export default FilenameInput;
