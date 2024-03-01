const intro = document.getElementById('introductionCard')

var theThing;
var myObstacles = [];
var myScore;

function startGame() {
    theThing = new character(50, 50, "resources/bananacat.png", (window.innerWidth/2)-25, (window.innerHeight/2)-25);
    introBox = new staticObject(100,50,"About Me",'blue',(window.innerWidth/2)-50, (window.innerHeight/2)-300);
    projects = new staticObject(100,50,"My Projects",'blue',(window.innerWidth/2)+300, (window.innerHeight/2)-25);
    myGameArea.start();
    myGameArea.canvas.onclick = function (e){
        move(e);
    }
}

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

function character (width, height, sprite, x, y){
    this.width = width;
    this.height = height;
    this.sprite = new Image();
    this.sprite.src = sprite;
    this.x = x;
    this.y = y;
    this.motion = {x:0,y:0};
    this.movSpeed = 5;
    this.point = {x:0,y:0,moving:false};
    this.update = function () {
        // Move Character towards point
        if (this.point.moving){
            this.moveTo();
        }

        this.x += this.motion.x;
        this.y += this.motion.y;
        ctx = myGameArea.context;
        ctx.drawImage(this.sprite,
            this.x,
            this.y,
            this.width, this.height);

        if (!this.point.moving){
            this.motion.x = 0;
            this.motion.y = 0;
        }
    }
    this.moveTo = function () {
        var distance = {x:(this.point.x-this.x), y:(this.point.y-this.y)};
        // X axis movement
        if (distance.x != 0){
            if (Math.abs(distance.x) > this.movSpeed){
                this.motion.x = this.movSpeed * (distance.x > 0 ? 1 : -1);
            } else{
                this.motion.x = distance.x;
            }
        } else{
            this.motion.x = 0;
        }
        // Y axis movement
        if (distance.y != 0){
            if (Math.abs(distance.y) > this.movSpeed){
                this.motion.y = this.movSpeed * (distance.y > 0 ? 1 : -1);
            } else{
                this.motion.y = distance.y;
            }
        }else{
            this.motion.y = 0;
        }

        if (distance.x == 0 && distance.y == 0){
            this.point.moving = false;
        }
    }
    this.moveCommand = function(positionX,positionY){
        this.point.x = positionX;
        this.point.y = positionY;
        this.point.moving = true;
    }
}

function staticObject(width, height, text, bgColor, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        var fontsize = 14;
        var fontface = 'verdana';

        ctx.font = fontsize + 'px ' + fontface;
        var textWidth = ctx.measureText(text).width;
        var textHeight = fontsize * 1.286;

        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';

        ctx.fillText(text, x + ((width/2)-(textWidth/2)), y + ((height/2)-(textHeight/2)));
        ctx.strokeRect(x, y, width, height);
    }
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    this.crashWith = function(otherobj) {
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width);
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height);
      var crash = true;
      if ((mybottom < othertop) ||
      (mytop > otherbottom) ||
      (myright < otherleft) ||
      (myleft > otherright)) {
        crash = false;
      }
      return crash;
    }
  }

function updateGameArea() {
    if (introBox.crashWith(theThing)){
        if (intro.className == "inactive" || intro.className == ""){
            intro.className = "active";
        }
    } else {
        if (intro.className == "active"){
            intro.className = "inactive";
        }
    }

    if (projects.crashWith(theThing)){
        console.log("projectss");
    }

    myGameArea.clear();
    introBox.update();
    projects.update();
    theThing.update();
}

function move(e){
    theThing.moveCommand(e.clientX,e.clientY);
}