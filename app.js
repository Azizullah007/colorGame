
let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDispaly')
let messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1')
let resetBtn = document.querySelector('#reset')
let modeBtns = document.querySelectorAll('.mode')

let numOfSquares = 6
let colors = []
let pickedColor

init()

function init(){
    setupModeButtons()
    setupSquares()
    reset()
}

function setupSquares(){
    for(let i=0; i < squares.length ; i++){
        /* Add initial colors to squares */
        squares[i].style.backgroundColor = colors[i]
        /* add click listners to squares */
        squares[i].addEventListener('click', function(){
            /* grab color of clicked square */
            let clickedColor = this.style.backgroundColor
            /* compare color to picked color */
            console.log(clickedColor, pickedColor)
            if (clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!'
                resetBtn.textContent = 'Play Again?'
                changeColors(clickedColor)
                h1.style.background = clickedColor
            } else {
                this.style.backgroundColor = '#232323'
                messageDisplay.textContent = 'Try again'
            }
        })
    }
}

function setupModeButtons(){
    for (let i=0 ; i < modeBtns.length; i++){
        modeBtns[i].addEventListener('click', function(){
            modeBtns[0].classList.remove('selected')
            modeBtns[1].classList.remove('selected')
            this.classList.add('selected')
    
            this.textContent === "EASY" ? numOfSquares = 3: numOfSquares = 6
            reset()
        })
    }
}



function reset(){
    colors = generateRandomColors(numOfSquares)
    // pick new random color from arr
    pickedColor = pickColor()
    // change color display to match picked color
    colorDisplay.textContent = pickedColor
    resetBtn.textContent = 'New Colors'
    messageDisplay.textContent = ""
    // change colors of squares
    for (let i = 0; i<squares.length; i++ ){
        if (colors[i]){
            squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none'
        }
    }
    h1.style.backgroundColor = 'steelblue'
}


resetBtn.addEventListener('click', function(){
    reset()
})

function changeColors(color){
    /* Loop through all squares */
    for (let i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = color
    }
    /* change each color to match given color */
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num){
    // make an array
    let arr = []
    // repeat num times
    for (let i=0; i < num; i++){
        // add num random colors to arr
        arr.push(randomColor())

    }
    // return that array
    return arr
}

function randomColor(){
    // pick a 'red' from 0 - 255
    let r = Math.floor(Math.random() * 256)
    // pick a 'green' from 0 - 255
    let g = Math.floor(Math.random() * 256)
    // pick a 'blue' from 0 - 255
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}