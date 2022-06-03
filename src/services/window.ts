import { appWindow } from '@tauri-apps/api/window';

export async function setTitle(title: string): Promise<void> { await appWindow.setTitle(title); }
export async function setDefaultTitle(): Promise<void> { await appWindow.setTitle("KaTeX Notepad"); }
export async function setFilenameInTitle(filename: string): Promise<void> { await setTitle(`KaTeX Notepad - ${filename}`); }
