document.getElementById('slideshow-container').style.height = "660px";
db.collection("users").get().then(function(snapshot){
    snapshot.docs.forEach(function(doc){
        //console.log(doc.data());
        //name = console.log(doc.data()["name"]);
        })
    })

countDownloads();
if (document.title == "Benjamin Tran | Homepage") {
document.getElementById("sample-image4").addEventListener("click", e => {scum()});
document.getElementById("figcaption4").addEventListener("click", e => {scum()});
document.getElementById("sample-image5").addEventListener("click", e => {
    if (loggedIn) {
        db.collection("users").doc(id).get().then(doc => {
            if (doc.data()["reuben"] == true) {
                document.getElementById("a11").style.display = "block";
                function hide() {document.getElementById("a11").style.display = "none";}
                setTimeout(hide,8000);
            }
        })
    }
    else { 
        if (getCookie('scum')) {
            document.getElementById("a11").style.display = "block";
            function hide() {document.getElementById("a11").style.display = "none";}
            setTimeout(hide,8000);
        }
    }
})
var days = Math.floor((((new Date()/1000)/3600)/24));
console.log(days % 4);
console.log(document.getElementById("slideshow-container"));
switch (days % 4) {
    case 0:
        console.log("0");
        document.getElementById("caption").innerHTML = "Slideshow of the Day: House";
        document.getElementById("slideshow1").src = "House slideshow.png";
        document.getElementById("slideshow2").src = "House slideshow2.png";
        document.getElementById("slideshow3").src = "House slideshow3.png";
        document.getElementById("slideshow4").src = "House slideshow4.png";
        document.getElementById("slideshow5").src = "House slideshow5.png";
        document.getElementById("slideshow6").src = "House slideshow6.png";
        document.getElementById("slideshow7").src = "House slideshow7.png";
        document.getElementById("slideshow8").src = "House slideshow8.png";
            break;
    case 1:
            console.log("1");
            console.log("yes");
            document.getElementById("caption").innerHTML = "Slideshow of the Day: Granny Flat";
            document.getElementById("slideshow1").src = "Flat slideshow.png";
            document.getElementById("slideshow2").src = "Flat slideshow2.png";
            document.getElementById("slideshow3").src = "Flat slideshow3.png";
            document.getElementById("slideshow4").src = "Flat slideshow4.png";
            document.getElementById("slideshow5").src = "Flat slideshow5.png";
            document.getElementById("slideshow6").src = "Flat slideshow6.png";
            document.getElementById("slideshow7").src = "Flat slideshow7.png";
            document.getElementById("slideshow8").src = "Flat slideshow8.png";
            break;
    case 2:
            console.log("2");
            document.getElementById("caption").innerHTML = "Slideshow of the Day: Woodworking";
            break;
    case 3:
            console.log("3");
            document.getElementById("caption").innerHTML = "Slideshow of the Day: Programming";
            break;
}}

function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

if (getCookie("name")) {
     if (getCookie("loggedIn") == "true") {var loggedIn = true;};
     var name = getCookie("name");
     var id = getCookie("identification");
}
else {
    var loggedIn = false;
    var name = "";
    var id = "";
}

loggedIn ? document.getElementById('title').style.overflow = "hidden" : document.getElementById('title').style.overflow = "visible";

revealPoints();
//window.addEventListener("load",(e) => {
    if (name) {
        document.getElementById("login").innerHTML = "Welcome, " + name + ".";
        document.getElementById("signup").innerHTML = "Logout.";
        document.getElementById("loginform").style.visibility = "hidden";
        document.getElementById("incorrectusername").innerHTML = "";
        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
        toggleVisibilityLogin(document.getElementById("login"),document.getElementById("loginform"));
        toggleVisibilitySignUp(document.getElementById("signup"),document.getElementById("signupform"));
        document.getElementById('member-benefits').style.display = "block";
       }
    //});
