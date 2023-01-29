<p>This is my Tic Tac Toe based games playground</p>

<p>
    The <a href="/tictactoe">Tic Tac Toe</a> page is a implementation of the classical Tic Tac Toe game.
    The "Game" section allows a player to play against different AI opponent:
</p>
<ul>
    <li>
        <b>random</b> is a dumb AI where the next move is chosen randomly amongst the valid moves
    </li>
    <li>
        <b>hardcodedrules</b> is a strategy based on
        <a href="https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy" target="noopener">
            Newell and Simon's 1972 tic-tac-toe program
        </a> as described on Wikipedia. This version does not look for move creating forks or blocking
        the opponent's forks making it easy to beat.
    </li>
    <li>
        <b>hardcodedrulesComplete</b> is based on the previous strategy but it also checks for forks
        and try to block opponent's fork. However my implementation of this last check is not complete
        and thus the AI is not perfect, it can lose some games.
    </li>
    <li>
        <b>minmax</b> is an implementation of
        <a href="https://en.wikipedia.org/wiki/Minimax">the minmax algorith</a> is according to my tests
        it is a perfect opponent which never loses.
    </li>
</ul>

<p>
    The "Generator" section can be used to make the AIs play several games against each other. The
    interesting use case is to compare the performances of the different AIs against a random
    player. This is by this means that I empirically determined that my hard coded rules strategies
    are not perfect unlike my minmax strategy.
</p>

<p>
    The "Analyzer" section is used for debugging and writting tests. It allows the users to create
    any tic tac toe board and visualize some information like the bynary representation of each
    player's move
</p>

<p>
    <a href="/tictaccup">Tic Tac Cup</a> is a tic tac toe game with pieces of different dimensions,
    inspired by <a href="https://en.wikipedia.org/wiki/Gobblet" target="noopener">Gobblet</a>
    In the "Game" section you can play against different level of AIs. The "Runner" section allows to
    make the AIs play games against each other and get statistics of these games.
</p>

<br />

<p>Some interesting readings:</p>
<ul>
    <li>
        <a href="https://en.wikipedia.org/wiki/Tic-tac-toe_variants" target="noopener">
            Tic Tac Toe variants on Wikipedia
        </a>
    </li>
    <li>
        <a href="https://docs.racket-lang.org/games/gobblet.html" target="noopener">
            Gobblet rules
        </a>
    </li>
    <li>
        <a href="https://rclayton.silvrback.com/winner-in-tic-tac-toe" target="noopener">
            Bitwise operations for tic tac toe
        </a>
    </li>
    <li>
        <a href="https://www.egr.msu.edu/~kdeb/papers/k2007002.pdf" target="noopener">
            Evolution of No-loss Strategies for the Game of Tic-Tac-Toe
        </a>
    </li>
</ul>
