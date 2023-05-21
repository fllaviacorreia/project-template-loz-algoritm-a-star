import React from "react";
import Sketch from "react-p5";

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
var CLOSED_LIST = []
var OPEN_LIST = [];
var CLOSEST_PATH = [];

var START = null;
var FINISH = null;
var MATRIZ_ORIGINAL = [];

class Node {
    constructor(parentNode, pos, g, h) {
        this.id = calculateId(pos);
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
    setMatriz();
    const {stops, setStops, enterDungeon, setEnterDungeon, nextDungeon} = {...props}
    const setup = (p5, canvasParentRef) => {

        p5.createCanvas(SW, SH).parent(canvasParentRef);

        for (let row = 0; row < MAZE.length; row++) {
            CLOSED_LIST[row] = [];
            CLOSEST_PATH[row] = [];

            for (let column = 0; column < MAZE[row].length; column++) {
                CLOSED_LIST[row][column] = false;
                CLOSEST_PATH[row][column] = false;
            }
        }

        INIT_NODE = new Node(null, p5.createVector(START.posI, START.posJ), MATRIZ_ORIGINAL[START.posI][START.posJ].value, 0);
        CURRENT_NODE = new Node(null, INIT_NODE.pos.copy(), 0, 0);
        DEST_NODE = new Node(null, p5.createVector(FINISH.posI, FINISH.posJ), MATRIZ_ORIGINAL[FINISH.posI][FINISH.posJ].value, 0);
        OPEN_LIST.push(INIT_NODE);
    };

    const draw = (p5) => {
        p5.background(0, 0, 0);

        for (let row = 0; row < MATRIZ_ORIGINAL[0].length; row++) {
            for (let column = 0; column < MATRIZ_ORIGINAL[0].length; column++) {
                drawMaze(row, column, p5)
            }
        }

        if (!IS_FINISHED) {
            aStar(p5);
        }
    }

    if(IS_FINISHED){
        setEnterDungeon(nextDungeon); // para código no caminho p dungeon
        setStops(stops + 1); // para código na dungeon
    }

    return <Sketch setup={setup} draw={draw} />;
};

function setValues(props) {
    MATRIZ_ORIGINAL = props.matriz;
    START = props.start;
    FINISH = props.finish;

    X_LENGTH = MATRIZ_ORIGINAL[0].length;
    SW = X_LENGTH * 10;
    SH = SW;
    BS = 10;

    console.log(MATRIZ_ORIGINAL)
}

function setMatriz() {
    for (let i = 0; i < MATRIZ_ORIGINAL[0].length; i++) {
        const aux = [];
        for (let j = 0; j < MATRIZ_ORIGINAL[0].length; j++) {
            aux.push(MATRIZ_ORIGINAL[i][j].item);
        }
        MAZE.push(aux);
    }

}

function aStar(p5) {
    if(CLOSED_LIST.length > 2 && CLOSED_LIST < 5)
        console.log(MAZE)

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

    // Found destination
    if (CURRENT_NODE.pos.x == DEST_NODE.pos.x && CURRENT_NODE.pos.y == DEST_NODE.pos.y) {
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
        if (isValid(directions[i])) {
            X = directions[i].x
            Y = directions[i].y
            const g = CURRENT_NODE.g + MATRIZ_ORIGINAL[directions[i].x][directions[i].y].value     
            const h = euclideanDistance(directions[i], p5);
            const newNode = new Node(CURRENT_NODE, directions[i], g, h);

            const index = openListContainsNode(newNode);
            if (!index) {
                OPEN_LIST.push(newNode);
            } else if (index && OPEN_LIST[index].f > newNode.f) {
                OPEN_LIST.push(newNode);
                OPEN_LIST.splice(index, 1);
            }
        }
    };

        
    } catch (error) {
        console.log("ERRO X:", X, ", Y:",Y, error)
    }
    
}
function openListContainsNode(targetNode) {
    let nodeIndex = OPEN_LIST.findIndex(function (node, index) {
        return node.id == targetNode.id;
    });

    if (nodeIndex == -1) {
        return null;
    }

    return nodeIndex;
}

