import { writeFile, FsTextFileOption } from '@tauri-apps/api/fs';

export async function saveFile(filepath: string, content: string) { await writeFile({ path: filepath, contents: content } as FsTextFileOption); }
