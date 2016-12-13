// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = "player1"
function squareOne() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "15")
    lineOne.setAttribute("y1", "15")
    lineOne.setAttribute("x2", "95")
    lineOne.setAttribute("y2", "95")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "95")
    lineTwo.setAttribute("y1", "15")
    lineTwo.setAttribute("x2", "15")
    lineTwo.setAttribute("y2", "95")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "56")
    circleOne.setAttribute("cy", "56")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "56")
    circleTwo.setAttribute("cy", "56")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}

function squareTwo() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "115")
    lineOne.setAttribute("y1", "15")
    lineOne.setAttribute("x2", "195")
    lineOne.setAttribute("y2", "95")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "195")
    lineTwo.setAttribute("y1", "15")
    lineTwo.setAttribute("x2", "115")
    lineTwo.setAttribute("y2", "95")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "156")
    circleOne.setAttribute("cy", "56")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "156")
    circleTwo.setAttribute("cy", "56")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}

function squareThree() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "215")
    lineOne.setAttribute("y1", "15")
    lineOne.setAttribute("x2", "295")
    lineOne.setAttribute("y2", "95")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "295")
    lineTwo.setAttribute("y1", "15")
    lineTwo.setAttribute("x2", "215")
    lineTwo.setAttribute("y2", "95")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "256")
    circleOne.setAttribute("cy", "56")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "256")
    circleTwo.setAttribute("cy", "56")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}

function squareFour() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "15")
    lineOne.setAttribute("y1", "115")
    lineOne.setAttribute("x2", "95")
    lineOne.setAttribute("y2", "195")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "95")
    lineTwo.setAttribute("y1", "115")
    lineTwo.setAttribute("x2", "15")
    lineTwo.setAttribute("y2", "195")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "56")
    circleOne.setAttribute("cy", "156")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "56")
    circleTwo.setAttribute("cy", "156")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}

function squareFive() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "115")
    lineOne.setAttribute("y1", "115")
    lineOne.setAttribute("x2", "195")
    lineOne.setAttribute("y2", "195")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "195")
    lineTwo.setAttribute("y1", "115")
    lineTwo.setAttribute("x2", "115")
    lineTwo.setAttribute("y2", "195")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "156")
    circleOne.setAttribute("cy", "156")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "156")
    circleTwo.setAttribute("cy", "156")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}

function squareSix() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "215")
    lineOne.setAttribute("y1", "115")
    lineOne.setAttribute("x2", "295")
    lineOne.setAttribute("y2", "195")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "295")
    lineTwo.setAttribute("y1", "115")
    lineTwo.setAttribute("x2", "215")
    lineTwo.setAttribute("y2", "195")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "256")
    circleOne.setAttribute("cy", "156")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "256")
    circleTwo.setAttribute("cy", "156")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}

function squareSeven() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "15")
    lineOne.setAttribute("y1", "215")
    lineOne.setAttribute("x2", "95")
    lineOne.setAttribute("y2", "295")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "95")
    lineTwo.setAttribute("y1", "215")
    lineTwo.setAttribute("x2", "15")
    lineTwo.setAttribute("y2", "295")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "56")
    circleOne.setAttribute("cy", "256")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "56")
    circleTwo.setAttribute("cy", "256")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}

function squareEight() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "115")
    lineOne.setAttribute("y1", "215")
    lineOne.setAttribute("x2", "195")
    lineOne.setAttribute("y2", "295")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "195")
    lineTwo.setAttribute("y1", "215")
    lineTwo.setAttribute("x2", "115")
    lineTwo.setAttribute("y2", "295")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "156")
    circleOne.setAttribute("cy", "256")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "156")
    circleTwo.setAttribute("cy", "256")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}

function squareNine() {
  if(turn == "player1"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", "215")
    lineOne.setAttribute("y1", "215")
    lineOne.setAttribute("x2", "295")
    lineOne.setAttribute("y2", "295")
    lineOne.setAttribute("stroke", "blue")
    lineOne.setAttribute("stroke-width", "10")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "295")
    lineTwo.setAttribute("y1", "215")
    lineTwo.setAttribute("x2", "215")
    lineTwo.setAttribute("y2", "295")
    lineTwo.setAttribute("stroke", "blue")
    lineTwo.setAttribute("stroke-width", "10")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "256")
    circleOne.setAttribute("cy", "256")
    circleOne.setAttribute("r", "44")
    circleOne.setAttribute("fill", "blue")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "256")
    circleTwo.setAttribute("cy", "256")
    circleTwo.setAttribute("r", "34")
    circleTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    turn = "player1"
  }
}
