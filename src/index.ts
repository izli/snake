import { Direction, Snake, createSnake, drawSnake, handleTime } from "./snake";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants";
import { Treat, createTreat, drawTreat } from "./treats";

mainApp();

function mainApp() {
  const gameBorder = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = gameBorder.getContext("2d");
  let snakeArr: Array<Snake>;
  snakeArr = [];
  let snake: Snake = createSnake(Direction.Right, 10, 24, 24, 12, false);
  snakeArr.push(snake);
  let treat: Treat = createTreat();
  drawCanvas(ctx, gameBorder);
  drawSnake(ctx, snakeArr);
  drawTreat(ctx, treat);

  let button = <HTMLInputElement>document.getElementById("startButton");

  if (button) {
    button.addEventListener("click", function () {
      button.disabled = true;
      handleTime(snakeArr, ctx, gameBorder, button, treat);
    });
  }
}

export function drawCanvas(
  ctx: CanvasRenderingContext2D,
  gameBorder: HTMLCanvasElement
) {
  gameBorder.style.width = CANVAS_WIDTH + "px";
  gameBorder.style.height = CANVAS_HEIGHT + "px";

  const scale = window.devicePixelRatio;
  gameBorder.width = Math.floor(CANVAS_WIDTH * scale);
  gameBorder.height = Math.floor(CANVAS_HEIGHT * scale);

  ctx.scale(scale, scale);
  ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
