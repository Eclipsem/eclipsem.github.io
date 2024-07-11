const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const box = Math.floor(canvas.width / 40); // Size of each box in the grid
let snake = [];
snake[0] = { x: 10 * box, y: 10 * box }; // Initial position of the snake

let food = {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
};

let direction;

// Prevent default scrolling behavior
window.addEventListener("keydown", function(event) {
    if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].indexOf(event.key) > -1) {
        event.preventDefault();
    }
}, false);

// Control the snake
document.addEventListener("keydown", setDirection);

function setDirection(event) {
    if ((event.key === "ArrowLeft" || event.key === "a") && direction !== "RIGHT") {
        direction = "LEFT";
    } else if ((event.key === "ArrowUp" || event.key === "w") && direction !== "DOWN") {
        direction = "UP";
    } else if ((event.key === "ArrowRight" || event.key === "d") && direction !== "LEFT") {
        direction = "RIGHT";
    } else if ((event.key === "ArrowDown" || event.key === "s") && direction !== "UP") {
        direction = "DOWN";
    }
}

function collision(newHead, array) {
    for (let i = 0; i < array.length; i++) {
        if (newHead.x === array[i].x && newHead.y === array[i].y) {
            return true;
        }
    }
    return false;
}

function draw() {
    ctx.fillStyle = "#2E2E2E";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "#FFFFFF"; // White body
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "#2E2E2E";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === "LEFT") snakeX -= box;
    if (direction === "UP") snakeY -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "DOWN") snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
        food = {
            x: Math.floor(Math.random() * (canvas.width / box)) * box,
            y: Math.floor(Math.random() * (canvas.height / box)) * box
        };
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
    }

    snake.unshift(newHead);
}

let fps = 60; // Set FPS to 60 for smoother animation
let game = setInterval(draw, 1000 / fps);
