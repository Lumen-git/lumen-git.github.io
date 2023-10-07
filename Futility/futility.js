//Hello welcome to code happy to have you here

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
            postStory(">I never understood the phrase 'I think, therefore I am'. If I zone out in class, do I cease to exist? Can trees not exist because they don't think? I hit a tree while on my bike when I was younger. I can tell you with certainty they exist.")
            break;
        case (trigger == "think" && thinkClicks == 2):
            changeStates("You are");
            break;
        case (trigger == "think" && thinkClicks == 4):
            postStory(">I Googled it while you were busy thinking. It means philosophers are pretentious asshats.");
            break;
        case (trigger == "think" && thinkClicks == 6):
            postStory(">You've had 6 thoughts now. Congrats on existing. I'll teach you something new when you get to 10.");
            document.getElementById("ideaCount").style.visibility="visible";
            break;
        case (trigger == "think" && thinkClicks == 8):
            changeStates("You are bored");
            break;
        case (trigger == "think" && thinkClicks == 10):
            postStory(">You've been thinking for a while now. Maybe you should find some creative avenue to channel those ideas into.");
            document.getElementById("createButton").style.visibility="visible";
            document.getElementById("creativityCount").style.visibility="visible";
            break;
        case (trigger == "create" && createClicks == 1):
            postStory("Look on my Works, ye Mighty, and despair!", "italic"); //For the record, this is quoting Watchmen, not the poem ;)
            break;
        case (trigger == "create" && createClicks == 5):
            changeStates("You are an artist");
            postStory(">That's some beautiful art you've been making. Unfortunately, art alone cannot sustain you. We must yet again expand your limited existence here. I'll let you have a few more peaceful moments before things get harder.");
            break;
        case (trigger == "create" && createClicks == 9):
            document.getElementById("sleepButton").style.visibility="visible";
            document.getElementById("energyCount").style.visibility="visible";
            postStory(">Certain tasks will make you tired. Sleeping helps restore your energy.");
            break;
        case (trigger == "sleep" && sleepClicks == 2):
            changeStates("You are human");
            postStory(">You don't have a body in this universe, but I'm still going to make you do the tasks to maintain one. Food and water are vital to life.");
            document.getElementById("eatButton").style.visibility="visible";
            document.getElementById("drinkButton").style.visibility="visible";
            document.getElementById("foodCount").style.visibility="visible";
            document.getElementById("drinkCount").style.visibility="visible";
            break;
        case ((trigger == "food" && foodClicks >= 1) || (trigger == "drink" && drinkClicks >= 1) && (!metabolismVar)):
            postStory(">Over time, you will grow hungry and thirsty, and must continue to eat and drink to keep going. At least I'm not making you breathe or manually beat your heart.");
            metabolismVar = true;
            window.setInterval(function(){metabolism()},9000);
            break;
        case (((trigger == "food") || (trigger == "drink") && (foodClicks >= 10) && (drinkClicks >= 10) && (!bookmark1))):
            postStory(">In the real world, maintaining your body is a big ordeal we have to go through. Here, you just have to keep clicking a few buttons. Aren't I a nice god?");
            bookmark1 = true;
            break;
        case (((trigger == "food") || (trigger == "drink") && (foodClicks >= 14) && (drinkClicks >= 14) && (!bookmark2))):
            postStory(">On second thought, I'm not the god of this universe. I suppose I did create this, but I don't think any god used JavaScript. Maybe you could just call me the Narrator. Your story is the focus here anyways, not my creation.");
            bookmark2 = true;
            break;
        case (((trigger == "food") || (trigger == "drink")) && (foodClicks >= 20) && (drinkClicks >= 20) && (thinkClicks >= 35) && (!bookmark3)):
<<<<<<< HEAD
            postStory(">It's a strange thing, your story. I haven't even started telling you it yet, but your still here, grinding away at this simplified life, waiting for a plot point, or an ending. But in a way, so am I. I'm glad we're experiencing this together. Your universe will expand again, soon.");
=======
            postStory(">It's a strange thing, your story. I haven't even started telling you it yet, but you're still here, grinding away at this simplified life, waiting for a plot point, or an ending. But in a way, so am I. I'm glad we're experiencing this together. Your universe will expand again, soon.");
