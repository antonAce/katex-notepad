import { RootState } from '../store/config';
import { setFilename } from '../store/slice/toolbar';
import { useAppSelector, useAppDispatch } from '../store/hooks';

function FilenamePanel() {
    const filename = useAppSelector((state: RootState) => state.toolbar.filename);

    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-row justify-center items-center w-full h-full">
            <input type="text" name="file-name" id="file-name" placeholder="Filename" spellCheck="false" autoComplete="false" value={filename} onChange={e => dispatch(setFilename(e.target.value))}
                className="rounded-md px-2 py-1 border-0 outline-none font-extrabold text-center bg-transparent hover:bg-neutral/10 focus:bg-neutral/10 w-fit h-10" />
        </div>
    );
}

export default FilenamePanel;
