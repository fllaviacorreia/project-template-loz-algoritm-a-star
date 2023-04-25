import React from "react";
import Sketch from "react-p5";

// OK
const line0 = [
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
];

// OK
const line1 = [
	1, 0, 0, 0, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	0, 0, 0, 1, 1, 1, 1,
];

// OK
const line2 = [
	1, 0, 0, 0, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 0,
	0, 1, 1, 1, 1, 1, 1,
	0, 0, 0, 1, 1, 1, 1,
];


// OK
const line3 = [
	1, 1, 0, 1, 1, 1, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1,
	0, 0, 0, 1, 1, 1, 1,
];


// OK
const line4 = [
	1, 1, 0, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 0, 0,
	0, 1, 1, 1, 1, 1, 1,
	1, 1, 0, 1, 1, 1, 1,
];



// OK
const line5 = [
	1, 1, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 0, 1, 1, 1, 1,
];



// OK
const line6 = [
	1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 0, 1, 1, 1, 1,
];



// OK
const line7 = [
	1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 0,
	0, 0, 0, 0, 0, 1, 1,
];

// OK
const line8 = [
	1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 0, 0,
	0, 0, 1, 1, 1, 0, 0,
	0, 0, 0, 0, 0, 1, 1,
];


// OK
const line9 = [
	1, 1, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 0, 0, 0,
	0, 0, 1, 1, 1, 0, 0,
	0, 0, 0, 0, 0, 1, 1,
];

// OK
const line10 = [
	1, 1, 1, 0, 1, 1, 1,
	0, 1, 1, 1, 0, 0, 0,
	0, 0, 1, 1, 1, 0, 0,
	0, 0, 0, 0, 0, 1, 1,
];



// OK
const line11 = [
	1, 1, 1, 0, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1,
	1, 0, 1, 1, 1, 1, 1,
];



// OK
const line12 = [
	1, 1, 0, 0, 0, 1, 1,
	0, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1,
	1, 0, 1, 1, 1, 1, 1,
];



// OK
const line13 = [
	1, 1, 0, 0, 0, 1, 1,
	0, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 0, 1, 1, 1,
];


// OK
const line14 = [
	1, 1, 0, 0, 0, 1, 1,
	0, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 0, 1, 1, 1,
];


// OK
const line15 = [
	1, 1, 1, 1, 1, 1, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
	1, 1, 1, 0, 1, 1, 1,
];

// OK
const line16 = [
	1, 1, 1, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 0, 1, 1, 1,
];

// OK
const line17 = [
	1, 1, 1, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 0, 1, 1, 1,
];

// OK
const line18 = [
	1, 1, 0, 0, 0, 1, 1,
	0, 1, 1, 0, 0, 0, 1,
	1, 1, 1, 1, 0, 0, 0,
	0, 1, 1, 0, 1, 1, 1,
];

// OK
const line19 = [
	1, 1, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1,
	1, 1, 1, 1, 0, 0, 0,
	0, 1, 1, 0, 1, 1, 1,
];

// OK
const line20 = [
	1, 1, 0, 0, 0, 1, 1,
	0, 1, 1, 0, 0, 0, 1,
	1, 1, 1, 1, 0, 0, 0,
	0, 1, 1, 0, 1, 1, 1,
];

// OK
const line21 = [
	1, 1, 1, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 0, 1, 1, 1,
];


// OK
const line22 = [
	1, 1, 1, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 1,
	0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1, 1, 1,
];


// OK
const line23 = [
	1, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
];

// OK
const line24 = [
	1, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
];

// OK
const line25 = [
	1, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 1, 1, 0, 0,
	0, 0, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
];
// OK
const line26 = [
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 0,
	0, 0, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
];
// OK
const line27 = [
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1,
];

const matriz = [
	line0, line1, line2, line3, line4, line5, line6,
	line7, line8, line9, line10, line11, line12, line13,
	line14, line15, line16, line17, line18, line19, line20,
	line21, line22, line23, line24, line25, line26, line27,
];

const SW = 560; // 20*31
const SH = 560; // 20*21

const X_LENGTH = 28;

const BS = 20;

const WALL = 1;

const MAZE = matriz;

var initNode;
var currentNode;
var destNode;
var isFinished = false;

class Node {
	constructor(parentNode, pos, g, h) {
		this.id = calculateId(pos);
		this.parentNode = parentNode;

		this.pos = pos;

		// Cost of the path from start
		this.g = g;

		// Cost estimation of the path until the destination
		this.h = h;

		// Result
		this.f = g + h;
	}
}

var closedList = []
var openList = [];
var closestPath = [];


