let hard_btn = document.querySelector('.hard');
let easy_btn = document.querySelector('.easy');
let hard_choice = document.querySelector('.hard-choice');
let playbtn = document.querySelector('.play');
let colorbox = document.querySelectorAll('.box');
let winner = document.querySelector('.winner');
let newcolor = document.querySelector('.play');
let pickedColor;
let numOfBox = 6;

//returns random rgb value
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//returns an array of random colors depending on no of boxes
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
let colorsArr = generateRandomColors(numOfBox);

//on page load
function start(){
    colorbox.forEach(box=>{
        generateRandomColors(numOfBox);
        colorsArr = generateRandomColors(numOfBox);
        rgbtext(colorsArr, numOfBox);
        pickedColor = rgbtext(colorsArr, numOfBox);
        let i = 0;
        colorbox.forEach(box => {
            box.style.backgroundColor = colorsArr[i];
            i++;
        });
    });
}

start();

// retunrs a random rgb from the colorsArr
function rgbtext(arr, num) {
    let randomNum = Math.floor(Math.random() * num);
    // console.log(randomNum);
    winner.textContent = `${arr[randomNum]}`;
    return winner.textContent;
}


//When new colors button is clicked
function colors() {
    newcolor.addEventListener('click', () => {
        generateRandomColors(numOfBox);
        colorsArr = generateRandomColors(numOfBox);
        rgbtext(colorsArr, numOfBox);
        pickedColor = rgbtext(colorsArr, numOfBox);
        let i = 0;
        colorbox.forEach(box => {
            box.style.backgroundColor = colorsArr[i];
            i++;
        });
    });
}
colors();

function playagain() {
    if (newcolor.textContent == 'New colors') {
        newcolor.textContent = 'Play Again?';
    }
}

//guess the right color
function guess() {
    colorbox.forEach(box => {
        box.addEventListener('click', () => {
            playagain();
            if (box.style.backgroundColor == pickedColor) {
                newcolor.textContent = 'New colors';
                colorbox.forEach(box => {
                    box.style.backgroundColor = `${pickedColor}`;
                });
            } else {
                box.style.backgroundColor = 'black';
            }
        });
    });
}

guess();

hard_btn.addEventListener('click', () => {
    hard_choice.style.display = 'flex';
    numOfBox = 6;
    rgbtext(colorsArr, numOfBox);
    pickedColor = rgbtext(colorsArr, numOfBox);
    let i = 0;
    colorbox.forEach(box => {
        box.style.backgroundColor = colorsArr[i];
        i++;
    });
});

easy_btn.addEventListener('click', () => {
    easy_btn.classList.add = 'selected';
    hard_choice.style.display = 'none';
    numOfBox = 3;
    rgbtext(colorsArr, numOfBox);
    pickedColor = rgbtext(colorsArr, numOfBox);
    let i = 0;
    colorbox.forEach(box => {
        box.style.backgroundColor = colorsArr[i];
        i++;
    });
});