window.addEventListener("load", (e) => {checkStreaks()});
window.addEventListener("load", (e) => {updatePurchases()});
function updatePurchases () {
    if (loggedIn) {
        db.collection('users').doc(id).get().then( doc => {
            if (doc.data()["granny_flat_benefit"]) {
                if (document.title == "Benjamin Tran | Projects | Member Benefits") {
                document.getElementById("flat_purchase").innerHTML = "<a href=\"" + 'Subscription Granny Flat.zip' + "\" download>Download Here</a>";
            }}


        })
    }
}

function checkStreaks() {
    //console.log(loggedIn);
    if (loggedIn) {
    db.collection("users").doc(id).get().then(doc => {
    var previousDate = ((doc.data()["streaks"]["seconds"])*1000);
    var number_visited = doc.data()["number_visited"];
    //console.log(previousDate);
    previousDate = new Date(previousDate);
    console.log(previousDate);
    //console.log(new Date());
    var previousYear = previousDate.getFullYear();
    var previousMonth = previousDate.getMonth();
    var previousDay = previousDate.getDate();
    console.log("previous year" + previousYear);
    console.log("previous month" + previousMonth);
    console.log("previous day" + previousDay);
    var d = new Date();
    var e = d.setDate(d.getDate()-1);
    var f = new Date(e);
    console.log("f: " + f);
    var yesterdayYear = f.getFullYear();
    var yesterdayMonth = f.getMonth();
    var yesterdayDay = f.getDate();
    var Year =(new Date()).getFullYear();
    var Month = (new Date()).getMonth();
    var Day = (new Date()).getDate();
    console.log(yesterdayYear);
    console.log(yesterdayMonth);
    console.log(yesterdayDay);
    console.log("year" + Year);
    console.log("month" + Month);
    console.log("day" + Day);
    console.log(Year == previousYear);
    console.log(Month == previousMonth);
    console.log(Day == previousDay);
    if (yesterdayYear == previousYear && yesterdayMonth == previousMonth && yesterdayDay == previousDay) {
        console.log('added');
        db.collection("users").doc(id).update({
            number_visited: number_visited + 1,
            streaks: new Date()
    })}
    else if (Year == previousYear && Month == previousMonth && Day == previousDay) {
        console.log('nothing');
    }
    else {
        console.log("reset");
            var streaks = doc.data()["number_visited"];
            var current_points = doc.data()["points"];
            console.log(streaks);
        db.collection("users").doc(id).update({
            number_visited: 0,
            streaks: new Date(),
            points: (((streaks - 1)**2 + (streaks - 1)) / 4) + current_points
        })        }
    
    
    var num_streaks = doc.data()["number_visited"];
    var _bool = doc.data()["seven_streaks"];
    var _bool2 = doc.data()["fifty_streaks"];
    var _bool3 = doc.data()["year_streaks"];
    //console.log(num_streaks);
    //console.log(_bool);
    //console.log(_bool2);
    //console.log(_bool3);
    if ((num_streaks == 7) && (_bool == false)) {
        document.getElementById("a5").style.display = "block";
        function hide() {document.getElementById("a5").style.display = "none";}
        setTimeout(hide,8000);
        db.collection('users').doc(id).update({
        seven_streaks: true,
        points: doc.data()["points"] + 20 })
    }
    if ((num_streaks == 50) && (_bool2 == false)) {
        document.getElementById("a8").style.display = "block";
        function hide() {document.getElementById("a8").style.display = "none";}
        setTimeout(hide,8000);
        db.collection('users').doc(id).update({
        fifty_streaks: true,
        points: doc.data()["points"] + 600 })
    }
    if ((num_streaks == 365) && (_bool3 == false)) {
        document.getElementById("a9").style.display = "block";
        function hide() {document.getElementById("a9").style.display = "none";}
        setTimeout(hide,8000);
        db.collection('users').doc(id).update({
        year_streaks: true,
        points: doc.data()["points"] + 7000 })
    }
    var birthday = ((doc.data()["birthday"]["seconds"])*1000);
    var prevbirthday = (doc.data()["prevbirthday"]["seconds"])*1000;
    //console.log(birthday);
    //console.log(prevbirthday);
    prevbirthday = new Date(prevbirthday);
    birthday = new Date(birthday);
    var prevbirthdayYear = prevbirthday.getFullYear();
    var birthdayYear = birthday.getFullYear();
    var birthdayMonth = birthday.getMonth();
    var birthdayDay = birthday.getDate();
    if (birthdayYear !== Year && birthdayMonth == Month && birthdayDay == Day && prevbirthdayYear !== Year) {
        document.getElementById("a4").style.display = "block";
        function hide() {document.getElementById("a4").style.display = "none";}
        setTimeout(hide,8000);
        db.collection('users').doc(id).update({
        prevbirthday: new Date(),
        points: doc.data()["points"] + 50 })
    }
    })
    }
    else {
        console.log("not logged in");
    }
}


