let bingoResult = document.getElementById("bingoNumbers")
let column1 = document.getElementById("columnB")
let column2 = document.getElementById("columnI")
let column3 = document.getElementById("columnN")
let column4 = document.getElementById("columnG")
let column5 = document.getElementById("columnO")

let endScreen = document.getElementById("end-container")
let endMessage = document.getElementById("end-message")
endScreen.addEventListener("click", () => endScreen.style.display = "none")


class Game {
    constructor() {
        this.column1 = document.getElementById("columnB")
        this.column2 = document.getElementById("columnI")
        this.column3 = document.getElementById("columnN")
        this.column4 = document.getElementById("columnG")
        this.column5 = document.getElementById("columnO")

        this.bingoNumber = 0
        this.newBingoNumber = {}
        this.allBingoNumbers = []

        this.empty = {}
        this.bingoResults = []
        this.tiles = []
        this.clickedTiles = []

        this.columnB = []
        this.columnI = []
        this.columnN = []
        this.columnG = []
        this.columnO = []

        this.cB = []
        this.cI = []
        this.cN = []
        this.cG = []
        this.cO = []

        this.interval = {}

        this.moves = 40
        this.movesBox = document.getElementById("movesBox")
        this.movesBox.innerHTML = this.moves

        this.startButton = document.getElementById("start-box")
        this.startButton.addEventListener("click", () => this.startGame())
        this.mainBoard = document.getElementById("main-container")
        this.startBoard = document.getElementById("start-container")
        
      }   

      newGame(){
        let newGame = new Game()
      }

      startGame() {
        this.mainBoard.style.display = "flex"
        this.startBoard.style.display = "none"

      }

      randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

      showCorrect(tile) {
        if (tile.className === "emptyShow" && this.clickedTiles.length < 40 && this.moves > 0) {
            tile.className = "emptySelected"
            let y = parseInt(tile.id)
            tile.textContent = tile.id
            this.clickedTiles.push(y)
            this.moves -= 1
            this.movesBox.innerHTML = this.moves
            for(let i=0; i<this.allBingoNumbers.length;i++) {
                    if(this.allBingoNumbers[i].textContent == tile.id) {
                        this.allBingoNumbers[i].className = "correctTile"
                    }
                }
        }
      }

      check(){
        if (this.cB[0].className == "correctTile" && this.cB[1].className == "correctTile" && this.cB[2].className == "correctTile"
         && this.cB[3].className == "correctTile" && this.cB[4].className == "correctTile") {
           this.showEndMessage("BINGO!")
           this.moves = 0
           clearInterval(this.interval)
         }
        else if (this.cI[0].className == "correctTile" && this.cI[1].className == "correctTile" && this.cI[2].className == "correctTile"
        && this.cI[3].className == "correctTile" && this.cI[4].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }
        else if (this.cN[0].className == "correctTile" && this.cN[1].className == "correctTile" && this.cN[2].className == "correctTile"
        && this.cN[3].className == "correctTile" && this.cN[4].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }
        else if (this.cG[0].className == "correctTile" && this.cG[1].className == "correctTile" && this.cG[2].className == "correctTile"
        && this.cG[3].className == "correctTile" && this.cG[4].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }
        else if (this.cO[0].className == "correctTile" && this.cO[1].className == "correctTile" && this.cO[2].className == "correctTile"
        && this.cO[3].className == "correctTile" && this.cO[4].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }
        else if (this.cB[0].className == "correctTile" && this.cI[0].className == "correctTile" && this.cN[0].className == "correctTile"
        && this.cG[0].className == "correctTile" && this.cO[0].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }
        else if (this.cB[1].className == "correctTile" && this.cI[1].className == "correctTile" && this.cN[1].className == "correctTile"
        && this.cG[1].className == "correctTile" && this.cO[1].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }
        else if (this.cB[2].className == "correctTile" && this.cI[2].className == "correctTile" && this.cN[2].className == "correctTile"
        && this.cG[2].className == "correctTile" && this.cO[2].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }
        else if (this.cB[3].className == "correctTile" && this.cI[3].className == "correctTile" && this.cN[3].className == "correctTile"
        && this.cG[3].className == "correctTile" && this.cO[3].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }
        else if (this.cB[4].className == "correctTile" && this.cI[4].className == "correctTile" && this.cN[4].className == "correctTile"
        && this.cG[4].className == "correctTile" && this.cO[4].className == "correctTile") {
          this.showEndMessage("BINGO!")
          this.moves = 0
          clearInterval(this.interval)
        }

        else if (this.clickedTiles.length == 40) {
          this.showEndMessage("YOU RAN OUT OF MOVES! <br> GAME OVER!")
          clearInterval(this.interval)
      }
        
      }

      showEndMessage(msg) {
        endScreen.style.display = "flex"
        endMessage.innerHTML = msg
      }

      createBoard() {
          this.createBingoRows(this.columnB, 1, 15, column1, "B", this.cB)
          this.createBingoRows(this.columnI, 16, 30, column2, "I", this.cI)
          this.createBingoRows(this.columnN, 31, 45, column3, "N", this.cN)
          this.createBingoRows(this.columnG, 46, 60, column4, "G", this.cG)
          this.createBingoRows(this.columnO, 61, 75, column5, "O", this.cO)
          this.drawCorrectNumbers()
          this.allBingoNumbers = document.querySelectorAll(".tile")
          this.tiles = document.querySelectorAll(".emptyShow")
          for (let t = 0; t < this.tiles.length; t++) {
              this.tiles[t].addEventListener("click", () => this.showCorrect(this.tiles[t]))
        }
        this.interval = setInterval(() => this.check(), 500)
      }

      drawCorrectNumbers() {
        while (this.bingoResults.length < 75) {
            let i = Math.floor(Math.random() * 75) +1;
            if (!this.bingoResults.includes(i)) {
                this.bingoResults.push(i)
                this.empty = document.createElement("div")
                this.empty.id = i
                this.empty.className = "emptyShow"     
                bingoResult.appendChild(this.empty)
            }
        }
      }

      createBingoRows(column, num1, num2, col, name, c) {
          let i = 0
          while (column.length < 5) {
              this.bingoNumber = this.randomNumber(num1, num2)
              if(column.indexOf(this.bingoNumber) === -1) {
                column.push(this.bingoNumber);
                this.newBingoNumber = document.createElement("div")
                this.newBingoNumber.id = name + i++ 
                this.newBingoNumber.className  = "tile"
                this.newBingoNumber.textContent = this.bingoNumber
                c.push(this.newBingoNumber)
                col.appendChild(this.newBingoNumber)
          }
      }
    }
}

const newGameButton = document.getElementById("newGame-box")
newGameButton.addEventListener("click", () => createNewGame())

function createNewGame() {
  bingoResult.innerHTML = ""
  column1.innerHTML = ""
  column2.innerHTML = ""
  column3.innerHTML = ""
  column4.innerHTML = ""
  column5.innerHTML = ""
  
  let x = new Game()
  x.createBoard()
  
}

let x = new Game()
x.createBoard()