var gameBoard = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,2,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,1,0,0,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,0]
]

var score = 0;

var pacman = {
  x: 1,
  y: 1
}

$(document).keydown(function(event){
  if(event.which === 37 && gameBoard[pacman.y][pacman.x - 1] !== 0){
    gameBoard[pacman.y][pacman.x] = 3
    pacman.x -= 1;
  }
  else if (event.which === 38 && gameBoard[pacman.y-1][pacman.x] !== 0) {
    gameBoard[pacman.y][pacman.x] = 3
    pacman.y -= 1;
  }
  else if (event.which === 39 && gameBoard[pacman.y][pacman.x+1] !== 0) {
    gameBoard[pacman.y][pacman.x] = 3
    pacman.x += 1;
  }
  else if (event.which === 40 && gameBoard[pacman.y+1][pacman.x] !== 0) {
    gameBoard[pacman.y][pacman.x] = 3
    pacman.y += 1;
  }
  if(gameBoard[pacman.y][pacman.x] === 1){
    score = score + 1;
    console.log(score)
  }
  gameBoard[pacman.y][pacman.x] = 2;
  drawBoard()

})



function drawBoard() {
  var HTMLstring = '';
  for(var rowNum = 0; rowNum < gameBoard.length; rowNum+=1){
    HTMLstring += "<div class  = 'row'>"
    for(var cellNum = 0; cellNum < gameBoard[rowNum].length; cellNum+=1 ){
      var gameVal = gameBoard[rowNum][cellNum];
      var divClass

      switch(gameVal){
        case 0:
          divClass = 'wall'
          break;
        case 1:
          divClass = 'coin'
          break;
        case 2:
          divClass = 'pacman'
          break;
        case 3:
          divClass = 'empty'
          break;
        default:
          console.log('No case found.')
      }
      HTMLstring += "<div class='"+divClass+"'></div>"
    }
    HTMLstring += "</div>"
  }

  if(score === 10){
    $('.scoreboard h1 span').text("YOU WON!!!")
    alert('you won!')
  }
  $('.scoreboard h1 span').text(score)
  $('.game').html(HTMLstring)
}

$(document).ready(function(){
  drawBoard()
})
