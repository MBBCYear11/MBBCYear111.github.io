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
            <li><a href="Homepage.html" style="text-decoration: none; color: white;" id="currentPage" class="hoverable">Home</a></li>
            <li><a href="AboutMe.html" style="text-decoration: none; color: white;" class="hoverable">About Me</a></li>
            <li><a href="test.html" style="text-decoration: none; color: white;" class= "hoverable">Hunger Games</a></li>
            <li class="customform">
                    <div class="dropdown">
                            <button class="dropbtn"><a href="AboutMe.html" style="text-decoration: none;">Projects</a>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                              <a href="AboutMe.html">Architecture</a>
                              <a href="AboutMe.html">Engineering</a>
                              <a href="AboutMe.html">Woodworking</a>
                              <a href="AboutMe.html">Programming and Robotics</a>
                              <a href="AboutMe.html">Scientific Reports</a>
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
        </header>
        <article>
        <h4 id="incorrectusername"></h4>
        <h4 id="nonmatchingpasswords"></h4>
        <h1 id="title">Benjamin Tran</h1>
        </article>
        <main>
        <article>
        <div class="slideshow-container">
                    <div><img class="mySlides w3-animate-left" src="House slideshow.png" width="100%" height="600"></div>
                    <div><img class="mySlides w3-animate-left" src="House slideshow2.png" width="100%" height="600"></div>
                    <div><img class="mySlides w3-animate-left" src="House slideshow3.png" width="100%" height="600"></div>
                    <div><img class="mySlides w3-animate-left" src="House slideshow4.png" width="100%" height="600"></div>
                    <button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                    <button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
                    <h3 class="caption">Slideshow of the Day: House</h3>
            </div>
            <script>
var slideIndex = 0;
function plusDivs(n) {
  showDivs(slideIndex += n)}
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 8000); // Change image every 2 seconds
}
                    </script>
        </article>
        <article class="main">
          Welcome to my website. This is where I showcase all of my projects, from architecture to programming to other websites. This website is home to many resources, including downloadable CAD files and programs. Each day, a montage is displayed in the slideshow of the day, giving you a chance to capture a new snapshot of my website every day. Sign up to Benjamin Tran to get exclusive benefits, reward points, and unlimited access of downloadable files.
          <ul id="list-no-login"><b>Without signing in, you can:</b>
            <li>View every page and article</li>
            <li>Download some files</li>
            <li>Elegent design and aesthetics</li>
          </ul>
          <ul id="list-with-login"><b>By subscribing to a free account, you can:</b>
            <li>View every page and article</li>
            <li>Have access to the full range of files</li>
            <li>Elegent design and aesthetics</li>
            <li>Get rewarded for visiting each day</li>
            <li>Member benefits that can be used for purchases</li>
            <li>Interactive activities</li>
            <li>Personalisation of the website</li></ul>
        </article>
        <article>
        <p id="p1">Some of the projects that are available for download have been showcased below:</p>  
        <section>
          <a style="text-decoration: none;" href=""><img src="House slideshow3.png" alt="Revit House" id="sample-image1">
          <figcaption id="figcaption1">Explore the intricately detailed 3-story mansion designed from scratch</figcaption></a>
        </section>
        <section>
          <a style="text-decoration: none;" href=""><img src="Granny Flat slideshow.png" alt="Granny Flat" id="sample-image2">
          <figcaption id="figcaption2">Find inspiration for your own architectural endeavours from this granny flat</figcaption></a>
        </section>
        <section>
          <a style="text-decoration: none;" href=""><img src="HHH slideshow1.jpg" alt="Hunger Games" id="sample-image3">
          <figcaption id="figcaption3">Visit our alternate website and participate in the HHH if you are part of the MBBC community</figcaption></a>
        </section>
        <section>
          <a style="text-decoration: none;" href="https://rooster202.github.io" target="_blank"><img src="Reuben.png" alt="Reuben's stupid website" id="sample-image4">
          <figcaption id="figcaption4">Access some other inferior websites</figcaption><a>
          <a href="https://nebrok.github.io" target="_blank"><img src="Korben(1).png" alt="Sausage's stupid website" id="sample-image5"></a>
        </section>
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