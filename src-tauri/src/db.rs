use sqlx::AnyConnection;
use crate::card::Card;
use crate::db::sqlite::{fetch_cards, fetch_decks};
use crate::deck::Deck;

mod sqlite;

#[tauri::command]
pub async fn get_cards(deck: Deck) -> Vec<Card> {
    fetch_cards(deck)
        .await
        .unwrap()
}

#[tauri::command]
pub async fn get_decks() -> Vec<Deck> {
    fetch_decks()
        .await
        .unwrap()
}