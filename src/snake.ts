import { drawCanvas } from "./index";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants";
import { Treat, createTreat, drawTreat, doesSnakeEatTreat } from "./treats";

export type Snake = {
  direction: string;
  speed: number;
  posX: number;
  posY: number;
  size: number;
  hasTurned: boolean;
};

export enum Direction {
  Up = "up",
  Right = "right",
  Left = "left",
  Down = "down",
}

export function createSnake(
  givenDir: Direction,
  givenSpd: number,
  posX: number,
  posY: number,
  givenSize: number,
  givenTurned: boolean
): Snake {
  return {
    direction: givenDir,
    speed: givenSpd,
    posX: posX,
    posY: posY,
    size: givenSize,
    hasTurned: givenTurned,
  };
}

export function handleTime(
  snakeArr: Array<Snake>,
  ctx: CanvasRenderingContext2D,
  gameBorder: HTMLCanvasElement,
  button: HTMLInputElement,
  treat: Treat
) {
  setTimeout(function () {
    let isRunning = moveSnake(snakeArr, ctx, gameBorder, button, treat);

    let eatsTreat = doesSnakeEatTreat(snakeArr[0], treat);

    if (eatsTreat) {
      treat = createTreat();
      let newSnakePart = createAnotherSnakePart(snakeArr);
      snakeArr.push(newSnakePart);
      for (let i = 0; i < snakeArr.length; i++) {
        snakeArr[i].speed = snakeArr[i].speed + 10;
      }
    }
    if (isRunning) {
      window.requestAnimationFrame(() => {
        handleTime(snakeArr, ctx, gameBorder, button, treat);
      });
    }
    // requestAnimationFrame(handleTime);
  }, 2000 / snakeArr[0].speed);
}

export function moveSnake(
  snakeArr: Array<Snake>,
  ctx: CanvasRenderingContext2D,
  gameBorder: HTMLCanvasElement,
  button: HTMLInputElement,
  treat: Treat
) {
  document.addEventListener("keydown", logKey(snakeArr));
  let snakeCrashes = checkIfCrashes(snakeArr, CANVAS_WIDTH, CANVAS_HEIGHT);

  if (snakeCrashes == true) {
    ctx.clearRect(0, 0, 600, 600);
    snakeArr.splice(1);
    snakeArr[0].posX = 24;
    snakeArr[0].posY = 24;
    snakeArr[0].speed = 10;
    snakeArr[0].direction = Direction.Right;
    snakeArr[0].hasTurned = false;
    drawCanvas(ctx, gameBorder);
    drawSnake(ctx, snakeArr);
    drawTreat(ctx, treat);
    button.disabled = false;
    return false;
  } else {
    drawSnake(ctx, snakeArr);
    drawTreat(ctx, treat);
    return true;
  }
}

export function drawSnake(
  ctx: CanvasRenderingContext2D,
  snakeArr: Array<Snake>
) {
  ctx.fillStyle = "green";
  ctx.clearRect(1, 1, 598, 406);
  // let prevX = snakeArr[0].posX;
  // let prevY = snakeArr[0].posY;
  // let prevD = snakeArr[0].direction;

  //CASE Snake hasn't turned
  for (let i = snakeArr.length - 1; i > -1; i--) {
    if (i == 0) {
      //Snake's head's movement
      //Going right
      if (snakeArr[i].direction == Direction.Right) {
        snakeArr[i].posX = snakeArr[i].posX + snakeArr[i].size;
        drawBoxAndBorder(snakeArr[i], ctx);
      }
      //Going down
      else if (snakeArr[i].direction == Direction.Down) {
        snakeArr[i].posY = snakeArr[i].posY + snakeArr[i].size;
        drawBoxAndBorder(snakeArr[i], ctx);
      }
      //Going left
      else if (snakeArr[i].direction == Direction.Left) {
        snakeArr[i].posX = snakeArr[i].posX - snakeArr[i].size;
        drawBoxAndBorder(snakeArr[i], ctx);
      }
      //Going up
      else if (snakeArr[i].direction == Direction.Up) {
        snakeArr[i].posY = snakeArr[i].posY - snakeArr[i].size;
        drawBoxAndBorder(snakeArr[i], ctx);
      }
    } else {
      //Moves to the exact place of previous SnakePart and gets its direction
      snakeArr[i].posX = snakeArr[i - 1].posX;
      snakeArr[i].posY = snakeArr[i - 1].posY;
      snakeArr[i].direction = snakeArr[i - 1].direction;
      drawBoxAndBorder(snakeArr[i], ctx);
    }
  }
}

