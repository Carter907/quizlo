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

pub async fn fetch_decks() -> Result<Vec<Deck>, sqlx::Error> {
    let pool = sqlx::sqlite::SqlitePool::connect("sqlite:data\\flashcard-app-data.db").await?;
    let rows = sqlx::query_as::<_, Deck>("SELECT * FROM deck")
        .fetch_all(&pool)
        .await?;

    Ok(rows)
}