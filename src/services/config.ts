import { invoke } from '@tauri-apps/api/tauri';

export async function isContextMenuEnabled(): Promise<boolean> {
    return await invoke<boolean>("context_menu_enabled")
}
export async function contextMenuEvent(): Promise<void> {
    if (!(await isContextMenuEnabled())) {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }
}
