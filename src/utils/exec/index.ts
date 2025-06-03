import type { ExecOptions } from 'child_process';
import { exec as nodeExec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(nodeExec);

export interface ExecResult {
	stdout: string;
	stderr: string;
}

export interface ExecError extends Error {
	code?: number;
	stdout?: string;
	stderr?: string;
}

/**
 * Execute a shell command and return the output.
 * Wraps Node's exec with promises and better error handling.
 *
 * @param command The command to execute
 * @param options Optional exec options
 * @returns Promise resolving to stdout and stderr
 * @throws ExecError if the command fails
 *
 * @example
 * const { stdout } = await exec('echo "Hello World"');
 * console.log(stdout); // "Hello World\n"
 */
export async function exec(command: string, options?: ExecOptions): Promise<ExecResult> {
	try {
		const { stdout, stderr } = await execAsync(command, {
			encoding: 'utf8',
			...options,
		});

		return {
			stdout: stdout || '',
			stderr: stderr || '',
		};
	} catch (error: any) {
		const execError: ExecError = new Error(`Command failed: ${command}\n${error.message || error}`);

		execError.code = error.code;
		execError.stdout = error.stdout;
		execError.stderr = error.stderr;

		throw execError;
	}
}

/**
 * Execute a shell command and return only stdout, throwing if there's any stderr output.
 * Useful for commands where any stderr output indicates an error.
 *
 * @param command The command to execute
 * @param options Optional exec options
 * @returns Promise resolving to stdout
 * @throws Error if the command fails or produces stderr output
 *
 * @example
 * const output = await execStrict('git rev-parse HEAD');
 * console.log(output); // "abc123def456..."
 */
export async function execStrict(command: string, options?: ExecOptions): Promise<string> {
	const { stdout, stderr } = await exec(command, options);

	if (stderr?.trim()) {
		throw new Error(`Command produced stderr output: ${command}\n${stderr}`);
	}

	return stdout;
}
