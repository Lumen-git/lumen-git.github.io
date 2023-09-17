// --------------- On load ---------------

function intro(){
    typeWriter("O what made fatuous sunbeams toil / To break earth's sleep at all?", "story", "wowen", "italic")
    setTimeout(function(){inverseTypeWriter("wowen")},5000)
    setTimeout(function(){typeWriter("Futility", "story", "helloworld")}, 5200)
    setTimeout(function(){typeWriter("A game by lumen", "story", "me")}, 6100)
    setTimeout(function(){inverseTypeWriter("helloworld")}, 9100)
    setTimeout(function(){inverseTypeWriter("me")}, 9600)
    setTimeout(function(){init()}, 12200)
}

// --------------- The game bits ---------------

function storyController(trigger){ //MOAS - Mother Of All Switches
    switch(true){
        case (trigger == "think" && thinkClicks == 1):
            postStory("*I never understood the phrase 'I think, therefore I am'. If I zone out in class, do I cease to exist? Can trees not exist because they don't think? I hit a tree while on my bike when I was younger. I can tell you with certainty they exist.")
            break;
        case (trigger == "think" && thinkClicks == 2):
            changeStates("You are");
            break;
        case (trigger == "think" && thinkClicks == 4):
            postStory("*I Googled it while you were busy thinking. It means philosophers are pretentious asshats.");
            break;
        case (trigger == "think" && thinkClicks == 6):
            postStory("*You've had 6 thoughts now. Congrats on existing. I'll teach you something new when you get to 10.");
            document.getElementById("ideaCount").style.visibility="visible";
            break;
        case (trigger == "think" && thinkClicks == 8):
            changeStates("You are bored");
            break;
        case (trigger == "think" && thinkClicks == 10):
            postStory("*You've been thinking for a while now. Maybe you should find some creative avenue to channel those ideas into.");
            document.getElementById("createButton").style.visibility="visible";
            document.getElementById("creativityCount").style.visibility="visible";
            break;
        case (trigger == "create" && createClicks == 1):
            postStory("Look on my Works, ye Mighty, and despair!", "italic"); //For the record, this is quoting Watchmen, not the poem ;)
            break;
        case (trigger == "create" && createClicks == 5):
            changeStates("You are an artist");
            postStory("*That's some beautiful art you've been making. Unfortunately, art alone cannot sustain you. We must yet again expand your limited existence here. I'll let you have a few more peaceful moments before things get harder.");
            break;
        case (trigger == "create" && createClicks == 9):
            document.getElementById("sleepButton").style.visibility="visible";
            document.getElementById("energyCount").style.visibility="visible";
            postStory("*Certain tasks will make you tired. Sleeping helps restore your energy.");
            break;
        case (trigger == "sleep" && sleepClicks == 2):
            changeStates("You are human");
            postStory("*You don't have a body in this universe, but I'm still going to make you do the tasks to maintain one. Food and water are vital to life.");
            document.getElementById("eatButton").style.visibility="visible";
            document.getElementById("drinkButton").style.visibility="visible";
            document.getElementById("foodCount").style.visibility="visible";
            document.getElementById("drinkCount").style.visibility="visible";
            break;
        case ((trigger == "food" && foodClicks >= 1) || (trigger == "drink" && drinkClicks >= 1) && (!metabolismVar)):
            postStory("*Over time, you will grow hungry and thirsty, and must continue to eat and drink to keep going.");
            metabolismVar = true;
            window.setInterval(function(){metabolism()},9000);
            break;
        case (((trigger == "food") || (trigger == "drink") && (foodClicks >= 10) && (drinkClicks >= 10) && (!bookmark1))):
            postStory("*In the real world, maintaining your body is a big ordeal we have to go through. Here, you just have to keep clicking a few buttons. Aren't I a nice god?");
            bookmark1 = true;
            break;
        case (((trigger == "food") || (trigger == "drink") && (foodClicks >= 14) && (drinkClicks >= 14) && (!bookmark2))):
            postStory("*On second thought, I'm not the god of this universe. I suppose I did create this, but I don't think any god used JavaScript. Maybe you could just call me the Narrator. Your story is the focus here anyways, not my creation.");
            bookmark2 = true;
            break;
        case (((trigger == "food") || (trigger == "drink")) && (foodClicks >= 20) && (drinkClicks >= 20) && (thinkClicks >= 35) && (!bookmark3)):
            postStory("*Its a strange thing, your story. I haven't even started telling you it yet, but your still here, grinding away at this simplified life, waiting for a plot point, or an ending. But in a way, so am I. I'm glad we're experiencing this together. Your universe will expand again, soon.");
            bookmark3 = true;
            jobSearch = true;
            break;
        case ((trigger == "think") && (sleepClicks >= 35) && (foodClicks >= 30) && (drinkClicks >= 30) && (jobSearch)):
            jobSearch = false
            document.getElementById("workButton").style.visibility="visible";
            document.getElementById("moneyCount").style.visibility="visible";
            postStory("*As much as we'd love to eat, sleep, and make art, the world demands we give a little of our time to someone else. At least you get paid.");
            break;
        case ((trigger == "work") && (workClicks == 1)):
            postStory("*As your universe grows, it gets harder. As is life. And yet, we carry on.");
            break;
        case ((trigger == "work") && (workClicks == 4)):
            postStory("Feel your breath course frankly below, and see life as a worthy opponent.", "italic");
            break;
        case ((trigger == "work") && (workClicks == 7)):
            changeStates("You are employee of the month");
            postStory("*Just a little longer, and I'll give you a break.");
            break;
        case ((trigger == "work") && (workClicks == 12)):
            document.getElementById("meditateButton").style.visibility="visible";
            document.getElementById("joyCount").style.visibility="visible";
            postStory("*I've never been big on meditation, but maybe you'll find peace in it.");
            break;
        case ((trigger == "meditate") && (meditateClicks == 2)):
            postStory("*I can't sit in silence. There's something I hate about it. I find it best to drown out my racing thoughts with music.");
            break;
        case ((trigger == "meditate") && (meditateClicks == 6)):
            changeStates("You are zen");
            postStory("*Is that still meditation? Blasting Sir Sly and Gang of Youths while laying in bed and taking edibles? ");
            break;
        case ((trigger == "meditate") && (meditateClicks == 10)):
            postStory("*Its like what the Dali method of art says. Don't try to come up with ideas, but put yourself in the position to receive ideas. That's what meditation means for me. Nothing about peace or silence."); //I learned about this from game grumps of all things thanks arin
            break;
        case ((trigger == "meditate") && (meditateClicks == 12)):
            postStory("*Maybe my mind just runs too fast to ever be quiet.");
            break;
        case ((trigger == "meditate") && (meditateClicks == 14)):
            postStory("*But enough about me. I don't matter in this universe. How's life going?");
            break;
        case ((trigger == "meditate") && (meditateClicks == 17)):
            postStory("Tell the panic it can wait, even though inside my brain it feels like doomsday.", "italic");
            break;
        case ((trigger == "meditate") && (meditateClicks == 20)):
            postStory("*Idle hands are the devil's best friend. I'm going to introduce a hobby for you. It can be whatever you want. Use that creativity on something you love.");
            document.getElementById("hobbyButton").style.visibility="visible";
            document.getElementById("motivationCount").style.visibility="visible";
            break;
        case ((trigger == "hobby") && (hobbyClicks == 1)):
            postStory("*Take some time for yourself. It'll help you swallow bitter pills later.");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 3)):
            changeStates("You are doing what you love");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 15)):
            changeStates("You are growing concerned");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 25)):
            postStory("*Its been a while since we've talked. For all you know, I could have abandoned this universe, leaving you without that promised story. Without any closure. But you decided to keep going. Thank you for trusting me.");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 27)):
            postStory("*Expanding you universe again. Remember, these are just buttons for you. And a select few at that. It might be a grind making progress here, and I can't make any promise that its worth it. But that's life.");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 29)):
            postStory("That's life. That's what all the people say. You're riding high in April, shot down in May.", "italic");
            document.getElementById("classButton").style.visibility="visible";
            break;
        case ((trigger == "class") && (classClicks == 1)):
            postStory("*Of all the things life has to offer, going to class is the last thing I'm giving you in this prelude. It sucks, and you can thank me later.");
            break;
        case ((trigger == "class") && (classClicks == 3)):
            wipeSlate();
            postStory("And for now, this is the end. If you're seeing this, this is the end of the test demo of Futility. Thank you for playing.", "bold");
            break;
    }
}

