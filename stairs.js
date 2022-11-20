var minX  = -getWidth()/2
var minY  =  -getHeight()/2
var maxY  =  getHeight()/2
var maxX  =  getWidth()/2
    
function main()
{
    pendown();
    wrap(false);
    goto(minX,minY);
    var numStairs = prompt("side length:");
    var sideLength = getWidth()/numStairs;

    stairs(sideLength, numStairs)

    

}


function stairs(sideLength, numStairs)
{
        for (var i = 0; i < numStairs; i++)
        {
            right(90);
            forward(sideLength);
            right(270);
            forward(sideLength);
        }

    up(sideLength);
}
