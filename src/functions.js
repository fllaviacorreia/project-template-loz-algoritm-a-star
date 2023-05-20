export function setMatriz(MATRIZ_ORIGINAL, MAZE, CLOSED_LIST, CLOSEST_PATH) {
    if (MAZE.length == 0) {
        for (let i = 0; i < MATRIZ_ORIGINAL[0].length; i++) {
            const aux = [];
            for (let j = 0; j < MATRIZ_ORIGINAL[0].length; j++) {
                aux.push(MATRIZ_ORIGINAL[i][j].item);
            }
            MAZE.push(aux);
        }
    }


    for (let row = 0; row < MAZE.length; row++) {
        CLOSED_LIST[row] = [];
        CLOSEST_PATH[row] = [];

        for (let column = 0; column < MAZE[row].length; column++) {
            CLOSED_LIST[row][column] = false;
            CLOSEST_PATH[row][column] = false;
        }
    }
}

export function openListContainsNode(targetNode, OPEN_LIST) {
    let nodeIndex = OPEN_LIST.findIndex(function (node, index) {
        return node.id == targetNode.id;
    });

    if (nodeIndex == -1) {
        return null;
    }

    return nodeIndex;
}

// Used for comparison
export function calculateId(pos, X_LENGTH) {
    return pos.y * X_LENGTH + pos.x;
}

export function euclideanDistance(pos, p5, DEST_NODE) {
    return p5.sqrt(
        p5.sq(DEST_NODE.pos.x - pos.x) + p5.sq(DEST_NODE.pos.y - pos.y)
    );
}

function inClosedList(vector, CLOSED_LIST) {
    return CLOSED_LIST[vector.y][vector.x] == true;
}

function isWall(vector, MAZE, WALL) {
    return MAZE[vector.y][vector.x] == WALL;
}

// Is not wall, is not edges, is not in intervales of X and Y and is not CLOSED_LIST
export function isValid(direction, X_LENGTH, MAZE, WALL, CLOSED_LIST, SW, BS, SH) {
    if (
        direction.x > SW / BS - 1 ||
        direction.x < 0 ||
        direction.y > SH / BS - 1 ||
        direction.y < 0
    ) {
        return false;
    }

    if (direction.x >= X_LENGTH || direction.y >= X_LENGTH) {
        return false;
    }

    if (inClosedList(direction, CLOSED_LIST) || isWall(direction, MAZE, WALL)) {
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
// Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; background-color: rgb(0, 0, 0);
// Start: background-color: rgb(0, 255, 0);
// Finish: background-color: rgb(255, 0, 0);
// Current node: background-color: rgb(255, 255, 0);
// Step: background-color: rgb(128, 0, 128);

export function drawMaze(row, column, p5, BS,
    MAZE, STOPS, CLOSED_LIST, CLOSEST_PATH,
    CURRENT_NODE, DEST_NODE, INIT_NODE) {
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

    // Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; Dungeon 3 [1, 24];
    if ((row == STOPS[0].posI && column == STOPS[0].posJ)
        || (row == STOPS[1].posI && column == STOPS[1].posJ)
        || (row == STOPS[2].posI && column == STOPS[2].posJ)) {
        p5.fill(p5.color(0, 0, 0));
        p5.square(column * BS, row * BS, BS);
    }

    // Verified nodes (Blue)
    if (CLOSED_LIST[row][column]) {
        p5.fill(p5.color(0, 0, 255));
        p5.square(column * BS, row * BS, BS);
    }

    // CLOSES_PATH (Red Shows closest path after finding the destination)
    if (CLOSEST_PATH[row][column]) {
        p5.fill(p5.color(128, 0, 128));
        p5.square(column * BS, row * BS, BS);
    }


    // Destination node (Red)
    if (column == DEST_NODE[3].pos.x && row == DEST_NODE[3].pos.y) {
        p5.fill(p5.color(255, 0, 0));
        p5.square(DEST_NODE[3].pos.x * BS, DEST_NODE[3].pos.y * BS, BS);
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