/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: CANVAS_WIDTH, CANVAS_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_WIDTH", function() { return CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_HEIGHT", function() { return CANVAS_HEIGHT; });
var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 408;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: drawCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCanvas", function() { return drawCanvas; });
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ "./src/snake.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _treats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treats */ "./src/treats.ts");



mainApp();
function mainApp() {
    var gameBorder = document.getElementById("myCanvas");
    var ctx = gameBorder.getContext("2d");
    var snakeArr;
    snakeArr = [];
    var snake = Object(_snake__WEBPACK_IMPORTED_MODULE_0__["createSnake"])(_snake__WEBPACK_IMPORTED_MODULE_0__["Direction"].Right, 10, 24, 24, 12, false);
    snakeArr.push(snake);
    var treat = Object(_treats__WEBPACK_IMPORTED_MODULE_2__["createTreat"])();
    drawCanvas(ctx, gameBorder);
    Object(_snake__WEBPACK_IMPORTED_MODULE_0__["drawSnake"])(ctx, snakeArr);
    Object(_treats__WEBPACK_IMPORTED_MODULE_2__["drawTreat"])(ctx, treat);
    var button = document.getElementById("startButton");
    if (button) {
        button.addEventListener("click", function () {
            button.disabled = true;
            Object(_snake__WEBPACK_IMPORTED_MODULE_0__["handleTime"])(snakeArr, ctx, gameBorder, button, treat);
        });
    }
}
function drawCanvas(ctx, gameBorder) {
    gameBorder.style.width = _constants__WEBPACK_IMPORTED_MODULE_1__["CANVAS_WIDTH"] + "px";
    gameBorder.style.height = _constants__WEBPACK_IMPORTED_MODULE_1__["CANVAS_HEIGHT"] + "px";
    var scale = window.devicePixelRatio;
    gameBorder.width = Math.floor(_constants__WEBPACK_IMPORTED_MODULE_1__["CANVAS_WIDTH"] * scale);
    gameBorder.height = Math.floor(_constants__WEBPACK_IMPORTED_MODULE_1__["CANVAS_HEIGHT"] * scale);
    ctx.scale(scale, scale);
    ctx.strokeRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_1__["CANVAS_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_1__["CANVAS_HEIGHT"]);
}


/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Direction, createSnake, handleTime, moveSnake, drawSnake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSnake", function() { return createSnake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTime", function() { return handleTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveSnake", function() { return moveSnake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSnake", function() { return drawSnake; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _treats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treats */ "./src/treats.ts");



var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Right"] = "right";
    Direction["Left"] = "left";
    Direction["Down"] = "down";
})(Direction || (Direction = {}));
function createSnake(givenDir, givenSpd, posX, posY, givenSize, givenTurned) {
    return {
        direction: givenDir,
        speed: givenSpd,
        posX: posX,
        posY: posY,
        size: givenSize,
        hasTurned: givenTurned,
    };
}
function handleTime(snakeArr, ctx, gameBorder, button, treat) {
    setTimeout(function () {
        var isRunning = moveSnake(snakeArr, ctx, gameBorder, button, treat);
        var eatsTreat = Object(_treats__WEBPACK_IMPORTED_MODULE_2__["doesSnakeEatTreat"])(snakeArr[0], treat);
        if (eatsTreat) {
            treat = Object(_treats__WEBPACK_IMPORTED_MODULE_2__["createTreat"])();
            var newSnakePart = createAnotherSnakePart(snakeArr);
            snakeArr.push(newSnakePart);
            for (var i = 0; i < snakeArr.length; i++) {
                snakeArr[i].speed = snakeArr[i].speed + 10;
            }
        }
        if (isRunning) {
            window.requestAnimationFrame(function () {
                handleTime(snakeArr, ctx, gameBorder, button, treat);
            });
        }
    }, 2000 / snakeArr[0].speed);
}
function moveSnake(snakeArr, ctx, gameBorder, button, treat) {
    document.addEventListener("keydown", logKey(snakeArr));
    var snakeCrashes = checkIfCrashes(snakeArr, _constants__WEBPACK_IMPORTED_MODULE_1__["CANVAS_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_1__["CANVAS_HEIGHT"]);
    if (snakeCrashes == true) {
        ctx.clearRect(0, 0, 600, 600);
        snakeArr.splice(1);
        snakeArr[0].posX = 24;
        snakeArr[0].posY = 24;
        snakeArr[0].speed = 10;
        snakeArr[0].direction = Direction.Right;
        snakeArr[0].hasTurned = false;
        Object(_index__WEBPACK_IMPORTED_MODULE_0__["drawCanvas"])(ctx, gameBorder);
        drawSnake(ctx, snakeArr);
        Object(_treats__WEBPACK_IMPORTED_MODULE_2__["drawTreat"])(ctx, treat);
        button.disabled = false;
        return false;
    }
    else {
        drawSnake(ctx, snakeArr);
        Object(_treats__WEBPACK_IMPORTED_MODULE_2__["drawTreat"])(ctx, treat);
        return true;
    }
}
function drawSnake(ctx, snakeArr) {
    ctx.fillStyle = "green";
    ctx.clearRect(1, 1, 598, 406);
    // let prevX = snakeArr[0].posX;
    // let prevY = snakeArr[0].posY;
    // let prevD = snakeArr[0].direction;
    //CASE Snake hasn't turned
    for (var i = snakeArr.length - 1; i > -1; i--) {
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
        }
        else {
            //Moves to the exact place of previous SnakePart and gets its direction
            snakeArr[i].posX = snakeArr[i - 1].posX;
            snakeArr[i].posY = snakeArr[i - 1].posY;
            snakeArr[i].direction = snakeArr[i - 1].direction;
            drawBoxAndBorder(snakeArr[i], ctx);
        }
    }
}
function drawBoxAndBorder(snake, ctx) {
    ctx.fillRect(snake.posX, snake.posY, snake.size, snake.size);
    ctx.strokeRect(snake.posX, snake.posY, snake.size, snake.size);
}
function logKey(snakeArr) {
    return function (e) {
        switch (e.code) {
            case "ArrowUp":
                if (snakeArr[0].direction !== Direction.Down) {
                    if (snakeArr[0].direction == Direction.Up) {
                        snakeArr[0].hasTurned = false;
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
                        snakeArr[0].hasTurned = true;
                    }
                    snakeArr[0].direction = Direction.Left;
                    return true;
                }
                break;
        }
    };
}
function checkIfCrashes(snakeArr, boardWidth, boardHeight) {
    if (snakeArr[0].direction == Direction.Right &&
        snakeArr[0].posX >= boardWidth - 12) {
        return true;
    }
    if (snakeArr[0].direction == Direction.Down &&
        snakeArr[0].posY >= boardHeight - 12) {
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
function createAnotherSnakePart(snakeArr) {
    var length = snakeArr.length;
    var lastSnake = snakeArr[length - 1];
    var lastSnakeDirection = snakeArr[length - 1].direction;
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


/***/ }),

/***/ "./src/treats.ts":
/*!***********************!*\
  !*** ./src/treats.ts ***!
  \***********************/
/*! exports provided: createTreat, drawTreat, doesSnakeEatTreat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTreat", function() { return createTreat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTreat", function() { return drawTreat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesSnakeEatTreat", function() { return doesSnakeEatTreat; });
function createTreat(randomX, randomY) {
    if (randomX === void 0) { randomX = getRandomIntInclusive(6, 594); }
    if (randomY === void 0) { randomY = getRandomIntInclusive(6, 394); }
    return {
        treatX: randomX,
        treatY: randomY,
        radius: 6,
    };
}
function getRandomIntInclusive(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function drawTreat(ctx, treatPos) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(treatPos.treatX, treatPos.treatY, treatPos.radius, 0, Math.PI * 2, true);
    ctx.fill();
}
function doesSnakeEatTreat(snake, treat) {
    var minX = treat.treatX - treat.radius * 1.5;
    var maxX = treat.treatX + treat.radius / 2;
    var minY = treat.treatY - treat.radius * 1.5;
    var maxY = treat.treatY + treat.radius / 2;
    if (minX <= snake.posX &&
        snake.posX <= maxX &&
        minY <= snake.posY &&
        snake.posY <= maxY) {
        return true;
    }
    return false;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtlLnRzIiwid2VicGFjazovLy8uL3NyYy90cmVhdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBTyxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUM7QUFDekIsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0U7QUFDckI7QUFDRDtBQUV6RCxPQUFPLEVBQUUsQ0FBQztBQUVWLFNBQVMsT0FBTztJQUNkLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxD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LENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQyxJQUNFLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSTtRQUNsQixLQUFLLENBQUMsSUFBSSxJQUFJLElBQUk7UUFDbEIsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxFQUNsQjtRQUNBLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgY29uc3QgQ0FOVkFTX1dJRFRIID0gNjAwO1xuZXhwb3J0IGNvbnN0IENBTlZBU19IRUlHSFQgPSA0MDg7XG4iLCJpbXBvcnQgeyBEaXJlY3Rpb24sIFNuYWtlLCBjcmVhdGVTbmFrZSwgZHJhd1NuYWtlLCBoYW5kbGVUaW1lIH0gZnJvbSBcIi4vc25ha2VcIjtcbmltcG9ydCB7IENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVHJlYXQsIGNyZWF0ZVRyZWF0LCBkcmF3VHJlYXQgfSBmcm9tIFwiLi90cmVhdHNcIjtcblxubWFpbkFwcCgpO1xuXG5mdW5jdGlvbiBtYWluQXBwKCkge1xuICBjb25zdCBnYW1lQm9yZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgY29uc3QgY3R4ID0gZ2FtZUJvcmRlci5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGxldCBzbmFrZUFycjogQXJyYXk8U25ha2U+O1xuICBzbmFrZUFyciA9IFtdO1xuICBsZXQgc25ha2U6IFNuYWtlID0gY3JlYXRlU25ha2UoRGlyZWN0aW9uLlJpZ2h0LCAxMCwgMjQsIDI0LCAxMiwgZmFsc2UpO1xuICBzbmFrZUFyci5wdXNoKHNuYWtlKTtcbiAgbGV0IHRyZWF0OiBUcmVhdCA9IGNyZWF0ZVRyZWF0KCk7XG4gIGRyYXdDYW52YXMoY3R4LCBnYW1lQm9yZGVyKTtcbiAgZHJhd1NuYWtlKGN0eCwgc25ha2VBcnIpO1xuICBkcmF3VHJlYXQoY3R4LCB0cmVhdCk7XG5cbiAgbGV0IGJ1dHRvbiA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRCdXR0b25cIik7XG5cbiAgaWYgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGhhbmRsZVRpbWUoc25ha2VBcnIsIGN0eCwgZ2FtZUJvcmRlciwgYnV0dG9uLCB0cmVhdCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYW52YXMoXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICBnYW1lQm9yZGVyOiBIVE1MQ2FudmFzRWxlbWVudFxuKSB7XG4gIGdhbWVCb3JkZXIuc3R5bGUud2lkdGggPSBDQU5WQVNfV0lEVEggKyBcInB4XCI7XG4gIGdhbWVCb3JkZXIuc3R5bGUuaGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVCArIFwicHhcIjtcblxuICBjb25zdCBzY2FsZSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICBnYW1lQm9yZGVyLndpZHRoID0gTWF0aC5mbG9vcihDQU5WQVNfV0lEVEggKiBzY2FsZSk7XG4gIGdhbWVCb3JkZXIuaGVpZ2h0ID0gTWF0aC5mbG9vcihDQU5WQVNfSEVJR0hUICogc2NhbGUpO1xuXG4gIGN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICBjdHguc3Ryb2tlUmVjdCgwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xufVxuIiwiaW1wb3J0IHsgZHJhd0NhbnZhcyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRyZWF0LCBjcmVhdGVUcmVhdCwgZHJhd1RyZWF0LCBkb2VzU25ha2VFYXRUcmVhdCB9IGZyb20gXCIuL3RyZWF0c1wiO1xuXG5leHBvcnQgdHlwZSBTbmFrZSA9IHtcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHBvc1g6IG51bWJlcjtcbiAgcG9zWTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIGhhc1R1cm5lZDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG4gIFVwID0gXCJ1cFwiLFxuICBSaWdodCA9IFwicmlnaHRcIixcbiAgTGVmdCA9IFwibGVmdFwiLFxuICBEb3duID0gXCJkb3duXCIsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTbmFrZShcbiAgZ2l2ZW5EaXI6IERpcmVjdGlvbixcbiAgZ2l2ZW5TcGQ6IG51bWJlcixcbiAgcG9zWDogbnVtYmVyLFxuICBwb3NZOiBudW1iZXIsXG4gIGdpdmVuU2l6ZTogbnVtYmVyLFxuICBnaXZlblR1cm5lZDogYm9vbGVhblxuKTogU25ha2Uge1xuICByZXR1cm4ge1xuICAgIGRpcmVjdGlvbjogZ2l2ZW5EaXIsXG4gICAgc3BlZWQ6IGdpdmVuU3BkLFxuICAgIHBvc1g6IHBvc1gsXG4gICAgcG9zWTogcG9zWSxcbiAgICBzaXplOiBnaXZlblNpemUsXG4gICAgaGFzVHVybmVkOiBnaXZlblR1cm5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRpbWUoXG4gIHNuYWtlQXJyOiBBcnJheTxTbmFrZT4sXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICBnYW1lQm9yZGVyOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgYnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50LFxuICB0cmVhdDogVHJlYXRcbikge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaXNSdW5uaW5nID0gbW92ZVNuYWtlKHNuYWtlQXJyLCBjdHgsIGdhbWVCb3JkZXIsIGJ1dHRvbiwgdHJlYXQpO1xuXG4gICAgbGV0IGVhdHNUcmVhdCA9IGRvZXNTbmFrZUVhdFRyZWF0KHNuYWtlQXJyWzBdLCB0cmVhdCk7XG5cbiAgICBpZiAoZWF0c1RyZWF0KSB7XG4gICAgICB0cmVhdCA9IGNyZWF0ZVRyZWF0KCk7XG4gICAgICBsZXQgbmV3U25ha2VQYXJ0ID0gY3JlYXRlQW5vdGhlclNuYWtlUGFydChzbmFrZUFycik7XG4gICAgICBzbmFrZUFyci5wdXNoKG5ld1NuYWtlUGFydCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNuYWtlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNuYWtlQXJyW2ldLnNwZWVkID0gc25ha2VBcnJbaV0uc3BlZWQgKyAxMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGhhbmRsZVRpbWUoc25ha2VBcnIsIGN0eCwgZ2FtZUJvcmRlciwgYnV0dG9uLCB0cmVhdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIDIwMDAgLyBzbmFrZUFyclswXS5zcGVlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlU25ha2UoXG4gIHNuYWtlQXJyOiBBcnJheTxTbmFrZT4sXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICBnYW1lQm9yZGVyOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgYnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50LFxuICB0cmVhdDogVHJlYXRcbikge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsb2dLZXkoc25ha2VBcnIpKTtcbiAgbGV0IHNuYWtlQ3Jhc2hlcyA9IGNoZWNrSWZDcmFzaGVzKHNuYWtlQXJyLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuXG4gIGlmIChzbmFrZUNyYXNoZXMgPT0gdHJ1ZSkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNjAwLCA2MDApO1xuICAgIHNuYWtlQXJyLnNwbGljZSgxKTtcbiAgICBzbmFrZUFyclswXS5wb3NYID0gMjQ7XG4gICAgc25ha2VBcnJbMF0ucG9zWSA9IDI0O1xuICAgIHNuYWtlQXJyWzBdLnNwZWVkID0gMTA7XG4gICAgc25ha2VBcnJbMF0uZGlyZWN0aW9uID0gRGlyZWN0aW9uLlJpZ2h0O1xuICAgIHNuYWtlQXJyWzBdLmhhc1R1cm5lZCA9IGZhbHNlO1xuICAgIGRyYXdDYW52YXMoY3R4LCBnYW1lQm9yZGVyKTtcbiAgICBkcmF3U25ha2UoY3R4LCBzbmFrZUFycik7XG4gICAgZHJhd1RyZWF0KGN0eCwgdHJlYXQpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBkcmF3U25ha2UoY3R4LCBzbmFrZUFycik7XG4gICAgZHJhd1RyZWF0KGN0eCwgdHJlYXQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3U25ha2UoXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICBzbmFrZUFycjogQXJyYXk8U25ha2U+XG4pIHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgY3R4LmNsZWFyUmVjdCgxLCAxLCA1OTgsIDQwNik7XG4gIC8vIGxldCBwcmV2WCA9IHNuYWtlQXJyWzBdLnBvc1g7XG4gIC8vIGxldCBwcmV2WSA9IHNuYWtlQXJyWzBdLnBvc1k7XG4gIC8vIGxldCBwcmV2RCA9IHNuYWtlQXJyWzBdLmRpcmVjdGlvbjtcblxuICAvL0NBU0UgU25ha2UgaGFzbid0IHR1cm5lZFxuICBmb3IgKGxldCBpID0gc25ha2VBcnIubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAvL1NuYWtlJ3MgaGVhZCdzIG1vdmVtZW50XG4gICAgICAvL0dvaW5nIHJpZ2h0XG4gICAgICBpZiAoc25ha2VBcnJbaV0uZGlyZWN0aW9uID09IERpcmVjdGlvbi5SaWdodCkge1xuICAgICAgICBzbmFrZUFycltpXS5wb3NYID0gc25ha2VBcnJbaV0ucG9zWCArIHNuYWtlQXJyW2ldLnNpemU7XG4gICAgICAgIGRyYXdCb3hBbmRCb3JkZXIoc25ha2VBcnJbaV0sIGN0eCk7XG4gICAgICB9XG4gICAgICAvL0dvaW5nIGRvd25cbiAgICAgIGVsc2UgaWYgKHNuYWtlQXJyW2ldLmRpcmVjdGlvbiA9PSBEaXJlY3Rpb24uRG93bikge1xuICAgICAgICBzbmFrZUFycltpXS5wb3NZID0gc25ha2VBcnJbaV0ucG9zWSArIHNuYWtlQXJyW2ldLnNpemU7XG4gICAgICAgIGRyYXdCb3hBbmRCb3JkZXIoc25ha2VBcnJbaV0sIGN0eCk7XG4gICAgICB9XG4gICAgICAvL0dvaW5nIGxlZnRcbiAgICAgIGVsc2UgaWYgKHNuYWtlQXJyW2ldLmRpcmVjdGlvbiA9PSBEaXJlY3Rpb24uTGVmdCkge1xuICAgICAgICBzbmFrZUFycltpXS5wb3NYID0gc25ha2VBcnJbaV0ucG9zWCAtIHNuYWtlQXJyW2ldLnNpemU7XG4gICAgICAgIGRyYXdCb3hBbmRCb3JkZXIoc25ha2VBcnJbaV0sIGN0eCk7XG4gICAgICB9XG4gICAgICAvL0dvaW5nIHVwXG4gICAgICBlbHNlIGlmIChzbmFrZUFycltpXS5kaXJlY3Rpb24gPT0gRGlyZWN0aW9uLlVwKSB7XG4gICAgICAgIHNuYWtlQXJyW2ldLnBvc1kgPSBzbmFrZUFycltpXS5wb3NZIC0gc25ha2VBcnJbaV0uc2l6ZTtcbiAgICAgICAgZHJhd0JveEFuZEJvcmRlcihzbmFrZUFycltpXSwgY3R4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9Nb3ZlcyB0byB0aGUgZXhhY3QgcGxhY2Ugb2YgcHJldmlvdXMgU25ha2VQYXJ0IGFuZCBnZXRzIGl0cyBkaXJlY3Rpb25cbiAgICAgIHNuYWtlQXJyW2ldLnBvc1ggPSBzbmFrZUFycltpIC0gMV0ucG9zWDtcbiAgICAgIHNuYWtlQXJyW2ldLnBvc1kgPSBzbmFrZUFycltpIC0gMV0ucG9zWTtcbiAgICAgIHNuYWtlQXJyW2ldLmRpcmVjdGlvbiA9IHNuYWtlQXJyW2kgLSAxXS5kaXJlY3Rpb247XG4gICAgICBkcmF3Qm94QW5kQm9yZGVyKHNuYWtlQXJyW2ldLCBjdHgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3Qm94QW5kQm9yZGVyKHNuYWtlOiBTbmFrZSwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgY3R4LmZpbGxSZWN0KHNuYWtlLnBvc1gsIHNuYWtlLnBvc1ksIHNuYWtlLnNpemUsIHNuYWtlLnNpemUpO1xuICBjdHguc3Ryb2tlUmVjdChzbmFrZS5wb3NYLCBzbmFrZS5wb3NZLCBzbmFrZS5zaXplLCBzbmFrZS5zaXplKTtcbn1cblxuZnVuY3Rpb24gbG9nS2V5KHNuYWtlQXJyOiBBcnJheTxTbmFrZT4pIHtcbiAgcmV0dXJuIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgIGlmIChzbmFrZUFyclswXS5kaXJlY3Rpb24gIT09IERpcmVjdGlvbi5Eb3duKSB7XG4gICAgICAgICAgaWYgKHNuYWtlQXJyWzBdLmRpcmVjdGlvbiA9PSBEaXJlY3Rpb24uVXApIHtcbiAgICAgICAgICAgIHNuYWtlQXJyWzBdLmhhc1R1cm5lZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbmFrZUFyclswXS5oYXNUdXJuZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzbmFrZUFyclswXS5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uVXA7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIGlmIChzbmFrZUFyclswXS5kaXJlY3Rpb24gIT09IERpcmVjdGlvbi5VcCkge1xuICAgICAgICAgIGlmIChzbmFrZUFyclswXS5kaXJlY3Rpb24gPT0gRGlyZWN0aW9uLkRvd24pIHtcbiAgICAgICAgICAgIHNuYWtlQXJyWzBdLmhhc1R1cm5lZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbmFrZUFyclswXS5oYXNUdXJuZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzbmFrZUFyclswXS5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uRG93bjtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIGlmIChzbmFrZUFyclswXS5kaXJlY3Rpb24gIT09IERpcmVjdGlvbi5MZWZ0KSB7XG4gICAgICAgICAgaWYgKHNuYWtlQXJyWzBdLmRpcmVjdGlvbiA9PSBEaXJlY3Rpb24uUmlnaHQpIHtcbiAgICAgICAgICAgIHNuYWtlQXJyWzBdLmhhc1R1cm5lZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbmFrZUFyclswXS5oYXNUdXJuZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzbmFrZUFyclswXS5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uUmlnaHQ7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgIGlmIChzbmFrZUFyclswXS5kaXJlY3Rpb24gIT09IERpcmVjdGlvbi5SaWdodCkge1xuICAgICAgICAgIGlmIChzbmFrZUFyclswXS5kaXJlY3Rpb24gPT0gRGlyZWN0aW9uLkxlZnQpIHtcbiAgICAgICAgICAgIHNuYWtlQXJyWzBdLmhhc1R1cm5lZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbmFrZUFyclswXS5oYXNUdXJuZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzbmFrZUFyclswXS5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uTGVmdDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZDcmFzaGVzKFxuICBzbmFrZUFycjogQXJyYXk8U25ha2U+LFxuICBib2FyZFdpZHRoOiBudW1iZXIsXG4gIGJvYXJkSGVpZ2h0OiBudW1iZXJcbikge1xuICBpZiAoXG4gICAgc25ha2VBcnJbMF0uZGlyZWN0aW9uID09IERpcmVjdGlvbi5SaWdodCAmJlxuICAgIHNuYWtlQXJyWzBdLnBvc1ggPj0gYm9hcmRXaWR0aCAtIDEyXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChcbiAgICBzbmFrZUFyclswXS5kaXJlY3Rpb24gPT0gRGlyZWN0aW9uLkRvd24gJiZcbiAgICBzbmFrZUFyclswXS5wb3NZID49IGJvYXJkSGVpZ2h0IC0gMTJcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHNuYWtlQXJyWzBdLmRpcmVjdGlvbiA9PSBEaXJlY3Rpb24uTGVmdCAmJiBzbmFrZUFyclswXS5wb3NYIDw9IDEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoc25ha2VBcnJbMF0uZGlyZWN0aW9uID09IERpcmVjdGlvbi5VcCAmJiBzbmFrZUFyclswXS5wb3NZIDw9IDEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFub3RoZXJTbmFrZVBhcnQoc25ha2VBcnI6IEFycmF5PFNuYWtlPik6IFNuYWtlIHtcbiAgbGV0IGxlbmd0aCA9IHNuYWtlQXJyLmxlbmd0aDtcbiAgbGV0IGxhc3RTbmFrZSA9IHNuYWtlQXJyW2xlbmd0aCAtIDFdO1xuICBsZXQgbGFzdFNuYWtlRGlyZWN0aW9uID0gc25ha2VBcnJbbGVuZ3RoIC0gMV0uZGlyZWN0aW9uO1xuXG4gIGlmIChsYXN0U25ha2VEaXJlY3Rpb24gPT0gRGlyZWN0aW9uLlVwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdGlvbjogbGFzdFNuYWtlLmRpcmVjdGlvbixcbiAgICAgIHNwZWVkOiBsYXN0U25ha2Uuc3BlZWQsXG4gICAgICBwb3NYOiBsYXN0U25ha2UucG9zWCxcbiAgICAgIHBvc1k6IGxhc3RTbmFrZS5wb3NZICsgbGFzdFNuYWtlLnNpemUsXG4gICAgICBzaXplOiBsYXN0U25ha2Uuc2l6ZSxcbiAgICAgIGhhc1R1cm5lZDogbGFzdFNuYWtlLmhhc1R1cm5lZCxcbiAgICB9O1xuICB9XG4gIGlmIChsYXN0U25ha2VEaXJlY3Rpb24gPT0gRGlyZWN0aW9uLlJpZ2h0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdGlvbjogbGFzdFNuYWtlLmRpcmVjdGlvbixcbiAgICAgIHNwZWVkOiBsYXN0U25ha2Uuc3BlZWQsXG4gICAgICBwb3NYOiBsYXN0U25ha2UucG9zWCAtIDEyLFxuICAgICAgcG9zWTogbGFzdFNuYWtlLnBvc1ksXG4gICAgICBzaXplOiBsYXN0U25ha2Uuc2l6ZSxcbiAgICAgIGhhc1R1cm5lZDogbGFzdFNuYWtlLmhhc1R1cm5lZCxcbiAgICB9O1xuICB9XG4gIGlmIChsYXN0U25ha2VEaXJlY3Rpb24gPT0gRGlyZWN0aW9uLkRvd24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0aW9uOiBsYXN0U25ha2UuZGlyZWN0aW9uLFxuICAgICAgc3BlZWQ6IGxhc3RTbmFrZS5zcGVlZCxcbiAgICAgIHBvc1g6IGxhc3RTbmFrZS5wb3NYLFxuICAgICAgcG9zWTogbGFzdFNuYWtlLnBvc1kgLSBsYXN0U25ha2Uuc2l6ZSxcbiAgICAgIHNpemU6IGxhc3RTbmFrZS5zaXplLFxuICAgICAgaGFzVHVybmVkOiBsYXN0U25ha2UuaGFzVHVybmVkLFxuICAgIH07XG4gIH1cbiAgaWYgKGxhc3RTbmFrZURpcmVjdGlvbiA9PSBEaXJlY3Rpb24uTGVmdCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXJlY3Rpb246IGxhc3RTbmFrZS5kaXJlY3Rpb24sXG4gICAgICBzcGVlZDogbGFzdFNuYWtlLnNwZWVkLFxuICAgICAgcG9zWDogbGFzdFNuYWtlLnBvc1ggKyBsYXN0U25ha2Uuc2l6ZSxcbiAgICAgIHBvc1k6IGxhc3RTbmFrZS5wb3NZLFxuICAgICAgc2l6ZTogbGFzdFNuYWtlLnNpemUsXG4gICAgICBoYXNUdXJuZWQ6IGxhc3RTbmFrZS5oYXNUdXJuZWQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU25ha2UgfSBmcm9tIFwiLi9zbmFrZVwiO1xuZXhwb3J0IHR5cGUgVHJlYXQgPSB7XG4gIHRyZWF0WDogbnVtYmVyO1xuICB0cmVhdFk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJlYXQoXG4gIHJhbmRvbVg6IG51bWJlciA9IGdldFJhbmRvbUludEluY2x1c2l2ZSg2LCA1OTQpLFxuICByYW5kb21ZOiBudW1iZXIgPSBnZXRSYW5kb21JbnRJbmNsdXNpdmUoNiwgMzk0KVxuKTogVHJlYXQge1xuICByZXR1cm4ge1xuICAgIHRyZWF0WDogcmFuZG9tWCxcbiAgICB0cmVhdFk6IHJhbmRvbVksXG4gICAgcmFkaXVzOiA2LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWF4OiBudW1iZXIsIG1pbjogbnVtYmVyKSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1RyZWF0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0cmVhdFBvczogVHJlYXQpIHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyhcbiAgICB0cmVhdFBvcy50cmVhdFgsXG4gICAgdHJlYXRQb3MudHJlYXRZLFxuICAgIHRyZWF0UG9zLnJhZGl1cyxcbiAgICAwLFxuICAgIE1hdGguUEkgKiAyLFxuICAgIHRydWVcbiAgKTtcbiAgY3R4LmZpbGwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvZXNTbmFrZUVhdFRyZWF0KHNuYWtlOiBTbmFrZSwgdHJlYXQ6IFRyZWF0KSB7XG4gIGxldCBtaW5YID0gdHJlYXQudHJlYXRYIC0gdHJlYXQucmFkaXVzICogMS41O1xuICBsZXQgbWF4WCA9IHRyZWF0LnRyZWF0WCArIHRyZWF0LnJhZGl1cyAvIDI7XG4gIGxldCBtaW5ZID0gdHJlYXQudHJlYXRZIC0gdHJlYXQucmFkaXVzICogMS41O1xuICBsZXQgbWF4WSA9IHRyZWF0LnRyZWF0WSArIHRyZWF0LnJhZGl1cyAvIDI7XG4gIGlmIChcbiAgICBtaW5YIDw9IHNuYWtlLnBvc1ggJiZcbiAgICBzbmFrZS5wb3NYIDw9IG1heFggJiZcbiAgICBtaW5ZIDw9IHNuYWtlLnBvc1kgJiZcbiAgICBzbmFrZS5wb3NZIDw9IG1heFlcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9