# Tic Tac Wow

Tic tac toe with different size pieces.

# References
https://docs.racket-lang.org/games/gobblet.html
https://rclayton.silvrback.com/winner-in-tic-tac-toe

# Notes to move somewhere else

Human vs Hardcoded rules (commit f56eefedfc)
it was computer's turn and it chose top right instead of top left to win
    human 0b000001100
    computer 0b000010001 -> 0b001010001
For now the computer reaches for the draw: it still seems impossible to win, but the computer prefers making a draw rather than winning.

This is probably caused by the incomplete implementation of hard coded rules
