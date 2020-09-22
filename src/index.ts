import * as _ from "lodash";
import { Snake, createSnake, drawSnake, moveSnake } from "./snake";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants";
import { Treat, createTreat, drawTreat } from "./treats";

mainApp();

function mainApp() {
  const gameBorder = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = gameBorder.getContext("2d");
  let snake: Snake = createSnake();
  let treat: Treat = createTreat();
  drawCanvas(ctx, gameBorder);
  drawSnake(ctx, snake);
  drawTreat(ctx, treat);

  let button = <HTMLInputElement>document.getElementById("startButton");
  // let handler = function () {
  //   startGame(snake, ctx, gameBorder);
  // };

  // function handler(e: Event) {
  //   e.target.removeEventListener(e.type, handler);
  //   startGame(snake, ctx, gameBorder, e, handler);
  // }

  if (button) {
    button.addEventListener("click", function () {
      button.disabled = true;
      startGame(snake, ctx, gameBorder, button, treat);
    });
  }
}

function startGame(
  snake: Snake,
  ctx: CanvasRenderingContext2D,
  gameBorder: HTMLCanvasElement,
  button: HTMLInputElement,
  treat: Treat
) {
  snake.speed = 3;
  window.requestAnimationFrame(() =>
    moveSnake(snake, ctx, gameBorder, button, treat)
  );
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
