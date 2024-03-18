use sqlx::AnyConnection;
use crate::card::Card;
use crate::commands::sqlite::{fetch_cards, fetch_decks, insert_deck};
use crate::deck::Deck;

mod sqlite;

#[tauri::command]
pub async fn get_cards(deck: Deck) -> Vec<Card> {
    fetch_cards(deck)
        .await
        .unwrap()
}

#[tauri::command]
pub async fn add_deck(deck: Deck) -> String {
    insert_deck(deck)
        .await
        .unwrap()

}
#[tauri::command]
pub async fn get_decks() -> Vec<Deck> {
    fetch_decks()
        .await
        .unwrap()
}