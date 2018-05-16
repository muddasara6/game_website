<!DOCTYPE html>
<html>
    <head>
        <title>SNATCH | Register</title>
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
        outputFooterRegister();
        outputBorderRegister();
        outputLogo();
        outputLine();
        ?>

        <h1 id="pageHeader"><span>REGISTER</span></h1>
        
        <!-- Registration Form -->
        <form id="userForm" onsubmit="return false">
            <img class="regIcon" src="../img/Icon-Register.png">
            <br><br><br><br><br>
            Title: <span class='error'> *</span> 
            <!-- Drop-down list for Title -->
            <select id="titleInput" name="title">
                <option value="" disabled selected hidden>Please Choose...</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Mrs">Ms</option>
                <option value="Miss">Miss</option>
                <option value="Other">Other</option>
            </select>
            <br><br>
            <!-- Enter First Name -->
            First Name: <span class='error'> *</span> 
            <input type="text" id="firstNameInput" placeholder="First Name..." name="fname">
            <br><br>
            <!-- Enter Last Name -->
            Last Name: <span class='error'> *</span> 
            <input type="text" id="lastNameInput" placeholder="Last Name..." name="lname">
            <br><br>
            Gender: <span class='error'> *</span>
            <!-- Drop-down list for Gender -->
            <select id="genderInput" name="gender">
                <option value="" disabled selected hidden>Please Choose...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <br><br> 
            <!-- Enter Username -->
            Username: <span class='error'> *</span>
            <input type="text" id="userNameInput" placeholder="Username..." name="uname">
            <br><br>
            <!-- Enter Password -->
            Password: <span class='error'> *</span>
            <input type="password" id="passWordInput" placeholder="Password..." name="password">
            <br><br>
            <!-- Register button -->
            <input type="submit" id="regSubmit" name="register" value="REGISTER" onclick="storeUserDetail()">
            <br><br>
            <!-- Error message to let the user know if an input is empty -->
            <div id="regMessage"></div>
        </form>
    </body>
</html>