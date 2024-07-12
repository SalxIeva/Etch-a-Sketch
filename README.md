# Etch-a-Sketch

## Live Preview

https://salxieva.github.io/Etch-a-Sketch/


## Description

This project is a simple grid drawing application created with Javascript while manipulating DOM. Where users can generate a grid of square divs, hover over them to change their colors randomly, and progressively lighten the squares on each hover. Additionally, users can reset the grid to a new size using a button.


## Features

Grid Generation: Users can generate a grid of square divs by entering a grid size between 1 and 16.
Random Color on Hover: Each grid square changes to a random color when hovered over.
Progressive Darkening: Each grid square progressively lightens with each hover.
Grid Reset: A button allows users to reset the grid to a new size.
Usage
Reset Grid Button: Click the "Reset Grid" button and enter a number between 1 and 16 to create a new grid of that size.
Hover Effect: Move the mouse over the grid squares to change their colors randomly and progressively lighten them.

## Implementation Details

## Pseudo Code

Create a Button Container:
Create a button container div.
Create a button and append it to the container.
Add a click event listener to the button to reset the grid size based on user input.

Create a Grid:
Create a function createGrid to generate a grid of the specified size.
Use a loop to create size * size grid squares.
Add hover event listeners to each grid square to change its color randomly and lighten progressively.

Center the Grid Container:
Use Flexbox to center the grid container within the page.

Random Color Function:
Generate a random color using HSL format.


## Installation

Clone the repository.
Open index.html in your browser to see the grid drawing application in action.


## License

This project is open-source and available under the MIT License.