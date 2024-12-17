# Quizlo - Flashcard Deck Creator

Quizlo is a lightweight and intuitive desktop application built with [Tauri](https://tauri.app/) that allows you to create, manage, and share decks of flashcards. It's designed to help students, teachers, and lifelong learners memorize and learn efficiently.

## Overview
Quizlo provides an easy-to-use interface to create flashcards, organize them into decks, and test yourself or others on a variety of topics. Whether you're preparing for an exam, learning a new language, or just improving your memory, Quizlo simplifies the process of effective learning.

### Features
- **Create and Organize Flashcards:** Easily create flashcards and organize them into decks.
- **User-Friendly Interface:** Intuitive UI built with Tauri and modern web technologies.
- **Cross-Platform:** Available on Windows, macOS, and Linux.
- **Export and Import Decks:** Share decks with others using standardized formats.
- **Customizable Quizzes:** Test yourself with multiple learning modes (shuffle, sequential, etc.).

---

## Installation
To get started with Quizlo, download the application for your operating system:

- **Windows**: [Download Quizlo for Windows](#)
- **macOS**: [Download Quizlo for macOS](#)
- **Linux**: [Download Quizlo for Linux](#)

Ensure you have the following installed:
- **Rust & Cargo**: Required for Tauri development if building from source.

---

## Usage
### Running Quizlo
Once downloaded, simply open the Quizlo application and start creating your flashcards.

### Creating a Deck
1. Open the application and click on **"New Deck"**.
2. Add flashcards by entering the **question** and **answer** fields.
3. Save the deck to access it anytime.

### Importing/Exporting Decks
- **Import**: Upload decks shared in supported formats (e.g., JSON).
- **Export**: Save decks to share with others.

---

## Development
To build Quizlo from source, ensure you have the following installed:
- **Rust**: Install Rust from [rust-lang.org](https://www.rust-lang.org/)
- **Node.js**: Install from [nodejs.org](https://nodejs.org/)
- **Tauri CLI**: Install Tauri tools with:

```bash
cargo install tauri-cli
```

### Build and Run
Clone the repository and run the following commands:

```bash
git clone https://github.com/<your-repo>/quizlo.git
cd quizlo
npm install
cargo tauri dev
```

This will launch the Quizlo application in development mode.


---

## Contributing
Contributions aren't welcome for now. Feel free to open an issue to improve Quizlo.

---

## License
Quizlo is licensed under the [MIT License](LICENSE).
