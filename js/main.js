// Global variables that can be accesed from anywhere
var cardIndex1;
var cardIndex2;
var score = 0;
// Array of images, each time a user clicks on the Shuffle button, it changes to the next image in the array
var pickedCards = new Array();
pickedCards[1] = "../img/2_of_clubs.png";
pickedCards[2] = "../img/3_of_hearts.png";         
pickedCards[3] = "../img/4_of_spades.png";         
pickedCards[4] = "../img/5_of_clubs.png";           
pickedCards[5] = "../img/6_of_diamonds.png";       
pickedCards[6] = "../img/7_of_diamonds.png";
pickedCards[7] = "../img/8_of_hearts.png";
pickedCards[8] = "../img/9_of_spades.png";
pickedCards[0] = "../img/10_of_clubs.png";
pickedCards[9] = "../img/ace_of_clubs.png";
pickedCards[10] = "../img/black_joker.png";
pickedCards[11] = "../img/jack_of_diamonds.png";
pickedCards[12] = "../img/king_of_hearts.png";
pickedCards[13] = "../img/queen_of_spades.png";

// jQuery function to remove elements
$(document).ready(function() {
    // click event for the button
    $("#playGame").click(function() {  
        // Will remove the specified elements
        $("#removeElements").remove();                   
    });
});

// Elements will be undisabled once the Play button has been clicked 
function enable() { 
    // Returns the element that has the ID attribute with the specified value
    var click = document.getElementById("clickSound");
    // The play() method starts playing the current audio
    click.play();
    // Undisables the buttons
    document.getElementById("startLevel1").disabled = false;
    document.getElementById("goHome").disabled = false;
}

// Refreshes the page after clicking the button
function homeButton() {
    // Reloads the Game page
    location.reload();
}

// Sound effects implemented from game.php
function regPage() {
    var click = document.getElementById("clickSound");
    click.play();
}

// Rankings Table button displayed on the game canvas
function rankPage() {
    // Opens the Rankings Table page and it will be opened on the same tab
    window.location.replace("http://localhost/html/rankings.php");
}

// Shuffle button to shuffle the deck of cards
function shuffleCard() {    
    var shuffleSound = document.getElementById("shuffleNoise");
    shuffleSound.play();
    document.getElementById("snatchCard").disabled = false;
    // Shuffles the first deck of cards in a random order
    cardIndex1 = Math.floor(Math.random() * pickedCards.length); 
    document.getElementById("deckOfCards1").innerHTML = "<img src='" + 
    pickedCards[cardIndex1] + "'alt='pickedCards (" + cardIndex1 + ")'></img>";
    // Shuffles the second deck of cards in a random order
    cardIndex2 = Math.floor(Math.random() * pickedCards.length); 
    document.getElementById("deckOfCards2").innerHTML = "<img src='" + 
    pickedCards[cardIndex2] + "'alt='pickedCards (" + cardIndex2 + ")'></img>";
}

// Snatch button to get scores for users
function snatchFunction() {
    // If two deck of cards do match, it will update the score
    if (cardIndex1 === cardIndex2) {
        var correct = document.getElementById("correctSound");
        correct.play(); 
        // Scores are added up by 10, and will start from 0
        score += 10;
        // Updates the score everytime a user finds a matching card
        document.getElementById("scorePoints").innerHTML = (score);
        document.getElementById("snatchCard").disabled = true;
    } else {
        // If two cards do not match, the user will hear an error, and the score will stay the same
        var wrong = document.getElementById("wrongSound");
        wrong.play();
    }
}

// Countdown of 60 seconds
function CountDown(time) {  
    document.getElementById("snatchCard").disabled = false;
    document.getElementById("shuffleDeck").disabled = false;
    document.getElementById("startLevel1").disabled = true;
    var startSound = document.getElementById("startGame");
    startSound.play();
    // Variable is initialized for the first time and then incremented
    var reverse = 0;
    // A for loop which loops in the timer to decrement the value, e.g. 10 will become 9 after it loops
    for(i = time; i > -1; i--) {   
        // Counts down the time by one second
        setTimeout("UpdateUI(" + i + ")", reverse * 1000);
        reverse = reverse + 1;
    }
}

// Countdown of 30 seconds
function CountDown2(time) {
    document.getElementById("snatchCard").disabled = false;
    document.getElementById("shuffleDeck").disabled = false;
    document.getElementById("startLevel2").disabled = true;
    var startSound = document.getElementById("startGame");
    startSound.play();
    var reverse = 0;
    for(i = time; i > -1; i--) {                    
        setTimeout("UpdateUI2(" + i + ")", reverse * 1000);
        reverse = reverse + 1;
    }
}

