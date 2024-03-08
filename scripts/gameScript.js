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
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
}

function startGame() {
    theThing = new character(50, 50, "resources/bananacat.png", (window.innerWidth/2)-25, (window.innerHeight/2)-25);
    introBox = new staticObject(100,50,"About Me",(window.innerWidth/2)-50, (window.innerHeight/2)-300);
    projects = new staticObject(100,50,"My Projects",(window.innerWidth/2)+300, (window.innerHeight/2)-25);
    myGameArea.start();
    myGameArea.canvas.onclick = function (e){
        move(e);
    }
}