<?php
function outputNav(){
    // Arrays used for navigation
    $nav = array();
    // Links with the text displayed
    $nav ['login.php'] = 'LOGIN';
    $nav ['register.php'] = 'REGISTER';
    $nav ['rankings.php'] = 'RANKINGS';
    $nav ['game.php'] = 'GAME';
    $nav ['index.php'] = 'HOME';
    echo '<nav id="menu">';
    // Calls the function for each element in the array above
    foreach($nav as $link => $title) {
        // Add links to the array
        echo '<a href="'.$link.'">'.$title.'</a>';
    }
    echo '</nav>';
}
?>

<?php
function outputFooterGame() {
    // Outputs as strings
    echo '<div class="footerGame">';
    // Name displayed on the footer
    echo '<br/>Created by: Muddasar Ashfaq';
    echo '<br/><br/>Contact information: ';
    // Contact information
    echo '<a href="MA2705@live.mdx.ac.uk">MA2705@live.mdx.ac.uk</a>';
    echo '</div>';
}
?>

<?php
function outputFooterIndex() {
    // Outputs as strings
    echo '<div class="footerIndex">';
    // Name displayed on the footer
    echo '<br/>Created by: Muddasar Ashfaq';
    echo '<br/><br/>Contact information: ';
    // Contact information
    echo '<a href="MA2705@live.mdx.ac.uk">MA2705@live.mdx.ac.uk</a>';
    echo '</div>';
}
?>

<?php
function outputFooterLogin() {
    // Outputs as strings
    echo '<div class="footerLogin">';
    // Name displayed on the footer
    echo '<br/>Created by: Muddasar Ashfaq';
    echo '<br/><br/>Contact information: ';
    // Contact information
    echo '<a href="MA2705@live.mdx.ac.uk">MA2705@live.mdx.ac.uk</a>';
    echo '</div>';
}
?>

<?php
function outputFooterRankings() {
    // Outputs as strings
    echo '<div class="footerRankings">';
    // Name displayed on the footer
    echo '<br/>Created by: Muddasar Ashfaq';
    echo '<br/><br/>Contact information: ';
    // Contact information
    echo '<a href="MA2705@live.mdx.ac.uk">MA2705@live.mdx.ac.uk</a>';
    echo '</div>';
}
?>

<?php
function outputFooterRegister() {
    // Outputs as strings
    echo '<div class="footerRegister">';
    // Name displayed on the footer
    echo '<br/>Created by: Muddasar Ashfaq';
    echo '<br/><br/>Contact information: ';
    // Contact information
    echo '<a href="MA2705@live.mdx.ac.uk">MA2705@live.mdx.ac.uk</a>';
    echo '</div>';
}
?>

<?php
function outputBorderGame() {
    // Background border
    echo '<div id="backWhiteGame"></div>';  
}
?>

<?php
function outputBorderIndex() {
    // Background border
    echo '<div id="backWhiteIndex"></div>';  
}
?>

<?php
function outputBorderLogin() {
    // Background border
    echo '<div id="backWhiteLogin"></div>';  
}
?>

<?php
function outputBorderRankings() {
    // Background border
    echo '<div id="backWhiteRankings"></div>';  
}
?>

<?php
function outputBorderRegister() {
    // Background border
    echo '<div id="backWhiteRegister"></div>';  
}
?>

<?php
function outputLogo() {
    // Link on logo to open the index page
    echo '<a href="index.php"><img id="logo" src="../img/Logo.png"/></a>';
}
?>

<?php
function outputLine() {
    // Horizontal line with border-style dashed 
    echo '<hr class="dashedLine">';
}
?>