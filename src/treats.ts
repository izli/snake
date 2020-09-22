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
    // treatX: 60,
    // treatY: 30,
    radius: 6,
  };
}

function getRandomIntInclusive(max: number, min: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// export function createTreat(ctx: CanvasRenderingContext2D) {
//   let randomX = getRandomIntInclusive(0, 600);
//   let randomY = getRandomIntInclusive(0, 400);
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.arc(randomX, randomY, 6, 0, Math.PI * 2, true);
// }

export function drawTreat(ctx: CanvasRenderingContext2D, treatPos: Treat) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  //   ctx.moveTo(treatPos.treatX, treatPos.treatY);
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
