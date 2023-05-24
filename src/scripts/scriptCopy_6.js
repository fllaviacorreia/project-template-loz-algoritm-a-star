//script onde recebe as paradas automaticamente.
import React from "react";
import Sketch from "react-p5";

import { setMatriz, drawMaze, calculateId, euclideanDistance, isValid, openListContainsNode } from "./functions";

var X_LENGTH = 0;
var SW = 0;
var SH = 0;
var BS = 0;

const WALL = 6;
const MAZE = [];

var INIT_NODE;
var CURRENT_NODE;
var DEST_NODE;
var IS_FINISHED = false;

var X = 0;
var Y = 0;
var FINDED = 0;
var CLOSED_LIST = [];
var OPEN_LIST = [];
var CLOSEST_PATH = [];
var CLOSEST_PATH_COPY = [];

var START = null;
var ORDER = null;
var STOPS = [];
var FINISH = null;

var MATRIZ_ORIGINAL = [];


class Node {
  constructor(parentNode, pos, g, h) {
    this.id = calculateId(pos, X_LENGTH);
    this.parentNode = parentNode;

    this.pos = pos;

    // Cost of the path from START
    this.g = g;

    // Cost estimation of the path until the destination
    this.h = h;

    // Result
    this.f = g + h;
  }
}

export default (props) => {
  setValues(props);
  setMatriz(MATRIZ_ORIGINAL, MAZE, CLOSED_LIST, CLOSEST_PATH);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(SW, SH).parent(canvasParentRef);

    INIT_NODE = new Node(
      null,
      p5.createVector(START.posI, START.posJ),
      MATRIZ_ORIGINAL[START.posI][START.posJ].value,
      0
    );



    CURRENT_NODE = new Node(
      null,
      INIT_NODE.pos.copy(),
      MATRIZ_ORIGINAL[START.posI][START.posJ].value,
      0
    );

    // SET DESTINATIONS
    DEST_NODE = [
      new Node(
        null,
        p5.createVector(STOPS[0].posI, STOPS[0].posJ),
        MATRIZ_ORIGINAL[STOPS[0].posI][STOPS[0].posJ].value,
        0
      ),
      new Node(
        null,
        p5.createVector(STOPS[1].posI, STOPS[1].posJ),
        MATRIZ_ORIGINAL[STOPS[1].posI][STOPS[1].posJ].value,
        0
      ),

      new Node(
        null,
        p5.createVector(STOPS[2].posI, STOPS[2].posJ),
        MATRIZ_ORIGINAL[STOPS[2].posI][STOPS[2].posJ].value,
        0
      ),
      new Node(
        null,
        p5.createVector(FINISH.posI, FINISH.posJ),
        MATRIZ_ORIGINAL[FINISH.posI][FINISH.posJ].value,
        0
      ),
    ]

    OPEN_LIST.push(INIT_NODE);
  };

  if (!MAZE)
    setMatriz(MATRIZ_ORIGINAL, MAZE, CLOSED_LIST, CLOSEST_PATH);

  const draw = (p5) => {
    p5.background(0, 0, 0);

    for (let row = 0; row < MATRIZ_ORIGINAL[0].length; row++) {
      for (let column = 0; column < MATRIZ_ORIGINAL[0].length; column++) {
        drawMaze(row, column, p5, BS, MAZE, STOPS, CLOSED_LIST, CLOSEST_PATH, CURRENT_NODE, DEST_NODE, INIT_NODE, CLOSEST_PATH_COPY);
      }
    }

    if (!IS_FINISHED) {
      aStar(p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

function setValues(props) {
  MATRIZ_ORIGINAL = props.matriz;
  START = props.start;
  FINISH = props.finish;
  STOPS = props.stops;
  ORDER = props.order;
  X_LENGTH = MATRIZ_ORIGINAL[0].length;
  SW = X_LENGTH * 10;
  SH = SW;
  BS = 10;
}

function aStar(p5) {
  if (CLOSED_LIST.length > 2 && CLOSED_LIST < 5) console.log(MAZE);

  if (OPEN_LIST.length == 0) {
    IS_FINISHED = true;
    return;
  }

  let lowestIndex = 0;
  for (let i = 0; i < OPEN_LIST.length; i++) {
    if (OPEN_LIST[i].f < OPEN_LIST[lowestIndex].f) {
      lowestIndex = i;
    }
  }

  const firstElement = OPEN_LIST.splice(lowestIndex, 1);

  CURRENT_NODE = firstElement[0];


 
    CLOSED_LIST[CURRENT_NODE.pos.y][CURRENT_NODE.pos.x] = true;

  // Found a stop
  if (FINDED < 3) {
    if (
      CURRENT_NODE.pos.x == DEST_NODE[FINDED].pos.x &&
      CURRENT_NODE.pos.y == DEST_NODE[FINDED].pos.y
    ) {
      var currentParentNode = CURRENT_NODE.parentNode;

      while (currentParentNode != null) {
        CLOSEST_PATH[currentParentNode.pos.x][currentParentNode.pos.y] = true;
        currentParentNode = currentParentNode.parentNode;
      }

      FINDED++;
      INIT_NODE = new Node(
        null,
        p5.createVector( CURRENT_NODE.pos.y,  CURRENT_NODE.pos.x),
        MATRIZ_ORIGINAL[CURRENT_NODE.pos.y][ CURRENT_NODE.pos.x].value,
        0
      );
      for(let row = 0; row < CLOSED_LIST[0].length; row++){
        for (let column = 0; column < CLOSED_LIST[0].length; column++) {
            CLOSED_LIST[row][column] = false;
        }
      }

    }
  }
  // Found destination
  if (
    CURRENT_NODE.pos.x == DEST_NODE[FINDED].pos.x &&
    CURRENT_NODE.pos.y == DEST_NODE[FINDED].pos.y &&
    FINDED == 3
  ) {
    // Find closest path by parents
    var currentParentNode = CURRENT_NODE.parentNode;
    let foundClosestPath = false;
    while (currentParentNode != null) {
      CLOSEST_PATH[currentParentNode.pos.y][currentParentNode.pos.x] = true;
      currentParentNode = currentParentNode.parentNode;
    }

    IS_FINISHED = true;
    return;
  }

  // Neighbors
  let directions = [];
  // East
  directions[0] = p5.createVector(CURRENT_NODE.pos.x + 1, CURRENT_NODE.pos.y);
  // West
  directions[1] = p5.createVector(CURRENT_NODE.pos.x - 1, CURRENT_NODE.pos.y);
  // North
  directions[2] = p5.createVector(CURRENT_NODE.pos.x, CURRENT_NODE.pos.y - 1);
  // South
  directions[3] = p5.createVector(CURRENT_NODE.pos.x, CURRENT_NODE.pos.y + 1);

  try {
    for (let i = 0; i < directions.length; i++) {
      if (isValid(directions[i], X_LENGTH, MAZE, WALL, CLOSED_LIST, SW, BS, SH)) {
        X = directions[i].x;
        Y = directions[i].y;
        const g =
          CURRENT_NODE.g +
          MATRIZ_ORIGINAL[directions[i].x][directions[i].y].value;
        const h = euclideanDistance(directions[i], p5, DEST_NODE[FINDED]);
        const newNode = new Node(CURRENT_NODE, directions[i], g, h);

        const index = openListContainsNode(newNode, OPEN_LIST);
        if (!index) {
          OPEN_LIST.push(newNode);
        } else if (index && OPEN_LIST[index].f > newNode.f) {
          OPEN_LIST.push(newNode);
          OPEN_LIST.splice(index, 1);
        }
      }
    }
  } catch (error) {
    console.log("ERRO X:", X, ", Y:", Y, error);
  }
}

