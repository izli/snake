import { snakeCase } from "lodash";
import { drawCanvas } from "./index";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants";
import { Treat, createTreat, drawTreat } from "./treats";

export type Snake = {
  length: number;
  direction: string;
  speed: number;
  posX: number;
  posY: number;
  hasEaten: boolean;
};

export enum Direction {
  Up = "up",
  Right = "right",
  Left = "left",
  Down = "down",
}

export function createSnake(
  givenLength: number = 3,
  givenDir: Direction = Direction.Right,
  givenSpd: number = 0,
  posX: number = 30,
  posY: number = 30,
  hasEaten: boolean = false
): Snake {
  return {
    length: givenLength,
    direction: givenDir,
    speed: givenSpd,
    posX: posX,
    posY: posY,
    hasEaten: hasEaten,
  };
}

export function moveSnake(
  snake: Snake,
  ctx: CanvasRenderingContext2D,
  gameBorder: HTMLCanvasElement,
  button: HTMLInputElement,
  treat: Treat
) {
  document.addEventListener("keydown", logKey(snake));
  let snakeCrashes = checkIfCrashes(snake, CANVAS_WIDTH, CANVAS_HEIGHT);

  if (snakeCrashes == true) {
    ctx.clearRect(0, 0, 600, 600);
    snake.posX = 30;
    snake.posY = 30;
    snake.speed = 0;
    snake.direction = Direction.Right;
    drawCanvas(ctx, gameBorder);
    drawSnake(ctx, snake);
    drawTreat(ctx, treat);
    button.disabled = false;
  } else {
    drawSnake(ctx, snake);
    drawTreat(ctx, treat);
    let eatsTreat = doesSnakeEatTreat(snake, treat);

    if (eatsTreat) {
      treat = createTreat();
    }

    window.requestAnimationFrame(() =>
      moveSnake(snake, ctx, gameBorder, button, treat)
    );
  }
}

export function drawSnake(ctx: CanvasRenderingContext2D, snake: Snake) {
  ctx.fillStyle = "green";
  ctx.clearRect(1, 1, 598, 398);

  //Going right
  if (snake.direction == Direction.Right) {
    snake.posX = snake.posX + snake.length;
    ctx.fillRect(snake.posX, snake.posY, 12, 12);
    ctx.strokeRect(snake.posX, snake.posY, 12, 12);
  }
  //Going down
  else if (snake.direction == Direction.Down) {
    snake.posY = snake.posY + snake.length;
    ctx.fillRect(snake.posX, snake.posY, 12, 12);
    ctx.strokeRect(snake.posX, snake.posY, 12, 12);
  }
  //Going left
  else if (snake.direction == Direction.Left) {
    snake.posX = snake.posX - snake.length;
    ctx.fillRect(snake.posX, snake.posY, 12, 12);
    ctx.strokeRect(snake.posX, snake.posY, 12, 12);
  }
  //Going up
  else if (snake.direction == Direction.Up) {
    snake.posY = snake.posY - snake.length;
    ctx.fillRect(snake.posX, snake.posY, 12, 12);
    ctx.strokeRect(snake.posX, snake.posY, 12, 12);
  }
}

function logKey(snake: Snake) {
  return (e: KeyboardEvent) => {
    console.log(e.code);
    switch (e.code) {
      case "ArrowUp":
        if (snake.direction !== Direction.Down) {
          snake.direction = Direction.Up;
        }
        break;
      case "ArrowDown":
        if (snake.direction !== Direction.Up) {
          snake.direction = Direction.Down;
        }
        break;
      case "ArrowRight":
        if (snake.direction !== Direction.Left) {
          snake.direction = Direction.Right;
        }
        break;
      case "ArrowLeft":
        if (snake.direction !== Direction.Right) {
          snake.direction = Direction.Left;
        }
        break;
    }
  };
}

function checkIfCrashes(snake: Snake, boardWidth: number, boardHeight: number) {
  if (snake.direction == Direction.Right && snake.posX >= boardWidth - 9) {
    console.log("has crashed");
    return true;
  }
  if (snake.direction == Direction.Down && snake.posY >= boardHeight - 10) {
    console.log("has crashed");
    return true;
  }
  if (snake.direction == Direction.Left && snake.posX <= 0) {
    console.log("has crashed");
    return true;
  }
  if (snake.direction == Direction.Up && snake.posY <= 0) {
    console.log("has crashed");
    return true;
  }
  return false;
}

function doesSnakeEatTreat(snake: Snake, treat: Treat) {
  let minX = treat.treatX - treat.radius * 1.5;
  let maxX = treat.treatX + treat.radius / 2;
  let minY = treat.treatY - treat.radius * 1.5;
  let maxY = treat.treatY + treat.radius / 2;
  if (
    minX <= snake.posX &&
    snake.posX <= maxX &&
    minY <= snake.posY &&
    snake.posY <= maxY
  ) {
    return true;
  }

  return false;
}
