const intro = document.getElementById('introductionCard')

var theThing;
var myScore;
var myBackground;

// Variables for Procedural generation
/* 
var grassyTileSet;
var myGrid = new backgroundGrid(50,50);
var tileSetRules; */

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea,20);
        this.scale = 1;
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.frameNo += 1;
    }
    
}

function startGame() {
    // Instantiate and configure game area
    myGameArea.start();
    myGameArea.context.imageSmoothingEnabled = false;

    console.log("Width: "+window.innerWidth + " | Height: "+window.innerHeight)

    // Implementation of procedural generation setup
/* 
    //Background Generation
    grassyTileSet = new tileset(50,50,"resources/OpenGameArt/grassyTileset.png",256,480,32,32,myGameArea);
    tileSetRules = new grassyTileSetRules();
    for (y = 0 ; y < window.innerHeight ; y += 50){
        for(x = 0 ; x < window.innerWidth ; x += 50){
            const tileRow = randomIntinRange(0,grassyTileSet.totalTileRows-1);
            const tileCol = randomIntinRange(0,grassyTileSet.getTotalTileColumnsatRow(tileRow)-1);
            myGrid.push({x:x,y:y},new tile(grassyTileSet,{x:tileCol,y:tileRow},x,y));
        }
    } */

    // Define all game objects
    myBackground = new background(409,403,"resources/bananacat.png",myGameArea);
    myBackground.initialize();
    theThing = new character(50, 50, (window.innerWidth/2)-25, (window.innerHeight/2)-25, "resources/bananacat.png",409,403,409,403,myGameArea);
    introBox = new staticObject(100,50,"About Me",(window.innerWidth/2)-50, (window.innerHeight/2)-300,myGameArea);
    projects = new staticObject(100,50,"My Projects",(window.innerWidth/2)+300, (window.innerHeight/2)-25,myGameArea);
    mrDash = new animatedObject(30,45, (window.innerWidth/2)+300, (window.innerHeight/2)-100, "resources/MrDash20x30.png",40,30,20,30,myGameArea,30);

    // Define Input Functions
    myGameArea.canvas.onclick = function (e){
        move(e);
    }
}

function updateGameArea() {
    // Collision Check Functions
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


    // Update functions of all objects
    myGameArea.clear();

    myBackground.drawBackground();

    backgroundObjects.forEach(element => {
        element.draw();
    });
    
    gameObjects.forEach(element => {
        element.update();
    });
}

function move(e){
    theThing.moveCommand(e.clientX,e.clientY);
}


///// Start for Procedural Tile Generation

/* 
function getTileFromRules(tileset,tileRules,currentCoord){
    var allowedTiles = tileset.myTiles;
    const tileSize = {x:tileset.tileSizeX,y:tileset.tileSizeY};

    var surroundings = {};

    surroundings["down"] = myGrid.getUpOf(currentCoord);
    surroundings["up"] = myGrid.getDownOf(currentCoord);
    surroundings["left"] = myGrid.getRightOf(currentCoord);
    surroundings["right"] = myGrid.getRightOf(currentCoord);

    Object.entries(surroundings).forEach(([k,v]) => {
        // Get List of Exclusions
        var exclusions = tileRules.getExlusionsOfFor(k,v);

        // Remove each exclusion from allowed tiles
        exclusions.forEach(exclusion => {
            const index = allowedTiles.indexOf(exclusion);
            if (index > -1) {
                allowedTiles.splice(index, 1);
            }
        });
    })

    // Randomly choose from allowedTiles
    return allowedTiles[randomIntinRange(0,allowedTiles.length-1)];
}

function grassyTileSetRules(){
    this.mainDict = new Object();

    // Simple Grass
    this.mainDict['{x:0,y:0}'] = {
        up: [],
        down: [],
        left: [],
        right: []
    }

    //

    this.getExlusionsOfFor = function (direction,tileNumber){
        return this.mainDict[JSON.stringify(tileNumber)][direction];
    }
}
 */