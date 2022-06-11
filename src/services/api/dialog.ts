import { ask, open, save, message, OpenDialogOptions, SaveDialogOptions, DialogFilter } from '@tauri-apps/api/dialog';

const allowedFileExtensions: DialogFilter[] = [{ name: "Plain Text File", extensions: ["txt"] }, { name: "LaTeX Source Document", extensions: ["tex"] }]; 

export async function showErrorMessage(title: string, body: string): Promise<void> { await message(body, { title, type: "error" }); }
export async function openAskDialog(title: string, body: string) { return await ask(body, { title, type: "info" }); }
export async function openFileDialog(): Promise<string | string[] | null> { return await open({ directory: false, multiple: false, title: "Open project", recursive: true, filters: allowedFileExtensions } as OpenDialogOptions); }
export async function saveToFileDialog(): Promise<string> { return await save({ title: "Save project", filters: allowedFileExtensions } as SaveDialogOptions) }
