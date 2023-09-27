# ![Game Logo](./assets/images/logo-32.png) Cross Out Contest

Cross Out Contest is a classic two-player game, also known as Tic Tac Toe or Xs and Os. Players take turns to place their marker ('X' or 'O') on a 3x3 grid, aiming to get three of their markers in a row either horizontally, vertically, or diagonally.

## Table of Contents

1. [Introduction](#introduction)
2. [Technology Used](#technology-used)
3. [Color Palette](#color-palette)
4. [Game Structure](#game-structure)
5. [Features](#features)
6. [Game Logic](#game-logic)
7. [Deployment](#deployment)
8. [Credits](#credits)
   - [Content](#content)
   - [Media](#media)
   - [Acknowledgements](#acknowledgements)

### Introduction

Cross Out Contest offers a modern and intuitive design, allowing players to easily understand and start the game without any prior knowledge. The game provides real-time feedback on the current player's turn, game status, and scores.

### Technology Used

- **HTML** - For structuring the content of the game.
- **CSS** - Used for styling and enhancing the visual appearance.
- **JavaScript** - Powers the game mechanics and interactivity.

### Color Palette

The game uses a simple and elegant color palette to enhance the user experience:

- secondary-color: `#fffdb7`;
- primary-color: `#fff`;
- white-color: `white`;
- white-light-color: `#f1f1f1`;
- outline-color: `purple`;
- white-bakcground-light: `rgba(0, 0, 0, 0.7)`


### Game Structure

1. **_Header:_** Displays the game logo and title.
2. **_Game Board:_** A 3x3 grid where players place their markers.
3. **_Play Again Button:_** Allows players to reset the game board and start a new game.
4. **_Result Pop Up:_** Displays the game result (win or draw).
5. **_Score Area:_** Shows the scores of both players.

### Features

- **Dynamic Game Board:** Players can click on any cell of the board to place their marker.
- **Real-time Feedback:** The game provides feedback on the current player's turn and updates the scores in real-time.
- **Result Pop Up:** When a player wins or the game ends in a draw, a pop-up appears displaying the result.
- **Score Tracking:** The game keeps track of the scores of both players.

### Game Logic

The game uses a 3x3 matrix to keep track of the board state. After each move, the game checks for a win condition or a draw. The game logic includes checks for horizontal, vertical, and diagonal wins.

### Deployment

The game can be deployed using various platforms like GitHub Pages, Netlify, or Vercel. For GitHub Pages:

1. Push your project to a GitHub repository.
2. Navigate to the 'Settings' tab of the repository.
3. Scroll down to the 'GitHub Pages' section.
4. Select the branch you want to deploy from and save.
5. Your site will be available at the provided GitHub Pages URL.

### Credits

#### Content

- The game logic and mechanics were inspired by the classic Tic Tac Toe rules.
- The design and interface concepts were crafted to provide players with an intuitive and enjoyable gameplay experience.

#### Media

- The game logo and other assets were sourced from the provided assets directory.

#### Acknowledgements

- Special thanks to the online web development community for providing countless resources and discussions on Tic Tac Toe implementations.
