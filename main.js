// Create game configuration object
let config =
{
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
};

let game = new Phaser.Game(config); // create main game object

// define the game settings, initially set for easy mode
game.settings =
{
    spaceshipSpeed: 3,
    fastshipSpeed: 4,
    gameTimer: 60000
};

// reserve some keyboard bindings
let keyE, keyH, keyM, keyR;
// reserve an inputPlugin binding
let mouse;

// CMPM-Rocket-Patrol-Mods
//This repo contains the files for the modded Rocket Patrol assignment.  
// Track a high score that thru across scenes and display it in the UI
// Implement the speed increase
//Create a new scrolling tile sprite for the background
//Display the time remaining (in seconds) on the screen
//Create a new spaceship type
//Implement mouse control for player movement and mouse click to fire instead of using keyboard.