function init(){
    document.getElementById("mainStatus").style.visibility="visible";
    setTimeout(function(){document.getElementById("thinkButton").style.visibility="visible";}, 500);
}

function metabolism(){
    if (food > 0){
        food--;
    }
    if (drink > 0){
        drink--;
    }
    document.getElementById("foodCount").innerHTML = "Food: " + food;
    document.getElementById("drinkCount").innerHTML = "Drink: " + drink;
}

// --------------- Button Bits and Bobs ---------------

function thinkClick(){
    if (!thinking){
        thinking = true;
        timer(5, "thinkBar", thinkUpdate)
    }
}

function thinkUpdate(){
    thinking = false;
    //console.log("yippie!")
    idea++;
    thinkClicks++;
    document.getElementById("ideaCount").innerHTML = "Ideas: " + idea;
    storyController("think");
}

function createClick(){
    if (!creating && idea >= 1){
        creating = true;
        timer(5, "createBar", createUpdate);
    }
}

function createUpdate(){
    creating = false;
    creativity++;
    idea--;
    createClicks++;
    document.getElementById("creativityCount").innerHTML = "Creativity: " + creativity;
    document.getElementById("ideaCount").innerHTML = "Ideas: " + idea;
    storyController("create");
}

function sleepClick(){
    if (!sleeping){
        sleeping = true;
        timer(5, "sleepBar", sleepUpdate);
    }
}

