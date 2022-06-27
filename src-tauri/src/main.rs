#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

pub mod decoders;

use decoders::decode_image;
use image::{ImageBuffer, ImageFormat, RgbaImage};
use arboard::{Clipboard, ImageData};
use std::borrow::Cow;

#[tauri::command]
fn context_menu_enabled() -> Result<bool, ()> {
    Ok(cfg!(debug_assertions))
}

#[tauri::command]
fn save_image_to_file(encoded_img: &str, filepath: &str) -> Result<(), String> {
    let image: RgbaImage = decode_image(encoded_img)?;
    ImageBuffer::from(image).save_with_format(filepath, ImageFormat::Png).map_err(|_| format!("Failed to create file '{}'.", filepath))?;
    Ok(())
}

#[tauri::command]
fn save_image_to_clipboard(width: usize, height: usize, encoded_img: &str) -> Result<(), String> {
    let image_bytes: Vec<u8> = decode_image(encoded_img)?.into_vec();
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
