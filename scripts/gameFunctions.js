function transform(width, height, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.motion = {x:0,y:0};
    this.update = function () {
        this.x += this.motion.x;
        this.y += this.motion.y;
    }
    this.move = function (x,y) {
        this.motion.y = y;
        this.motion.x = x;
    }
    this.stop = function (){
        this.motion.y = 0;
        this.motion.x = 0;
    }
}

function spriteSheet(sprite, width, height, context,imgW,imgH){
    this.context = context;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = sprite;
    this.frames = [[]];

    var index = 0;
    for(y=0;y<imgH;y+=height){
        for(x=0;x<imgW;x+=width){
            this.frames[index].push({x:x,y:y});
        }
        index += 1;
    }

    console.log(this.frames);

    this.getFrameLengthOfIndex = function (i){
        return this.frames[i].length;
    }
    this.drawSprite = function (frameNumber,animIndex,x,y,width,height){
        this.context.drawImage(this.img,this.frames[animIndex][frameNumber].x,this.frames[animIndex][frameNumber].y,this.width,this.height,x,y,width,height);
    }
}


function crashCheck(mainObject,otherobj) {
    var myleft = mainObject.transform.x;
    var myright = mainObject.transform.x + (mainObject.transform.width);
    var mytop = mainObject.transform.y;
    var mybottom = mainObject.transform.y + (mainObject.transform.height);
    var otherleft = otherobj.transform.x;
    var otherright = otherobj.transform.x + (otherobj.transform.width);
    var othertop = otherobj.transform.y;
    var otherbottom = otherobj.transform.y + (otherobj.transform.height);
    var crash = true;
    if ((mybottom < othertop) ||
    (mytop > otherbottom) ||
    (myright < otherleft) ||
    (myleft > otherright)) {
      crash = false;
    }
    return crash;
}

// spriteWidth and spriteHeight is size of each frame in spritesheet
function character (width, height, x, y, sprite,imgW,imgH, spriteWidth, spriteHeight,area){
    // Extended functions
    this.transform = new transform(width, height, x, y);
    this.sprite = new spriteSheet(sprite, spriteWidth, spriteHeight, area.context,imgW,imgH);
    this.movSpeed = 5;
    this.point = {x:0,y:0,moving:false};
    this.update = function () {
        // Move Character towards point
        if (this.point.moving){
            this.moveTo();
        }

        this.transform.update();

        this.sprite.drawSprite(0,0,this.transform.x,this.transform.y,this.transform.width,this.transform.height)

        if (!this.point.moving){
            this.transform.stop();
        }
    }
    this.moveTo = function () {
        var distance = {x:(this.point.x-this.transform.x), y:(this.point.y-this.transform.y)};
        // X axis movement
        if (distance.x != 0){
            if (Math.abs(distance.x) > this.movSpeed){
                motionX = this.movSpeed * (distance.x > 0 ? 1 : -1);
            } else{
                motionX = distance.x;
            }
        } else{
            motionX = 0;
        }
        // Y axis movement
        if (distance.y != 0){
            if (Math.abs(distance.y) > this.movSpeed){
                motionY = this.movSpeed * (distance.y > 0 ? 1 : -1);
            } else{
                motionY = distance.y;
            }
        }else{
            motionY = 0;
        }

        this.transform.move(motionX,motionY);

        if (distance.x == 0 && distance.y == 0){
            this.point.moving = false;
        }
    }
    this.moveCommand = function(positionX,positionY){
        this.point.x = positionX - (this.transform.width/2);
        this.point.y = positionY - (this.transform.height/2);
        this.point.moving = true;
    }
}

function staticObject(width, height, text, x, y) {
    this.transform = new transform(width, height, x, y);
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
  }

  // Static Animated Object that only has 1 animation index (one row of spritesheet animation)
  function animatedObject(width, height, x, y, sprite,imgW,imgH, spriteWidth, spriteHeight,area,frameInterval){
    // Extended functions
    this.transform = new transform(width, height, x, y);
    this.sprite = new spriteSheet(sprite, spriteWidth, spriteHeight, area.context,imgW,imgH);
    this.animFrame = 0;
    this.update = function () {
        this.transform.update();
        // Do this every 10 frames
        if (area.frameNo % frameInterval == 0){
            this.animFrame += 1;
            if (this.animFrame > this.sprite.getFrameLengthOfIndex(0)-1){
                this.animFrame = 0;
            }
        }
        this.sprite.drawSprite(this.animFrame,0,this.transform.x,this.transform.y,this.transform.width,this.transform.height)
    }
  }