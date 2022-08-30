import path from 'path';

import { getFlag } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will work with a "--flag=value"', () => {
		process.argv[2] = '--flag=value';
		const flag = getFlag('flag');
		expect(flag).toBe('value');
	}); 

	it('will work with a "-flag=value"', () => {
		process.argv[2] = '-flag=value';
		const flag = getFlag('flag');
		expect(flag).toBe('value');
	}); 

	it('will work with a "flag"', () => {
		process.argv[2] = 'flag';
		const flag = getFlag('flag');
		expect(flag).toBe(true);
	}); 

	it('will return undefined if the flag is not found', () => {
		const flag = getFlag('flagThatDoesntExist');
		expect(flag).toBeUndefined();
	});
	
	it('will not parse a number', () => {
		process.argv[2] = '--flag=12';
		const flag = getFlag('flag');
		expect(flag).toBe('12');
	}); 
});