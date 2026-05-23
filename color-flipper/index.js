const body = document.getElementsByTagName("body") [0];

function setColor(color) {

    body.style.backgroundColor = color;

}

function randomColor(rdmcolor) {
const red = Math.round(Math.random() * 255);
const blue = Math.round(Math.random() * 255);
const green = Math.round(Math.random() * 255);

const colors = `rgba(${red} , ${blue} , ${green})`
    body.style.backgroundColor = colors;

}

// randomColor("colors");