#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use crate::db::{get_cards, get_decks};

mod db;
mod card;
mod deck;


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_cards, get_decks])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
