// @ts-nocheck
import { afterAll, afterEach, beforeEach, describe, expect, it, mock, spyOn } from 'bun:test';

// Note: No need to import describe, expect, it, beforeEach, afterEach from jest explicitly
// They are globally available when running via Jest.
import { runPerformanceTest } from './index';

// Store original before mocking
const originalSleepModule = await import('../sleep');

void mock.module('../sleep', () => ({
	sleep: mock(async () => Promise.resolve(undefined)),
}));

// --- Mock performance.now ---
// let performanceNowSpy: ReturnType<typeof spyOn>;
// let mockTime: number;
// const MOCK_DELAY = 10; // ms
// --- End Mock performance.now ---

describe('runPerformanceTest', () => {
	let performanceNowSpy: ReturnType<typeof spyOn>;
	let mockTime: number;
	const MOCK_DELAY = 10;
	let mockSleepFn: ReturnType<typeof mock>; // To hold our mock sleep function

	const simpleTestFn = async () => {
		await Promise.resolve();
	};

	beforeEach(() => {
		mockSleepFn = mock(async () => Promise.resolve(undefined)); // Create mock sleep
		mockTime = 1000;
		performanceNowSpy = spyOn(performance, 'now').mockImplementation(() => {
			const currentTime = mockTime;
			mockTime += MOCK_DELAY;
			return currentTime;
		});
	});

	afterEach(() => {
		performanceNowSpy.mockRestore();
		mockSleepFn.mockClear(); // Clear the mock sleep function
	});

	it('should run the test function the specified number of iterations', async () => {
		const testFnSpy = mock(simpleTestFn);
		const iterations = 5;
		await runPerformanceTest('test-iterations', testFnSpy as unknown as () => Promise<any>, iterations, mockSleepFn as unknown as (duration: number) => Promise<void>);
		expect(testFnSpy).toHaveBeenCalledTimes(iterations);
	});

	it('should calculate metrics reasonably for a fixed-duration function', async () => {
		const iterations = 10;
		const results = await runPerformanceTest('test-fixed-duration', simpleTestFn as unknown as () => Promise<any>, iterations, mockSleepFn as unknown as (duration: number) => Promise<void>);
		expect(results.iterations).toBe(iterations);
		expect(results.times.length).toBe(iterations);
		results.times.forEach((time) => {
			expect(time).toBeCloseTo(MOCK_DELAY);
		});
		expect(results.minTime).toBeCloseTo(MOCK_DELAY);
		expect(results.maxTime).toBeCloseTo(MOCK_DELAY);
		expect(results.avgTime).toBeCloseTo(MOCK_DELAY);
		expect(results.medianTime).toBeCloseTo(MOCK_DELAY);
		expect(results.stdDev).toBeCloseTo(0);
		expect(mockSleepFn).toHaveBeenCalledTimes(iterations - 1);
		expect(mockSleepFn).toHaveBeenCalledWith(1);
	});

	it('should handle zero iterations', async () => {
		const testFnSpy = mock(simpleTestFn);
		const iterations = 0;
		const results = await runPerformanceTest('test-zero-iterations', testFnSpy as unknown as () => Promise<any>, iterations, mockSleepFn as unknown as (duration: number) => Promise<void>);
		expect(testFnSpy).not.toHaveBeenCalled();
		expect(results.iterations).toBe(0);
		expect(mockSleepFn).not.toHaveBeenCalled();
	});

	it('should handle one iteration', async () => {
		const iterations = 1;
		const results = await runPerformanceTest('test-one-iteration', simpleTestFn as unknown as () => Promise<any>, iterations, mockSleepFn as unknown as (duration: number) => Promise<void>);
		expect(results.iterations).toBe(1);
		expect(mockSleepFn).not.toHaveBeenCalled();
	});

	it('should propagate errors from the test function', async () => {
		const errorMessage = 'Test function failed intentionally';
		const failingTestFn = mock(async () => Promise.reject(new Error(errorMessage)));
		const iterations = 3;
		const castedMockSleep = mockSleepFn as unknown as (duration: number) => Promise<void>;

		await expect(runPerformanceTest('test-error-propagation', failingTestFn as unknown as () => Promise<any>, iterations, castedMockSleep)).rejects.toThrow(errorMessage);
		expect(failingTestFn).toHaveBeenCalledTimes(1);
		expect(mockSleepFn).not.toHaveBeenCalled();
	});
});

afterEach(() => {
	// Restore the original implementation
	// performanceNowSpy.mockRestore();
});

afterAll(() => {
	void mock.module('../sleep', () => originalSleepModule);
});