>>>>>>> 4d279c605822d8240633f8476ed383e2c47eac14
            bookmark3 = true;
            jobSearch = true;
            break;
        case ((trigger == "think") && (sleepClicks >= 35) && (foodClicks >= 30) && (drinkClicks >= 30) && (jobSearch)):
            jobSearch = false
            document.getElementById("workButton").style.visibility="visible";
            document.getElementById("moneyCount").style.visibility="visible";
            postStory(">As much as we'd love to eat, sleep, and make art, the world demands we give a little of our time to someone else. At least you get paid.");
            break;
        case ((trigger == "work") && (workClicks == 1)):
            postStory(">As your universe grows, it gets harder. As is life. And yet, we carry on.");
            break;
        case ((trigger == "work") && (workClicks == 4)):
            postStory("Feel your breath course frankly below, and see life as a worthy opponent.", "italic");
            break;
        case ((trigger == "work") && (workClicks == 7)):
            changeStates("You are employee of the month");
            postStory(">Just a little longer, and I'll give you a break.");
            break;
        case ((trigger == "work") && (workClicks == 12)):
            document.getElementById("meditateButton").style.visibility="visible";
            document.getElementById("joyCount").style.visibility="visible";
            postStory(">I've never been big on meditation, but maybe you'll find peace in it.");
            break;
        case ((trigger == "meditate") && (meditateClicks == 2)):
            postStory(">I can't sit in silence. There's something I hate about it. I find it best to drown out my racing thoughts with music.");
            break;
        case ((trigger == "meditate") && (meditateClicks == 6)):
            changeStates("You are zen");
            postStory(">Is that still meditation? Blasting Sir Sly and Gang of Youths while laying in bed and taking edibles? ");
            break;
        case ((trigger == "meditate") && (meditateClicks == 12)):
            postStory(">Maybe my mind just runs too fast to ever be quiet.");
            break;
        case ((trigger == "meditate") && (meditateClicks == 14)):
            postStory(">But enough about me. I don't matter in this universe. How's life going?");
            break;
        case ((trigger == "meditate") && (meditateClicks == 17)):
            postStory("Tell the panic it can wait, even though inside my brain it feels like doomsday.", "italic");
            break;
        case ((trigger == "meditate") && (meditateClicks == 20)):
            postStory(">Idle hands are the devil's best friend. I'm going to introduce a hobby for you. It can be whatever you want. Use that creativity on something you love.");
            document.getElementById("hobbyButton").style.visibility="visible";
            document.getElementById("motivationCount").style.visibility="visible";
            break;
        case ((trigger == "hobby") && (hobbyClicks == 1)):
            postStory(">Take some time for yourself. It'll help you swallow bitter pills later.");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 3)):
            changeStates("You are doing what you love");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 15)):
            changeStates("You are growing concerned");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 25)):
            postStory(">It's been a while since we've talked. For all you know, I could have abandoned this universe, leaving you without that promised story. Without any closure. But you decided to keep going. Thank you for trusting me.");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 27)):
            postStory(">Expanding your universe again. Remember, these are just buttons for you. And a select few at that. It might be a grind making progress here, and I can't make any promise that its worth it. But that's life.");
            break;
        case ((trigger == "hobby") && (hobbyClicks == 29)):
            postStory("That's life. That's what all the people say. You're riding high in April, shot down in May.", "italic");
            document.getElementById("classButton").style.visibility="visible";
            break;
        case ((trigger == "class") && (classClicks == 1)):
            postStory(">Of all the things life has to offer, going to class is the last thing I'm giving you in this prelude. It sucks, and you can thank me later.");
            break;
        case ((trigger == "class") && (classClicks == 3)):
            changeStates("You are an undergrad")
            postStory(">It's your third day of class. You were assigned a paper.");
            break;
        case ((trigger == "class") && (classClicks == 6)):
            postStory(">Your paper is due today.");
            break;
        case ((trigger == "class") && (classClicks == 10)):
            postStory(">You go to class today. You notice a girl you haven't seen before.");
            break;
        case ((trigger == "class") && (classClicks == 13)):
            postStory(">You go to class today. You make eye contact with her as you go to your seat.");
            break;
        case ((trigger == "class") && (classClicks == 15)):
            postStory(">You go to class today. She says she likes your shirt. You got a B+ on your paper.");
            break;
        case ((trigger == "class") && (classClicks == 17)):
            postStory(">You go to class today. You stay after to talk to her.")
            setTimeout(function(){loveStart()}, 5000)
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

