document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('game-board');
    const gridSize = 20;
    const snakeArray = [{ x: 10, y: 10 }];
    let food = getRandomLocation();

    function draw() {
        grid.innerHTML = '';
        snakeArray.forEach(segment => {
            const snakeSegment = document.createElement('div');
            snakeSegment.className = 'snake';
            snakeSegment.style.gridRowStart = segment.y;
            snakeSegment.style.gridColumnStart = segment.x;
            grid.appendChild(snakeSegment);
        });

        const foodElement = document.createElement('div');
        foodElement.className = 'food';
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        grid.appendChild(foodElement);
    }

    function getRandomLocation() {
        const x = Math.floor(Math.random() * gridSize) + 1;
        const y = Math.floor(Math.random() * gridSize) + 1;
        return { x, y };
    }

    function move() {
        const head = { ...snakeArray[0] };
        switch (direction) {
            case 'up':
                head.y--;
                break;
            case 'down':
                head.y++;
                break;
            case 'left':
                head.x--;
                break;
            case 'right':
                head.x++;
                break;
        }

        snakeArray.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food = getRandomLocation();
        } else {
            snakeArray.pop();
        }
    }

    function checkCollision() {
        const head = snakeArray[0];
        if (
            head.x < 1 ||
            head.x > gridSize ||
            head.y < 1 ||
            head.y > gridSize ||
            snakeArray.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
        ) {
            alert('Game Over!');
            resetGame();
        }
    }

    function resetGame() {
        snakeArray.length = 1;
        snakeArray[0] = { x: 10, y: 10 };
        food = getRandomLocation();
    }

    let direction = 'right';

    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    });

    function gameLoop() {
        move();
        checkCollision();
        draw();
    }

    setInterval(gameLoop, 200);
});