export default (props) => {
function setup() {
	createCanvas(SW, SH);

	for (let row = 0; row < MAZE.length; row++) {
		closedList[row] = [];
		closestPath[row] = [];
		
		for (let column = 0; column < MAZE[row].length; column++) {
			closedList[row][column] = false;
			closestPath[row][column] = false;
		}
	}

	initNode = new Node(null, createVector(14, 27), 0, 0);
	currentNode = new Node(null, initNode.pos.copy(), 0, 0);;
	destNode = new Node(null, createVector(13, 4), 0, 0);

	openList.push(initNode);
}

function draw() {
	background(200, 200, 200);

	for (let row = 0; row < MAZE.length; row++) {
		for (let column = 0; column < MAZE[row].length; column++) {
			drawMaze(row, column)
		}
	}

	if (!isFinished) {
		aStar();
	}
}

return <Sketch setup={setup} draw={draw} />;
};


function aStar() {

	if (openList.length == 0) {
		isFinished = true;
		return;
	}

	let lowestIndex = 0;
	for (let i = 0; i < openList.length; i++) {
		if (openList[i].f < openList[lowestIndex].f) {
			lowestIndex = i;
		}
	}

	const firstElement = openList.splice(lowestIndex, 1);
	currentNode = firstElement[0];

	closedList[currentNode.pos.y][currentNode.pos.x] = true;

	// Found destination
	if (currentNode.pos.x == destNode.pos.x && currentNode.pos.y == destNode.pos.y) {
		// Find closest path by parents
		var currentParentNode = currentNode.parentNode;
		let foundClosestPath = false;
		while (currentParentNode != null) {
			closestPath[currentParentNode.pos.y][currentParentNode.pos.x] = true;
			currentParentNode = currentParentNode.parentNode;
		}
		isFinished = true;
		return;
	}

	// Neighbors
	let directions = [];
	// East
	directions[0] = createVector(currentNode.pos.x + 1, currentNode.pos.y);
	// West
	directions[1] = createVector(currentNode.pos.x - 1, currentNode.pos.y);
	// North
	directions[2] = createVector(currentNode.pos.x, currentNode.pos.y - 1);
	// South
	directions[3] = createVector(currentNode.pos.x, currentNode.pos.y + 1);


	for (let i = 0; i < directions.length; i++) {
		if (isValid(directions[i])) {
			const g = currentNode.g + 1;
			const h = euclideanDistance(directions[i]);
			const newNode = new Node(currentNode, directions[i], g, h);

			const index = openListContainsNode(newNode);
			if (!index) {
				openList.push(newNode);
			} else if (index && openList[index].f > newNode.f) {
				openList.push(newNode);
				openList.splice(index, 1);
			}
		}
	};
}

function openListContainsNode(targetNode) {
	let nodeIndex = openList.findIndex(function (node, index) {
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

function euclideanDistance(pos) {
	return sqrt(sq(destNode.pos.x - pos.x) + sq(destNode.pos.y - pos.y));
}

function inClosedList(vector) {
	return closedList[vector.y][vector.x] == true;
}

function isWall(vector) {
	return MAZE[vector.y][vector.x] == 1;
}

// Is not wall, is not edges and is not closedList
function isValid(direction) {
	if (direction.x > ((SW / BS) - 1) || direction.x < 0 || direction.y > ((SH / BS) - 1) || direction.y < 0) {
		return false;
	}

	if (inClosedList(direction) || isWall(direction)) {
		return false;
	}

	return true;
}

function drawMaze(row, column) {
	// Simple square
	if (MAZE[row][column] == 1) {
		fill(color(100, 100, 100));
		square(column * BS, row * BS, BS);
	}

	// Verified nodes (Blue)
	if (closedList[row][column]) {
		fill(color(0, 0, 255));
		square(column * BS, row * BS, BS);
	}

	// ClosestPath (Red Shows closest path after finding the destination) 
	if (closestPath[row][column]) {
		fill(color(255, 0, 0));
		square(column * BS, row * BS, BS);
	}

	// Destination node (Red)
	if (column == destNode.pos.x && row == destNode.pos.y) {
		fill(color(255, 0, 0));
		square(destNode.pos.x * BS, destNode.pos.y * BS, BS);
	}

	// Initial node (Green)
	if (column == initNode.pos.x && row == initNode.pos.y) {
		fill(color(0, 255, 0));
		square(initNode.pos.x * BS, initNode.pos.y * BS, BS);
	}

	// Current node (Yellow)
	if (column == currentNode.pos.x && row == currentNode.pos.y) {
		fill(color(255, 255, 0));
		square(currentNode.pos.x * BS, currentNode.pos.y * BS, BS);
	}
}