const signup = document.querySelector("#signupform");
signup.addEventListener('submit', (e) => {
    e.preventDefault();
    if (signup.newPassword.value === signup.confirmPassword.value) {
        //console.log("first function")
        var counter = 0;
        var outsideUsername = signup.newUsername.value;
        //console.log(outsideUsername);
        db.collection('users').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                //console.log("Function 1 starts");
                data = doc.data()["username"];
                //console.log(data);
                if (data == outsideUsername) {
                    counter += 1; 
                    //console.log("counter: " + counter);
                }
            })
        }).then(ifUsernameExists);
        function ifUsernameExists() {
            
        if (counter == 0) {
            //console.log("ifUsernameExists");
        db.collection('users').add({
            name: signup.newName.value,
            username: signup.newUsername.value,
            password: signup.newPassword.value,
            streaks: new Date(),
            repaying_favour: false,
            seven_streaks: false,
            fifty_streaks: false,
            year_streaks: false,
            prevbirthday: new Date(),
            birthday: new Date(),
            points: 0,
            scum: false,
            granny_flat_benefit: false,
            five_downloads: false,
            hunger_games: false,
            number_visited: 0}).then(docRef => {
                //console.log(docRef.id);
                id = docRef.id;
                setCookie("identification", id,2);
        //console.log("submitted...");
        loggedIn = true;
        name = signup.newName.value;
        document.getElementById("signup").innerHTML = "Logout.";
        document.getElementById("login").innerHTML = "Hello, " + name + ".";
        document.getElementById("newPassword").value = "";
        document.getElementById("newUsername").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("newName").value = "";

        function vis() {document.getElementById("newPassword").style.visibility = "";
        document.getElementById("newPassword").value = "";}
        function vis22() {document.getElementById("newUsername").style.visibility = "";
        document.getElementById("newUsername").value = "";}
        function vis3() {document.getElementById("newName").style.visibility = "";
        document.getElementById("newName").value = "";}
        function vis7() {document.getElementById("confirmPassword").style.visibility = "";
        document.getElementById("confirmPassword").value = "";}
        document.getElementById("nonmatchingpasswords").style.visibility = "";
        document.getElementById("nonmatchingpasswords").style.display = "none";
        document.getElementById("signupbutton").style.visibility = "";
        setTimeout(vis7,100);
        setTimeout(vis,200);
        setTimeout(vis22,300);
        setTimeout(vis3,400);

        function vis2() {document.getElementById("username").style.visibility = "";document.getElementById("username").value="";}
        function vis21() {document.getElementById("password").style.visibility = "";document.getElementById("password").value="";}
        document.getElementById("incorrectusername").style.display = "none";
        document.getElementById("incorrectusername").style.visibility = "";
        document.getElementById("loginbutton").style.visibility = "";
        setTimeout(vis2,200);
        setTimeout(vis21,100);

        setCookie("name",name,2);
        setCookie("loggedIn", "true", 2);
        checkStreaks(); 
        revealPoints();
        updatePurchases();
        overlaps();
        loggedIn ? document.getElementById('title').style.overflow = "hidden" : document.getElementById('title').style.overflow = "visible";
        document.getElementById('member-benefits').style.display = "block";           
        document.getElementById("a2").style.display = "block";
        function hide() {document.getElementById("a2").style.display = "none";}
        setTimeout(hide,8000);
        db.collection('users').doc(id).update({
        points: doc.data()["points"] + 40
    })
    })
        }
        else {
            //console.log("ready: " + ready);
            document.getElementById("nonmatchingpasswords").innerHTML = "Username already exists";
            document.getElementById("nonmatchingpasswords").style.display = "";
            document.getElementById("newUsername").value = "";
            //document.getElementById("newPassword").value = "";
            //document.getElementById("confirmPassword").value = "";
        }}
    }
    else {document.getElementById("nonmatchingpasswords").innerHTML = "Passwords do not match";
    document.getElementById("nonmatchingpasswords").style.display = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("newPassword").value = "";
}

})

