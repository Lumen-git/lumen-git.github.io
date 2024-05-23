var stage = 0
var strangerLocation = "outside"
var state = 0
var branch = 0

var button1
var button2
var button3
var storyText

var gameCanvas

function startup(){
    button1 = document.getElementById("button1")
    button2 = document.getElementById("button2")
    button3 = document.getElementById("button3")
    storyText = document.getElementById("story")

    gameCanvas = document.getElementById("gameEnv")
}

function fadeOutEffect(target = gameCanvas){
    button1.removeAttribute("onclick")
    button2.removeAttribute("onclick")
    button3.removeAttribute("onclick")
    button1.onclick = null
    button2.onclick = null
    button3.onclick = null
    var fadeEffect = setInterval(function () {
        if (target.style.opacity > 0) {
            target.style.opacity -= 0.01
        } else {
            target.style.opacity = 0
            clearInterval(fadeEffect);
        }
    }, 10);
}

function fadeInEffect(target = gameCanvas){
    var fadeEffect = setInterval(function () {
        if (target.style.opacity < 1.0) {
            target.style.opacity =  parseFloat(target.style.opacity) + 0.01
        } else {
            target.style.opacity = 1
            if (state != 1){
                button1.onclick = button1click
                button2.onclick = letIn
                button3.onclick = button3click
            }
            clearInterval(fadeEffect);
        }
    }, 10);
}

function update(){
    fadeOutEffect()
    //Do magic
    //fadeInEffect()
    setTimeout(fadeInEffect, 3000)
}

function button1click(){
    update()
    setTimeout(storyShift, 2500)
}

function button3click(){
    stage = 12
    update()
    setTimeout(storyShift, 2500)
}

var story2
var story3

function letIn(){
    fadeOutEffect()
    setTimeout(() => {
        button1.remove()
        button2.remove()
        button3.remove()
        document.getElementById("storyBR").remove()
        storyText.innerHTML = "You let the stranger in"
        story2 = document.createElement("p")
        story2.id = "s2"
        story2.style.opacity = 0
        story3 = document.createElement("p")
        story3.id = "s3"
        story3.style.opacity = 0
        story2.innerHTML = "They rub against your legs and start to purr"
        story3.innerHTML = "You pick the stranger up and pet it"
        gameCanvas.append(story2)
        gameCanvas.append(story3)
    }, 2500)
    setTimeout(fadeInEffect, 3500)
    setTimeout(() => {
        fadeInEffect(story2)
    }, 6500)
    setTimeout(() => {
        fadeInEffect(story3)
    }, 9500)
    setTimeout(fadeOutEffect, 13500)
    setTimeout(() => {
        storyText.innerHTML = "The Stranger"
        story2.innerHTML = "By Lumen"
        story3.innerHTML = "For Sarah and the stray"
        story2.style.fontSize = "16px"
        story3.style.fontSize = "16px"
        story3.style.fontStyle = "italic"
    }, 16500);
    setTimeout(fadeInEffect, 17500)
}

function storyShift(){
    if (stage == 14){stage = 9}
    if (stage != 11){
        storyText.innerHTML = storyStageText[stage]
    }
    if (stage < 10 || stage >= 12){
        button1.innerHTML = ">" + button1StageText[stage]
    }
    if (stage == 5){
        state = 1
        button1.onclick = button1click
        button2.onclick = button3click
        button3.onclick = letIn
        button2.innerHTML = ">Lock the basement door"
        button3.innerHTML = ">Let the stranger in"
    }
    if (stage == 6 || stage == 12){
        state = 0
        button1.onclick = button1click
        button2.onclick = letIn
        button2.innerHTML = ">Let the stranger in"
        button3.remove();
    }
    if (stage != 11){
        stage++
    }
}

var storyStageText = [
    "The stranger is on the front porch",
    "The stranger is at the window",
    "The stranger is going around the house",
    "The stranger is at the back door",
    "You hear a scratching sound from the back door",
    "The stranger is investigating the basement window",
    "It's dark",
    "You hear a noise from inside",
    "You catch a glimpse of the stranger",
    "There's scratching on the basement door",
    "The scratching continues",
    "You hear nothing",
    "You hear a crashing noise from the basement",
    "The basement stairs start to creak"
]

var button1StageText = [
    "Lock the door",
    "Close the blinds",
    "Wait",
    "Close the curtains",
    "Wait",
    "Go into the basement",
    "Turn on the light",
    "Investigate the noise",
    "Leave the basement and lock the door",
    "Wait",
    "",
    "Wait",
    "Wait",
    "Wait"
]