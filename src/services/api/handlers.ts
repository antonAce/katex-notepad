import { invoke } from '@tauri-apps/api/tauri';

export async function saveEncodedImageToFile(encodedImg: string, filepath: string): Promise<void> { return await invoke<void>("save_image_to_file", { encodedImg, filepath }); }
export async function saveEncodedImageToClipboard(width: number, height: number, encodedImg: string): Promise<void> { return await invoke<void>("save_image_to_clipboard", { width, height, encodedImg }); }
export async function isContextMenuEnabled(): Promise<boolean> { return await invoke<boolean>("context_menu_enabled"); }
export async function contextMenuEvent(): Promise<void> {
    if (!(await isContextMenuEnabled())) {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }
}
