#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use base64;
use image::{ImageFormat, DynamicImage, ImageBuffer, RgbaImage, load_from_memory_with_format};
use arboard::{Clipboard, ImageData};

use std::borrow::Cow;

fn decode_img(encoded_img: &str) -> Result<RgbaImage, String> {
    let buf: Vec<u8> = base64::decode(encoded_img).map_err(|_| "Failed to decode captured render.".to_owned())?;
    let image: DynamicImage = load_from_memory_with_format(&buf, ImageFormat::Png).map_err(|_| "Failed to load image from memory.".to_owned())?;
    Ok(image.into_rgba8())
}

#[tauri::command]
fn context_menu_enabled() -> Result<bool, ()> {
    Ok(cfg!(debug_assertions))
}

#[tauri::command]
fn save_image_to_file(encoded_img: &str, filepath: &str) -> Result<(), String> {
    let image: RgbaImage = decode_img(encoded_img)?;
    ImageBuffer::from(image).save_with_format(filepath, ImageFormat::Png).map_err(|_| format!("Failed to create file '{}'.", filepath))?;

    Ok(())
}

#[tauri::command]
fn save_image_to_clipboard(width: usize, height: usize, encoded_img: &str) -> Result<(), String> {
    let image_bytes: Vec<u8> = decode_img(encoded_img)?.into_vec();
    let mut clipboard = Clipboard::new().map_err(|_| "Failed to instantiate clipboard API.".to_owned())?;
    clipboard.set_image(ImageData { width, height, bytes: Cow::from(&image_bytes) }).map_err(|err| err.to_string())?;
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            context_menu_enabled,
            save_image_to_clipboard,
            save_image_to_file
        ])
        .run(tauri::generate_context!())
        .expect("Error while running application.");
}
