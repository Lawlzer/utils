import { sleepSync } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will wait for the timeout', async () => {
		const startTime = performance.now();

		sleepSync(100);
		const endTime = performance.now();

		expect(endTime - startTime).toBeGreaterThan(99);
		expect(endTime - startTime).toBeLessThan(110);
	});

	it('will block the thread', async () => {
		const startTime = performance.now();

		setImmediate(() => {
			const endTime = performance.now();

			expect(endTime - startTime).toBeGreaterThan(99);
			expect(endTime - startTime).toBeLessThan(110);
		});
		sleepSync(100);
	});

	it('should throw error for invalid input', () => {
		expect(() => sleepSync(-1)).toThrow('Invalid time value');
		expect(() => sleepSync(NaN)).toThrow('Invalid time value');
		// @ts-expect-error Testing invalid input
		expect(() => sleepSync('invalid')).toThrow('Invalid time value');
	});

	describe('microsleep precision tests', () => {
		const testDurations = [10, 1, 0.1, 0.01];
		const iterations = 100;

		testDurations.forEach((duration) => {
			it(`should sleep for approximately ${duration}ms with < 10% deviation`, () => {
				const times: number[] = [];

				for (let i = 0; i < iterations; i++) {
					const start = performance.now();
					sleepSync(duration);
					const end = performance.now();
					times.push(end - start);
				}

				const minTime = Math.min(...times);
				const maxTime = Math.max(...times);
				const avgTime = times.reduce((sum, time) => sum + time, 0) / times.length;
				const avgPercentDeviation = (Math.abs(avgTime - duration) / duration) * 100;

				// Assert average is within 10% of expected (with a small buffer for 0.01ms)
				const tolerance = duration === 0.01 ? 20 : 10; // Allow 20% for 0.01ms due to system overhead

				// Only log if tolerance is exceeded
				if (avgPercentDeviation >= tolerance) {
					console.debug(`\n${duration}ms results (TOLERANCE EXCEEDED):`);
					console.debug(`  Expected: ${duration}ms`);
					console.debug(`  Min: ${minTime.toFixed(3)}ms (deviation: ${(minTime - duration).toFixed(3)}ms)`);
					console.debug(`  Max: ${maxTime.toFixed(3)}ms (deviation: ${(maxTime - duration).toFixed(3)}ms)`);
					console.debug(`  Avg: ${avgTime.toFixed(3)}ms (deviation: ${(avgTime - duration).toFixed(3)}ms)`);
					console.debug(`  Average percent deviation: ${avgPercentDeviation.toFixed(2)}% (tolerance: ${tolerance}%)`);
				}

				expect(avgPercentDeviation).toBeLessThan(tolerance);
			});
		});

		it('should be more accurate than Date.now() for sub-millisecond durations', () => {
			const duration = 0.1;
			const dateNowTimes: number[] = [];
			const perfNowTimes: number[] = [];

			// Test with Date.now() approach
			for (let i = 0; i < 10; i++) {
				const start = Date.now();
				const target = start + duration;
				while (Date.now() < target) {}
				const end = Date.now();
				dateNowTimes.push(end - start);
			}

			// Test with performance.now() approach (sleepSync)
			for (let i = 0; i < 10; i++) {
				const start = performance.now();
				sleepSync(duration);
				const end = performance.now();
				perfNowTimes.push(end - start);
			}

			const dateNowAvg = dateNowTimes.reduce((a, b) => a + b, 0) / dateNowTimes.length;
			const perfNowAvg = perfNowTimes.reduce((a, b) => a + b, 0) / perfNowTimes.length;

			// sleepSync should be much closer to the target duration
			const sleepSyncIsMoreAccurate = Math.abs(perfNowAvg - duration) < Math.abs(dateNowAvg - duration);

			// Only log if the test would fail
			if (!sleepSyncIsMoreAccurate) {
				console.debug(`\nAccuracy comparison for ${duration}ms (TEST FAILING):`);
				console.debug(`  Date.now() average: ${dateNowAvg.toFixed(3)}ms (${(dateNowAvg / duration).toFixed(1)}x of target)`);
				console.debug(`  sleepSync average: ${perfNowAvg.toFixed(3)}ms (${(perfNowAvg / duration).toFixed(1)}x of target)`);
			}

			expect(sleepSyncIsMoreAccurate).toBe(true);
		});
	});
});
