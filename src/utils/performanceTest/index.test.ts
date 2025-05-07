// Note: No need to import describe, expect, it, beforeEach, afterEach from jest explicitly
// They are globally available when running via Jest.

import { sleep } from '../sleep';
import { runPerformanceTest } from './index';

// Mock sleep using Jest
jest.mock('../sleep', () => ({
	sleep: jest.fn().mockResolvedValue(undefined),
}));

// --- Mock performance.now ---
let performanceNowSpy: jest.SpyInstance;
let mockTime: number;
const MOCK_DELAY = 10; // ms

beforeEach(() => {
	mockTime = 1000;
	// Use jest.spyOn
	performanceNowSpy = jest.spyOn(performance, 'now').mockImplementation(() => {
		const currentTime = mockTime;
		mockTime += MOCK_DELAY;
		return currentTime;
	});
	// jest.clearAllMocks() is often useful if mocks are reused across describe blocks,
	// but inside beforeEach is fine too if needed. Let's clear mocks specifically.
	(sleep as jest.Mock).mockClear();
});

afterEach(() => {
	// Restore the original implementation
	performanceNowSpy.mockRestore();
});
// --- End Mock performance.now ---

describe('runPerformanceTest', () => {
	const simpleTestFn = async () => {
		await Promise.resolve();
	};

	it('should run the test function the specified number of iterations', async () => {
		// Use jest.fn() to wrap the function for spying
		const testFnSpy = jest.fn(simpleTestFn);
		const iterations = 5;
		await runPerformanceTest('test-iterations', testFnSpy, iterations);
		expect(testFnSpy).toHaveBeenCalledTimes(iterations);
	});

	it('should calculate metrics reasonably for a fixed-duration function', async () => {
		const iterations = 10;
		const results = await runPerformanceTest('test-fixed-duration', simpleTestFn, iterations);

		expect(results.iterations).toBe(iterations);
		expect(results.times.length).toBe(iterations);

		results.times.forEach((time) => {
			// Jest's toBeCloseTo defaults to 2 decimal places
			expect(time).toBeCloseTo(MOCK_DELAY);
		});

		expect(results.minTime).toBeCloseTo(MOCK_DELAY);
		expect(results.maxTime).toBeCloseTo(MOCK_DELAY);
		expect(results.avgTime).toBeCloseTo(MOCK_DELAY);
		expect(results.medianTime).toBeCloseTo(MOCK_DELAY);
		expect(results.stdDev).toBeCloseTo(0);

		// Check Jest mock calls
		expect(sleep).toHaveBeenCalledTimes(iterations - 1);
		expect(sleep).toHaveBeenCalledWith(1);
	});

	it('should handle zero iterations', async () => {
		const testFnSpy = jest.fn(simpleTestFn);
		const iterations = 0;
		const results = await runPerformanceTest('test-zero-iterations', testFnSpy, iterations);

		expect(testFnSpy).not.toHaveBeenCalled();
		expect(results.iterations).toBe(0);
		expect(results.times).toEqual([]);
		expect(results.minTime).toBeNull();
		expect(results.maxTime).toBeNull();
		expect(results.avgTime).toBeNull();
		expect(results.medianTime).toBeNull();
		expect(results.stdDev).toBeNull();
		expect(sleep).not.toHaveBeenCalled();
	});

	it('should handle one iteration', async () => {
		const iterations = 1;
		const results = await runPerformanceTest('test-one-iteration', simpleTestFn, iterations);

		expect(results.iterations).toBe(1);
		expect(results.times.length).toBe(1);
		expect(results.times[0]).toBeCloseTo(MOCK_DELAY);
		expect(results.minTime).toBeCloseTo(MOCK_DELAY);
		expect(results.maxTime).toBeCloseTo(MOCK_DELAY);
		expect(results.avgTime).toBeCloseTo(MOCK_DELAY);
		expect(results.medianTime).toBeCloseTo(MOCK_DELAY);
		expect(results.stdDev).toBeCloseTo(0);
		expect(sleep).not.toHaveBeenCalled();
	});

	it('should propagate errors from the test function', async () => {
		const errorMessage = 'Test function failed intentionally';
		// Use jest.fn().mockRejectedValue(...)
		const failingTestFn = jest.fn().mockRejectedValue(new Error(errorMessage));
		const iterations = 3;

		// Jest's rejects matcher
		await expect(runPerformanceTest('test-error-propagation', failingTestFn, iterations)).rejects.toThrow(errorMessage);

		expect(failingTestFn).toHaveBeenCalledTimes(1);
		expect(sleep).not.toHaveBeenCalled();
	});
});