const login = document.querySelector('#loginform');
login.addEventListener("submit", (e) => {
    e.preventDefault();
    function checkLogin() {
        var counter = 0;
        db.collection("users").get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                var localUsername = doc.data()["username"];
                var localPassword = doc.data()["password"];
                if ((localUsername == login.username.value) && (localPassword == login.password.value)) {
                    counter = 1;
                    loggedIn = true;
                    name = doc.data()["name"];
                    //console.log(doc.data().id);
                    document.getElementById("login").innerHTML = "Welcome, " + name + ".";
                    document.getElementById("signup").innerHTML = "Logout.";
                    //console.log(loginform.style.visibility);
                    document.getElementById("loginform").style.visibility = "hidden";
                    document.getElementById("incorrectusername").innerHTML = "";
                    document.getElementById("password").value = "";
                    document.getElementById("username").value = "";

                    function vis() {document.getElementById("newPassword").style.visibility = "";
                    document.getElementById("newPassword").value = "";}
                    function vis22() {document.getElementById("newUsername").style.visibility = "";
                    document.getElementById("newUsername").value = "";}
                    function vis3() {document.getElementById("newName").style.visibility = "";
                    document.getElementById("newName").value = "";}
                    function vis7() {document.getElementById("confirmPassword").style.visibility = "";
                    document.getElementById("confirmPassword").value = "";}
                    document.getElementById("nonmatchingpasswords").style.visibility = "";
                    document.getElementById("nonmatchingpasswords").style.display = "none";
                    document.getElementById("signupbutton").style.visibility = "";
                    setTimeout(vis7,100);
                    setTimeout(vis,200);
                    setTimeout(vis22,300);
                    setTimeout(vis3,400);

                    function vis2() {document.getElementById("username").style.visibility = "";document.getElementById("username").value="";}
                    function vis21() {document.getElementById("password").style.visibility = "";document.getElementById("password").value="";}
                    document.getElementById("incorrectusername").style.display = "none";
                    document.getElementById("incorrectusername").style.visibility = "";
                    document.getElementById("loginbutton").style.visibility = "";
                    setTimeout(vis2,200);
                    setTimeout(vis21,100);

                    id = doc.id;
                    //console.log(id);
                    setCookie("name",name,2);
                    setCookie("loggedIn", "true", 2);
                    setCookie("identification", id, 2);
                    checkStreaks();
                    revealPoints();
                    updatePurchases();
                    overlaps();
                    loggedIn ? document.getElementById('title').style.overflow = "hidden" : document.getElementById('title').style.overflow = "visible";
                    document.getElementById('member-benefits').style.display = "block";
                }
            })
        }).then(incorrect);
        //console.log(counter);
            /*console.log("incorrect");*/ 
            function incorrect() {
                if (counter === 0) {document.getElementById("incorrectusername").innerHTML = "Incorrect Username or Password";
                document.getElementById("incorrectusername").style.display = "";
                document.getElementById("password").value = "";
            }}
            //setTimeout(incorrect, 500);
    }
    checkLogin();
})

