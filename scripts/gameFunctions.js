// List of all game objects for easy update
var gameObjects = [];
var backgroundObjects = [];

/// NOTE: Images should be relative to the size of the background image
/// Example: if 1920x1080 background image is used, the 50x50 character should be made on the basis of that backround image

function transform(width, height, x, y, area){
    this.width = width * area.scale;
    this.height = height * area.scale;
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
    for(y=0 ; y<imgH ; y+=height){
        for(x=0 ; x<imgW ; x+=width){
            this.frames[index].push({x:x,y:y});
        }
        index += 1;
        this.frames.push([]);
    }

    this.getFrameColumnsAtRow = function (row){
        return this.frames[row].length;
    }

    this.getFrameRows = function(){
        return this.frames.length;
    }

    this.getAllFrames = function (){
        return this.frames.flat();
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
    this.transform = new transform(width, height, x, y,area);
    this.sprite = new spriteSheet(sprite, spriteWidth, spriteHeight, area.context,imgW,imgH);
    this.movSpeed = 5;
    this.point = {x:0,y:0,moving:false};
    this.update = function () {
        // Move Character towards point
        if (this.point.moving){
            this.moveTo();
        }

        this.transform.update();
        
        // SEGMENT START sprite drawer 
        this.sprite.drawSprite(0,0,this.transform.x,this.transform.y,this.transform.width,this.transform.height);
        // SEGMENT END sprite drawer

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
    // Add self to game objects master list
    gameObjects.push(this);
}

// spriteWidth and spriteHeight is size of each frame in spritesheet
function NPC (width, height, x, y, sprite,imgW,imgH, spriteWidth, spriteHeight,area,behavior){
    // Extended functions
    this.transform = new transform(width, height, x, y,area);
    this.sprite = new spriteSheet(sprite, spriteWidth, spriteHeight, area.context,imgW,imgH);
    this.movSpeed = 5;
    this.point = {x:0,y:0,moving:false};
    this.update = function () {

        // behavior is a function that has an "update" function that determines how the NPC behaves
        // behavior is declared from the main gameScript.js
        behavior.update();

        // Move Character towards point
        if (this.point.moving){
            this.moveTo();
        }

        this.transform.update();

        // SEGMENT START sprite drawer 
        this.sprite.drawSprite(0,0,this.transform.x,this.transform.y,this.transform.width,this.transform.height);
        // SEGMENT END sprite drawer

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
    // Add self to game objects master list
    gameObjects.push(this);
}

function staticObject(width, height, text, x, y, area) {
    this.transform = new transform(width, height, x, y, area);
    this.update = function() {
        ctx = area.context;
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
    // Add self to game objects master list
    gameObjects.push(this);
  }

  // Static Animated Object that only has 1 animation index (one row of spritesheet animation)
  function animatedObject(width, height, x, y, sprite,imgW,imgH, spriteWidth, spriteHeight,area,frameInterval){
    // Extended functions
    this.transform = new transform(width, height, x, y,area);
    this.sprite = new spriteSheet(sprite, spriteWidth, spriteHeight, area.context,imgW,imgH);
    this.animFrame = 0;
    this.update = function () {
        this.transform.update();
        if (area.frameNo % frameInterval == 0){
            this.animFrame += 1;
            if (this.animFrame > this.sprite.getFrameColumnsAtRow(0)-1){
                this.animFrame = 0;
            }
        }
        this.sprite.drawSprite(this.animFrame,0,this.transform.x,this.transform.y,this.transform.width,this.transform.height)
    }
    // Add self to game objects master list
    gameObjects.push(this);
  }
  // Functions for setting up tiles for procedural generation
 /* 
  function tileset(width, height, sprite,imgW,imgH, spriteWidth, spriteHeight,area){
    this.tileSizeX = width;
    this.tileSizeY = height;
    this.sprite = new spriteSheet(sprite, spriteWidth, spriteHeight, area.context,imgW,imgH);
    this.totalTileRows = this.sprite.getFrameRows();
    this.myTiles = this.sprite.getAllFrames();
    this.getTotalTileColumnsatRow = function (row){
        return this.sprite.getFrameColumnsAtRow(row);
    }
    this.drawTile = function (tileNumber,x,y) {
        this.sprite.drawSprite(tileNumber.x,tileNumber.y,x,y,this.tileSizeX,this.tileSizeY)
    }
  }

  function tile(tileset, tileNumber, x, y){
    this.tileset = tileset;
    this.tileNumber = tileNumber;
    this.x = x;
    this.y = y;
    this.draw = function (){
        this.tileset.drawTile(this.tileNumber,this.x,this.y);
    }
    backgroundObjects.push(this)
  }

  function randomIntinRange(min,max){
    var result = ~~(Math.random() * (max - min) + min);
    return result;
  }

  function backgroundGrid(xSize,ySize){
    this.xSize = xSize;
    this.ySize = ySize;
    this.dict = new Object();
    this.push = function (coords,object) {
        this.dict[JSON.stringify(coords)] = object;
    }

    this.getUpOf = function (coords) {
        const targetCoords = {x:coords.x,y:coords.y-ySize};
        const returnValue = this.dict[JSON.stringify(targetCoords)];
        if (returnValue == undefined){
            return null;
        } else {
            return returnValue.tileNumber;
        }
    }

    this.getDownOf = function (coords) {
        const targetCoords = {x:coords.x,y:coords.y+ySize};
        const returnValue = this.dict[JSON.stringify(targetCoords)];
        if (returnValue == undefined){
            return null;
        } else {
            return returnValue.tileNumber;
        }
    }

    this.getLeftOf = function (coords) {
        const targetCoords = {x:coords.x-xSize,y:coords.y};
        const returnValue = this.dict[JSON.stringify(targetCoords)];
        if (returnValue == undefined){
            return null;
        } else {
            return returnValue.tileNumber;
        }
    }

    this.getRightOf = function (coords) {
        const targetCoords = {x:coords.x+xSize,y:coords.y};
        const returnValue = this.dict[JSON.stringify(targetCoords)];
        if (returnValue == undefined){
            return null;
        } else {
            return returnValue.tileNumber;
        }
    }
  }
 */
  
  function background(imgW, imgH, image, area){
    this.width = imgW;
    this.height = imgH;
    this.image = new Image();
    this.image.src = image;
    this.context = area.context;
    this.x;
    this.y;
    this.initialize = function(){
        /// Initial Sizing
        var xDiff = this.width - window.innerWidth;
        var yDiff = this.height - window.innerHeight;

        // Image is smaller than window
        if (xDiff < 0 || yDiff < 0){
            var scale = 1;
            if (xDiff < yDiff){
                scale += -1*(xDiff/this.width);
            } else {
                scale += -1*(yDiff/this.height);
            }
            area.scale = scale;
            this.width = this.width * scale;
            this.height = this.height * scale;

            // Recalculate Differences Using scaled up sizes
            xDiff = this.width - window.innerWidth;
            yDiff = this.height - window.innerHeight;
        }
        this.x = xDiff/-2;
        this.y = yDiff/-2;
    }

    this.drawBackground = function(){
        /// Draw Image with middle as anchor point, does not scale to display but instead cuts off sides
        this.context.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
  }

  function removeElementFromArray(array,element){
    var returnValue = array;
    const index = returnValue.indexOf(element);
    if (index > -1) {
        returnValue.splice(index, 1);
    }
    return returnValue;
  }