function FilenamePanel() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-full">
            <input type="text" name="file-name" id="file-name" placeholder="Filename" spellCheck="false" autoComplete="false"
                className="rounded-md px-2 py-1 border-0 outline-none font-extrabold text-center bg-transparent hover:bg-neutral/10 focus:bg-neutral/10 w-fit h-10" />
        </div>
    );
}

export default FilenamePanel;
