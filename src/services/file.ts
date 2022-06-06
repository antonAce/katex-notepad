import { readTextFile, writeFile, FsTextFileOption } from '@tauri-apps/api/fs';

export function stripFilename(filepath: string): string {
    const matches = filepath.match(/^.*[\\/](.*)\..+$/);
    return (matches !== null && matches.length > 1) ? matches[1] : filepath;
}
export async function readProject(filepath: string): Promise<string> { return await readTextFile(filepath); }
export async function saveProject(filepath: string, content: string): Promise<void> { await writeFile({ path: filepath, contents: content } as FsTextFileOption); }
