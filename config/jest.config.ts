// /*
//  * For a detailed explanation regarding each configuration property and type check, visit:
//  * https://jestjs.io/docs/configuration
//  */

export default {
	/*
	 * All imported modules in your tests should be mocked automatically
	 * Automock: false,
	 */

	/*
	 * Stop running tests after `n` failures
	 * Bail: 0,
	 */

	// The directory where Jest should store its cached dependency information
	cacheDirectory: '../temp/jest/cacheDirectory',

	// Automatically clear mock calls, instances, contexts and results before every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,

	/*
	 * An array of glob patterns indicating a set of files for which coverage information should be collected
	 * CollectCoverageFrom: undefined,
	 */

	// The directory where Jest should output its coverage files
	coverageDirectory: '../temp/jest/coverage',

	/*
	 * An array of regexp pattern strings used to skip coverage collection
	 * CoveragePathIgnorePatterns: [
	 *   "\\\\node_modules\\\\"
	 * ],
	 */

	/*
	 * Indicates which provider should be used to instrument code for coverage
	 * CoverageProvider: 'babel', // 'v8'?
	 */

	/*
	 * A list of reporter names that Jest uses when writing coverage reports
	 * CoverageReporters: [
	 *   "json",
	 *   "text",
	 *   "lcov",
	 *   "clover"
	 * ],
	 */

	/*
	 * An object that configures minimum threshold enforcement for coverage results
	 * CoverageThreshold: undefined,
	 */

	/*
	 * A path to a custom dependency extractor
	 * DependencyExtractor: undefined,
	 */

	/*
	 * Make calling deprecated APIs throw helpful error messages
	 * ErrorOnDeprecated: false,
	 */

	/*
	 * The default configuration for fake timers
	 * FakeTimers: {
	 *   "enableGlobally": false
	 * },
	 */

	/*
	 * Force coverage collection from ignored files using an array of glob patterns
	 * ForceCoverageMatch: [],
	 */

	// A path to a module which exports an async function that is triggered once before all test suites
	globalSetup: '../test-utils/testSetup.ts',

	// A path to a module which exports an async function that is triggered once after all test suites
	globalTeardown: '../test-utils/testTeardown.ts',

	// A set of global variables that need to be available in all test environments
	globals: {},

	/*
	 * The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
	 * MaxWorkers: "50%",
	 */

	/*
	 * An array of directory names to be searched recursively up from the requiring module's location
	 * ModuleDirectories: [
	 *   "node_modules"
	 * ],
	 */

	// An array of file extensions your modules use
	moduleFileExtensions: [
		'js',

		/*
		 *   "mjs",
		 *   "cjs",
		 */
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],

	/*
	 * A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
	 * ModuleNameMapper: {},
	 */

	/*
	 * An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
	 * ModulePathIgnorePatterns: [],
	 */

	/*
	 * Activates notifications for test results
	 * Notify: false,
	 */

	/*
	 * An enum that specifies notification mode. Requires { notify: true }
	 * NotifyMode: "failure-change",
	 */

	/*
	 * A preset that is used as a base for Jest's configuration
	 * Preset: 'ts-jest',
	 */

	/*
	 * Run tests from one or more projects
	 * Projects: undefined,
	 */

	/*
	 * Use this configuration option to add custom reporters to Jest
	 * Reporters: undefined,
	 */

	/*
	 * Automatically reset mock state before every test
	 * ResetMocks: false,
	 */

	/*
	 * Reset the module registry before running each individual test
	 * ResetModules: false,
	 */

	/*
	 * A path to a custom resolver
	 * Resolver: undefined,
	 */

	/*
	 * Automatically restore mock state and implementation before every test
	 * RestoreMocks: false,
	 */

	/*
	 * The root directory that Jest should scan for tests and modules within
	 * RootDir: undefined,
	 */

	// A list of paths to directories that Jest should use to search for files in
	roots: ['<rootDir>/../src'],

	/*
	 * Allows you to use a custom runner instead of Jest's default test runner
	 * Runner: "jest-runner",
	 */

	/*
	 * The paths to modules that run some code to configure or set up the testing environment before each test
	 * SetupFiles: [],
	 */

	/*
	 * A list of paths to modules that run some code to configure or set up the testing framework before each test
	 * SetupFilesAfterEnv: [],
	 */

	// The number of seconds after which a test is considered as slow and reported as such in the results.
	slowTestThreshold: 5,

	/*
	 * A list of paths to snapshot serializer modules Jest should use for snapshot testing
	 * SnapshotSerializers: [],
	 */

	// The test environment that will be used for testings
	testEnvironment: 'node',

	/*
	 * Options that will be passed to the testEnvironment
	 * TestEnvironmentOptions: {},
	 */

	/*
	 * Adds a location field to test results
	 * TestLocationInResults: false,
	 */

	// The glob patterns Jest uses to detect test files
	testMatch: ['**/***.test.ts'],
	// TestMatch: [
	//   "**/__tests__/**/*.[jt]s?(x)",
	//   "**/?(*.)+(spec|test).[tj]s?(x)"
	// ],

	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\temp\\\\', '\\\\legacy\\\\'],

	/*
	 * The regexp pattern or array of patterns that Jest uses to detect test files
	 * TestRegex: [],
	 */

	/*
	 * This option allows the use of a custom results processor
	 * TestResultsProcessor: undefined,
	 */

	/*
	 * This option allows use of a custom test runner
	 * TestRunner: "jest-circus/runner",
	 */

	/*
	 * A map from regular expressions to paths to transformers
	 * Transform: undefined,
	 */

	/*
	 * An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
	 * An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
	 * UnmockedModulePathPatterns: undefined,
	 */

	// Indicates whether each individual test should be reported during the run
	verbose: true,

	/*
	 * An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
	 * WatchPathIgnorePatterns: [],
	 */

	// Whether to use watchman for file crawling
	watchman: true,

	/*
	 * Transform: {
	 * 	// 'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
	 * },
	 */

	/*
	 * Transform: {
	 * 	'^.+\\.(t|j)sx?$': ['@swc/jest'],
	 * },
	 */
	transform: { '\\.(js|jsx|ts|tsx)$': '@sucrase/jest-plugin' },

	/*
	 * TransformIgnorePatterns: ['node_modules/(?!variables/.*)'],
	 * ModuleDirectories: ['node_modules', 'src', __dirname],
	 */

	// // Absolute paths
	// RootDir: '../', // rootDir is relative to THIS config file. So if we are in ./config, we need to move rootDir.
	// ModuleNameMapper: {
	// 	'../(.*)': '<rootDir>/src/$1',
	// 	'@test-utils/(.*)': '<rootDir>/test-utils/$1',
	// },
};
