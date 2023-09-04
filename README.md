# odin-tic-tac-toe
Tic-tac-toe for The Odin Project while learning the principles of modular Javascript

# Thoughts Before Coding this Project

## New Things
To Start, I have close to zero experience in coding and designing an Object Oriented or a modular project, so this will be a challenge for me.

## The Plan
I already know that game programming will need an init(), update() and draw() function from my experiences in doing similar game projects (pico8 platform and pygame). I will have to structure this in a similar way and encapsulate everything in a Game() object.

## Some Time Later
So I just realized that game programming is different than web programming, particulatly because JavaScript uses asynchronous style (based on my understanding, we'll be waiting for events). We don't need to check and update the game based on an fps counter since this is a board game and not an action game.

## Breakdown
[x] added gameboard
[x] added ability to fill board with check marks
    [x] alternating players function
        [x] which also alternates the marker based on current player

    [x] validation on which cells can be marked
        [x] update data array
        [x] whenever we click a cell, we check whether that cell is free in the data array
        [x] draw the marker

    [x] display current player
    [x] winner or tie checking
    [ ] end state
    [] ability to start code again
    [] make start button work
        [] when start selected, add event listeners
    [] make restart button work
    [] modularizing code