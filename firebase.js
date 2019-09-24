db.collection("users").get().then(function(snapshot){
    snapshot.docs.forEach(function(doc){
        //console.log(doc.data());
        //name = console.log(doc.data()["name"]);
        })
    })

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
       }
    //});
window.addEventListener("load", (e) => {checkStreaks()});
    
function checkStreaks() {
    console.log(loggedIn);
    if (loggedIn) {
    db.collection("users").doc(id).get().then(doc => {
    var previousDate = ((doc.data()["streaks"]["seconds"])*1000);
    var number_visited = doc.data()["number_visited"];
    console.log(previousDate);
    previousDate = new Date(previousDate);
    console.log(previousDate);
    console.log(new Date());
    var previousYear = previousDate.getFullYear();
    var previousMonth = previousDate.getMonth();
    var previousDay = previousDate.getDate();
    var currentYear = (new Date()).getFullYear();
    var currentMonth = (new Date()).getMonth();
    var currentDay = (new Date()).getDate();
    if ((currentMonth == previousMonth) && (currentYear == previousYear) && ((previousDay + 1) == currentDay)) {
        console.log('added');
        db.collection("users").doc(id).update({
            number_visited: number_visited + 1,
            streaks: new Date()
    })}
    else if ((currentMonth == previousMonth) && (currentYear == previousYear) && ((previousDay) !== currentDay)) {
        console.log('reset');
        db.collection("users").doc(id).update({
            number_visited: 0,
            streaks: new Date()
        })
    }
    else {
        console.log("nothing");
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
        console.log(db.collection("users").where("username","==",signup.newUsername.value).get().then())
        var counter = 0;
        var domain = true;
        var done = false;
        var outsideUsername = signup.newUsername.value;
        db.collection('users').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log("Function 1 starts");
                done = true;
                data = doc.data()["name"];
                if (data == outsideUsername) {
                    counter += 1; 
                    console.log("counter: " + counter);
                }
            })
        })
        console.log("final counter: " + counter);
        console.log("Function 2 starts");
        if (counter == 0) {
        db.collection('users').add({
            name: signup.newName.value,
            username: signup.newUsername.value,
            password: signup.newPassword.value,
            streaks: new Date(),
            number_visited: 0})
        console.log("submitted...");
        loggedIn = true;
        name = signup.newName.value;
        document.getElementById("signup").innerHTML = "Logout.";
        document.getElementById("login").innerHTML = "Hello, " + name + ".";
        document.getElementById("newPassword").value = "";
        document.getElementById("newUsername").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("newName").value = "";
        toggleVisibilityLogin(document.getElementById("login"),document.getElementById("loginform"));
        toggleVisibilitySignUp(document.getElementById("signup"),document.getElementById("signupform"));
        setCookie("name",name,2);
        setCookie("loggedIn", "true", 2);
        setCookie("identification", id,2);
        checkStreaks();
        }
        else {
            console.log("ready: " + ready);
            document.getElementById("nonmatchingpasswords").innerHTML = "Username already exists";
        }
    }
    else {document.getElementById("nonmatchingpasswords").innerHTML = "Passwords do not match";
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
                    loggedIn = true;
                    name = doc.data()["name"];
                    console.log(doc.data().id);
                    document.getElementById("login").innerHTML = "Welcome, " + name + ".";
                    document.getElementById("signup").innerHTML = "Logout.";
                    console.log(loginform.style.visibility);
                    document.getElementById("loginform").style.visibility = "hidden";
                    document.getElementById("incorrectusername").innerHTML = "";
                    document.getElementById("password").value = "";
                    document.getElementById("username").value = "";
                    toggleVisibilityLogin(document.getElementById("login"),document.getElementById("loginform"));
                    toggleVisibilitySignUp(document.getElementById("signup"),document.getElementById("signupform"));
                    id = doc.id;
                    console.log(id);
                    setCookie("name",name,2);
                    setCookie("loggedIn", "true", 2);
                    setCookie("identification", id, 2);
                    counter = 1;
                    checkStreaks();
                }
            })
        })
        console.log(counter);
        if (counter === 0) {console.log("incorrect"); document.getElementById("incorrectusername").innerHTML = "Incorrect Username or Password";
    }
    }
    checkLogin();
})

function toggleVisibilityLogin(host, element1){
    host.addEventListener("click", (e) => {e.preventDefault();
    console.log(document.getElementById("username").style.visibility);
    console.log(document.getElementById("password").style.visibility);
    console.log(element1);
    console.log(element1.visibility);
    if (document.getElementById("password").style.visibility == "visible") {
        console.log("break 3");
        function vis2() {document.getElementById("username").style.visibility = "";}
        function vis21() {document.getElementById("password").style.visibility = "";}
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
        console.log("break1");
        console.log(element1.style.visibility);
    if (host.innerHTML === "Logout.") {
        logout();}
    else if (document.getElementById("newPassword").style.visibility == "visible") {
        function vis() {document.getElementById("newPassword").style.visibility = "";}
        function vis2() {document.getElementById("newUsername").style.visibility = "";}
        function vis3() {document.getElementById("newName").style.visibility = "";}
        function vis7() {document.getElementById("confirmPassword").style.visibility = ""}
        document.getElementById("signupbutton").style.visibility = "";
        setTimeout(vis7,100);
        setTimeout(vis,200);
        setTimeout(vis2,300);
        setTimeout(vis3,400);
        }
    else if (element1.style.visibility == "hidden") {
        console.log("break 2");
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

console.log(document.getElementById("title").innerHTML);
console.log(document.getElementById("title").style.visibility);
console.log(document.getElementById("title").style.display);