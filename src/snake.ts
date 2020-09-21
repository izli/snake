import { snakeCase } from "lodash";
import { drawCanvas } from "./index.ts";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants";

export type Snake = {
  length: number;
  direction: string;
  speed: number;
  posX: number;
  posY: number;
  running: number;
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
  isRunning: number = 0
): Snake {
  return {
    length: givenLength,
    direction: givenDir,
    speed: givenSpd,
    posX: posX,
    posY: posY,
    running: isRunning,
  };
}

export function moveSnake(
  snake: Snake,
  ctx: CanvasRenderingContext2D,
  gameBorder: HTMLCanvasElement
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
  } else {
    drawSnake(ctx, snake);
    window.requestAnimationFrame(() => moveSnake(snake, ctx, gameBorder));
  }
}

export function drawSnake(ctx: CanvasRenderingContext2D, snake: Snake) {
  ctx.fillStyle = "green";
  ctx.clearRect(1, 1, 598, 398);

  //Going right
  if (snake.direction == Direction.Right) {
    snake.posX = snake.posX + snake.length;
    ctx.fillRect(snake.posX, snake.posY, 10, 10);
    ctx.strokeRect(snake.posX, snake.posY, 10, 10);
  }
  //Going down
  else if (snake.direction == Direction.Down) {
    snake.posY = snake.posY + snake.length;
    ctx.fillRect(snake.posX, snake.posY, 10, 10);
    ctx.strokeRect(snake.posX, snake.posY, 10, 10);
  }
  //Going left
  else if (snake.direction == Direction.Left) {
    snake.posX = snake.posX - snake.length;
    ctx.fillRect(snake.posX, snake.posY, 10, 10);
    ctx.strokeRect(snake.posX, snake.posY, 10, 10);
  }
  //Going up
  else if (snake.direction == Direction.Up) {
    snake.posY = snake.posY - snake.length;
    ctx.fillRect(snake.posX, snake.posY, 10, 10);
    ctx.strokeRect(snake.posX, snake.posY, 10, 10);
  }
}

function logKey(snake: Snake) {
  return (e: KeyboardEvent) => {
    console.log(e.code);
    switch (e.code) {
      case "ArrowUp":
        snake.direction = Direction.Up;
        break;
      case "ArrowDown":
        snake.direction = Direction.Down;
        break;
      case "ArrowRight":
        snake.direction = Direction.Right;
        break;
      case "ArrowLeft":
        snake.direction = Direction.Left;
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