// Used for comparison
function calculateId(pos) {
    return (pos.y * X_LENGTH) + pos.x;
}

function euclideanDistance(pos, p5) {
    return p5.sqrt(p5.sq(DEST_NODE.pos.x - pos.x) + p5.sq(DEST_NODE.pos.y - pos.y));
}

function inClosedList(vector) {
    return CLOSED_LIST[vector.y][vector.x] == true;
}

function isWall(vector) {
    return MAZE[vector.y][vector.x] == WALL;
}

// Is not wall, is not edges, is not in intervales of X and Y and is not CLOSED_LIST
function isValid(direction) {
    if (direction.x > ((SW / BS) - 1) || direction.x < 0 || direction.y > ((SH / BS) - 1) || direction.y < 0) {
        return false;
    }

    if(direction.x >= X_LENGTH || direction.y >= X_LENGTH){
        return false;
    }

    if (inClosedList(direction) || isWall(direction)) {
        return false;
    }

    return true;
}

// 1 - grama  background-color: rgb(107, 237, 113);
// 2 - floresta background-color: background-color: rgb(57, 145, 61);
// 3 - areia background-color: rgb(237, 189, 145);
// 4 - montanha background-color: background-color: rgb(117, 44, 23);
// 5 - agua background-color: background-color: rgb(79, 176, 224);
// 6 - parede background-color: rgb(100, 100, 100);
// 7 - caminho background-color: rgb(219, 219, 219);

function drawMaze(row, column, p5) {
    if (MAZE[row][column] == 1) {
        p5.fill(p5.color(107, 237, 113));
        p5.square(column * BS, row * BS, BS);
    }
    if (MAZE[row][column] == 2) {
        p5.fill(p5.color(57, 145, 61));
        p5.square(column * BS, row * BS, BS);
    }
    if (MAZE[row][column] == 3) {
        p5.fill(p5.color(237, 189, 145));
        p5.square(column * BS, row * BS, BS);
    }
    if (MAZE[row][column] == 4) {
        p5.fill(p5.color(117, 44, 23));
        p5.square(column * BS, row * BS, BS);
    }
    if (MAZE[row][column] == 5) {
        p5.fill(p5.color(79, 176, 224));
        p5.square(column * BS, row * BS, BS);
    }
    if (MAZE[row][column] == 6) {
        p5.fill(p5.color(100, 100, 100));
        p5.square(column * BS, row * BS, BS);
    }
    if (MAZE[row][column] == 7) {
        p5.fill(p5.color(219, 219, 219));
        p5.square(column * BS, row * BS, BS);
    }

    // Verified nodes (Blue)
    if (CLOSED_LIST[row][column]) {
        p5.fill(p5.color(0, 0, 255));
        p5.square(column * BS, row * BS, BS);
    }

    // CLOSES_PATH (Red Shows closest path after finding the destination) 
    if (CLOSEST_PATH[row][column]) {
        p5.fill(p5.color(255, 0, 0));
        p5.square(column * BS, row * BS, BS);
    }

    // Destination node (Red)
    if (column == DEST_NODE.pos.x && row == DEST_NODE.pos.y) {
        p5.fill(p5.color(255, 0, 0));
        p5.square(DEST_NODE.pos.x * BS, DEST_NODE.pos.y * BS, BS);
    }

    // Initial node (Green)
    if (column == INIT_NODE.pos.x && row == INIT_NODE.pos.y) {
        p5.fill(p5.color(0, 255, 0));
        p5.square(INIT_NODE.pos.x * BS, INIT_NODE.pos.y * BS, BS);
    }

    // Current node (Yellow)
    if (column == CURRENT_NODE.pos.x && row == CURRENT_NODE.pos.y) {
        p5.fill(p5.color(255, 255, 0));
        p5.square(CURRENT_NODE.pos.x * BS, CURRENT_NODE.pos.y * BS, BS);
    }
}