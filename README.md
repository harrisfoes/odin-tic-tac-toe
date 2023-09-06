# odin-tic-tac-toe
Tic-tac-toe for The Odin Project while learning the principles of modular Javascript

URL: https://harrisfoes.github.io/odin-tic-tac-toe/

# Project Post-Mortem
This project was particularly challenging for me due to not having a lot of experience in designing a modular JavaScript codebase, or starting any OOP moderate-large project for that matter. As such, I had already decided that I would code the tic-tac-toe logic in a functional/procedural way from the start and figure out how to break things down into separate modules from there. 

The two resources that have helped me a lot are :
- LearnCode.academy's course on Modular Javascript: https://www.youtube.com/watch?v=m-NYyst_tiY&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=2
- And aywebdev's Buihttps://harrisfoes.github.io/odin-tic-tac-toe/lding a House from the inside out: https://www.ayweb.dev/blog/building-a-house-from-the-inside-out

Basically, I followed aywebdev's structure and found that it follows something similar to a Model-View-Controller style, which in hindsight, is also similar to how I implemented the previous Library project (although that one isn't as complicated as to need the modularity).

So you can see that there are two JavaScript files in my code, one where I write in the procedural/spaghetti way (notice that I quit halfway through and didn't implement the restart/start sequence due to it being too tangled), and another in the 'proper' modular way. Although I wasn't able to use IIFE and Object.assign since I didn't really find some place for them.


# Thoughts and Notes Before Coding this Project
warning: these notes are fairly scatterbrianed.

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
    [x] end state
    [] ability to start code again
    [] make start button work
        [] when start selected, add event listeners
    [] make restart button work
    [] modularizing code
    
## Starting Modular
Had to rewrite the implementation
