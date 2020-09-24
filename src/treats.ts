import { Snake } from "./snake";
export type Treat = {
  treatX: number;
  treatY: number;
  radius: number;
};

export function createTreat(
  randomX: number = getRandomIntInclusive(6, 594),
  randomY: number = getRandomIntInclusive(6, 394)
): Treat {
  return {
    treatX: randomX,
    treatY: randomY,
    radius: 6,
  };
}

function getRandomIntInclusive(max: number, min: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function drawTreat(ctx: CanvasRenderingContext2D, treatPos: Treat) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(
    treatPos.treatX,
    treatPos.treatY,
    treatPos.radius,
    0,
    Math.PI * 2,
    true
  );
  ctx.fill();
}

export function doesSnakeEatTreat(snake: Snake, treat: Treat) {
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
