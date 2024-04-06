use sqlx::AnyConnection;
use crate::card::Card;
use crate::commands::sqlite::{delete_card, delete_deck, fetch_cards, fetch_decks, insert_card, insert_deck};
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
#[tauri::command]
pub async fn remove_deck(deck: Deck) -> String {
    delete_deck(deck)
        .await
        .unwrap()
}
#[tauri::command]
pub async fn remove_card(card: Card) -> String {
    delete_card(card)
        .await
        .unwrap()
}
#[tauri::command]
pub async fn add_card(card: Card) -> String {
    insert_card(card)
        .await
        .unwrap()
}