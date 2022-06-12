#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use base64;
use image::{ImageFormat, load_from_memory_with_format, DynamicImage};
use arboard::{Clipboard, ImageData};
use std::borrow::Cow;

#[tauri::command]
fn context_menu_enabled() -> Result<bool, ()> {
    Ok(cfg!(debug_assertions))
}

#[tauri::command]
fn save_base64_to_clipboard(width: usize, height: usize, encoded_str: &str) -> Result<(), String> {
    let mut clipboard = Clipboard::new().map_err(|_| "Failed to instantiate clipboard API.".to_owned())?;
    let buf: Vec<u8> = base64::decode(encoded_str).map_err(|_| "Failed to decode captured render.".to_owned())?;
    let image: DynamicImage = load_from_memory_with_format(&buf, ImageFormat::Png).map_err(|_| "Failed to load image from memory.".to_owned())?;
    let image_bytes: Vec<u8> = image.into_rgba8().into_vec();
    clipboard.set_image(ImageData { width, height, bytes: Cow::from(&image_bytes) }).map_err(|err| err.to_string())?;
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            context_menu_enabled,
            save_base64_to_clipboard
        ])
        .run(tauri::generate_context!())
        .expect("Error while running application.");
}