function toggleVisibilityLogin(host, element1){
    host.addEventListener("click", (e) => {e.preventDefault();
    //console.log(document.getElementById("username").style.visibility);
    //console.log(document.getElementById("password").style.visibility);
    //console.log(element1);
    //console.log(element1.visibility);
    if (document.getElementById("password").style.visibility == "visible") {
        //console.log("break 3");
        function vis2() {document.getElementById("username").style.visibility = "";document.getElementById("username").value="";}
        function vis21() {document.getElementById("password").style.visibility = "";document.getElementById("password").value="";}
        document.getElementById("incorrectusername").style.display = "none";
        document.getElementById("incorrectusername").style.visibility = "";
        document.getElementById("loginbutton").style.visibility = "";
        setTimeout(vis2,200);
        setTimeout(vis21,100);}
    else if (element1.style.visibility == "hidden") {
        function vis() {document.getElementById("password").style.visibility = "visible";}
        function vis11() {document.getElementById("loginbutton").style.visibility = "visible";}
        document.getElementById("username").style.visibility = "visible";
        setTimeout(vis,100);
        setTimeout(vis11,200);}
})}
function logout() {
    loggedIn = false;
    name = "";
    id = null;
    document.cookie = "name=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "loggedIn=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "id=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "identification=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
}
toggleVisibilityLogin(document.getElementById("login"),document.getElementById("loginform"));
function toggleVisibilitySignUp(host, element1){
    host.addEventListener("click", (e) => {e.preventDefault();
        //console.log("break1");
        //console.log(element1.style.visibility);
    if (host.innerHTML === "Logout.") {
        logout();}
    else if (document.getElementById("newPassword").style.visibility == "visible") {
        function vis() {document.getElementById("newPassword").style.visibility = "";
        document.getElementById("newPassword").value = "";}
        function vis2() {document.getElementById("newUsername").style.visibility = "";
        document.getElementById("newUsername").value = "";}
        function vis3() {document.getElementById("newName").style.visibility = "";
        document.getElementById("newName").value = "";}
        function vis7() {document.getElementById("confirmPassword").style.visibility = "";
        document.getElementById("confirmPassword").value = "";}
        document.getElementById("nonmatchingpasswords").style.visibility = "";
        document.getElementById("nonmatchingpasswords").style.display = "none";
        document.getElementById("signupbutton").style.visibility = "";
        setTimeout(vis7,100);
        setTimeout(vis,200);
        setTimeout(vis2,300);
        setTimeout(vis3,400);
        }
    else if (element1.style.visibility == "hidden") {
        //console.log("break 2");
        function vis4() {document.getElementById("newUsername").style.visibility = "visible";}
        function vis5() {document.getElementById("newPassword").style.visibility = "visible";}
        function vis6() {document.getElementById("confirmPassword").style.visibility = "visible";}
        function vis8() {document.getElementById("signupbutton").style.visibility = "visible";}
        document.getElementById("newName").style.visibility = "visible";
        setTimeout(vis4,100);
        setTimeout(vis5,200);
        setTimeout(vis6,300);
        setTimeout(vis8,400);
        }
})}

toggleVisibilitySignUp(document.getElementById("signup"),document.getElementById("signupform"));

//console.log(document.getElementById("title").innerHTML);
//console.log(document.getElementById("title").style.visibility);
//console.log(document.getElementById("title").style.display);

document.getElementById("credit").addEventListener("click", e => {
    if(loggedIn){
        db.collection("users").doc(id).get().then(doc => {
            
    if(doc.data()["repaying_favour"] == false){
    document.getElementById("a3").style.display = "block";
    function hide() {document.getElementById("a3").style.display = "none";}
    setTimeout(hide,8000);
    db.collection('users').doc(id).update({
    repaying_favour: true,
    points: doc.data()["points"] + 30
})

}})}})

function revealPoints () {
    if (loggedIn) {
        db.collection('users').doc(id).get().then(doc => {
            var points =  doc.data()["points"];
            //console.log("points: " + points);
            document.getElementById("points").innerHTML = points + "pts<div id='buy_more' style='font-size: 10pt'>Buy More (coming soon)</div>";
            var streaks = doc.data()["number_visited"];
            document.getElementById("streaks").innerHTML = streaks;
            document.getElementById("points").style.display = "block";
            document.getElementById("streaks").style.display = "block";
        });
    }
}

