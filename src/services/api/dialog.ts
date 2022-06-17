import { ask, open, save, message, OpenDialogOptions, SaveDialogOptions, DialogFilter } from '@tauri-apps/api/dialog';

const allowedProjectExtensions: DialogFilter[] = [
    { name: "Allowed file extensions", extensions: ["txt", "tex"] },
    { name: "Plain Text File", extensions: ["txt"] },
    { name: "LaTeX Source Document", extensions: ["tex"] }
];

const allowedExportExtensions: DialogFilter[] = [
    { name: "*.PNG files", extensions: ["png"] }
];

export async function showErrorMessage(title: string, body: string): Promise<void> { await message(body, { title, type: "error" }); }
export async function openAskDialog(title: string, body: string) { return await ask(body, { title, type: "info" }); }
export async function openProjectDialog(): Promise<string | string[] | null> { return await open({ directory: false, multiple: false, title: "Open project", recursive: true, filters: allowedProjectExtensions } as OpenDialogOptions); }
export async function saveProjectDialog(): Promise<string> { return await save({ title: "Save project", filters: allowedProjectExtensions } as SaveDialogOptions) }
export async function exportFileDialog(): Promise<string> { return await save({ title: "Export file", filters: allowedExportExtensions } as SaveDialogOptions) }
