import { replaceFilenameInPath } from '../util/file';
import { renameFile, readTextFile, writeFile, removeFile, FsTextFileOption } from '@tauri-apps/api/fs';

export async function renameProjectAndReturnPath(filepath: string, name: string): Promise<string> {
    const newPath = replaceFilenameInPath(filepath, name);
    await renameFile(filepath, newPath);

    return newPath;
}
export async function readProject(filepath: string): Promise<string> { return await readTextFile(filepath); }
export async function saveProject(filepath: string, content: string): Promise<void> { await writeFile({ path: filepath, contents: content } as FsTextFileOption); }
export async function deleteProject(filepath: string): Promise<void> { await removeFile(filepath); }
