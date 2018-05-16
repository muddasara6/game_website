<!DOCTYPE html>
<html>
    <head>
        <title>SNATCH | Login</title>
        <meta name="author" content="Muddasar_Ashfaq">
        <meta name="description" content="Game_website">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" type="image/x-icon" href="img/Icon.ico"/>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
        <script type="text/javascript" src="../js/main.js"></script>
    </head>
    <body>         
        <!-------------------------------------------------------------------------------------------------------
                            
                                                PHP FUNCTIONS

        --------------------------------------------------------------------------------------------------------->
        
        <?php
        include('../php/common.php');
        outputNav();
        outputFooterLogin();
        outputBorderLogin();
        outputLogo();
        outputLine();
        ?>
        
        <!-------------------------------------------------------------------------------------------------------
                            
                                                    HEADER

        --------------------------------------------------------------------------------------------------------->

        <h1><span>LOGIN</span></h1>
        
        <!-------------------------------------------------------------------------------------------------------
                            
                                                    LOGIN

        --------------------------------------------------------------------------------------------------------->
        
        <!-- Login form -->
        <div id="loggedIn">
            <form id="userForm" onsubmit="return false">
                <img class="logIcon" src="../img/cas-padlock-icon.png">
                <br><br><br><br><br>
                <!-- Enter username -->
                <span id="inputText">Username:</span> <input type="text" id="uNameInput" placeholder="Username..." name="username" required>
                <br><br>
                <!-- Enter password -->
                <span id="inputText">Password:</span> <input type="password" id="pWordInput" placeholder="Password..." name="password" required>
                <br><br>
                <!-- Login button -->
                <input type="submit" name="login" value="LOGIN" onclick="loginUser()"> 
                <br><br>
                <!-- Message to let the user know if they entered an incorrect username or password -->
                <div id="logMessage"></div>
            </form>
        </div>
    </body>
</html>