function drawBoxAndBorder(snake: Snake, ctx: CanvasRenderingContext2D) {
  ctx.fillRect(snake.posX, snake.posY, snake.size, snake.size);
  ctx.strokeRect(snake.posX, snake.posY, snake.size, snake.size);
}

function logKey(snakeArr: Array<Snake>) {
  return (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowUp":
        if (snakeArr[0].direction !== Direction.Down) {
          if (snakeArr[0].direction == Direction.Up) {
            snakeArr[0].hasTurned = false;
          } else {
            snakeArr[0].hasTurned = true;
          }
          snakeArr[0].direction = Direction.Up;
          return true;
        }
        break;
      case "ArrowDown":
        if (snakeArr[0].direction !== Direction.Up) {
          if (snakeArr[0].direction == Direction.Down) {
            snakeArr[0].hasTurned = false;
          } else {
            snakeArr[0].hasTurned = true;
          }
          snakeArr[0].direction = Direction.Down;
          return true;
        }
        break;
      case "ArrowRight":
        if (snakeArr[0].direction !== Direction.Left) {
          if (snakeArr[0].direction == Direction.Right) {
            snakeArr[0].hasTurned = false;
          } else {
            snakeArr[0].hasTurned = true;
          }
          snakeArr[0].direction = Direction.Right;
          return true;
        }
        break;
      case "ArrowLeft":
        if (snakeArr[0].direction !== Direction.Right) {
          if (snakeArr[0].direction == Direction.Left) {
            snakeArr[0].hasTurned = false;
          } else {
            snakeArr[0].hasTurned = true;
          }
          snakeArr[0].direction = Direction.Left;
          return true;
        }
        break;
    }
  };
}

function checkIfCrashes(
  snakeArr: Array<Snake>,
  boardWidth: number,
  boardHeight: number
) {
  if (
    snakeArr[0].direction == Direction.Right &&
    snakeArr[0].posX >= boardWidth - 12
  ) {
    return true;
  }
  if (
    snakeArr[0].direction == Direction.Down &&
    snakeArr[0].posY >= boardHeight - 12
  ) {
    return true;
  }
  if (snakeArr[0].direction == Direction.Left && snakeArr[0].posX <= 1) {
    return true;
  }
  if (snakeArr[0].direction == Direction.Up && snakeArr[0].posY <= 1) {
    return true;
  }
  return false;
}

function createAnotherSnakePart(snakeArr: Array<Snake>): Snake {
  let length = snakeArr.length;
  let lastSnake = snakeArr[length - 1];
  let lastSnakeDirection = snakeArr[length - 1].direction;

  if (lastSnakeDirection == Direction.Up) {
    return {
      direction: lastSnake.direction,
      speed: lastSnake.speed,
      posX: lastSnake.posX,
      posY: lastSnake.posY + lastSnake.size,
      size: lastSnake.size,
      hasTurned: lastSnake.hasTurned,
    };
  }
  if (lastSnakeDirection == Direction.Right) {
    return {
      direction: lastSnake.direction,
      speed: lastSnake.speed,
      posX: lastSnake.posX - 12,
      posY: lastSnake.posY,
      size: lastSnake.size,
      hasTurned: lastSnake.hasTurned,
    };
  }
  if (lastSnakeDirection == Direction.Down) {
    return {
      direction: lastSnake.direction,
      speed: lastSnake.speed,
      posX: lastSnake.posX,
      posY: lastSnake.posY - lastSnake.size,
      size: lastSnake.size,
      hasTurned: lastSnake.hasTurned,
    };
  }
  if (lastSnakeDirection == Direction.Left) {
    return {
      direction: lastSnake.direction,
      speed: lastSnake.speed,
      posX: lastSnake.posX + lastSnake.size,
      posY: lastSnake.posY,
      size: lastSnake.size,
      hasTurned: lastSnake.hasTurned,
    };
  }
}
