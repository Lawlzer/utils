import { sleep as defaultSleep } from '../sleep';

interface PerformanceTestResult {
	testName: string;
	iterations: number;
	times: number[];
	minTime: number | null;
	maxTime: number | null;
	avgTime: number | null;
	medianTime: number | null;
	stdDev: number | null;
}

/**
 * Runs a performance test on an asynchronous function.
 * @param testName - The name of the test.
 * @param testFn - The asynchronous function to test.
 * @param iterations - The number of times to run the function.
 * @param sleepFn - Optional sleep function to use between iterations.
 * @returns An object containing the performance results.
 */
export async function runPerformanceTest(testName: string, testFn: () => Promise<any>, iterations: number, sleepFn: (duration: number) => Promise<void> = defaultSleep): Promise<PerformanceTestResult> {
	console.info(`Starting performance test: "${testName}" (${iterations} iterations)...`);

	const times: number[] = [];
	for (let i = 0; i < iterations; i++) {
		const start = performance.now();
		await testFn(); // Intentionally not catching errors here, let them propagate
		const end = performance.now();
		times.push(end - start);
		if (iterations > 1 && i < iterations - 1) {
			await sleepFn(1); // Use passed or default sleepFn
		}
	}

	const result: PerformanceTestResult = {
		testName,
		iterations,
		times,
		minTime: null,
		maxTime: null,
		avgTime: null,
		medianTime: null,
		stdDev: null,
	};

	if (times.length === 0) {
		console.info(`Performance test "${testName}" completed with 0 iterations.`);
		return result;
	}

	result.minTime = Math.min(...times);
	result.maxTime = Math.max(...times);
	result.avgTime = times.reduce((sum, time) => sum + time, 0) / times.length;

	// Calculate median
	const sortedTimes = [...times].sort((a, b) => a - b);
	const mid = Math.floor(sortedTimes.length / 2);
	result.medianTime = sortedTimes.length % 2 !== 0 ? sortedTimes[mid] : (sortedTimes[mid - 1] + sortedTimes[mid]) / 2;

	// Calculate standard deviation
	const mean = result.avgTime;
	const variance = times.reduce((sum, time) => sum + Math.pow(time - mean, 2), 0) / times.length;
	result.stdDev = Math.sqrt(variance);

	console.info(`
Performance results for "${testName}":
  Iterations:   ${result.iterations}
  Min Time:     ${result.minTime.toFixed(3)}ms
  Max Time:     ${result.maxTime.toFixed(3)}ms
  Avg Time:     ${result.avgTime.toFixed(3)}ms
  Median Time:  ${result.medianTime.toFixed(3)}ms
  Std Dev:      ${result.stdDev.toFixed(3)}ms
`);

	return result;
}
