let state = 0;

let playerX = 100;
let playerY = 100;
let playerTop, playerBottom, playerLeft, playerRight;

function setup() {
    createCanvas(1000,500);
    background(0)
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER);
    textStyle(BOLD);
}

function draw() {
    background(0);

    // first state - title screen
    if (state == 0) {
        fill(54, 145, 78);
        rect(500, 175, 500, 150);
        fill(255);
        textSize(20);
        text("WELCOME TO THE GAME", 500, 175);

        // press the A key for EASY, B for MEDIUM, C for HARD
        fill(224, 81, 105);
        rect(500, 325, 300, 100);
        fill(0);
        textSize(15);
        text("PRESS THE A KEY FOR EASY MAZE", 500, 325);
        if (keyIsDown(65)) {
            state++;
        }
    }

    // second state - easy maze
    if (state == 1) {
        background(0);
        // creating player & movement
        fill(255,0,0);
        rect(playerX, playerY, 50,50);

        if (keyIsDown(LEFT_ARROW)) {
            playerX -=3;
        }
        
        if (keyIsDown(RIGHT_ARROW)) {
            playerX += 3;
        }

        if (keyIsDown(UP_ARROW)) {
            playerY -= 3;
        }

        if (keyIsDown(DOWN_ARROW)) {
            playerY +=3;
        }
    }
}