/*if (document.getElementById("points").style.display == "block") {
    buyMore();
}

function buyMore () {
    document.getElementById("buy_more").addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("buy_more").innerHTML = "coming soon!";
        function changeBack () {document.getElementById("buy_more").innerHTML = "Buy More"}
        setTimeout(changeBack, 6000);})}*/


function scum() {
    if (loggedIn) {
        db.collection("users").doc(id).get().then(doc => {
            document.getElementById("a10").style.display = "block";
            function hide() {document.getElementById("a10").style.display = "none";}
            setTimeout(hide,8000);
            db.collection('users').doc(id).update({reuben: true});
        })
    }
    else {
        console.log("scum scum scum");
        document.getElementById("a10").style.display = "block";
            function hide() {document.getElementById("a10").style.display = "none";}
            setTimeout(hide,8000);
            setCookie("scum",true,1);
    }
}




document.getElementById("title").addEventListener("click", e => 
{
    //console.log("You scum!");
    if(loggedIn){
        db.collection("users").doc(id).get().then(doc => {
            
    if((doc.data()["scum"] == false) && (doc.data()["reuben"] == true)){
    document.getElementById("a1").style.display = "block";
    function hide() {document.getElementById("a1").style.display = "none";}
    setTimeout(hide,8000);
    db.collection('users').doc(id).update({
    scum: true,
    points: doc.data()["points"] + 20})
    
}})}})

function purchase(host, points_deducted, link) {
    db.collection('users').doc(id).get().then( doc => {
    if (points_deducted <= doc.data()["points"]) {
        if (confirm("This process is irreversible. Are you sure you want to continue?"))
        {document.getElementById(host).innerHTML = "<a href=\"" + link + "\" download>Download Here</a>";
        db.collection('users').doc(id).update({
            points: doc.data()["points"] - points_deducted,
            granny_flat_benefit: true,
        })}

        }
    })
    }



console.log(`Next patch fix:
Smoother transitions for achievements
Mobile
Less loading time
Security
`);

         db.collection('users').orderBy('name').onSnapshot(snapshot => {
                let changes = snapshot.docChanges();
                changes.forEach(change => {
                    var points = change.doc.data()["points"];
                    console.log(points);
                     document.getElementById("points").innerHTML = points + "pts<div id='buy_more' style='font-size: 10pt'>Buy More (coming soon)</div>";
                    var streaks = change.doc.data()["number_visited"];
                    console.log(streaks);
                    document.getElementById("streaks").innerHTML = streaks;
                })
         });

         function countDownloads() {
            console.log("firstFunction");
            if (loggedIn) {
            var iterator = 0;
            var check;
            var points;
            db.collection('users').doc(id).get().then(doc => {
                console.log("halfFunction");
                check = doc.data()["five_downloads"];
                points = doc.data()["points"];
                if (doc.data()["granny_flat_benefit"] == true) {iterator ++;}
            }).then(followFunction)
        function followFunction() {
            console.log('followFunction');
        if (iterator == 1 && check == false) {
            console.log('passed');
            db.collection('users').doc(id).update({
                five_downloads: true,
                points: points + 20
            });
            document.getElementById("a6").style.display = "block";
            function hide() {document.getElementById("a6").style.display = "none";}
            setTimeout(hide,8000)
        }
    
        }}
        }
window.addEventListener('load', e => {overlaps()});
window.addEventListener('resize', e => {overlaps();});

