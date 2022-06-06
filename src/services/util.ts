export function stripFilename(filepath: string): string {
    const matches = filepath.match(/^.*[\\/](.*)\..+$/);
    return (matches !== null && matches.length > 1) ? matches[1] : filepath;
}