function sleepUpdate(){
    sleeping = false;
    energy++;
    sleepClicks++;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    storyController("sleep");
}

function eatClick(){
    if (!eating){
        eating = true;
        timer(5, "eatBar", eatUpdate);
    }
}

function drinkClick(){
    if (!drinking){
        drinking = true;
        timer(5, "drinkBar", drinkUpdate);
    }
}

function eatUpdate(){
    eating = false;
    food++;
    foodClicks++;
    document.getElementById("foodCount").innerHTML = "Food: " + food;
    storyController("eat");
}

function drinkUpdate(){
    drinking = false;
    drink++;
    drinkClicks++;
    document.getElementById("drinkCount").innerHTML = "Drink: " + drink;
    storyController("drink");
}

function workClick(){
    if ((!working) && (energy >= 2) && (food > 0) && (drink > 0)){
        working = true;
        timer(7, "workBar", workUpdate);
    }
}

function workUpdate(){
    working = false;
    money++;
    workClicks++;
    energy -= 2;
    document.getElementById("moneyCount").innerHTML = "Money: " + money;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    storyController("work");
}

function meditateClick(){
    if (!meditating){
        meditating = true;
        timer(7, "meditateBar", meditateUpdate);
    }
}

function meditateUpdate(){
    meditating = false;
    energy++;
    creativity++;
    joy++;
    meditateClicks++;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("creativityCount").innerHTML = "Creativity: " + creativity;
    document.getElementById("joyCount").innerHTML = "Joy: " + joy;
    storyController("meditate");
}

function hobbyClick(){
    if (!doingHobby && (energy > 0) && (creativity > 0)){
        doingHobby = true;
        timer(7, "hobbyBar", hobbyUpdate);
    }
}

function hobbyUpdate(){
    doingHobby = false;
    energy--;
    creativity--;
    motivation++;
    hobbyClicks++;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("creativityCount").innerHTML = "Creativity: " + creativity;
    document.getElementById("motivationCount").innerHTML = "Motivation: " + motivation;
    storyController("hobby");
}

function classClick(){
    if (!inClass && (energy >= 2) && (motivation >= 1) && (joy >= classJoy)){
        inClass = true;
        timer(14, "classBar", classUpdate)
    }
}

function classUpdate(){
    inClass = false;
    classClicks++;
    energy -= 2;
    motivation--;
    joy -= classJoy;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("motivationCount").innerHTML = "Motivation: " + motivation;
    document.getElementById("joyCount").innerHTML = "Joy: " + joy;
    storyController("class");
}