function dateCheck(){
    if ((totalClicks >= dateUnlockLimit) && (inLove)){
        document.getElementById("dateButtonProper").disabled = false;
    }
}

var dateCount = 0;  //0-19, 20 dates
var dateUnlockLimit = 5;

function loveStart(){
    paused = true;
    document.getElementById("thinkButtonProper").disabled = true
    document.getElementById("createButtonProper").disabled = true
    document.getElementById("sleepButtonProper").disabled = true
    document.getElementById("eatButtonProper").disabled = true
    document.getElementById("drinkButtonProper").disabled = true
    document.getElementById("workButtonProper").disabled = true
    document.getElementById("meditateButtonProper").disabled = true
    document.getElementById("hobbyButtonProper").disabled = true
    document.getElementById("classButtonProper").disabled = true
    postStory(">For a brief moment, I'll let you ignore everything else you have to do. Only one thing matters right now.")
    setTimeout(function(){
        postStory(">Don't fuck this up")
        document.getElementById("loveButton").style.visibility="visible"
        }, 6000)
}

// --------------- Button Bits and Bobs ---------------

function thinkClick(){
    if (!thinking && !carryOnDisable){
        thinking = true;
        timer(5, "thinkBar", thinkUpdate)
    }
    if (carryOnDisable){
        document.getElementById("thinkButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You don't feel like doing that right now.")
        }
        failedClicks++
    }
}

function thinkUpdate(){
    thinking = false;
    //console.log("yippie!")
    idea++;
    thinkClicks++;
    totalClicks++;
    document.getElementById("ideaCount").innerHTML = "Ideas: " + idea;
    storyController("think");
}

function createClick(){
    if (!creating && idea >= 1 && !carryOnDisable){
        creating = true;
        timer(5, "createBar", createUpdate);
    }
    if (carryOnDisable){
        document.getElementById("createButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You don't feel like doing that right now.")
        }
        failedClicks++
    }
}

function createUpdate(){
    creating = false;
    creativity++;
    idea--;
    createClicks++;
    totalClicks++;
    document.getElementById("creativityCount").innerHTML = "Creativity: " + creativity;
    document.getElementById("ideaCount").innerHTML = "Ideas: " + idea;
    storyController("create");
}

function sleepClick(){
    if (!sleeping && !carryOnDisable){
        sleeping = true;
        timer(5, "sleepBar", sleepUpdate);
    }
    if (carryOnDisable){
        document.getElementById("sleepButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You can't fall asleep.")
        }
        failedClicks++
    }
}

function sleepUpdate(){
    sleeping = false;
    energy++;
    sleepClicks++;
    totalClicks++;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    storyController("sleep");
}

function eatClick(){
    if (!eating && !carryOnDisable){
        eating = true;
        timer(5, "eatBar", eatUpdate);
    }
    if (carryOnDisable){
        document.getElementById("eatButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You don't feel like eating.")
        }
        failedClicks++
    }
}

function drinkClick(){
    if (!drinking && !carryOnDisable){
        drinking = true;
        timer(5, "drinkBar", drinkUpdate);
    }
    if (carryOnDisable){
        document.getElementById("drinkButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You don't feel like getting up to get water.")
        }
        failedClicks++
    }
}

function eatUpdate(){
    eating = false;
    food++;
    foodClicks++;
    totalClicks++;
    document.getElementById("foodCount").innerHTML = "Food: " + food;
    storyController("eat");
}

function drinkUpdate(){
    drinking = false;
    drink++;
    drinkClicks++;
    totalClicks++;
    document.getElementById("drinkCount").innerHTML = "Drink: " + drink;
    storyController("drink");
}

function workClick(){
    if ((!working) && (energy >= 2) && (food > 0) && (drink > 0) && (!carryOnDisable)){
        working = true;
        timer(7, "workBar", workUpdate);
    } else if (energy < 2){
        alertBlink("energyCount")
    } else if (food <= 0) {
        alertBlink("foodCount")
    } else if (drink <= 0){
        alertBlink("drinkCount")
    }
    if (carryOnDisable){
        document.getElementById("workButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You don't feel like going into work.")
        }
        failedClicks++
    }
}

