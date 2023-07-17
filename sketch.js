let geralt
let grass
let tavern
let medallion

const size = 64
const speed = 64

let walkX = 0
let walkY = 0
let positionX = 512
let positionY = 512

let positionMedallion = 320
let item = 0

let button 

//executa apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);
  geralt = loadImage('geralt.png')
  grass = loadImage('grass.png')
  tavern = loadImage('tavern.png')
  medallion = loadImage('wolf-medallion.png')
}

//fica executando em loop até que o programa seja encerrado
function draw() {
  background(220);
  
  if(walkX < 0){
    walkX = 0
  }
  
  if(walkY < 0){
    walkY = 0
  }
  
  if(walkX > size*8){
    walkX = size*8
  }
  
  if(walkY > size*8){
    walkY = size*8
  }
  
  for(let x = 0; x < 9; x++){
    for(let y = 0; y < 9; y++){
      image(grass, 64*x, 64*y, size, size)
    }
  }

  image(medallion, 0, positionMedallion, size, size)
  image(tavern, positionX, positionY, size, size)
  image(geralt, walkX, walkY, size, size)
  
  if(walkX === 0 && walkY === positionMedallion){
     positionMedallion = 1000
     item ++
  }
  
  if(walkX === size*8 && walkY === size*8 && item === 1){
    rect(130, 160, 320, 256)
    textSize(16)
    text('Geralt foi descansar e beber cerveja', 160, 300)
    button = createButton('Reiniciar')
    button.mousePressed(reset)
    button.position(260, 350)
    noLoop()
  } else if (walkX === size*8 && walkY === size*8 && item === 0) {
    rect (180, 200, 192, 192)
    textSize(16)
    text('Não pode descansar', 200, 300)
  }
  
  function reset() {
    walkX = 0
    walkY = 0
    button.remove()
    loop()
    positionMedallion = 320
    item = 0
  }
}

//executa sempre que uma tecla for pressionada
function keyPressed(){
  if(keyIsDown(UP_ARROW)){
     walkY -= speed
  }
  
  if(keyIsDown(DOWN_ARROW)){
     walkY += speed
  }
  
  if(keyIsDown(LEFT_ARROW)){
     walkX -= speed
  }
  
  if(keyIsDown(RIGHT_ARROW)){
     walkX += speed
  }
}