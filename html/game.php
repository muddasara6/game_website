<!DOCTYPE html>
<html>
    <head>
        <title>SNATCH | Game</title>
        <meta name="author" content="Muddasar_Ashfaq">
        <meta name="description" content="Game_website">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" type="image/x-icon" href="img/Icon.ico"/>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
        <script type="text/javascript" src="../js/main.js"></script>
    </head>
    <body>
        
        <?php
        include('../php/common.php');
        outputNav();
        outputFooterGame();
        outputBorderGame();
        outputLogo();
        outputLine();
        ?>
        
        <h1><span>GAME</span></h1>
        
        <!-- Sound effects added to the game -->
        <audio id="gameAlarm"> 
            <!-- File format and Media type -->
            <source src="sound/game_alarm.mp3" type="audio/ogg">
            <!-- Two tags added in case it stops work properly -->
            <source src="sound/game_alarm.mp3" type="audio/mpeg">
            <!-- Tags will only be displayed on browsers that do support the audio element -->
            Your browser does not support the audio element.
        </audio>      

        <audio id="clickSound">
            <source src="sound/click_button.mp3" type="audio/ogg">
            <source src="sound/click_button.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio> 

        <audio id="startGame">
            <source src="sound/start_game.wav" type="audio/ogg">
            <source src="sound/start_game.wav" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio> 

        <audio id="shuffleNoise">
            <source src="sound/shuffle_noise.wav" type="audio/ogg">
            <source src="sound/shuffle_noise.wav" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>  

        <audio id="correctSound">
            <source src="sound/correct.mp3" type="audio/ogg">
            <source src="sound/correct.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio> 

        <audio id="wrongSound">
            <source src="sound/wrong.mp3" type="audio/ogg">
            <source src="sound/wrong.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        
        <!-- Canvas on the left for score, level and time -->
        <canvas class="sideTable"></canvas>
        
        <!-- Level header -->
        <h2 class="levelHeader">LEVEL</h2>
        
        <!-- Displays the level the user is on -->
        <label id="levelNumber">1</label>
        
        <!-- Time header -->
        <h2 class="timeHeader">TIME</h2>
        
        <!-- Countdown of the time -->
        <div id="timeLeft">60</div>
        
        <!-- Points header -->
        <h2 class="pointsHeader">POINTS</h2>
        
        <!-- Points will be collected and counted here -->
        <label id="scorePoints"></label>
        
        <!-- Start buttons to play new levels -->
        <button id="startLevel1" onClick="CountDown(59);" disabled>START</button>

        <button id="startLevel2" onClick="CountDown2(29);" disabled>START</button>

        <button id="startLevel3" onClick="CountDown3(9);" disabled>START</button>

        <!-- Button to go back to the menu page -->
        <button id="goHome" value="home" onClick="window.location.reload()" disabled>HOME</button>
        
        <!-- Elements removed after clicking the Start button -->
        <div id="removeElements">
            <!-- Menu page -->
            <canvas class="menuBoard"></canvas>
            <!-- Banner in the game -->
            <img class="gameBanner" src="../img/Logo.png"/>
            <!-- Play button -->
            <button id="playGame" onclick="enable()">PLAY</button>
            <!-- Register button -->
            <a href="register.php">
                <button id="clickToReg" onclick="regPage()">REGISTER</button>
            </a>
        </div>        
        
        <!-- Card game board -->
        <canvas class="gameBoard"></canvas>
        
        <!-- Snatch header -->
        <h1 class="snatchHeader" onclick="alertMessage()">SNATCH!</h1>
    
        <!-- User can view the rankings table after completing all the levels -->
        <a href="rankings.php">
            <button id="rank" onclick="rankPage()" disabled>RANKING TABLE</button>
        </a>
        
        <!-- Snatch button -->
        <button id="snatchCard" onclick="snatchFunction()" disabled>SNATCH!</button>
        
        <!-- Shuffle button -->
        <button id="shuffleDeck" onclick="shuffleCard()" disabled>SHUFFLE</button>
        
        <!-- Deck of first card images in the game -->
        <div id="deckOfCards1">
            <img src="../img/back.png"/>
        </div>
        
        <!-- Deck of second card images in the game -->
        <div id="deckOfCards2">
            <img src="../img/back.png"/>
        </div>
        
        <!-- Information button -->
        <div class="hoverButton">
            <!-- Text on the button -->
            <button id="hoverHeader">HOW TO PLAY...<span>(Hover over the button to see the information).</span></button>
            <!-- Join text and button together -->
            <div class="overlayText">
                <!-- Hover the button to see this information -->
                <div class="hoverInfo">Press the Play button to start playing the game. The game begins as soon as you click the Start button on the left. Once you click the Start button, the timer for 60 seconds will begin and you will need to click the Shuffle button to find two matching cards, and when you do find the two matching cards, click the SNATCH! button to obtain points. You need to find as many matching cards before the time runs out. There are 3 levels on the game, once you complete a level, the time will reduce. Click the Start button again to play the next level.<br><br>
                    <!-- Description of how each level will work -->             
                    <span>Level 1 = 60 Seconds</span><span>Level 2 = 30 Seconds</span><span>Level 3 = 10 Seconds</span>
                </div>
            </div>
        </div>
    </body>
</html>