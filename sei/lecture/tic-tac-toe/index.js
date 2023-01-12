// game state
let game

// holding DOM elements for easy recall
const boardEl = document.getElementById('board')
const msgEl = document.getElementById('message')
const button = document.querySelector('button')


// start of Square class
class Square {
    constructor(domElement) {
        this.domElement = domElement
        this.value = null
    }

    static renderLookup = {
        '1': 'purple',
        '-1': 'orange',
        'null': 'darkgrey'
    }

    render() {
        this.domElement.style.backgroundColor = Square.renderLookup[this.value]
    }
}

// use the extends keyword to get EVERYTHING in the Square class
class ImageSquare extends Square {
    // we are accepting the domElements
    // we are also accepting another param that has a default value
    constructor (domElement, secondsPerRotation = 0) {
        // we have to use the `super`
        // super is just to construct the constructor of the parent class
        super(domElement)
        this.domElement.style.animationDuration = `${secondsPerRotation}s`
    }
    static renderLookup = {
        '1': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        '-1': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        'null': 'darkgrey'
    }

    render() {
        if (this.value) {
            this.domElement.style.backgroundImage = `url(${ImageSquare.renderLookup[this.value]})`
        } else {
            this.domElement.style.backgroundImage = ''
        }
    }
}

// we use the keyword `class`
// followed by kaleSoup
// when we do a class name we ALWAYS want to capitalize it
class TicTacToeGame {
	// this class is expecting `boardElement` to be passed in
	// still a function
	// `boardElement` is a param
	constructor(boardElement, messageElement) { 
		// `this` - going to refer to an instance of this class2i
		// these are properties on this class
		this.boardElement = boardElement
		this.messageElement = messageElement
		// ... spread operator - takes an array and copies it
		// .querySelectorAll() - NodeList
		// we are taking our NodeList and turning it into an array - wicked common
		this.squareEls = [...boardElement.querySelectorAll('div')]
		// [[NodeList]]
        // const kaleSoup = function () {}
        this.boardElement.addEventListener('click', event => {
            // grabs the index element that we clicked on
            const idx = this.squareEls.indexOf(event.target)

            // safe guards
            if (idx === -1 || this.squares[idx].value || this.winner) {
                // stops the function
                return
            }

            this.squares[idx].value = this.turn
            this.turn *= -1
            // we have not written this!!!
            this.winner = this.getWinner()
            this.render()

        })
	}
	// constructor function
	// static properties
	// other properties that we might not need the constructor for - you'll never need this
	// static method
	// methods

    // we have these as static properties because they will never change
    // they are also not concerned with anything in the class
	static winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	// to access static methods we have to access them on the class
	// TicTacToeGame.about()
	// NEVER game.about()
	static about() {
		console.log("I'm the TicTacToeGame class!")
	}

	// create a method called play
	play() {
		// added properties that only exist when `play()` is called
		this.turn = 1
		this.winner = null
		this.squares = this.squareEls.map((el) => new ImageSquare(el, 4))
		// we have not written this method yet but we will
		this.render()
	}

	render() {
		this.squares.forEach(square => square.render())

        if (this.winner === 'T') {
            this.messageElement.innerHTML = 'Rats, another tie'
        } else if (this.winner) {
            this.messageElement.innerHTML = `Player ${this.winner === 1 ? 1 : 2} Wins!`
        } else {
            this.messageElement.innerHTML = `Player ${this.turn === 1 ? 1 : 2}'s Turn`
        }
	}

	toString() {
		return `Tic Tac Toe winner -> ${this.winner}`
	}

    getWinner() {
        const combos = TicTacToeGame.winningCombos
        for (let i = 0; i < combos.length; i++) {
            if (
                Math.abs(
                    this.squares[combos[i][0]].value + 
                    this.squares[combos[i][1]].value +
                    this.squares[combos[i][2]].value
                )
                === 3
            ) {
                return this.squares[combos[i][0]].value
            }
        }
        if (this.squares.some((square) => square.value === null)) return null
		return 'T'
    }
}

// calling our initialize function declaration
initialize()

// creating our initialize function declaration
function initialize() {
    // This is all what the `new` keyword is doing
        // create use a new object
        // run the constructor function inside the class
        // when the constructor function is done is returns the object with the properties and methods that it needs
    game = new TicTacToeGame(boardEl, msgEl)
    // call after we create a new Tic Tac Toe Game
    game.play()
    console.log(game)
}

button.addEventListener('click', initialize)

// button.addEventListener('click', () => {
//     initialize()
// })