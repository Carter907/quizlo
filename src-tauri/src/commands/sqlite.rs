use serde_json::to_string;
use crate::card::Card;
use crate::deck::Deck;
pub async fn fetch_cards(deck: Deck) -> Result<Vec<Card>, sqlx::Error> {
    let pool = sqlx::sqlite::SqlitePool::connect("sqlite:data\\flashcard-app-data.db").await?;
    let rows = sqlx::query_as::<_, Card>("SELECT * FROM card WHERE deck_id=$1")
        .bind(deck.id)
        .fetch_all(&pool)
        .await?;
    Ok(rows)
}
pub async fn insert_deck(deck: Deck) -> Result<String, sqlx::Error> {

    let pool = sqlx::sqlite::SqlitePool::connect("sqlite:data\\flashcard-app-data.db").await?;
    sqlx::query("INSERT INTO deck (name) VALUES ($1)")
        .bind(deck.name)
        .execute(&pool)
        .await?;
    Ok("insertion successful".to_string())
}
pub async fn fetch_decks() -> Result<Vec<Deck>, sqlx::Error> {
    let pool = sqlx::sqlite::SqlitePool::connect("sqlite:data\\flashcard-app-data.db").await?;
    let rows = sqlx::query_as::<_, Deck>("SELECT * FROM deck")
        .fetch_all(&pool)
        .await?;

    Ok(rows)
}
pub async fn delete_deck(deck: Deck) -> Result<String, sqlx::Error> {

    let pool = sqlx::sqlite::SqlitePool::connect("sqlite:data\\flashcard-app-data.db").await?;
    sqlx::query("DELETE FROM card WHERE deck_id=($1)")
        .bind(deck.id)
        .execute(&pool)
        .await?;

    sqlx::query("DELETE FROM deck WHERE id=($1)")
        .bind(deck.id)
        .execute(&pool)
        .await?;
    Ok("deletion of deck and associated cards successful".to_string())
}


pub async fn insert_card(card: Card) -> Result<String, sqlx::Error> {

    let pool = sqlx::sqlite::SqlitePool::connect("sqlite:data\\flashcard-app-data.db").await?;
    sqlx::query("INSERT INTO card (front, back, deck_id) VALUES ($1, $2, $3)")
        .bind(card.front)
        .bind(card.back)
        .bind(card.deck_id)
        .execute(&pool)
        .await?;
    Ok("insertion successful".to_string())
}