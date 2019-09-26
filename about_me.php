<?php 
/*$MyPHPNumVar = 10;
$MyPHPStringVar = "Ten";
session_start();
$_SESSION["loggedIn"] = false;
$_SESSION["name"] = "";
$_SESSION["id"] = null;*/
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="index.css" type="text/css" rel="stylesheet">
        <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Sofia" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css?family=Averia+Serif+Libre&display=swap" rel="stylesheet"> 
        <title>Benjamin Tran</title>
        <style type='text/css'>html{margin:0 !important ;}</style>
        <style>
                .w3-left, .w3-right, .w3-badge {cursor:pointer}
                .w3-badge {height:13px;width:13px;padding:0}
                </style>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
  <body>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-firestore.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->


        <header class='header'>
            <ul>
            <li><a href="index.php" style="text-decoration: none; color: white;" class="hoverable">Home</a></li>
            <li><a href="about_me.php" style="text-decoration: none; color: white;" id="currentPage" class="hoverable">About Me</a></li>
            <li><a href="hunger_games.php" style="text-decoration: none; color: white;" class= "hoverable">Hunger Games</a></li>
            <li class="customform">
                    <div class="dropdown">
                            <button class="dropbtn"><a style="text-decoration: none;">Projects</a>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                            <a href="projects.php#architecture">Architecture</a>
                              <a href="projects.php#engineering">Engineering</a>
                              <a href="projects.php#woodworking">Woodworking</a>
                              <a href="projects.php#programming">Programming and Robotics</a>
                              <a href="projects.php#science">Scientific Reports</a>
                            </div>
                    </div>
            </li>
            <li>
            <div id="logging-on">
                              <form id="loginform" action="" style="visibility: hidden;" method="POST">
                                  <input id="username" class="verification" type="text" placeholder="Username" name="username" required>
                                  <input id="password" class="verification" type="password" placeholder="Password" name="password" required>
                                  <input type="submit" value="Login" id="loginbutton">
                              </form>
                              <a style="text-decoration: none; color: white;" id="login" href="" class="hoverable">Login</a></li>
                              <li>
            <div id="signing-up">
                              <form id="signupform" style="visibility: hidden;" method="POST">
                                  <input id="newName" class="verification" type="text" placeholder="Name" name="newName" required>
                                  <input id="newUsername" class="verification" type="text" placeholder="Username" name="newUsername" required>
                                  <input id="newPassword" class="verification" type="password" placeholder="Password" name="newPassword" required>
                                  <input id="confirmPassword" class="verification" type="password" placeholder="Confirm Password" name="confirmPassword" required>
                                  <input type="submit" value="signup" id="signupbutton">
                              </form></div><a href="" style="text-decoration: none; color: white;" id="signup" class="hoverable">Sign Up</a></li>




            <div class="topnav">
                    <div class="search-container">
                      <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search">
                        <button type="submit"><i class="fa fa-search"></i></button>
                      </form>
                    </div>
                  </div>
            </ul>
            <div class="achievement" style="display: none;" id="a1">20pts: I don't take Ideas from Scum <p style="font-size: 12px;">Click on Reuben's website then my title<p></div>
        <div class="achievement" style="display: none;" id="a2">40pts: Thanks for Signing Up! <p style="font-size: 12px;">Kinda self-explanatory<p></div>
        <div class="achievement" style="display: none;" id="a3">30pts: Repaying the Favour <p style="font-size: 12px;">Click on one of the reference links<p></div>
        <div class="achievement" style="display: none;" id="a4">50pts: Happy Birthday! <p style="font-size: 12px;">1 year since you signed up<p></div>
        <div class="achievement" style="display: none;" id="a5">20pts: On a roll! <p style="font-size: 12px;">Streaks for 7 days<p></div>
        <div class="achievement" style="display: none;" id="a6">20pts: Download Machine <p style="font-size: 12px;">Download 5 things<p></div>
        <div class="achievement" style="display: none;" id="a7">10pts: My Other Website<p style="font-size: 12px;">Click on the Hunger Games link<p></div>
        <div class="achievement" style="display: none;" id="a8">100pts: Thank you, but... <p style="font-size: 12px;">Have streaks for 50 days<p></div>
        <div class="achievement" style="display: none;" id="a9">1000pts: ...do you have a life?<p style="font-size: 12px;">Have streaks for 365 days<p></div>
        </header>
        <article>
        <h4 id="incorrectusername"></h4>
        <h4 id="nonmatchingpasswords"></h4>
        <h1 id="title">About Me</h1>
        </article>
        <main>
        <article class="main" style="padding-top: 10px;">
        I'm a 
        </article>
        </main>
        <footer>
        <div style="color: white;"><a href="" style="text-decoration: none; color: black">About This Website</a> |  <a href="" style="text-decoration: none; color: black">Your Privacy</a> | <a style="color: black">Copyright Benjamin Tran 2019</a></div>
        <div id="urlname"></div>
            <script>
                document.getElementById("urlname").innerHTML = "URL: <a style='color: purple;'>" + window.location.pathname + "</a> <a style='color: white;'>|</a> Citation: (Tran, 2019)";
            </script>
        <div id="credit">
            Credit to: <a href="https://www.codecademy.com/learn" target="_blank" style="color: purple;">https://www.codecademy.com/learn</a> <a style="color: white;">||</a> <a href="https://www.w3schools.com/" target="_blank" style="color: purple;">https://www.w3schools.com/</a> <a style="color: white;">||</a> <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"  target="_blank"style="color: purple;">https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg </a><a style="color: white;">||</a> <a  target="_blank"href="https://developer.mozilla.org/en-US/" style="color: purple;">https://developer.mozilla.org/en-US/</a>
        </div>
        Made using Firebase <a style="color: white;">|</a> Hosted using Github
        </footer>
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAB3OWNq-4WI_8szpIt5P4LRLoM5XlGgVY",
    authDomain: "fir-learning-220e1.firebaseapp.com",
    databaseURL: "https://fir-learning-220e1.firebaseio.com",
    projectId: "fir-learning-220e1",
    storageBucket: "fir-learning-220e1.appspot.com",
    messagingSenderId: "634284375454",
    appId: "1:634284375454:web:131f876d7399d27253aa8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  //db.settings({timestampsInSnapshots: true});
</script>
<script src="firebase.js"></script>
  </body>
</html>