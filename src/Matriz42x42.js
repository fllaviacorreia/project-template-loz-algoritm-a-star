export const grama = { name: 'grama', item: 1, value: 10 }
export const floresta = { name: 'floresta', item: 2, value: 100 }
export const areia = { name: 'areia', item: 3, value: 20 }
export const montanha = { name: 'montanha', item: 4, value: 150 }
export const agua = { name: 'agua', item: 5, value: 180 }

export const start = {posI: 10, posJ: 10}
export const finish = {posI: 35, posJ: 40}
// OK
const line0 = [
	floresta, floresta, floresta, floresta, floresta, floresta,
	floresta, floresta, floresta, floresta, floresta, floresta,
	floresta, floresta, floresta, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
];

// OK
const line1 = [
	floresta, grama, grama, floresta, grama, floresta,
	grama, floresta, grama, grama, grama, grama,
	grama, grama, grama, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, areia, areia,
	areia, areia, areia, montanha, montanha, montanha,
	montanha, montanha, montanha, areia, areia, areia,
	areia, montanha, montanha, montanha, montanha, montanha,
];

// OK
const line2 = [
	floresta, grama, grama, floresta, grama, grama,
	grama, floresta, grama, floresta, grama, grama,
	grama, grama, grama, grama, montanha, montanha,
	montanha, montanha, montanha, areia, areia, areia,
	areia, areia, areia, areia, montanha, montanha,
	montanha, montanha, areia, areia, areia, areia,
	areia, areia, montanha, montanha, montanha, montanha,
];

//OK
const line3 = [
	floresta, grama, floresta, floresta, grama, floresta,
	grama, floresta, grama, floresta, grama, grama,
	floresta, grama, grama, grama, grama, montanha,
	areia, areia, areia, areia, areia, areia,
	areia, areia, areia, areia, areia, areia,
	areia, areia, areia, areia, areia, areia,
	areia, areia, areia, areia, montanha, montanha,
];

// OK
const line4 = [
	floresta, grama, grama, grama, grama, floresta,
	grama, floresta, grama, floresta, grama, grama,
	floresta, grama, grama, grama, grama, montanha,
	areia, montanha, montanha, areia, areia, areia,
	areia, areia, areia, areia, montanha, montanha,
	montanha, montanha, areia, areia, areia, areia,
	areia, areia, montanha, montanha, montanha, montanha,
];

// OK
const line5 = [
	floresta, grama, floresta, floresta, grama, floresta,
	grama, floresta, grama, floresta, grama, floresta,
	floresta, floresta, grama, grama, grama, montanha,
	areia, montanha, montanha, montanha, areia, areia,
	areia, areia, areia, montanha, montanha, montanha,
	montanha, agua, montanha, areia, areia, areia,
	areia, montanha, agua, montanha, montanha, montanha,
];

// OK
const line6 = [
	floresta, grama, floresta, floresta, grama, floresta,
	grama, grama, grama, floresta, grama, grama,
	grama, grama, grama, grama, grama, montanha,
	areia, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, agua, montanha, montanha, montanha, montanha,
	montanha, montanha, agua, montanha, montanha, montanha,
];

// OK
const line7 = [
	floresta, grama, floresta, floresta, floresta, floresta,
	grama, floresta, floresta, floresta, grama, grama,
	grama, grama, grama, grama, grama, montanha,
	areia, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, agua, montanha, montanha, montanha, montanha,
	montanha, montanha, agua, montanha, grama, montanha,
];

// OK
const line8 = [
	floresta, grama, grama, floresta, grama, grama,
	grama, grama, grama, floresta, grama, grama,
	agua, grama, grama, grama, grama, montanha,
	areia, areia, areia, areia, areia, areia,
	areia, areia, areia, areia, areia, montanha,
	montanha, agua, montanha, montanha, montanha, montanha,
	montanha, montanha, agua, montanha, grama, montanha,
];

// OK
const line9 = [
	floresta, floresta, floresta, floresta, grama, floresta,
	floresta, floresta, grama, grama, grama, agua,
	agua, agua, grama, grama, grama, montanha,
	areia, montanha, montanha, montanha, montanha, montanha,
	areia, montanha, montanha, montanha, areia, montanha,
	montanha, agua, montanha, montanha, montanha, montanha,
	montanha, montanha, agua, montanha, grama, montanha,
];


// OK
const line10 = [
	floresta, grama, grama, floresta, grama, grama,
	grama, grama, grama, grama, agua, agua,
	agua, agua, agua, grama, grama, montanha,
	montanha, montanha, floresta, floresta, floresta, montanha,
	montanha, montanha, floresta, floresta, floresta, floresta,
	floresta, agua, grama, grama, montanha, montanha,
	grama, grama, agua, grama, grama, montanha,
];

// OK
const line11 = [
	floresta, grama, grama, floresta, grama, grama,
	floresta, grama, grama, grama, grama, agua,
	agua, agua, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	agua, agua, agua, agua, agua, agua,
	agua, agua, agua, grama, grama, montanha,
];

