export function stripFilename(filepath: string): string {
    const matches = filepath.match(/^.*[\\/](.*)\..+$/);
    return (matches !== null && matches.length > 1) ? matches[1] : filepath;
}

export function replaceFilenameInPath(filepath: string, name: string): string {
    return filepath.replace(/(^.*[\\/]).*(\..+$)/, "$1" + name + "$2");
}

export function validateFilename(filename: string): boolean {
    return /^[a-zA-Z][\w\- ]*$/.test(filename);
}
