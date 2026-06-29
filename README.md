# Dice-Roll-Simulator Version 2

A simple web-based dice rolling application built with HTML, CSS, and JavaScript. Users can choose how many dice to roll, and the application displays both the rolled values and matching dice images.

## Features

* Roll multiple dice at once
* Random number generation (1–6)
* Visual dice images for each roll
* Displays the value of every die
* Responsive layout with flexbox
* Simple and clean user interface

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## Project Structure

```text
dice-roller-v2/
│
├── index.html
├── dice2.css
├── dice2.js
├── diceImages/
│   ├── dice1.png
│   ├── dice2.png
│   ├── dice3.png
│   ├── dice4.png
│   ├── dice5.png
│   ├── dice6.png
│   └── diceLogo2.png
└── README.md
```

## How to Run

1. Download or clone the repository.
2. Ensure the `diceImages` folder is present and contains all dice images.
3. Open `index.html` in your browser.
4. Enter the number of dice to roll.
5. Click the **ROLL** button.
6. View the results and corresponding dice images.

## How It Works

1. The user enters the number of dice.
2. JavaScript generates a random number between 1 and 6 for each die.
3. Each result is stored in an array.
4. Matching image elements are generated dynamically.
5. The results are displayed on the page using `innerHTML`.

## What I Learned

Through this project, I practiced:

* DOM manipulation
* Generating random numbers with `Math.random()`
* Working with arrays
* Using loops
* Creating dynamic HTML with JavaScript
* Using `push()` and `join()`
* Displaying images dynamically
* Flexbox layouts

## Future Improvements

* Add input validation
* Display the total of all dice rolled
* Add animations when rolling
* Add support for different dice types (D4, D8, D10, D12, D20)
* Add roll history
* Add a dark mode theme

## Screenshots

### Main Interface

<img width="1366" height="597" alt="image" src="https://github.com/user-attachments/assets/ed1439a4-4ddd-4557-a548-f98d41f9ba23" />


### Example Roll

<img width="1344" height="598" alt="image" src="https://github.com/user-attachments/assets/a4a57b25-e8de-4166-a3fe-d8226f725ed9" />


## Author

Created as part of my JavaScript learning journey.
#Sudaice
