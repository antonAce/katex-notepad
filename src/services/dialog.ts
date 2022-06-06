import { open, save, message, OpenDialogOptions, SaveDialogOptions, DialogFilter } from '@tauri-apps/api/dialog';

const allowedFileExtensions: DialogFilter[] = [{ name: "Plain Text File", extensions: ["txt"] }, { name: "LaTeX Source Document", extensions: ["tex"] }]; 

export async function showErrorMessage(title: string, body: string) { await message(body, { title, type: "error" }); }
export async function openFileDialog() { return await open({ directory: false, multiple: false, title: "Open project", recursive: true, filters: allowedFileExtensions } as OpenDialogOptions); }
export async function saveToFileDialog() { return await save({ title: "Save project", filters: allowedFileExtensions } as SaveDialogOptions) }
