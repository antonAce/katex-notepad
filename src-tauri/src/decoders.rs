use base64;
use image::{ImageFormat, DynamicImage, RgbaImage, load_from_memory_with_format};

pub fn decode_image(encoded_img: &str) -> Result<RgbaImage, String> {
    let buf: Vec<u8> = base64::decode(encoded_img).map_err(|_| "Failed to decode captured render.".to_owned())?;
    let image: DynamicImage = load_from_memory_with_format(&buf, ImageFormat::Png).map_err(|_| "Failed to load image from memory.".to_owned())?;
    Ok(image.into_rgba8())
}
