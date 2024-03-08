const intro = document.getElementById('introductionCard')

var theThing;
var myObstacles = [];
var myScore;

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea,20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.frameNo += 1;
    }
    
}

function startGame() {
    myGameArea.start();
    theThing = new character(50, 50, (window.innerWidth/2)-25, (window.innerHeight/2)-25, "resources/bananacat.png",409,403,409,403,myGameArea);
    introBox = new staticObject(100,50,"About Me",(window.innerWidth/2)-50, (window.innerHeight/2)-300);
    projects = new staticObject(100,50,"My Projects",(window.innerWidth/2)+300, (window.innerHeight/2)-25);
    mrDash = new animatedObject(30,45, (window.innerWidth/2)+300, (window.innerHeight/2)-100, "resources/MrDash20x30.png",40,30,20,30,myGameArea,30);
    myGameArea.canvas.onclick = function (e){
        move(e);
    }
}

function updateGameArea() {
    if (crashCheck(theThing,introBox)){
        if (intro.className == "inactive" || intro.className == ""){
            intro.className = "active";
        }
    } else {
        if (intro.className == "active"){
            intro.className = "inactive";
        }
    }

    if (crashCheck(theThing,projects)){
        console.log("projectss");
    }


    myGameArea.clear();
    introBox.update();
    projects.update();
    theThing.update();
    mrDash.update();
}

function move(e){
    theThing.moveCommand(e.clientX,e.clientY);
}