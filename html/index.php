<!DOCTYPE html>
<html>
    <head>
        <!-- Title of the page -->
        <title>SNATCH | Home</title>
        <!-- The author of the page -->
        <meta name="author" content="Muddasar_Ashfaq">
        <!-- Description of the web page -->
        <meta name="description" content="Game_website">
        <!-- The viewport makes the website look good on all devices -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Icon displayed on the tab -->
        <link rel="shortcut icon" type="image/x-icon" href="img/Icon.ico"/>
        <!-- External Style Sheet -->
        <link rel="stylesheet" type="text/css" href="../css/style.css">
    </head>
    <body> 
        
        <?php
        // Include of the PHP functions used
        include('../php/common.php');
        // Output navigation
        outputNav();
        // Output footer
        outputFooterIndex();
        // Output border
        outputBorderIndex();
        // Output logo
        outputLogo();
        // Output line
        outputLine();
        ?>
        
        <!-- Page header -->
        <h1><span>HOME</span></h1>
        
        <!-- Open Game page -->
        <a href="game.php">
            <button id="gameButton">GAME</button>
        </a> 
        
        <!-- Game image -->
        <img id="gameImg" alt="Game_Icon" src="../img/game.jpg"/>
        
        <!-- Open Rankings page -->
        <a href="rankings.php">
            <button id="rankButton">RANKINGS</button>
        </a> 
        
        <!-- Ranking image -->
        <img class="rankImg" alt="Rankings_Icon" src="../img/organic-ranking-growth.jpg">
        
        <!-- Open Register page -->
        <a href="register.php">
            <button id="regButton">REGISTER</button>
        </a> 
        
        <!-- Register image -->
        <img class="regImg" alt="Register_Icon" src="../img/Icon-Register.png">
        
        <!-- Open Login page -->
        <a href="login.php">
            <button id="logButton">LOG IN</button>
        </a>
        
        <!-- Log In image -->
        <img class="logImg" alt="LogIn_Icon" src="../img/cas-padlock-icon.png">        
    </body>
</html>