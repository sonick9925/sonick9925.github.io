const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let currentTool = 'brush';
let currentColor = '#000000';
let brushSize = 5; // Розмір пензля
let startX, startY;

// Встановлюємо обробники подій для малювання
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    startX = e.offsetX;
    startY = e.offsetY;

    if (currentTool === 'eraser') {
        ctx.clearRect(startX, startY, brushSize * 2, brushSize * 2); // Ластик
    }
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        if (currentTool === 'brush') {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.stroke();
        } else if (currentTool === 'pastel') {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = brushSize + 5; // Більший розмір для пастелі
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.lineTo(e.offsetX, e.offsetY);
        } else if (currentTool === 'marker') {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = brushSize + 3; // Середній розмір для маркера
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.lineTo(e.offsetX, e.offsetY);
        } else if (currentTool === 'watercolor') {
            ctx.globalAlpha = 0.5; // Полупрозорість для водяних фарб
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.globalAlpha = 1; // Скинути прозорість
        }
    }
});

canvas.addEventListener('mouseup', () => {
    if (currentTool === 'rectangle' || currentTool === 'circle' || currentTool === 'line') {
        drawShape(currentTool, startX, startY);
    }
    drawing = false;
    ctx.closePath();
});

canvas.addEventListener('mouseout', () => {
    drawing = false;
    ctx.closePath();
});

// Вибір кольору
document.getElementById('colorPicker').addEventListener('input', (e) => {
    currentColor = e.target.value;
});

// Регулятор розміру
document.getElementById('size').addEventListener('input', (e) => {
    brushSize = e.target.value; // Оновлення розміру пензля
});

// Очистити полотно
document.getElementById('clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Вибір інструмента
document.getElementById('tool').addEventListener('change', (e) => {
    currentTool = e.target.value;
});

// Додавання фігур
function drawShape(shape, x, y) {
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushSize;

    if (shape === 'rectangle') {
        ctx.strokeRect(x - brushSize * 2, y - brushSize, brushSize * 4, brushSize * 2); // Прямокутник без замальовки
    } else if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(x, y, brushSize, 0, Math.PI * 2);
        ctx.stroke(); // Коло без замальовки
    } else if (shape === 'line') {
        ctx.beginPath();
        ctx.moveTo(x - 50, y);
        ctx.lineTo(x + 50, y);
        ctx.stroke(); // Лінія
    }
}

// Додайте можливість малювати фігури при натисканні
canvas.addEventListener('dblclick', (e) => {
    drawShape(currentTool, e.offsetX, e.offsetY);
});
