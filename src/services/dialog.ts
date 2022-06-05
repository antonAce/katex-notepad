import { open, save, message, OpenDialogOptions, SaveDialogOptions } from '@tauri-apps/api/dialog';

export async function showErrorMessage(title: string, body: string) { await message(body, { title, type: "error" }); }
export async function openFileDialog() { return await open({ directory: false, multiple: false, title: "Open project", recursive: true } as OpenDialogOptions); }
export async function saveToFileDialog() { return await save({ title: "Save project" } as SaveDialogOptions) }
