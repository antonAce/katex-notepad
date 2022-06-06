import { readTextFile, writeFile, FsTextFileOption } from '@tauri-apps/api/fs';

export async function readProject(filepath: string): Promise<string> { return await readTextFile(filepath); }
export async function saveProject(filepath: string, content: string): Promise<void> { await writeFile({ path: filepath, contents: content } as FsTextFileOption); }