function workUpdate(){
    working = false;
    money++;
    workClicks++;
    totalClicks++;
    energy -= 2;
    document.getElementById("moneyCount").innerHTML = "Money: " + money;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    storyController("work");
}

function meditateClick(){
    if (!meditating && !carryOnDisable){
        meditating = true;
        timer(7, "meditateBar", meditateUpdate);
    }
    if (carryOnDisable){
        document.getElementById("meditateButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You don't want to be alone with your thoughts right now.")
        }
        failedClicks++
    }
}

function meditateUpdate(){
    meditating = false;
    energy++;
    creativity++;
    joy++;
    meditateClicks++;
    totalClicks++;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("creativityCount").innerHTML = "Creativity: " + creativity;
    document.getElementById("joyCount").innerHTML = "Joy: " + joy;
    storyController("meditate");
}

function hobbyClick(){
    if (!doingHobby && (energy > 0) && (creativity > 0)  && (food > 0) && (drink > 0) && (!carryOnDisable)){
        doingHobby = true;
        timer(7, "hobbyBar", hobbyUpdate);
    } else if (energy <= 0){
        alertBlink("energyCount")
    } else if (creativity <= 0){
        alertBlink("creativityCount")
    } else if (food <= 0) {
        alertBlink("foodCount")
    } else if (drink <= 0){
        alertBlink("drinkCount")
    }
    if (carryOnDisable){
        document.getElementById("hobbyButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You don't have the motivation right now.")
        }
        failedClicks++
    }
}

function hobbyUpdate(){
    doingHobby = false;
    energy--;
    creativity--;
    motivation++;
    hobbyClicks++;
    totalClicks++;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("creativityCount").innerHTML = "Creativity: " + creativity;
    document.getElementById("motivationCount").innerHTML = "Motivation: " + motivation;
    storyController("hobby");
}

function classClick(){
    if (!inClass && (energy >= 2) && (motivation >= 1) && (joy >= classJoy)  && (food > 0) && (drink > 0) && (!carryOnDisable)){
        inClass = true;
        timer(14, "classBar", classUpdate)
    } else if (energy < 2){
        alertBlink("energyCount")
    } else if (motivation < 1){
        alertBlink("motivationCount")
    } else if (joy < classJoy) {
        alertBlink("joyCount")
    } else if (food <= 0) {
        alertBlink("foodCount")
    } else if (drink <= 0){
        alertBlink("drinkCount")
    }
    if (carryOnDisable){
        document.getElementById("classButtonProper").disabled = true
        if (failedClicks == 0){
            postStory(">You don't feel like going to class. You wonder if she's there.")
        }
        failedClicks++
    }
}

function classUpdate(){
    inClass = false;
    classClicks++;
    energy -= 2;
    motivation--;
    joy -= classJoy;
    totalClicks++;
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("motivationCount").innerHTML = "Motivation: " + motivation;
    document.getElementById("joyCount").innerHTML = "Joy: " + joy;
    storyController("class");
}

function loveClick(){
    if (!fallingInLove){
        fallingInLove = true
        timer(30, "loveBar", loveUpdate)
    }
}

var dateWindowInt;

function loveUpdate(){
    fallingInLove = false
    setTimeout(function(){postStory(">You take her hand. She asks you to go to dinner next week.");
                          document.getElementById("loveButton").remove()}, 1000)
    setTimeout(function(){postStory("Today, of all days, see how the most dangerous thing is to love.","italic")}, 8000)
    setTimeout(function(){paused = false
        document.getElementById("thinkButtonProper").disabled = false
        document.getElementById("createButtonProper").disabled = false
        document.getElementById("sleepButtonProper").disabled = false
        document.getElementById("eatButtonProper").disabled = false
        document.getElementById("drinkButtonProper").disabled = false
        document.getElementById("workButtonProper").disabled = false
        document.getElementById("meditateButtonProper").disabled = false
        document.getElementById("hobbyButtonProper").disabled = false
        document.getElementById("classButtonProper").disabled = false
        document.getElementById("dateButton").style.visibility = "visible"
        classJoy = 0
        totalClicks = 0; //But lumen, why are you resetting this value?!?!? This is more delta clicks than real clicks. I need clicks after this point
        inLove = true;
        dateWindowInt = window.setInterval(function(){dateCheck()},100);
        changeStates("You are in love")
    }, 12000)}

