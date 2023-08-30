const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const width = canvas.clientWidth
const height = canvas.clientHeight
let xMultiplier = 1, yMultiplier = 1;
let velocidadeX = 3, velocidadeY = 3;
let posX = 0, posY = 0
let imageW = 100, imageH = 100
let defaultColor = '#ffffff'

const clearCanvas = () => {
    context.fillStyle = defaultColor;
    context.fillRect(0,0,width,height);
}

const handlePos = () => {
    if ((posX + imageW + velocidadeX * xMultiplier) >= width) 
        xMultiplier = -1
    if ((posY + imageH + velocidadeY * yMultiplier) >= height) 
        yMultiplier = -1
    if (posX + velocidadeX * xMultiplier <= 0) 
        xMultiplier = 1
    if (posY + velocidadeY * yMultiplier <= 0) 
        yMultiplier = 1 
    posX += velocidadeX * xMultiplier
    posY += velocidadeY * yMultiplier
}

rangeVelocidade.addEventListener("input", (event) => {
    velocidadeX = event.target.value;
    velocidadeY = event.target.value;
  });

  rangeTamanho.addEventListener("input", (event) => {
    imageW = Number(event.target.value);
    imageH = Number(event.target.value);
  });

  cor.addEventListener("change", (e) => defaultColor = e.target.value, false);

const handleKowalski = () => {
    kowas = new Image();
    kowas.src = 'kowalski.jpeg';
    context.drawImage(kowas, posX, posY, imageW, imageH);
}

function handleTick(event) {
    handlePos()
    clearCanvas()
    handleKowalski()
    requestAnimationFrame(handleTick)
}

requestAnimationFrame(handleTick)