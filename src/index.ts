import * as _ from "lodash";
import { Direction, Snake, createSnake, drawSnake, moveSnake } from "./snake";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants";
import { Treat, createTreat, drawTreat } from "./treats";

mainApp();

function mainApp() {
  const gameBorder = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = gameBorder.getContext("2d");
  let snakeArr: Array<Snake>;
  snakeArr = [];
  let snake: Snake = createSnake(Direction.Right, 0, 30, 30, 12, false);
  snakeArr.push(snake);
  let treat: Treat = createTreat();
  drawCanvas(ctx, gameBorder);
  drawSnake(ctx, snakeArr);
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
      window.requestAnimationFrame(() =>
        moveSnake(snakeArr, ctx, gameBorder, button, treat)
      );
      // startGame(snakeArr, ctx, gameBorder, button, treat);
    });
  }
}

// function startGame(
//   snakeArr: Array<Snake>,
//   ctx: CanvasRenderingContext2D,
//   gameBorder: HTMLCanvasElement,
//   button: HTMLInputElement,
//   treat: Treat
// ) {
//   window.requestAnimationFrame(() =>
//     moveSnake(snakeArr, ctx, gameBorder, button, treat)
//   );
// }

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
