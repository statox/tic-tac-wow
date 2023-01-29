<p>This is my Tic Tac Toe based games playground</p>

<p>
    The <a href="/tictactoe">Tic Tac Toe</a> page is a implementation of the classical Tic Tac Toe game.
    The "Game" section allows a player to play against different AI opponent. Buttons also allow the
    player to use one of the AIs to play their move.
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
    <a href="/gobblet">Gobblet</a> is a tic tac toe game with pieces of different dimensions,
    inspired by <a href="https://en.wikipedia.org/wiki/Gobblet" target="noopener">Gobblet</a> played
    on a 3x3 board. Players take turns to place a piece on the board or move their piece that already
    is on the board. Bigger pieces can be placed so that they cover smaller ones and a player wins by
    aligning 3 pieces.
</p>
<p>
    In the "Game" section you can play against different level of AIs. None of them are perfect.
    Buttons allow the player to use one of the AIs to play their move.
</p>
<ul>
    <li><b>random</b> is a simple random AI which choose one of the possible moves.</li>
    <li>
        <b>win_or_random</b> Checks all the possible moves it can do, if one of them creates a win for
        the AI then it plays it otherwise it plays a random move amongst the possible ones.
    </li>
    <li>
        <b>euristic</b> makes a very simple choice based on the euristic value of the next move.
        <ul>
            <li>For the current state compute all the possible moves.</li>
            <li>Score each move with a euristic</li>
            <li>Select the move with the highest score</li>
        </ul>
        This strategy is not very good because it doesn't consider the future It will only play a winning
        move if one is possible. Since it doesn't check the next opponent's move it sometimes play losing
        moves. However since the euristic favorise more interesting cells (center and corners) it is
        a bit better than the win_or_random strat
    </li>
    <li>
        <b>minmax</b> is a classical minmax strategy. No pruning is implemented so the max depth is set
        to 2 because for higher depths the response time gets quite long.
    </li>
    <li>
        <b>negamax</b> is an implementation of the
        <a href="https://en.wikipedia.org/wiki/Negamax" target="noopener">negamax algorithm</a>. As
        expected it yields the same results as the minmax strategy but its code is simpler. The
        performance remains the same as minmax with the same max depth.
    </li>
    <li><b>alphabeta</b></li>
    is an incomplete
    <a href="https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning" target="noopener">
        minmax with alphabeta pruning strategy
    </a>. Here the children are not ordered via an evaluation fonction, the children are ordered in
    a consistent but random order. That makes the alpha-beta pruning unefficient and it only improve
    the performance to allow a depth of 3.
    <li>
        <b>alphabeta_with_order</b> aims to fix the previous solution by ordering the children depending
        on a score attributed by a custom evaluation function. However the implementation is incomplete
        and probably buggy so the AI is not perfect.
    </li>
</ul>
<p>
    The "Runner" section allows to make the AIs play games against each other and get statistics of
    these games.
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