function dateClick(){
    if (!onDate){
        onDate = true
        timer(15, "dateBar", dateUpdate)
    }
}

function slartybartfast(){ //What are the odds someone is going to go to the terminal and type this and accidentally find the debug system?    
    dateWindowInt = window.setInterval(function(){dateCheck()},100);
    document.getElementById("thinkButton").style.visibility = "visible"
    document.getElementById("createButton").style.visibility = "visible"
    document.getElementById("sleepButton").style.visibility = "visible"
    document.getElementById("eatButton").style.visibility = "visible"
    document.getElementById("drinkButton").style.visibility = "visible"
    document.getElementById("workButton").style.visibility = "visible"
    document.getElementById("meditateButton").style.visibility = "visible"
    document.getElementById("hobbyButton").style.visibility = "visible"
    document.getElementById("classButton").style.visibility = "visible"
    document.getElementById("loveButton").style.visibility = "visible"
    document.getElementById("dateButton").style.visibility = "visible"
    postStory("Oi! You skipped half the story!")
    idea = 1000;
    creativity = 1000;
    energy = 1000;
    food = 1000;
    drink = 1000;
    money = 1000;
    joy = 1000;
    motivation = 1000;
    thinkClicks = 100;
    createClicks = 100;
    sleepClicks = 100;
    foodClicks = 100;
    drinkClicks = 100;
    workClicks = 100;
    meditateClicks = 100;
    hobbyClicks = 100;
    classClicks = 100;
    bookmark1 = true
    bookmark2 = true
    bookmark3 = true
    inLove = true
}

function dateUpdate(){
    switch(dateCount){
        //Post story
        //Update count
        case (0):
            postStory(">You go to dinner at a small diner downtown together. There's an old jukebox in the corner. It's playing Moving Out by Billy Joel. You tell her it's one of your favorite songs.")
            totalClicks = 0;
            dateUnlockLimit = 15;
            document.getElementById("dateButtonProper").disabled = true
            classJoy = 0;
            break;
        case (1):
            totalClicks = 0;
            postStory(">You go to dinner at a fancy restaurant this time. You both decide the diner is more your style.")
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (2):
            totalClicks = 0;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (3):
            totalClicks = 0;
            postStory(">You go to the movies. You're not sure if you want popcorn. She buys the biggest size they have.")
            document.getElementById("dateButtonProper").disabled = true
            classJoy = -1
            break;
        case (4):
            totalClicks = 0;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (5):
            totalClicks = 0;
            postStory(">You go to the same diner you had your first date at. She invites you to her apartment afterwards. You make love for the first time. More importantly, you meet her cat.")
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (6):
            totalClicks = 0;
            dateUnlockLimit = 25;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (7):
            totalClicks = 0;
            postStory(">You get pizza and watch a movie at your apartment. You let her choose the pizza toppings... and the movie.")
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (8):
            totalClicks = 0;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (9):
            totalClicks = 0;
            postStory(">You go to the diner again. It starts to rain while you walk back. You insist on hurrying. She insists on dancing.")
            document.getElementById("dateButtonProper").disabled = true
            classJoy = -2
            break;
        case (10):
            totalClicks = 0;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (11):
            totalClicks = 0;
            postStory(">You have dinner at her apartment. She shows you her record collection. You see she has a new copy of The Stranger. Her cat bites your hand.")
            dateUnlockLimit = 35;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (12):
            totalClicks = 0;
            postStory(">She invites you over to play games with some friends. You bring the cat some catnip as a peace offering.")
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (13):
            totalClicks = 0;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (14):
            totalClicks = 0;
            postStory(">It's been 9 months. You're at the diner again, but it doesn't feel the same. Silently, she feels it too.")
            document.getElementById("dateButtonProper").disabled = true
            classJoy = -1;
            break;
        case (15):
            totalClicks = 0;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (16):
            totalClicks = 0;
            postStory(">You watch a movie at her apartment. Things seem quieter. The cat is sleeping on your lap.")
            dateUnlockLimit = 45;
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (17):
            totalClicks = 0;
            postStory("The writing's on the wall. It seems like forever since we've had a good day.", "italic")
            document.getElementById("dateButtonProper").disabled = true
            break;
        case (18):
            totalClicks = 0;
            postStory(">You meet at the diner. She's a little late.")
            document.getElementById("dateButtonProper").disabled = true
            classJoy = 0
            break;
        case (19):
            totalClicks = 0;
            postStory(">You're at her apartment for the last time. After talking, you decide its best to break up. You've felt this for a while, but you wonder how long she's felt the same. You say goodbye. You scratch the cat's chin. He purrs. He's wearing the collar you bought. You leave.")
            document.getElementById("dateButtonProper").disabled = true
            inLove = false
            classJoy = 4
            setTimeout(function(){document.getElementById("dateButton").remove()}, 15000)
            setTimeout(function(){beginningOfTheEnd();
                changeStates("You are heartbroken")}, 16000)
            break;
    }
    onDate = false
    dateCount++;
}