// Countdown of 10 seconds
function CountDown3(time) {
    document.getElementById("snatchCard").disabled = false;
    document.getElementById("shuffleDeck").disabled = false;
    document.getElementById("startLevel3").disabled = true;
    var startSound = document.getElementById("startGame");
    startSound.play();
    var reverse = 0;                
    for(i = time; i > -1; i--) {            
        setTimeout("UpdateUI3(" + i + ")", reverse * 1000);
        reverse = reverse + 1;
    }
}

// The start of Level 2
function UpdateUI(time) {
    var alarm = document.getElementById("gameAlarm");
    var timer = document.getElementById('timeLeft');
    // Codes will be executed once the timer reaches 30 seconds
    if(time == 0) {   
        // Actions that will be performed once the timer has reached 30 seconds
        alarm.play();
        document.getElementById("snatchCard").disabled = true;
        document.getElementById("shuffleDeck").disabled = true;
        document.getElementById("levelNumber").innerHTML = ("2");
        document.getElementById("timeLeft").innerHTML = ("30");
        document.getElementById("startLevel1").remove();
        document.getElementById("startLevel2").disabled = false;
    }
    else {    
        // The timer will stop at 30 seconds, but no action will be performed
        timer.innerHTML = time + "<br/>";        
    }
} 

// The start of Level 3
function UpdateUI2(time) {  
    var alarm = document.getElementById("gameAlarm");
    var timer = document.getElementById('timeLeft');
    if(time == 0) {                   
        alarm.play();
        document.getElementById("snatchCard").disabled = true;
        document.getElementById("shuffleDeck").disabled = true;
        document.getElementById("levelNumber").innerHTML = ("3");
        document.getElementById("timeLeft").innerHTML = ("10");
        document.getElementById("startLevel2").remove();
        document.getElementById("startLevel3").disabled = false;
    }
    else {                    
        timer.innerHTML = time + "<br/>";
    }
}                        

// After completing all the Levels
function UpdateUI3(time, newScore) {  
    var alarm = document.getElementById("gameAlarm");
    var timer = document.getElementById('timeLeft');
    if(time == 0) {                    
        alarm.play();
        // Only the Rankings Table button will be clickable when the timer reaches 0
        document.getElementById("rank").disabled = false;
        document.getElementById("snatchCard").disabled = true;
        document.getElementById("shuffleDeck").disabled = true;
        document.getElementById("timeLeft").innerHTML = ("0");
        document.getElementById("levelNumber").innerHTML = ("0");
        // Store a string version of the object in local storage
        var userScore = JSON.parse(localStorage[localStorage.loggedInUser]); 
        // Extract the score
        userScore.score = document.getElementById("scorePoints").innerHTML;
        // Puts the score in the storage for the logged-in user
        localStorage[localStorage.loggedInUser] = JSON.stringify(userScore);
    }
    else {                    
        timer.innerHTML = time + "<br/>";
    }
}

