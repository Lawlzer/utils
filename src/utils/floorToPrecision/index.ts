/**
 * Floor a number to a specific decimal place
 */

export function floorToPrecision(numberToFloor: number, precision: number): number {
	if (typeof numberToFloor !== 'number') throw new Error(`@lawlzer/helpers - floorToprecision: num was not a number:  num: ${numberToFloor}`);
	if (typeof precision !== 'number') throw new Error(`@lawlzer/helpers - floorToprecision: precision was not a number:  precision: ${precision}`);
	return Math.floor(numberToFloor * Math.pow(10, precision)) / Math.pow(10, precision);
}
