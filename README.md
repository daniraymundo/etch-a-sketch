# Etch-a-Sketch
A simple pixel art drawing tool built using HTML, CSS, and JavaScript as part of The Odin Project's [curriculum](https://www.theodinproject.com/courses/foundations/lessons/etch-a-sketch-project).

[Live preview](https://daniraymundo.github.io/etch-a-sketch/)

Currently not optimized for mobile or touchscreen.

![alt text](https://drive.google.com/uc?id=1AgAU_6Yj7B2i9qqNu-1mueVMNnBe9pAJ "App Preview")

## Functionality
* Click to start drawing, hover to draw, and click to stop drawing.
* The toolbar shows the icons of the controls and expands on hover to show the description.
* Allows user to choose between black mode, custom color mode (select any color using a color picker), or random color mode (randomly generated RGB value that changes on each hover). There is also an eraser button.
* Allows user to select a grid size from 4x4 to 52x52.
* Reset button clears the drawing and resets the grid size to default (16x16).

## Future functions to add
* Touchscreen and mobile support
* Undo button
* Ability to save drawings
* Dark mode

## Concepts I learned and applied
* Dynamically creating divs and adding them to the DOM using a for loop
* Event delegation using forEach method instead of adding separate event listeners to each element
* CSS grid layout
* Creating an animated navbar that expands on hover
* Using var values to access repetitive styles
* CSS transitions
* Importing SVGs
* Writing cleaner and less repetitive code
