var globalZ = 5

function hideHome(){
    var target = document.getElementById("main")
    target.hidden = true
}

function showHome(){
    var target = document.getElementById("main")
    target.hidden = false
    target.style.zIndex = globalZ.toString()
    globalZ = globalZ + 1
}

function hideCookies(){
  var target = document.getElementById("cookies")
  target.hidden = true
}

function showCookies(){
  var target = document.getElementById("cookies")
  target.hidden = false
  target.style.zIndex = globalZ.toString()
  globalZ = globalZ + 1
}

function hideUpdates(){
    var target = document.getElementById("updates")
    target.hidden = true
}

function showUpdates(){
    var target = document.getElementById("updates")
    target.hidden = false
    target.style.zIndex = globalZ.toString()
    globalZ = globalZ + 1
}

function hideAbout(){
    var target = document.getElementById("about")
    target.hidden = true
}

function showAbout(){
    var target = document.getElementById("about")
    if (target.hidden == true){
        initAbout()
    }
    target.hidden = false
    target.style.zIndex = globalZ.toString()
    globalZ = globalZ + 1
}

function hideArcade(){
  var target = document.getElementById("arcade")
  target.hidden = true
}

function showArcade(){
  var target = document.getElementById("arcade")
  target.hidden = false
  target.style.zIndex = globalZ.toString()
  globalZ = globalZ + 1
}

function hideContact(){
  var target = document.getElementById("contact")
  target.hidden = true
}

function showContact(){
  var target = document.getElementById("contact")
  target.hidden = false
  target.style.zIndex = globalZ.toString()
  globalZ = globalZ + 1
}

function setTime(){
    var target = document.getElementById("clockText")
    const d = new Date();
    const hoursAndMinutes = d.toLocaleTimeString('default', {hour: 'numeric',minute: '2-digit',});
    target.innerHTML = hoursAndMinutes
}

function initAbout(){
    let lines = ["Aidan is a artist, horticulturist, and game designer standing on each other's shoulders and wearing the clothes of a computer scientist.",
                "Aidan is a computer scientist who wants to be doing anything but computer science.",
                "When the universe was creating Aidan, it threw a dart at the dart board of life paths. It missed, tore through a poorly cropped RedBubble print of 'Nighthawks', and stuck in the 'J' key of a Commodore 64. They're now a computer scientist.",
                "Aidan is a computer scientist who accidentally won an award for creating a hacking tool while they were just trying to prank their friends.",
                "Aidan is a computer scientist who still thinks MSDos is a pretty nifty OS.",
                "Aidan is an accidental computer scientist.",
                "Aidan is a computer scientist who isn't wholly convinced the assembly language is real.",
                "Aidan is a computer scientist who has read far too much Douglas Adams.",
                "Aidan is a computer scientist who misspelled scientist as 'schientist' 5 times while making this site.",
                "Aidan is a computer scientist who once published a game that had 3 separate misspellings of the word 'remember' in.",
                "Aidan is too afraid to be an artist, so they disguise themself as a computer scientist and call it a day.",
                "Aidan is a nerd with far too much free time.",
                "Aidan is a computer scientist who once read a satirical research paper about making the worst hard drive possible and has since made that their entire design philosophy.",
                "Aidan is a computer scientist who once did surgery on themself to put a microchip in their hand. They also have 7 tattoos and are afraid of getting shots.",
                "Aidan is a computer scientist who once played the 1985 arcade game 'Gauntlet' with their dad and hasn't stepped away from the screen since.",
                "Aidan isn't fully sure what to call themself, but computer scientist sounds pretty good.",
                "Aidan is a computer scientist who if they hear the joke 'You're nonbinary? Well how can you study computers then?!' one more time they will detonate.",
                "Aidan is a computer scientist who wants to get a degree only to have the skills to build their own Wheatly core.",
                "Aidan is a computer scientist who thinks 1993's 'Doom' is the peak of game design.",
                "Aidan is a computer scientist who falls in love too easily.",
                "Aidan is a computer scientist who once had their entire garden eaten by a single deer.",
                "Aidan is a computer scientist who once bought and repaired a Commodore 64 only to find out copying Basic code from a book is very, very tedious.",
                "Aidan is a computer scientist who writes code like programming is putting together an Ikea flatpack.",
                "Aidan is a computer scientist who has watched too much MacGyver.", 
                "Aidan is a computer scientist who once went to class for the first time on the day of their midterm (and nailed it).",
                "Aidan is a computer scientist who once read the entirety of 'The Anarchist Cookbook' (it's pretty boring).",
                "Aidan is a computer scientist who unironically wears a Casio Calculator Watch.",
                "Aidan is a computer scientist who vows to never make AI 'art'.",
                "Aidan is a computer scientist who is either colorblind or doesn't understand the color green on a fundamental level and either option scares them.",
                "Aidan is a computer scientist who is horrified of spiders.",
                "Aidan is a computer scientist who can see sound.",
                "Aidan is a computer scientist who everyone assumes is really good at chess for some reason but secretly doesn't understand chess. Not in the slightest. Their ELO rating after a few games is worse than a bot's who makes random moves.",
                "Aidan is a computer scientist who forgot what cats were after getting their wisdom teeth out. Rediscovering their cat was wild.",
                "Aidan is a computer scientist who heard Cave Johnson's Lemon Rant for Portal 2 at a too young age. It became deeply lodged in their psyche and explains why they are the way they are.",
                "Aidan is a computer scientist who thinks Who's On First is the peak of all comedy.",
                "Aidan is a computer scientist who thinks Lisp/Scheme/Racket should be classified as an esolang.",
                "Aidan is a computer scientist who would be the first to die in a horror movie.",
                "Aidan is a computer scientist who understands they really shouldn't try to build a particle accelerator in their bedroom, but that won't stop them from trying!",
                "Aidan once had dinner with the actor who played Columbo while on vacation in New Jersey. That's not true but imagine how cool that would be, right? Like the waiter leaves and he jumps out of his seat like 'Oh and one more thing... a side of steamed broccoli please.' You know Columbo would be a steamed broccoli guy. 'Ya know, I never much cared for broccoli but my wife says the veggies would be good for me.' I know this is meant to be my about me page but this is fun, right? It's like a little bonding experience for us. If this is your first time here it's not always like this but the first few lines of this page are random. You can refresh if you want something else. Or you can keep reading this and we can talk about how great Columbo is! Love that guy. Anyways Aidan is a computer scientist.",
                "Aidan is a computer scientist who is just winging it.",
                "Aidan's main goal is to confuse and disorient you in the most entertaining way possible.",
                "Aidan doesn't know what's going on.",
                "Aidan is really trying over here.",
                "Aidan is a professional in the same say that Olive Garden is 'fancy'.",
                "Aidan writes like they just smoked a joint rolled in a page from a Douglas Adams book. But not 'Hitchhiker's Guide' Adams, more of a 'Dirk Gently' Adams. And also like a mellow indica hybrid, but a lot, ya know?",
                "Aidan is a computer scientist and writer who is trapped in the JavaScript that runs this site.",
                "Aidan is a writer with horrible handwriting."];
    let target = document.getElementById("randomize");
    target.innerHTML = lines[Math.floor(Math.random()*lines.length)];
}

function initHome(){
    setTime()
    dragElement(document.getElementById("main"))
    dragElement(document.getElementById("updates"))
    dragElement(document.getElementById("about"))
    dragElement(document.getElementById("arcade"))
    dragElement(document.getElementById("contact"))
    dragElement(document.getElementById("cookies"))
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    elmnt.style.zIndex = globalZ.toString()
    globalZ = globalZ + 1
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}