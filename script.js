let numberOfLines = 5;
const pixelBoard = document.querySelector('#pixel-board');
console.log(pixelBoard);

// Cria um pixel com base nas diferentes classes
function createPixel(className) {
  const pixels = document.createElement('div');
  pixels.className = className;
  return pixels;
}

// Cria uma linha
function createLine(className) {
  const line = document.createElement('div');
  line.className = className;
  return line;
}

// Preenche uma linha
function fillLine(divLine) {
  for (let index = 0; index < numberOfLines; index += 1) {
    const pixel = createPixel('pixel');
    divLine.appendChild(pixel);
  }
}

// Passa por todos as linhas (div com class line) e preenche o quadro
function fillBoard() {
  for (let index = 0; index < numberOfLines; index += 1) {
    const line = createLine('line');
    fillLine(line);
    pixelBoard.appendChild(line);
  }
}

fillBoard();

function modifyColorSelected(event) {
  const colorSelected = event.target;
  const selectedRemove = document.querySelector('.selected');
  selectedRemove.classList.remove('selected');
  colorSelected.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', modifyColorSelected);

function modifyPixelColor(event) {
  // const classPixel = document.querySelector('.pixel');
  const colorSelectedClass = document.querySelector('.selected').classList[1];
  const elementSelected = event.target;
  if (elementSelected.className.indexOf('pixel') !== -1) {
    elementSelected.className = `pixel ${colorSelectedClass}`;
  }
}

pixelBoard.addEventListener('click', modifyPixelColor);

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].classList.remove('black');
    pixels[index].classList.remove('red');
    pixels[index].classList.remove('green');
    pixels[index].classList.remove('blue');
  }
}

const btn = document.querySelector('#clear-board');
btn.addEventListener('click', clearBoard);
