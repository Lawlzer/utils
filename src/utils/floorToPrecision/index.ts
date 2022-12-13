/**
 * Floor a number to a specific decimal place
 */

import { assertType } from '../assertType';

export function floorToPrecision(numberToFloor: number, precision: number): number {
	assertType({ numberToFloor }, 'number');
	assertType({ precision }, 'number');
	return Math.floor(numberToFloor * Math.pow(10, precision)) / Math.pow(10, precision);
}
