# mars-rover

Run `node test.js` in your terminal

## What I did
I approached this from a TDD perspective as you can see from test.js. I made each test pass before I wrote another test. And I never wrote any code in index.js without first writing a test.  
The code in index.js is the result of this TDD without any refactoring.  
The code should be extendable to allow for any number of rovers.

## Assumptions
I did not limit the rovers movements to be constrained within the plateau.  
I did not worry about rovers passing over each other.

## What I would do given more time
Given more time I would refactor this code. A Rover looks like it would be a good candidate for a move complex object, possibly even a class upon which movements can be called. This could also help with testing in smaller units.  
The problem as a whole feels quite functional. I am not skilled in functional programming, but given more time I would investigate if it would be pertinent to write this functionally.
