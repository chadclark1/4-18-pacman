var gameBoard = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,2,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,1,0,0,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,0,1,1,1,1,1,1,0],
  [0,1,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,0]
]

var score = 0;

var ghost = {
  x: 8,
  y: 5,
  top: 260,
  left: 160
}

var pacman = {
  x: 1,
  y: 1
}
// setInterval(moveGhost,750)

function moveGhost(){
  var randomVal = Math.floor(Math.random()*4 + 1),
      x = ghost.x,
      y = ghost.y,
      left = ghost.left,
      top = ghost.top

  console.log('rand',randomVal)
  switch(randomVal) {
    case 1:
      x-=1
      left -= 20
      break;
    case 2:
      y-=1
      top -= 20
      break;
    case 3:
      x+=1
      left += 20
      break;
    case 4:
      y+=1
      top +=20
      break;
  }
  if(canGhostMove(x,y)){
    ghost.x = x;
    ghost.y = y;
    ghost.top = top;
    ghost.left = left
    $('.ghost').offset({top: ghost.top, left: ghost.left})
  }
  if(ghost.x===pacman.x && ghost.y === pacman.y){
    console.log('LOSE!')
    $('.scoreboard h1').text('YOU LOSE!')
    alert('You Lose!')
  }
}

function canGhostMove(x,y){
  console.log('x,y',x,y)
  console.log('gameBoardval:',gameBoard[y][x])
  return (gameBoard[y][x] !== 0) ? true : false
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
        case 4:
          divClass = 'ghost'
          break;
        default:
          console.log('No case found.')
      }
      HTMLstring += "<div class='"+divClass+"'></div>"
    }
    HTMLstring += "</div>"
  }
  $('.scoreboard h1 span').text(score)
  $('.game').html(HTMLstring)
}

$(document).ready(function(){
  drawBoard()
  setInterval(moveGhost, 500)
});
