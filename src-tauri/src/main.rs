#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use crate::commands::{get_cards, get_decks, add_deck};

mod commands;
mod card;
mod deck;


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_cards, get_decks, add_deck])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
