/* This is the brick section */

var min = -getWidth() / 2;
var max = getHeight() / 2;


function main() {
    //set up and move to starting position
    wrap(false);

    goto(min, min);

    //get numver of bricks to draw from user
    numSquares = prompt("number of bricks: ");

    //calculate the side length
    
    sideLength = getWidth() / numSquares;

    for (var i = 0; i < numSquares; i++) {
        brickBlock(sideLength);
        strafe(sideLength);
    }

    drawCloud(-150, 150);
    drawQuestionMark(150, 130);

}
function drawCloud(x, y) {
    goto(x, y);
    drawQuarterCircle(2, 0.5, 90);
    drawQuarterCircle(2, 0.5, 0);
    left(90);
    drawQuarterCircle(2, 0.5, 90);
    right(90);
    drawQuarterCircle(1, 0.25, 90)
    right(90);
    forward(144);
    drawQuarterCircle(1, 0.25, 90);
    right(90);
    hideTurtle();
}
function rectangle(height, width) {
    for (var i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            forward(height);
        }
        else {
            forward(width);
        }
        right(90);
    }
}

function brickBlock(sideLength) {

    brickRow(sideLength, 2)
    penup();
    forward(sideLength / 3)
    pendown();
    brickRow(sideLength, 3)
    penup();
    forward(sideLength / 3)
    pendown();
    brickRow(sideLength, 2)
    penup()
    left(180);
    forward(sideLength * 2 / 3)
    left(180);


}

function brickRow(sideLength, numBricks) {
    if (numBricks == 2) {
        rectangle(sideLength / 3, sideLength / 2);
        strafe(sideLength / 2)
        rectangle(sideLength / 3, sideLength / 2);
        strafe(-sideLength / 2)
    }

    if (numBricks == 3) {
        penup();
        forward(sideLength / 3);
        pendown();
        right(90);
        forward(sideLength / 4);
        right(90)
        forward(sideLength / 3);
        right(90);
        forward(sideLength / 4);
        right(90);
        strafe(sideLength / 4)
        rectangle(sideLength / 3, sideLength / 2);
        strafe(sideLength / 2)

        forward(sideLength / 3);
        right(90);
        forward(sideLength / 4);
        right(90)
        penup();
        forward(sideLength / 3);
        pendown();
        right(90);
        forward(sideLength / 4);
        right(90);


        strafe(-sideLength * 3 / 4);

    }

}


function strafe(distance) {
    penup();
    if (distance < 0) {
        left(90);
        forward(Math.abs(distance));
        right(90);
    }
    else {
        right(90);
        forward(Math.abs(distance));
        left(90);
    }
    pendown();

}


/* end of brick section */

/* This is the green chimney section */

function green()
{
    goto(25, -250);
    colour(78,188,0, 1);
    width(20);
    forward(50);
    right(90);
    forward(20);
    left(180);
    forward(40);
 }



/* End of chimney section */

function drawQuarterCircle(count, size, angle) {
    for (var i = 0; i < count; i++) {
        for (var n = 0; n < 90; n++) {
            forward(size);
            right(1);
        }
        left(angle);
    }
}