function overlaps() {
    console.log('resize');
    if (loggedIn) {
        document.getElementById('streaks').style.display = "inline-block";
        document.getElementById('points').style.display = "inline-block";
        console.log('intermediary');
        console.log(document.getElementById('title').getBoundingClientRect().right * 0.99);
        console.log(document.getElementById('streaks'));
        console.log((document.getElementById('title').getBoundingClientRect().right * 0.99) > document.getElementById('streaks').getBoundingClientRect().left);
        console.log('intermediary 2');
    if ((document.getElementById('title').getBoundingClientRect().right * 0.99) > document.getElementById('streaks').getBoundingClientRect().left) {
        console.log('overlapping');
        document.getElementById("streaks").style.visibility = "hidden";
    }
    else {
        console.log("unoverlapping");
        document.getElementById("streaks").style.visibility = "visible";
    }
    if ((document.getElementById('title').getBoundingClientRect().right * 0.99) > document.getElementById('points').getBoundingClientRect().left) {
            document.getElementById('points').style.visibility = "hidden";
            document.getElementById('title').style.overflow = "visible";
            //document.getElementById('title').clientWidth = "98%";
            //document.getElementById('title').style.left = "1%";
}
    else {
        console.log('unoverlapping2');
        document.getElementById('points').style.visibility = "visible";
        //document.getElementById('title').style.overflow = "hidden";
        //document.getElementById('title').style.left = "25%";
    }}
    else {
        var edge = document.getElementById('title').scrollWidth;
        var element = document.getElementById('title');
        console.log("scrollWidth: " + element.scrollWidth);
        console.log("clientWidth: " + element.clientWidth);
        console.log("offsetWidth: " + element.offsetWidth);
        console.log("scrollWidth2: " + element.getBoundingClientRect().right);
        var window1 = window.innerWidth;
        console.log('edge: ' + edge);
        console.log('window1: ' + window1);
        if (edge > element.getBoundingClientRect().right) {
            console.log("blah blah blah");
            element.style.left = "1%";

        }
        else {
            console.log("unblah unblah unblah");
            element.style.left = "20%";
        }
    }
    changeSlides();
    function changeSlides() {
    document.getElementById('slideshow-container').style.height = (document.getElementById('slideshow-container').clientWidth * (660/1000)) + "px";
    console.log('ratio: ' + parseInt((document.getElementById('slideshow-container').style.height).slice(0,-2))/ document.getElementById('slideshow-container').clientWidth);
    document.getElementById('slideshow-container');
    document.getElementById('slideshow-container').clientHeight;

    for (i = 1; i < 9; i++) {
        console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: ' + i);
        var element = document.getElementById("slideshow" + i);
        console.log(element);
        element.style.height = element.width * (600/1000) + "px";
        console.log(element.style.height);
    }
    }
}

function pauseBefore(e) {
    e.preventDefault();

}
document.getElementById('sample-image4').addEventListener("click", e => {
    e.preventDefault();
    function f1() {window.open("https://rooster202.github.io","_blank");}
    setTimeout(f1,2000);
});
document.getElementById('figcaption4').addEventListener("click", e => {
    e.preventDefault();
    function f1() {window.open("https://rooster202.github.io","_blank");}
    setTimeout(f1,2000);
});
document.getElementById('sample-image5').addEventListener("click", e => {
    e.preventDefault();
    function f1() {window.open("https://nebrok.github.io","_blank");}
    setTimeout(f1,2000);
});

document.getElementById('sample-image5').addEventListener("click", e => {
    e.preventDefault();
    function f1() {window.open("https://nebrok.github.io","_blank");}
    setTimeout(f1,2000);
});


            db.collection('users').doc(id).get().then(doc => {
                document.getElementById('sample-image3').addEventListener('click', e=> {e.preventDefault();
                if (!doc.data()["hunger_games"]) {
                        document.getElementById("a7").style.display = "block";
                                    function hide() {document.getElementById("a7").style.display = "none";}
                                    setTimeout(hide,8000);
                var num = doc.data()["points"];
                console.log(num);
            db.collection('users').doc(id).update({
                points: num + 10,
                hunger_games: true
            });
            function f2() {window.open("https://rooster202.github.io/hunger_games","_blank");}
            setTimeout(f2,2000);
            }
        else {
            window.open('https://rooster202.github.io/hunger_games','_blank');
        }})
        })


//window.addEventListener('load', makePercentages());
//window.addEventListener('resize', makePercentages());
        function makePercentages() {
            document.getElementById('sample-image1').style.left = window.innerWidth * (10/1550);
            document.getElementById('figcaption1').style.left = window.innerWidth * (10/1550);
            document.getElementById('sample-image2').style.left = window.innerWidth * (10/1550);
            document.getElementById('figcaption2').style.left = window.innerWidth * (10/1550)
        }
