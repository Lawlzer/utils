import { describe, expect, test } from 'bun:test';
import { exec, execStrict } from './index';

describe('exec', () => {
	test('should execute a simple command', async () => {
		const { stdout, stderr } = await exec('echo "Hello World"');
		expect(stdout.trim()).toBe('Hello World');
		expect(stderr).toBe('');
	});

	test('should handle commands with stderr output', async () => {
		// Using a cross-platform command that writes to stderr
		const command = process.platform === 'win32' ? 'echo Error message 1>&2' : 'echo "Error message" >&2';

		const { stdout, stderr } = await exec(command);
		expect(stdout).toBe('');
		expect(stderr.trim()).toContain('Error message');
	});

	test('should throw on command failure', async () => {
		await expect(exec('this-command-does-not-exist')).rejects.toThrow();
	});

	test('should include error details in thrown error', async () => {
		try {
			await exec('this-command-does-not-exist');
			expect(true).toBe(false); // Should not reach here
		} catch (error: any) {
			expect(error.message).toContain('Command failed');
			expect(error.message).toContain('this-command-does-not-exist');
		}
	});

	test('should pass through exec options', async () => {
		const { stdout } = await exec('echo $TEST_VAR', {
			env: { ...process.env, TEST_VAR: 'test-value' },
			shell: process.platform === 'win32' ? 'cmd.exe' : '/bin/sh',
		});

		// On Windows, environment variables might work differently
		if (process.platform !== 'win32') {
			expect(stdout.trim()).toBe('test-value');
		}
	});
});

describe('execStrict', () => {
	test('should return stdout for successful commands', async () => {
		const output = await execStrict('echo "Hello World"');
		expect(output.trim()).toBe('Hello World');
	});

	test('should throw if stderr has content', async () => {
		const command = process.platform === 'win32' ? 'echo Error 1>&2' : 'echo "Error" >&2';

		await expect(execStrict(command)).rejects.toThrow('Command produced stderr output');
	});

	test('should not throw if stderr is empty/whitespace', async () => {
		const output = await execStrict('echo "Success"');
		expect(output.trim()).toBe('Success');
	});
});
