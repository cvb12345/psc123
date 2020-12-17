<reference path="../lib/p5.global-mode.d.ts"></reference>

function setup()
{
    createCanvas(800,600);

    textSize(24);
}

function draw()
{
    background(96,96,96);

    stroke( 255,0,0 );

    line(0, mouseY, windowWidth, mouseY);
    textSize(18);
    text("(" + mouseX + ")", 4,mouseY - 8);

    stroke(0, 255, 0);

    line(mouseX, 0, mouseX, windowHeight);
    extSize(18);
    text("(" + mouseY + ")", mouseX + 8,24);
}