// --------------- Utility functions ---------------

function alertBlink(id){
    var blinky = document.getElementById(id);
    blinky.style.backgroundColor = "#dedede";
    setTimeout(function(){blinky.style.backgroundColor = "#ffffff";},200);
    setTimeout(function(){blinky.style.backgroundColor = "#dedede";},400);
    setTimeout(function(){blinky.style.backgroundColor = "#ffffff";},600);
    setTimeout(function(){blinky.style.backgroundColor = "#dedede";},800);
    setTimeout(function(){blinky.style.backgroundColor = "#ffffff";},1000);
}

function wipeSlate(){
    for (var i = universalPaperclip - 1; i > 0; i--){
        inverseTypeWriter(i.toString(), 15);
    }
}

function changeStates(newState){
    var status = document.getElementById("mainStatus");
    status.innerHTML = newState;
}

var universalPaperclip = 1;

function postStory(text, groovin = null){
    alertBlink("story");
    typeWriter(text, "story", universalPaperclip.toString(), groovin);
    universalPaperclip++;
}

function timerReset(target){
    target.innerHTML = "<-------------------->"
}

function timer(delay, targetSpan, toDo, passingBy = 0){
    var updatingSpan = document.getElementById(targetSpan);
    updatingSpan.innerHTML = loadingBar(passingBy, delay);
    if (passingBy == delay){
        setTimeout(function(){toDo(); timerReset(updatingSpan);}, 1000)
    } else {
        setTimeout(function(){timer(delay, targetSpan, toDo, passingBy + 1)}, 1000);    //Holy shit recursion is helpful outside of classes?!?!
    }
}

function typeWriter(txt, targetID, childName, groovin) {
    let targetParent = document.getElementById(targetID)
    let modLine
    if (document.getElementById(childName) == null){
        modLine = document.createElement("p")
        modLine.id = childName
        targetParent.append(modLine)
    } else {
        modLine = document.getElementById(childName)
    }
    if (groovin){
        //I'm worried style is a protected variable name so were going with groovin
        if (groovin == "bold"){
            modLine.style.fontWeight = groovin
        } else {
            modLine.style.fontStyle = groovin   
        }
    }
    targetParent.scrollTop = targetParent.scrollHeight
    if (txt.length != 0) {
        modLine.innerHTML += txt.charAt(0);
        if ((txt.charAt(0) == ".") || (txt.charAt(0) == "?")){
            setTimeout(function(){typeWriter(txt.slice(1, txt.length), targetID, childName)}, 250);
        } else {
            setTimeout(function(){typeWriter(txt.slice(1, txt.length), targetID, childName)}, 40);
        }
    }
}

function inverseTypeWriter(targetID, speed = 50){
    let target = document.getElementById(targetID)
    let currentText = target.innerHTML
    let tempText
    if (currentText.length != 0){
        tempText = currentText.slice(1, currentText.length) 
        target.innerHTML = tempText
        setTimeout(function(){inverseTypeWriter(targetID)},speed)
    } else {
        target.remove()
    }
}

function loadingBar(seconds, max){
    // <-------------------->
    let progress = Math.floor((seconds / max) * 20);
    let toGo = 20 - progress
    return "<" + "#".repeat(progress) + "-".repeat(toGo) + ">"
}

// ------------ Variables -------------

var idea = 0;
var creativity = 0;
var energy = 0;
var food = 0;
var drink = 0;
var money = 0;
var joy = 0;
var motivation = 0;

var thinkClicks = 0;
var createClicks = 0;
var sleepClicks = 0;
var foodClicks = 0;
var drinkClicks = 0;
var workClicks = 0;
var meditateClicks = 0;
var hobbyClicks = 0;
var classClicks = 0;
//var dateClicks = 0;

var thinking = false;
var creating = false;
var sleeping = false;
var eating = false;
var drinking = false;
var working = false;
var meditating = false;
var doingHobby = false;
var inClass = false;
//var onDate = false;

var metabolismVar = false;
var jobSearch = false;
//var inLove = false;
//var carryingOn = false;

var bookmark1 = false;
var bookmark2 = false;
var bookmark3 = false;

var classJoy = 1;