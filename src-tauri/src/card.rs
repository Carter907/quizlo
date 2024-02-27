use serde::Serialize;
use sqlx::FromRow;

#[derive(FromRow, Debug, Serialize)]
pub struct Card {
    pub id: i64,
    pub front: String,
    pub back: String,
    pub deck_id: i64
}