var carryOnDisable = false;
var failedClicks = 0;

function beginningOfTheEnd(){
    clearInterval(dateWindowInt)
    carryOnDisable = true
    motivation = 0
    joy = 0
    energy = Math.floor(energy/4)
    document.getElementById("energyCount").innerHTML = "Energy: " + energy;
    document.getElementById("motivationCount").innerHTML = "Motivation: " + motivation;
    document.getElementById("joyCount").innerHTML = "Joy: " + joy;
    checkFailedClicks()
}

function checkFailedClicks(){
    if (failedClicks != 9){
        setTimeout(function(){checkFailedClicks()}, 100)
    } else {
        postStory("Love in, love out. Hating you doesn't mean I love myself now.", "italic")
        setTimeout(function(){wipeSlate()}, 13000)
        setTimeout(function(){theMiddleOfTheEnd()}, 33000)
    }
}

var finalEmotions = ["You are angry", "You are sad", "You are confused", "You are heartbroken", "You are lonely", "You are crying", "You are worried"]

function emotionRotator(){
    let rand = Math.floor(Math.random() * finalEmotions.length)
    changeStates(finalEmotions[rand])
}

var rotatorInt;
var buttonsToCarryOn = ["thinkButtonProper", "createButtonProper", "sleepButtonProper", "eatButtonProper", "drinkButtonProper", "workButtonProper", "meditateButtonProper", "hobbyButtonProper", "classButtonProper"]
var moments = 0;

function theMiddleOfTheEnd(){
    rotatorInt = window.setInterval(function(){emotionRotator()},2000)
    postStory(">Hello again. I know you're upset. You're probably sad, and confused, and angry. Angry at her. Angry at me for taking you on this ride. Remember, I never said it would be worth it. But living such a life, following along with such a story, isn't that worth something?")
    setTimeout(function(){postStory(">This universe I've made for you may be small, but it's just as brutal as the real one. Life is chaotic, jumping from the highest highs to the lowest lows.")},18000)
    setTimeout(function(){postStory(">And yet, we carry on.")},28000)
    shuffleArray(buttonsToCarryOn)
    setTimeout(function(){document.getElementById("carryOnButton").style.visibility = "visible";
                            clearInterval(rotatorInt)},28000)
}

function carryOnClick(){
    carryOnDisable = false;
    if (!carryingOn){
        carryingOn = true;
        timer(30, "carryOnBar", carryOnUpdate);
    }
}

function carryOnUpdate(){
    changeStates("You are carrying on")
    document.getElementById(buttonsToCarryOn[moments]).disabled = false;
    moments++;
    carryingOn = false
    if (moments == 4){
        postStory(">Do you think you can forgive her? Yourself? Do you need to forgive me? I know I've lead you through this story, but I'll leave this one to you.")
    }
    if (moments == 5){
        postStory("I'll always struggle to think of you in a harsh way. I know that's weird but I still see you for the human beneath.", "italic")
    }
    if (moments == 9){
        document.getElementById("carryOnButton").remove()
        totalClicks = 0;
        checkFinal() 
    }
}

function checkFinal(){
    if (totalClicks <= 150){
        setTimeout(function(){checkFinal()}, 100)
    } else {
        penultimate()
    }
}

