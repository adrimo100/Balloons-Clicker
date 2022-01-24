// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = ['green', "purple", "red", "blue", "green", "purple", "purple", "yellow", 
                "brown", "purple", "red", "blue", "gray", "yellow", "blue", "red", 
                "blue", "green", "pink", "purple"];

let activeBalloons = ballonsMap.length;

let ballonsCounter = {};


// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position, color) => {
    // set the color to null on the balloon position
    ballonsMap[position] = null;
    activeBalloons--;
    render();
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        //return `<div class="balloon active"></div>`; // <--- render each balloon
        if(color == null)
            return `<div class="balloon popped"></div>`;
        else
            return `<div class="balloon active" style="background: ${color}" onclick ="popBalloon(${position, color})"></div>`;
    });

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();