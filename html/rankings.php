<!DOCTYPE html>
<html>
    <head>
        <title>SNATCH | Rankings</title>
        <meta name="author" content="Muddasar_Ashfaq">
        <meta name="description" content="Game_website">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" type="image/x-icon" href="img/Icon.ico"/>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
        <script type="text/javascript" src="../js/main.js"></script>
    </head>
    <body onload="inputUserInfo()">  
        
        <?php
        include('../php/common.php');
        outputNav();
        outputFooterRankings();
        outputBorderRankings();
        outputLogo();
        outputLine();
        ?>

        <h1 id="pageHeader"><span>RANKINGS</span></h1>
        
        <!-- Rankings table to display the users first name, last name and score -->
        <table id=rankTable></table>
    </body>
</html>