// OK
const line12 = [
	floresta, grama, grama, floresta, grama, grama,
	floresta, grama, grama, grama, grama, grama,
	agua, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	agua, grama, grama, floresta, grama, grama,
	grama, grama, grama, floresta, grama, montanha,
];

// OK
const line13 = [
	floresta, grama, grama, floresta, grama, grama,
	floresta, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, floresta,
	floresta, floresta, grama, grama, grama, floresta,
	floresta, floresta, floresta, grama, grama, grama,
	agua, grama, grama, grama, grama, grama,
	grama, floresta, grama, floresta, grama, montanha,
];

// OK
const line14 = [
	floresta, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	agua, grama, floresta, grama, floresta, grama,
	floresta, floresta, grama, floresta, grama, montanha,
];

// OK
const line15 = [
	floresta, grama, floresta, floresta, floresta, floresta,
	floresta, grama, floresta, floresta, floresta, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	agua, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, montanha,
];

// OK
const line16 = [
	floresta, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, agua,
	agua, agua, agua, agua, agua, agua,
	agua, agua, agua, grama, grama, grama,
	grama, grama, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
];

// OK
const line17 = [
	floresta, grama, grama, grama, grama, grama,
	grama, grama, grama, agua, grama, grama,
	floresta, grama, floresta, grama, grama, agua,
	grama, grama, grama, grama, grama, grama,
	grama, grama, agua, grama, grama, grama,
	agua, grama, montanha, areia, areia, areia,
	areia, areia, areia, areia, areia, montanha,
];


// OK
const line18 = [
	floresta, grama, floresta, grama, grama, floresta,
	grama, grama, grama, agua, grama, grama,
	grama, grama, grama, grama, grama, agua,
	grama, floresta, grama, grama, grama, grama,
	floresta, grama, agua, agua, agua, agua,
	agua, grama, montanha, areia, montanha, areia,
	areia, montanha, areia, areia, areia, montanha,
];

// OK
const line19 = [
	floresta, grama, floresta, grama, grama, floresta,
	grama, grama, grama, agua, grama, grama,
	floresta, grama, floresta, grama, grama, grama,
	grama, floresta, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, montanha, areia, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
];


// OK
const line20 = [
	floresta, grama, floresta, grama, grama, floresta,
	grama, grama, grama, agua, grama, grama,
	grama, grama, grama, grama, grama, agua,
	grama, grama, grama, agua, grama, grama,
	grama, grama, agua, grama, grama, grama,
	montanha, grama, montanha, areia, areia, areia,
	areia, areia, areia, areia, areia, montanha,
];

// OK
const line21 = [
	floresta, grama, floresta, grama, grama, floresta,
	grama, grama, grama, agua, grama, floresta,
	floresta, floresta, floresta, grama, grama, agua,
	grama, floresta, grama, grama, grama, grama,
	floresta, grama, grama, grama, grama, grama,
	montanha, grama, montanha, areia, montanha, montanha,
	montanha, montanha, areia, montanha, montanha, montanha,
];

// OK
const line22 = [
	floresta, grama, grama, grama, grama, grama,
	grama, grama, grama, agua, grama, grama,
	grama, grama, grama, grama, grama, agua,
	grama, grama, grama, grama, grama, grama,
	grama, grama, agua, grama, montanha, grama,
	montanha, grama, montanha, areia, areia, areia,
	areia, areia, areia, areia, areia, montanha,
];

// OK
const line23 = [
	floresta, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, floresta,
	floresta, floresta, floresta, grama, grama, agua,
	agua, agua, agua, grama, grama, agua,
	agua, agua, agua, grama, montanha, grama,
	montanha, grama, montanha, montanha, montanha, areia,
	areia, montanha, montanha, montanha, montanha, montanha,
];

// OK
const line24 = [
	floresta, floresta, floresta, floresta, floresta, floresta,
	floresta, grama, grama, floresta, floresta, floresta,
	floresta, floresta, floresta, floresta, floresta, floresta,
	grama, grama, grama, grama, grama, grama,
	grama, grama, agua, grama, montanha, grama,
	montanha, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, montanha,
];

// OK
const line25 = [
	floresta, floresta, floresta, floresta, floresta, floresta,
	grama, grama, floresta, floresta, floresta, floresta,
	floresta, grama, floresta, floresta, floresta, floresta,
	floresta, grama, floresta, floresta, floresta, grama,
	grama, grama, agua, grama, montanha, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, montanha,
];

// OK
const line26 = [
	floresta, grama, floresta, grama, floresta, grama,
	grama, grama, floresta, floresta, floresta, floresta,
	grama, grama, grama, floresta, floresta, floresta,
	floresta, grama, floresta, floresta, floresta, grama,
	grama, grama, agua, grama, montanha, grama,
	grama, grama, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
];

// OK
const line27 = [
	montanha, grama, grama, grama, floresta, grama,
	grama, grama, floresta, floresta, floresta, grama,
	grama, grama, grama, grama, floresta, floresta,
	floresta, grama, grama, grama, grama, grama,
	grama, grama, agua, grama, grama, grama,
	grama, grama, grama, grama, grama, montanha,
	grama, grama, grama, grama, grama, montanha,
];