function penultimate(){
    changeStates("You are tired")
    postStory(">You're tired. And I don't mean you need to sleep, but deeply, truly tired. You've been through a lot. I'll let you rest now. Whenever you're ready")
    setTimeout(function(){document.getElementById("restButton").style.visibility = "visible"},8000);
}

function restClick(){
    changeStates("You are resting")
    document.getElementById("restButton").remove()
    wipeSlate()
    setTimeout(function(){document.getElementById("thinkButton").remove()}, 18000)
    setTimeout(function(){document.getElementById("createButton").remove()}, 16000)
    setTimeout(function(){document.getElementById("sleepButton").remove()}, 14000)
    setTimeout(function(){document.getElementById("eatButton").remove()}, 12000)
    setTimeout(function(){document.getElementById("drinkButton").remove()}, 10000)
    setTimeout(function(){document.getElementById("workButton").remove()}, 8000)
    setTimeout(function(){document.getElementById("meditateButton").remove()}, 6000)
    setTimeout(function(){document.getElementById("hobbyButton").remove()}, 4000)
    setTimeout(function(){document.getElementById("classButton").remove()}, 2000)
    setTimeout(function(){document.getElementById("ideaCount").remove()}, 18000)
    setTimeout(function(){document.getElementById("creativityCount").remove()}, 16000)
    setTimeout(function(){document.getElementById("energyCount").remove()}, 14000)
    setTimeout(function(){document.getElementById("foodCount").remove()}, 12000)
    setTimeout(function(){document.getElementById("drinkCount").remove()}, 10000)
    setTimeout(function(){document.getElementById("moneyCount").remove()}, 8000)
    setTimeout(function(){document.getElementById("joyCount").remove()}, 6000)
    setTimeout(function(){document.getElementById("motivationCount").remove()}, 4000)
    setTimeout(function(){changeStates("You are")}, 20000)
    setTimeout(function(){changeStates("You are not")}, 22000)
    setTimeout(function(){changeStates("You are human")}, 24000)
    setTimeout(function(){postStory(wildflowersAndCancer)},30000)
    setTimeout(function(){postStory("")},90000)
    setTimeout(function(){postStory("Thank you for playing Futility","italic")},90000)
    setTimeout(function(){postStory("Fin.", "italic")},95000)
}

// --------------- Utility functions ---------------

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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
    universalPaperclip = 1
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
        if (paused && (targetSpan != "loveBar")){
            setTimeout(function(){timer(delay, targetSpan, toDo, passingBy)}, 3000);   
        } else {
            setTimeout(function(){timer(delay, targetSpan, toDo, passingBy + 1)}, 1000);    //Holy shit recursion is helpful outside of classes?!?!
        }
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

var totalClicks = 0;

var thinking = false;
var creating = false;
var sleeping = false;
var eating = false;
var drinking = false;
var working = false;
var meditating = false;
var doingHobby = false;
var inClass = false;
var fallingInLove = false;
var onDate = false;

var metabolismVar = false;
var jobSearch = false;
var inLove = false;
var carryingOn = false;

var bookmark1 = false;
var bookmark2 = false;
var bookmark3 = false;

var classJoy = 1;

var paused = false;

var wildflowersAndCancer = "This too shall pass is a double edged sword. We champion it in troubling times, but hide its truth when things are good. It's equally a reminder that the storm will blow over, but the sun will also set. For better or for worse, things change. And as much as we try to extend the highs and eliminate the lows, it's an immutable truth that one cannot exist without the other. We crawl through life, and we cry, and we carry on, and we laugh. Despite the futile nature of life, our arrogant asses get out of bed every morning. We take on the day. We hate it. We love it. And as complex as our lives get, we forget everyone we see has a personal universe just as intricate. Sometimes we get glimpses into each other's universes by sharing moments, or telling stories, maybe even listening to a song together or sharing a book recommendation. And in our vast, endless, chaotic universes, we march onwards, sometimes together, sometimes alone. Because we wouldn't have it any other way. Because we couldn't have it any other way. Because the alternative is just as frightening and even more dull. Because we're afraid of tomorrow and we can't wait to see what's next. Because this, too, shall pass."

// Fin
