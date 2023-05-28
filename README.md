# React Typing Game

This is a typing game built with ReactJS using the Vite build tool. It provides an interactive and enjoyable way to improve your typing skills. The current version focuses on enhancing your proficiency with the home keys, which include the letters 'ASDFGHJKL'. By practicing typing words exclusively from the home keys, you can develop muscle memory and speed in your typing abilities. Challenge yourself and aim for accuracy and speed as you progress through the game!
## Features

- Randomly generated sentences to type.
- Countdown timer.
- Accuracy calculation .
- Speed calculation .
- Score tracking.
- simple ui

## Technologies Used

- ReactJS
- Vite
- CSS (or styled-components)
- HTML
- mui icons

## Getting Started

### Prerequisites

- Node.js (version 19.1.0)
- npm (version 9.6.3) 

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install` to install the dependencies.

### Usage

1. Run `npm run dev` or `yarn dev` to start the development server.
2. Open your browser and visit `http://localhost:5173` to access the typing game.

## Project Structure

```
├── src
│   ├── components
│   │   ├── navbar
│   │   |   └── Navbar.jsx
│   │   |   └── navbar.scss
│   │   ├── typingChallenge
│   │   |   └── TypingChallenge.jsx
│   │   |   └── typingchallenge.scss
│   │   ├── typingInput
│   │   |   └── TypingInput.jsx
│   │   |   └── typinginput.scss
│   │   └── typingResult
│   │   |   └── TypingResult.jsx
│   │   |   └── typingResult.scss
│   ├── data
│   │   └── typingGameUtils.js
│   │   
│   ├── App.jsx
│   │   └── App.scss
│   └── index.jsx
│   │   └── index.css
├── public
│   ├── index.html
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

