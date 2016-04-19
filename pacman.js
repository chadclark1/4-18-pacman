var gameBoard = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,2,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,1,0,0,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,0]
]

var pacman = {
  x: 1,
  y: 1
}

$(document).keydown(function(event){

  gameBoard[pacman.y][pacman.x] = 3;

  switch(event.which){
    case 37:
      pacman.x -= 1;
      break;
    case 38:
      pacman.y -= 1;
      break;
    case 39:
      pacman.x += 1;
      break;
    case 40:
      pacman.y += 1;
      break;
    default:
      console.log('No arrow key pressed');
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

  $('.game').html(HTMLstring)
}

$(document).ready(function(){
  drawBoard()
})