function storeUserDetail() {
    // Extract the title, first name, last name, gender, username and password that the user has entered and selected
    var titleSelected = document.getElementById("titleInput").value;
    var fNameInput = document.getElementById("firstNameInput").value;
    var lNameInput = document.getElementById("lastNameInput").value;
    var genderSelected = document.getElementById("genderInput").value;
    var uNameInput = document.getElementById("userNameInput").value;
    var pWordInput = document.getElementById("passWordInput").value;
    // Check that the first name, last name, username and password are not empty
    if(fNameInput === "") {
        document.getElementById("regMessage").innerHTML = "<span class='error'>Please enter your First Name.</span>";
    }
    else if(lNameInput === "") {
        document.getElementById("regMessage").innerHTML = "<span class='error'>Please enter your Last Name.</span>";   
    }
    else if(uNameInput === "") {
        document.getElementById("regMessage").innerHTML = "<span class='error'>Please enter your Username.</span>";   
    }
    else if(pWordInput === "") {
        document.getElementById("regMessage").innerHTML = "<span class='error'>Please enter your Password.</span>";   
    }
    else {
        // JavaScript object to hold the user data
        var storeDetails = {};
        // Check that the title and gender has been picked appropriately
        if(titleSelected === "Mr" && genderSelected === "Male") {
            // Entered user data added to object
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            // Store a string version of the object in local storage
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            // Opens the login page after the data has been stored in the local storage
            window.location.replace("http://localhost/html/login.php");
        }
        // If the condition is false
        else if(titleSelected === "Mr" && genderSelected === "Female") {
            // Gender input is incorrect and will let the user know
            document.getElementById("regMessage").innerHTML = "<span class='error'>Please select the correct Gender.</span>";
        }
        else if(titleSelected === "Mr" && genderSelected === "Other") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Mrs" && genderSelected === "Male") {
            document.getElementById("regMessage").innerHTML = "<span class='error'>Please select the correct Gender.</span>";
        }
        else if(titleSelected === "Mrs" && genderSelected === "Female") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Mrs" && genderSelected === "Other") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Ms" && genderSelected === "Male") {
            document.getElementById("regMessage").innerHTML = "<span class='error'>Please select the correct Gender.</span>";
        }
        else if(titleSelected === "Ms" && genderSelected === "Female") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Ms" && genderSelected === "Other") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Miss" && genderSelected === "Male") {
            document.getElementById("regMessage").innerHTML = "<span class='error'>Please select the correct Gender.</span>";
        }
        else if(titleSelected === "Miss" && genderSelected === "Female") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Miss" && genderSelected === "Other") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            wwindow.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Other" && genderSelected === "Male") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Other" && genderSelected === "Female") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else if(titleSelected === "Other" && genderSelected === "Other") {
            storeDetails.title = titleSelected;
            storeDetails.firstName = fNameInput;
            storeDetails.lastName = lNameInput;
            storeDetails.gender = genderSelected;
            storeDetails.username = uNameInput;
            storeDetails.password = pWordInput;
            localStorage[storeDetails.username] = JSON.stringify(storeDetails);
            window.location.replace("http://localhost/html/login.php");
        }
        else {
            // Check that the title and gender is not empty
            document.getElementById("regMessage").innerHTML = "<span class='error'>Please select your Title and Gender.</span>";   
        }                    
    }
}

function loginUser() {
    var username = document.getElementById("uNameInput").value;
    var password = document.getElementById("pWordInput").value;
    // Checks that the username is not empty
    if(username === "") {
        // If username is empty, an error message will be displayed for the user
        document.getElementById("logMessage").innerHTML = "<span class='error'>Please enter your Username.</span>";                   
    }
    // Checks that the password is not empty
    else if(password === "") {
        // If password is empty, an error message will be displayed for the user
        document.getElementById("logMessage").innerHTML = "<span class='error'>Please enter your Password.</span>";     
    }
    else {
        // Checks to see if there is data stored for this user
        if(localStorage[username] === undefined) {
            // No user found - feedback will be given to the user
            document.getElementById("logMessage").innerHTML = "<span class='error'>Username Incorrect. Please try again.</span>";
            return;
        }
        else {
            // Get object that is stored for username
            var storeDetails = JSON.parse(localStorage[username]);
            if(password === storeDetails.password) {
                storeDetails.username = document.getElementById("uNameInput").value;
                storeDetails.password = document.getElementById("pWordInput").value;
                // Record the user that has logged in using local storage
                localStorage.loggedInUser = username;
                // Play the game after the user has logged in
                window.location.replace("http://localhost/html/game.php");
            }
            else {
                // Password incorrect - feedback will be given to the user
                document.getElementById("logMessage").innerHTML = "<span class='error'>Password Incorrect. Please try again.</span>";
            }
        }
    }
}

// Data structure holding the rankings data
var data = [];
  
// Get data of all the keys in the local storage
var getData = key => {
    return JSON.parse(localStorage[key]);
};

// function called when the Rankings page loads 
function inputUserInfo() {
    // Variable to hold the data in the local storage
    var tableBody;
    // Variable that will hold the HTML for the Rankings Table
    var tempData = '';
    // Headers that will be at the top of the table
    var tableHeader = "<tr><th>First Name</th><th>Last Name</th><th>Score</th></tr>\n";

    // Work through all of the keys in local storage
    for (var key in localStorage) {
        // All of the keys should point to user data except loggedInUser
        if (key !== "loggedInUser") {
            // Push items to the end of the array, and return the new length
            data.push(getData(key));
        }
    }

    // Work through the array and apply user to the object
    for (var user of data) {
        if (tempData) {
            // Extract first name, last name and score to the table
            tempData += `<tr><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.score}</td></tr>`;
        } else {
            tempData = `<tr><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.score}</td></tr>`;
        }                   
    }

    // Checks that there isn't a tbody in the HTML
    if (!tableBody) {
        // Variable will now hold the HTML for the Rankings Table
        tableBody = tempData;
    }

    // Reference to the table that will hold the rankings table.
    document.getElementById("rankTable").innerHTML = ""
    // Get data for the headers and local storage objects
    document.getElementById("rankTable").innerHTML = tableHeader + tableBody;
}