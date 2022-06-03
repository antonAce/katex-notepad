#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn context_menu_enabled() -> Result<bool, ()> {
    Ok(cfg!(debug_assertions))
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![context_menu_enabled])
        .run(tauri::generate_context!())
        .expect("Error while running application.");
}