// OK
const line28 = [
	montanha, grama, grama, grama, floresta, grama,
	grama, grama, floresta, floresta, floresta, floresta,
	grama, grama, grama, floresta, floresta, floresta,
	floresta, grama, floresta, grama, grama, grama,
	grama, grama, agua, grama, grama, grama,
	grama, grama, grama, grama, grama, montanha,
	grama, grama, grama, grama, grama, montanha,
];

// OK
const line29 = [
	montanha, grama, grama, grama, grama, grama,
	grama, grama, grama, floresta, floresta, floresta,
	floresta, grama, floresta, floresta, floresta, floresta,
	grama, grama, floresta, grama, grama, grama,
	grama, grama, agua, agua, agua, grama,
	agua, agua, agua, agua, grama, montanha,
	grama, montanha, montanha, montanha, montanha, montanha,
];

// OK
const line30 = [
	montanha, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, agua, grama, grama,
	grama, grama, grama, grama, grama, montanha,
];

// OK
const line31 = [
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, grama, grama, grama,
	grama, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, grama, grama, montanha, montanha,
	montanha, montanha, grama, grama, grama, grama,
	grama, grama, grama, agua, montanha, montanha,
	montanha, montanha, montanha, montanha, grama, montanha,
];

// OK
const line32 = [
	montanha, areia, areia, areia, areia, areia,
	areia, areia, montanha, grama, grama, grama,
	grama, montanha, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, montanha, grama, grama, grama, grama,
	grama, grama, grama, agua, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
];

// OK
const line33 = [
	montanha, areia, montanha, montanha, areia, areia,
	areia, areia, montanha, grama, grama, grama,
	grama, montanha, grama, grama, grama, grama,
	grama, grama, grama, grama, floresta, grama,
	grama, montanha, grama, grama, agua, agua,
	agua, agua, agua, agua, agua, agua,
	montanha, montanha, agua, agua, montanha, montanha,
];

// OK
const line34 = [
	montanha, areia, montanha, montanha, areia, areia,
	areia, areia, montanha, grama, grama, grama,
	grama, montanha, grama, floresta, grama, grama,
	agua, agua, grama, grama, floresta, grama,
	grama, montanha, grama, grama, agua, agua,
	montanha, agua, agua, agua, agua, agua,
	montanha, montanha, agua, agua, montanha, montanha,
];

// OK
const line35 = [
	montanha, areia, areia, areia, areia, areia,
	areia, areia, montanha, grama, grama, montanha,
	grama, montanha, grama, grama, grama, grama,
	agua, agua, grama, grama, floresta, grama,
	grama, montanha, grama, grama, agua, agua,
	agua, agua, montanha, montanha, agua, agua,
	montanha, montanha, agua, agua, montanha, montanha,
];

// OK
const line36 = [
	montanha, areia, areia, areia, areia, areia,
	areia, areia, montanha, grama, grama, montanha,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, montanha, grama, grama, agua, agua,
	agua, agua, montanha, montanha, agua, agua,
	montanha, montanha, agua, agua, montanha, montanha,
];

// OK
const line37 = [
	montanha, areia, areia, areia, areia, areia,
	areia, montanha, montanha, montanha, montanha, montanha,
	grama, grama, floresta, grama, grama, grama,
	grama, grama, floresta, floresta, floresta, grama,
	grama, montanha, grama, grama, agua, agua,
	agua, agua, agua, agua, agua, agua,
	montanha, montanha, agua, agua, montanha, montanha,
];

// OK
const line38 = [
	montanha, areia, areia, areia, areia, areia,
	areia, areia, areia, montanha, montanha, montanha,
	grama, grama, floresta, grama, agua, agua,
	agua, grama, grama, floresta, grama, grama,
	grama, montanha, grama, grama, agua, agua,
	agua, agua, agua, agua, agua, agua,
	montanha, montanha, agua, agua, montanha, montanha,
];

// OK
const line39 = [
	montanha, areia, areia, areia, areia, areia,
	areia, areia, areia, montanha, montanha, montanha,
	grama, grama, floresta, grama, grama, grama,
	grama, grama, grama, floresta, grama, grama,
	grama, montanha, grama, grama, agua, agua,
	agua, agua, agua, agua, agua, agua,
	agua, agua, agua, agua, montanha, montanha,
];

// OK
const line40 = [
	montanha, areia, areia, areia, areia, areia,
	areia, areia, areia, areia, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, grama, grama, grama, grama, grama,
	grama, montanha, montanha, montanha, agua, agua,
	agua, agua, agua, agua, agua, agua,
	agua, agua, agua, agua, montanha, montanha,
];


// OK
const line41 = [
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
	montanha, montanha, montanha, montanha, montanha, montanha,
];

export const matriz = [line0, line1, line2, line3, line4, line5,
	line6, line7, line8, line9, line10, line11,
	line12, line13, line14, line15, line16, line17,
	line18, line19, line20, line21, line22, line23,
	line24, line25, line26, line27, line28, line29,
	line30, line31, line32, line33, line34, line35,
	line36, line37, line38, line39, line40, line41,
];