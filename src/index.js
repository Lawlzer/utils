var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
	target = mod != null ? __create(__getProtoOf(mod)) : {};
	const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: true }) : target;
	for (let key of __getOwnPropNames(mod))
		if (!__hasOwnProp.call(to, key))
			__defProp(to, key, {
				get: () => mod[key],
				enumerable: true,
			});
	return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap();
var __toCommonJS = (from) => {
	var entry = __moduleCache.get(from),
		desc;
	if (entry) return entry;
	entry = __defProp({}, '__esModule', { value: true });
	if ((from && typeof from === 'object') || typeof from === 'function')
		__getOwnPropNames(from).map(
			(key) =>
				!__hasOwnProp.call(entry, key) &&
				__defProp(entry, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
				})
		);
	__moduleCache.set(from, entry);
	return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
	for (var name in all)
		__defProp(target, name, {
			get: all[name],
			enumerable: true,
			configurable: true,
			set: (newValue) => (all[name] = () => newValue),
		});
};

// node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS((exports2, module2) => {
	var p = process || {};
	var argv = p.argv || [];
	var env = p.env || {};
	var isColorSupported = !(!!env.NO_COLOR || argv.includes('--no-color')) && (!!env.FORCE_COLOR || argv.includes('--color') || p.platform === 'win32' || ((p.stdout || {}).isTTY && env.TERM !== 'dumb') || !!env.CI);
	var formatter =
		(open, close, replace = open) =>
		(input) => {
			let string = '' + input,
				index = string.indexOf(close, open.length);
			return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
		};
	var replaceClose = (string, close, replace, index) => {
		let result = '',
			cursor = 0;
		do {
			result += string.substring(cursor, index) + replace;
			cursor = index + close.length;
			index = string.indexOf(close, cursor);
		} while (~index);
		return result + string.substring(cursor);
	};
	var createColors = (enabled = isColorSupported) => {
		let f = enabled ? formatter : () => String;
		return {
			isColorSupported: enabled,
			reset: f('\x1B[0m', '\x1B[0m'),
			bold: f('\x1B[1m', '\x1B[22m', '\x1B[22m\x1B[1m'),
			dim: f('\x1B[2m', '\x1B[22m', '\x1B[22m\x1B[2m'),
			italic: f('\x1B[3m', '\x1B[23m'),
			underline: f('\x1B[4m', '\x1B[24m'),
			inverse: f('\x1B[7m', '\x1B[27m'),
			hidden: f('\x1B[8m', '\x1B[28m'),
			strikethrough: f('\x1B[9m', '\x1B[29m'),
			black: f('\x1B[30m', '\x1B[39m'),
			red: f('\x1B[31m', '\x1B[39m'),
			green: f('\x1B[32m', '\x1B[39m'),
			yellow: f('\x1B[33m', '\x1B[39m'),
			blue: f('\x1B[34m', '\x1B[39m'),
			magenta: f('\x1B[35m', '\x1B[39m'),
			cyan: f('\x1B[36m', '\x1B[39m'),
			white: f('\x1B[37m', '\x1B[39m'),
			gray: f('\x1B[90m', '\x1B[39m'),
			bgBlack: f('\x1B[40m', '\x1B[49m'),
			bgRed: f('\x1B[41m', '\x1B[49m'),
			bgGreen: f('\x1B[42m', '\x1B[49m'),
			bgYellow: f('\x1B[43m', '\x1B[49m'),
			bgBlue: f('\x1B[44m', '\x1B[49m'),
			bgMagenta: f('\x1B[45m', '\x1B[49m'),
			bgCyan: f('\x1B[46m', '\x1B[49m'),
			bgWhite: f('\x1B[47m', '\x1B[49m'),
			blackBright: f('\x1B[90m', '\x1B[39m'),
			redBright: f('\x1B[91m', '\x1B[39m'),
			greenBright: f('\x1B[92m', '\x1B[39m'),
			yellowBright: f('\x1B[93m', '\x1B[39m'),
			blueBright: f('\x1B[94m', '\x1B[39m'),
			magentaBright: f('\x1B[95m', '\x1B[39m'),
			cyanBright: f('\x1B[96m', '\x1B[39m'),
			whiteBright: f('\x1B[97m', '\x1B[39m'),
			bgBlackBright: f('\x1B[100m', '\x1B[49m'),
			bgRedBright: f('\x1B[101m', '\x1B[49m'),
			bgGreenBright: f('\x1B[102m', '\x1B[49m'),
			bgYellowBright: f('\x1B[103m', '\x1B[49m'),
			bgBlueBright: f('\x1B[104m', '\x1B[49m'),
			bgMagentaBright: f('\x1B[105m', '\x1B[49m'),
			bgCyanBright: f('\x1B[106m', '\x1B[49m'),
			bgWhiteBright: f('\x1B[107m', '\x1B[49m'),
		};
	};
	module2.exports = createColors();
	module2.exports.createColors = createColors;
});

// node_modules/universalify/index.js
var require_universalify = __commonJS((exports2) => {
	exports2.fromCallback = function (fn) {
		return Object.defineProperty(
			function (...args) {
				if (typeof args[args.length - 1] === 'function') fn.apply(this, args);
				else {
					return new Promise((resolve, reject) => {
						fn.call(this, ...args, (err, res) => (err != null ? reject(err) : resolve(res)));
					});
				}
			},
			'name',
			{ value: fn.name }
		);
	};
	exports2.fromPromise = function (fn) {
		return Object.defineProperty(
			function (...args) {
				const cb = args[args.length - 1];
				if (typeof cb !== 'function') return fn.apply(this, args);
				else fn.apply(this, args.slice(0, -1)).then((r) => cb(null, r), cb);
			},
			'name',
			{ value: fn.name }
		);
	};
});

// node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS((exports2, module2) => {
	var constants = require('constants');
	var origCwd = process.cwd;
	var cwd = null;
	var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
	process.cwd = function () {
		if (!cwd) cwd = origCwd.call(process);
		return cwd;
	};
	try {
		process.cwd();
	} catch (er) {}
	if (typeof process.chdir === 'function') {
		chdir = process.chdir;
		process.chdir = function (d) {
			cwd = null;
			chdir.call(process, d);
		};
		if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
	}
	var chdir;
	module2.exports = patch;
	function patch(fs) {
		if (constants.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
			patchLchmod(fs);
		}
		if (!fs.lutimes) {
			patchLutimes(fs);
		}
		fs.chown = chownFix(fs.chown);
		fs.fchown = chownFix(fs.fchown);
		fs.lchown = chownFix(fs.lchown);
		fs.chmod = chmodFix(fs.chmod);
		fs.fchmod = chmodFix(fs.fchmod);
		fs.lchmod = chmodFix(fs.lchmod);
		fs.chownSync = chownFixSync(fs.chownSync);
		fs.fchownSync = chownFixSync(fs.fchownSync);
		fs.lchownSync = chownFixSync(fs.lchownSync);
		fs.chmodSync = chmodFixSync(fs.chmodSync);
		fs.fchmodSync = chmodFixSync(fs.fchmodSync);
		fs.lchmodSync = chmodFixSync(fs.lchmodSync);
		fs.stat = statFix(fs.stat);
		fs.fstat = statFix(fs.fstat);
		fs.lstat = statFix(fs.lstat);
		fs.statSync = statFixSync(fs.statSync);
		fs.fstatSync = statFixSync(fs.fstatSync);
		fs.lstatSync = statFixSync(fs.lstatSync);
		if (fs.chmod && !fs.lchmod) {
			fs.lchmod = function (path, mode, cb) {
				if (cb) process.nextTick(cb);
			};
			fs.lchmodSync = function () {};
		}
		if (fs.chown && !fs.lchown) {
			fs.lchown = function (path, uid, gid, cb) {
				if (cb) process.nextTick(cb);
			};
			fs.lchownSync = function () {};
		}
		if (platform === 'win32') {
			fs.rename =
				typeof fs.rename !== 'function'
					? fs.rename
					: (function (fs$rename) {
							function rename(from, to, cb) {
								var start = Date.now();
								var backoff = 0;
								fs$rename(from, to, function CB(er) {
									if (er && (er.code === 'EACCES' || er.code === 'EPERM' || er.code === 'EBUSY') && Date.now() - start < 60000) {
										setTimeout(function () {
											fs.stat(to, function (stater, st) {
												if (stater && stater.code === 'ENOENT') fs$rename(from, to, CB);
												else cb(er);
											});
										}, backoff);
										if (backoff < 100) backoff += 10;
										return;
									}
									if (cb) cb(er);
								});
							}
							if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
							return rename;
						})(fs.rename);
		}
		fs.read =
			typeof fs.read !== 'function'
				? fs.read
				: (function (fs$read) {
						function read(fd, buffer, offset, length, position, callback_) {
							var callback;
							if (callback_ && typeof callback_ === 'function') {
								var eagCounter = 0;
								callback = function (er, _, __) {
									if (er && er.code === 'EAGAIN' && eagCounter < 10) {
										eagCounter++;
										return fs$read.call(fs, fd, buffer, offset, length, position, callback);
									}
									callback_.apply(this, arguments);
								};
							}
							return fs$read.call(fs, fd, buffer, offset, length, position, callback);
						}
						if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
						return read;
					})(fs.read);
		fs.readSync =
			typeof fs.readSync !== 'function'
				? fs.readSync
				: (function (fs$readSync) {
						return function (fd, buffer, offset, length, position) {
							var eagCounter = 0;
							while (true) {
								try {
									return fs$readSync.call(fs, fd, buffer, offset, length, position);
								} catch (er) {
									if (er.code === 'EAGAIN' && eagCounter < 10) {
										eagCounter++;
										continue;
									}
									throw er;
								}
							}
						};
					})(fs.readSync);
		function patchLchmod(fs2) {
			fs2.lchmod = function (path, mode, callback) {
				fs2.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function (err, fd) {
					if (err) {
						if (callback) callback(err);
						return;
					}
					fs2.fchmod(fd, mode, function (err2) {
						fs2.close(fd, function (err22) {
							if (callback) callback(err2 || err22);
						});
					});
				});
			};
			fs2.lchmodSync = function (path, mode) {
				var fd = fs2.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
				var threw = true;
				var ret;
				try {
					ret = fs2.fchmodSync(fd, mode);
					threw = false;
				} finally {
					if (threw) {
						try {
							fs2.closeSync(fd);
						} catch (er) {}
					} else {
						fs2.closeSync(fd);
					}
				}
				return ret;
			};
		}
		function patchLutimes(fs2) {
			if (constants.hasOwnProperty('O_SYMLINK') && fs2.futimes) {
				fs2.lutimes = function (path, at, mt, cb) {
					fs2.open(path, constants.O_SYMLINK, function (er, fd) {
						if (er) {
							if (cb) cb(er);
							return;
						}
						fs2.futimes(fd, at, mt, function (er2) {
							fs2.close(fd, function (er22) {
								if (cb) cb(er2 || er22);
							});
						});
					});
				};
				fs2.lutimesSync = function (path, at, mt) {
					var fd = fs2.openSync(path, constants.O_SYMLINK);
					var ret;
					var threw = true;
					try {
						ret = fs2.futimesSync(fd, at, mt);
						threw = false;
					} finally {
						if (threw) {
							try {
								fs2.closeSync(fd);
							} catch (er) {}
						} else {
							fs2.closeSync(fd);
						}
					}
					return ret;
				};
			} else if (fs2.futimes) {
				fs2.lutimes = function (_a, _b, _c, cb) {
					if (cb) process.nextTick(cb);
				};
				fs2.lutimesSync = function () {};
			}
		}
		function chmodFix(orig) {
			if (!orig) return orig;
			return function (target, mode, cb) {
				return orig.call(fs, target, mode, function (er) {
					if (chownErOk(er)) er = null;
					if (cb) cb.apply(this, arguments);
				});
			};
		}
		function chmodFixSync(orig) {
			if (!orig) return orig;
			return function (target, mode) {
				try {
					return orig.call(fs, target, mode);
				} catch (er) {
					if (!chownErOk(er)) throw er;
				}
			};
		}
		function chownFix(orig) {
			if (!orig) return orig;
			return function (target, uid, gid, cb) {
				return orig.call(fs, target, uid, gid, function (er) {
					if (chownErOk(er)) er = null;
					if (cb) cb.apply(this, arguments);
				});
			};
		}
		function chownFixSync(orig) {
			if (!orig) return orig;
			return function (target, uid, gid) {
				try {
					return orig.call(fs, target, uid, gid);
				} catch (er) {
					if (!chownErOk(er)) throw er;
				}
			};
		}
		function statFix(orig) {
			if (!orig) return orig;
			return function (target, options, cb) {
				if (typeof options === 'function') {
					cb = options;
					options = null;
				}
				function callback(er, stats) {
					if (stats) {
						if (stats.uid < 0) stats.uid += 4294967296;
						if (stats.gid < 0) stats.gid += 4294967296;
					}
					if (cb) cb.apply(this, arguments);
				}
				return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
			};
		}
		function statFixSync(orig) {
			if (!orig) return orig;
			return function (target, options) {
				var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
				if (stats) {
					if (stats.uid < 0) stats.uid += 4294967296;
					if (stats.gid < 0) stats.gid += 4294967296;
				}
				return stats;
			};
		}
		function chownErOk(er) {
			if (!er) return true;
			if (er.code === 'ENOSYS') return true;
			var nonroot = !process.getuid || process.getuid() !== 0;
			if (nonroot) {
				if (er.code === 'EINVAL' || er.code === 'EPERM') return true;
			}
			return false;
		}
	}
});

// node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS((exports2, module2) => {
	var Stream = require('stream').Stream;
	module2.exports = legacy;
	function legacy(fs) {
		return {
			ReadStream,
			WriteStream,
		};
		function ReadStream(path, options) {
			if (!(this instanceof ReadStream)) return new ReadStream(path, options);
			Stream.call(this);
			var self = this;
			this.path = path;
			this.fd = null;
			this.readable = true;
			this.paused = false;
			this.flags = 'r';
			this.mode = 438;
			this.bufferSize = 64 * 1024;
			options = options || {};
			var keys = Object.keys(options);
			for (var index = 0, length = keys.length; index < length; index++) {
				var key = keys[index];
				this[key] = options[key];
			}
			if (this.encoding) this.setEncoding(this.encoding);
			if (this.start !== undefined) {
				if (typeof this.start !== 'number') {
					throw TypeError('start must be a Number');
				}
				if (this.end === undefined) {
					this.end = Infinity;
				} else if (typeof this.end !== 'number') {
					throw TypeError('end must be a Number');
				}
				if (this.start > this.end) {
					throw new Error('start must be <= end');
				}
				this.pos = this.start;
			}
			if (this.fd !== null) {
				process.nextTick(function () {
					self._read();
				});
				return;
			}
			fs.open(this.path, this.flags, this.mode, function (err, fd) {
				if (err) {
					self.emit('error', err);
					self.readable = false;
					return;
				}
				self.fd = fd;
				self.emit('open', fd);
				self._read();
			});
		}
		function WriteStream(path, options) {
			if (!(this instanceof WriteStream)) return new WriteStream(path, options);
			Stream.call(this);
			this.path = path;
			this.fd = null;
			this.writable = true;
			this.flags = 'w';
			this.encoding = 'binary';
			this.mode = 438;
			this.bytesWritten = 0;
			options = options || {};
			var keys = Object.keys(options);
			for (var index = 0, length = keys.length; index < length; index++) {
				var key = keys[index];
				this[key] = options[key];
			}
			if (this.start !== undefined) {
				if (typeof this.start !== 'number') {
					throw TypeError('start must be a Number');
				}
				if (this.start < 0) {
					throw new Error('start must be >= zero');
				}
				this.pos = this.start;
			}
			this.busy = false;
			this._queue = [];
			if (this.fd === null) {
				this._open = fs.open;
				this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
				this.flush();
			}
		}
	}
});

// node_modules/graceful-fs/clone.js
var require_clone = __commonJS((exports2, module2) => {
	module2.exports = clone;
	var getPrototypeOf =
		Object.getPrototypeOf ||
		function (obj) {
			return obj.__proto__;
		};
	function clone(obj) {
		if (obj === null || typeof obj !== 'object') return obj;
		if (obj instanceof Object) var copy = { __proto__: getPrototypeOf(obj) };
		else var copy = Object.create(null);
		Object.getOwnPropertyNames(obj).forEach(function (key) {
			Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
		});
		return copy;
	}
});

// node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS((exports2, module2) => {
	var fs = require('fs');
	var polyfills = require_polyfills();
	var legacy = require_legacy_streams();
	var clone = require_clone();
	var util = require('util');
	var gracefulQueue;
	var previousSymbol;
	if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
		gracefulQueue = Symbol.for('graceful-fs.queue');
		previousSymbol = Symbol.for('graceful-fs.previous');
	} else {
		gracefulQueue = '___graceful-fs.queue';
		previousSymbol = '___graceful-fs.previous';
	}
	function noop() {}
	function publishQueue(context, queue2) {
		Object.defineProperty(context, gracefulQueue, {
			get: function () {
				return queue2;
			},
		});
	}
	var debug = noop;
	if (util.debuglog) debug = util.debuglog('gfs4');
	else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
		debug = function () {
			var m = util.format.apply(util, arguments);
			m =
				'GFS4: ' +
				m.split(/\n/).join(`
GFS4: `);
			console.error(m);
		};
	if (!fs[gracefulQueue]) {
		queue = global[gracefulQueue] || [];
		publishQueue(fs, queue);
		fs.close = (function (fs$close) {
			function close(fd, cb) {
				return fs$close.call(fs, fd, function (err) {
					if (!err) {
						resetQueue();
					}
					if (typeof cb === 'function') cb.apply(this, arguments);
				});
			}
			Object.defineProperty(close, previousSymbol, {
				value: fs$close,
			});
			return close;
		})(fs.close);
		fs.closeSync = (function (fs$closeSync) {
			function closeSync(fd) {
				fs$closeSync.apply(fs, arguments);
				resetQueue();
			}
			Object.defineProperty(closeSync, previousSymbol, {
				value: fs$closeSync,
			});
			return closeSync;
		})(fs.closeSync);
		if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
			process.on('exit', function () {
				debug(fs[gracefulQueue]);
				require('assert').equal(fs[gracefulQueue].length, 0);
			});
		}
	}
	var queue;
	if (!global[gracefulQueue]) {
		publishQueue(global, fs[gracefulQueue]);
	}
	module2.exports = patch(clone(fs));
	if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
		module2.exports = patch(fs);
		fs.__patched = true;
	}
	function patch(fs2) {
		polyfills(fs2);
		fs2.gracefulify = patch;
		fs2.createReadStream = createReadStream;
		fs2.createWriteStream = createWriteStream;
		var fs$readFile = fs2.readFile;
		fs2.readFile = readFile;
		function readFile(path, options, cb) {
			if (typeof options === 'function') (cb = options), (options = null);
			return go$readFile(path, options, cb);
			function go$readFile(path2, options2, cb2, startTime) {
				return fs$readFile(path2, options2, function (err) {
					if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readFile, [path2, options2, cb2], err, startTime || Date.now(), Date.now()]);
					else {
						if (typeof cb2 === 'function') cb2.apply(this, arguments);
					}
				});
			}
		}
		var fs$writeFile = fs2.writeFile;
		fs2.writeFile = writeFile;
		function writeFile(path, data, options, cb) {
			if (typeof options === 'function') (cb = options), (options = null);
			return go$writeFile(path, data, options, cb);
			function go$writeFile(path2, data2, options2, cb2, startTime) {
				return fs$writeFile(path2, data2, options2, function (err) {
					if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$writeFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
					else {
						if (typeof cb2 === 'function') cb2.apply(this, arguments);
					}
				});
			}
		}
		var fs$appendFile = fs2.appendFile;
		if (fs$appendFile) fs2.appendFile = appendFile;
		function appendFile(path, data, options, cb) {
			if (typeof options === 'function') (cb = options), (options = null);
			return go$appendFile(path, data, options, cb);
			function go$appendFile(path2, data2, options2, cb2, startTime) {
				return fs$appendFile(path2, data2, options2, function (err) {
					if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$appendFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
					else {
						if (typeof cb2 === 'function') cb2.apply(this, arguments);
					}
				});
			}
		}
		var fs$copyFile = fs2.copyFile;
		if (fs$copyFile) fs2.copyFile = copyFile;
		function copyFile(src, dest, flags, cb) {
			if (typeof flags === 'function') {
				cb = flags;
				flags = 0;
			}
			return go$copyFile(src, dest, flags, cb);
			function go$copyFile(src2, dest2, flags2, cb2, startTime) {
				return fs$copyFile(src2, dest2, flags2, function (err) {
					if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
					else {
						if (typeof cb2 === 'function') cb2.apply(this, arguments);
					}
				});
			}
		}
		var fs$readdir = fs2.readdir;
		fs2.readdir = readdir;
		var noReaddirOptionVersions = /^v[0-5]\./;
		function readdir(path, options, cb) {
			if (typeof options === 'function') (cb = options), (options = null);
			var go$readdir = noReaddirOptionVersions.test(process.version)
				? function go$readdir(path2, options2, cb2, startTime) {
						return fs$readdir(path2, fs$readdirCallback(path2, options2, cb2, startTime));
					}
				: function go$readdir(path2, options2, cb2, startTime) {
						return fs$readdir(path2, options2, fs$readdirCallback(path2, options2, cb2, startTime));
					};
			return go$readdir(path, options, cb);
			function fs$readdirCallback(path2, options2, cb2, startTime) {
				return function (err, files) {
					if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readdir, [path2, options2, cb2], err, startTime || Date.now(), Date.now()]);
					else {
						if (files && files.sort) files.sort();
						if (typeof cb2 === 'function') cb2.call(this, err, files);
					}
				};
			}
		}
		if (process.version.substr(0, 4) === 'v0.8') {
			var legStreams = legacy(fs2);
			ReadStream = legStreams.ReadStream;
			WriteStream = legStreams.WriteStream;
		}
		var fs$ReadStream = fs2.ReadStream;
		if (fs$ReadStream) {
			ReadStream.prototype = Object.create(fs$ReadStream.prototype);
			ReadStream.prototype.open = ReadStream$open;
		}
		var fs$WriteStream = fs2.WriteStream;
		if (fs$WriteStream) {
			WriteStream.prototype = Object.create(fs$WriteStream.prototype);
			WriteStream.prototype.open = WriteStream$open;
		}
		Object.defineProperty(fs2, 'ReadStream', {
			get: function () {
				return ReadStream;
			},
			set: function (val) {
				ReadStream = val;
			},
			enumerable: true,
			configurable: true,
		});
		Object.defineProperty(fs2, 'WriteStream', {
			get: function () {
				return WriteStream;
			},
			set: function (val) {
				WriteStream = val;
			},
			enumerable: true,
			configurable: true,
		});
		var FileReadStream = ReadStream;
		Object.defineProperty(fs2, 'FileReadStream', {
			get: function () {
				return FileReadStream;
			},
			set: function (val) {
				FileReadStream = val;
			},
			enumerable: true,
			configurable: true,
		});
		var FileWriteStream = WriteStream;
		Object.defineProperty(fs2, 'FileWriteStream', {
			get: function () {
				return FileWriteStream;
			},
			set: function (val) {
				FileWriteStream = val;
			},
			enumerable: true,
			configurable: true,
		});
		function ReadStream(path, options) {
			if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;
			else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
		}
		function ReadStream$open() {
			var that = this;
			open(that.path, that.flags, that.mode, function (err, fd) {
				if (err) {
					if (that.autoClose) that.destroy();
					that.emit('error', err);
				} else {
					that.fd = fd;
					that.emit('open', fd);
					that.read();
				}
			});
		}
		function WriteStream(path, options) {
			if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;
			else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
		}
		function WriteStream$open() {
			var that = this;
			open(that.path, that.flags, that.mode, function (err, fd) {
				if (err) {
					that.destroy();
					that.emit('error', err);
				} else {
					that.fd = fd;
					that.emit('open', fd);
				}
			});
		}
		function createReadStream(path, options) {
			return new fs2.ReadStream(path, options);
		}
		function createWriteStream(path, options) {
			return new fs2.WriteStream(path, options);
		}
		var fs$open = fs2.open;
		fs2.open = open;
		function open(path, flags, mode, cb) {
			if (typeof mode === 'function') (cb = mode), (mode = null);
			return go$open(path, flags, mode, cb);
			function go$open(path2, flags2, mode2, cb2, startTime) {
				return fs$open(path2, flags2, mode2, function (err, fd) {
					if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$open, [path2, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
					else {
						if (typeof cb2 === 'function') cb2.apply(this, arguments);
					}
				});
			}
		}
		return fs2;
	}
	function enqueue(elem) {
		debug('ENQUEUE', elem[0].name, elem[1]);
		fs[gracefulQueue].push(elem);
		retry();
	}
	var retryTimer;
	function resetQueue() {
		var now = Date.now();
		for (var i = 0; i < fs[gracefulQueue].length; ++i) {
			if (fs[gracefulQueue][i].length > 2) {
				fs[gracefulQueue][i][3] = now;
				fs[gracefulQueue][i][4] = now;
			}
		}
		retry();
	}
	function retry() {
		clearTimeout(retryTimer);
		retryTimer = undefined;
		if (fs[gracefulQueue].length === 0) return;
		var elem = fs[gracefulQueue].shift();
		var fn = elem[0];
		var args = elem[1];
		var err = elem[2];
		var startTime = elem[3];
		var lastTime = elem[4];
		if (startTime === undefined) {
			debug('RETRY', fn.name, args);
			fn.apply(null, args);
		} else if (Date.now() - startTime >= 60000) {
			debug('TIMEOUT', fn.name, args);
			var cb = args.pop();
			if (typeof cb === 'function') cb.call(null, err);
		} else {
			var sinceAttempt = Date.now() - lastTime;
			var sinceStart = Math.max(lastTime - startTime, 1);
			var desiredDelay = Math.min(sinceStart * 1.2, 100);
			if (sinceAttempt >= desiredDelay) {
				debug('RETRY', fn.name, args);
				fn.apply(null, args.concat([startTime]));
			} else {
				fs[gracefulQueue].push(elem);
			}
		}
		if (retryTimer === undefined) {
			retryTimer = setTimeout(retry, 0);
		}
	}
});

// node_modules/fs-extra/lib/fs/index.js
var require_fs = __commonJS((exports2) => {
	var u = require_universalify().fromCallback;
	var fs = require_graceful_fs();
	var api = ['access', 'appendFile', 'chmod', 'chown', 'close', 'copyFile', 'cp', 'fchmod', 'fchown', 'fdatasync', 'fstat', 'fsync', 'ftruncate', 'futimes', 'glob', 'lchmod', 'lchown', 'lutimes', 'link', 'lstat', 'mkdir', 'mkdtemp', 'open', 'opendir', 'readdir', 'readFile', 'readlink', 'realpath', 'rename', 'rm', 'rmdir', 'stat', 'statfs', 'symlink', 'truncate', 'unlink', 'utimes', 'writeFile'].filter((key) => {
		return typeof fs[key] === 'function';
	});
	Object.assign(exports2, fs);
	api.forEach((method) => {
		exports2[method] = u(fs[method]);
	});
	exports2.exists = function (filename, callback) {
		if (typeof callback === 'function') {
			return fs.exists(filename, callback);
		}
		return new Promise((resolve) => {
			return fs.exists(filename, resolve);
		});
	};
	exports2.read = function (fd, buffer, offset, length, position, callback) {
		if (typeof callback === 'function') {
			return fs.read(fd, buffer, offset, length, position, callback);
		}
		return new Promise((resolve, reject) => {
			fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
				if (err) return reject(err);
				resolve({ bytesRead, buffer: buffer2 });
			});
		});
	};
	exports2.write = function (fd, buffer, ...args) {
		if (typeof args[args.length - 1] === 'function') {
			return fs.write(fd, buffer, ...args);
		}
		return new Promise((resolve, reject) => {
			fs.write(fd, buffer, ...args, (err, bytesWritten, buffer2) => {
				if (err) return reject(err);
				resolve({ bytesWritten, buffer: buffer2 });
			});
		});
	};
	exports2.readv = function (fd, buffers, ...args) {
		if (typeof args[args.length - 1] === 'function') {
			return fs.readv(fd, buffers, ...args);
		}
		return new Promise((resolve, reject) => {
			fs.readv(fd, buffers, ...args, (err, bytesRead, buffers2) => {
				if (err) return reject(err);
				resolve({ bytesRead, buffers: buffers2 });
			});
		});
	};
	exports2.writev = function (fd, buffers, ...args) {
		if (typeof args[args.length - 1] === 'function') {
			return fs.writev(fd, buffers, ...args);
		}
		return new Promise((resolve, reject) => {
			fs.writev(fd, buffers, ...args, (err, bytesWritten, buffers2) => {
				if (err) return reject(err);
				resolve({ bytesWritten, buffers: buffers2 });
			});
		});
	};
	if (typeof fs.realpath.native === 'function') {
		exports2.realpath.native = u(fs.realpath.native);
	} else {
		process.emitWarning('fs.realpath.native is not a function. Is fs being monkey-patched?', 'Warning', 'fs-extra-WARN0003');
	}
});

// node_modules/fs-extra/lib/mkdirs/utils.js
var require_utils = __commonJS((exports2, module2) => {
	var path = require('path');
	module2.exports.checkPath = function checkPath(pth) {
		if (process.platform === 'win32') {
			const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ''));
			if (pathHasInvalidWinCharacters) {
				const error = new Error(`Path contains invalid characters: ${pth}`);
				error.code = 'EINVAL';
				throw error;
			}
		}
	};
});

// node_modules/fs-extra/lib/mkdirs/make-dir.js
var require_make_dir = __commonJS((exports2, module2) => {
	var fs = require_fs();
	var { checkPath } = require_utils();
	var getMode = (options) => {
		const defaults = { mode: 511 };
		if (typeof options === 'number') return options;
		return { ...defaults, ...options }.mode;
	};
	module2.exports.makeDir = async (dir, options) => {
		checkPath(dir);
		return fs.mkdir(dir, {
			mode: getMode(options),
			recursive: true,
		});
	};
	module2.exports.makeDirSync = (dir, options) => {
		checkPath(dir);
		return fs.mkdirSync(dir, {
			mode: getMode(options),
			recursive: true,
		});
	};
});

// node_modules/fs-extra/lib/mkdirs/index.js
var require_mkdirs = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	var { makeDir: _makeDir, makeDirSync } = require_make_dir();
	var makeDir = u(_makeDir);
	module2.exports = {
		mkdirs: makeDir,
		mkdirsSync: makeDirSync,
		mkdirp: makeDir,
		mkdirpSync: makeDirSync,
		ensureDir: makeDir,
		ensureDirSync: makeDirSync,
	};
});

// node_modules/fs-extra/lib/path-exists/index.js
var require_path_exists = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	var fs = require_fs();
	function pathExists(path) {
		return fs
			.access(path)
			.then(() => true)
			.catch(() => false);
	}
	module2.exports = {
		pathExists: u(pathExists),
		pathExistsSync: fs.existsSync,
	};
});

// node_modules/fs-extra/lib/util/utimes.js
var require_utimes = __commonJS((exports2, module2) => {
	var fs = require_fs();
	var u = require_universalify().fromPromise;
	async function utimesMillis(path, atime, mtime) {
		const fd = await fs.open(path, 'r+');
		let closeErr = null;
		try {
			await fs.futimes(fd, atime, mtime);
		} finally {
			try {
				await fs.close(fd);
			} catch (e) {
				closeErr = e;
			}
		}
		if (closeErr) {
			throw closeErr;
		}
	}
	function utimesMillisSync(path, atime, mtime) {
		const fd = fs.openSync(path, 'r+');
		fs.futimesSync(fd, atime, mtime);
		return fs.closeSync(fd);
	}
	module2.exports = {
		utimesMillis: u(utimesMillis),
		utimesMillisSync,
	};
});

// node_modules/fs-extra/lib/util/stat.js
var require_stat = __commonJS((exports2, module2) => {
	var fs = require_fs();
	var path = require('path');
	var u = require_universalify().fromPromise;
	function getStats(src, dest, opts) {
		const statFunc = opts.dereference ? (file) => fs.stat(file, { bigint: true }) : (file) => fs.lstat(file, { bigint: true });
		return Promise.all([
			statFunc(src),
			statFunc(dest).catch((err) => {
				if (err.code === 'ENOENT') return null;
				throw err;
			}),
		]).then(([srcStat, destStat]) => ({ srcStat, destStat }));
	}
	function getStatsSync(src, dest, opts) {
		let destStat;
		const statFunc = opts.dereference ? (file) => fs.statSync(file, { bigint: true }) : (file) => fs.lstatSync(file, { bigint: true });
		const srcStat = statFunc(src);
		try {
			destStat = statFunc(dest);
		} catch (err) {
			if (err.code === 'ENOENT') return { srcStat, destStat: null };
			throw err;
		}
		return { srcStat, destStat };
	}
	async function checkPaths(src, dest, funcName, opts) {
		const { srcStat, destStat } = await getStats(src, dest, opts);
		if (destStat) {
			if (areIdentical(srcStat, destStat)) {
				const srcBaseName = path.basename(src);
				const destBaseName = path.basename(dest);
				if (funcName === 'move' && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
					return { srcStat, destStat, isChangingCase: true };
				}
				throw new Error('Source and destination must not be the same.');
			}
			if (srcStat.isDirectory() && !destStat.isDirectory()) {
				throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
			}
			if (!srcStat.isDirectory() && destStat.isDirectory()) {
				throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
			}
		}
		if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
			throw new Error(errMsg(src, dest, funcName));
		}
		return { srcStat, destStat };
	}
	function checkPathsSync(src, dest, funcName, opts) {
		const { srcStat, destStat } = getStatsSync(src, dest, opts);
		if (destStat) {
			if (areIdentical(srcStat, destStat)) {
				const srcBaseName = path.basename(src);
				const destBaseName = path.basename(dest);
				if (funcName === 'move' && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
					return { srcStat, destStat, isChangingCase: true };
				}
				throw new Error('Source and destination must not be the same.');
			}
			if (srcStat.isDirectory() && !destStat.isDirectory()) {
				throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
			}
			if (!srcStat.isDirectory() && destStat.isDirectory()) {
				throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
			}
		}
		if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
			throw new Error(errMsg(src, dest, funcName));
		}
		return { srcStat, destStat };
	}
	async function checkParentPaths(src, srcStat, dest, funcName) {
		const srcParent = path.resolve(path.dirname(src));
		const destParent = path.resolve(path.dirname(dest));
		if (destParent === srcParent || destParent === path.parse(destParent).root) return;
		let destStat;
		try {
			destStat = await fs.stat(destParent, { bigint: true });
		} catch (err) {
			if (err.code === 'ENOENT') return;
			throw err;
		}
		if (areIdentical(srcStat, destStat)) {
			throw new Error(errMsg(src, dest, funcName));
		}
		return checkParentPaths(src, srcStat, destParent, funcName);
	}
	function checkParentPathsSync(src, srcStat, dest, funcName) {
		const srcParent = path.resolve(path.dirname(src));
		const destParent = path.resolve(path.dirname(dest));
		if (destParent === srcParent || destParent === path.parse(destParent).root) return;
		let destStat;
		try {
			destStat = fs.statSync(destParent, { bigint: true });
		} catch (err) {
			if (err.code === 'ENOENT') return;
			throw err;
		}
		if (areIdentical(srcStat, destStat)) {
			throw new Error(errMsg(src, dest, funcName));
		}
		return checkParentPathsSync(src, srcStat, destParent, funcName);
	}
	function areIdentical(srcStat, destStat) {
		return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
	}
	function isSrcSubdir(src, dest) {
		const srcArr = path
			.resolve(src)
			.split(path.sep)
			.filter((i) => i);
		const destArr = path
			.resolve(dest)
			.split(path.sep)
			.filter((i) => i);
		return srcArr.every((cur, i) => destArr[i] === cur);
	}
	function errMsg(src, dest, funcName) {
		return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
	}
	module2.exports = {
		checkPaths: u(checkPaths),
		checkPathsSync,
		checkParentPaths: u(checkParentPaths),
		checkParentPathsSync,
		isSrcSubdir,
		areIdentical,
	};
});

// node_modules/fs-extra/lib/copy/copy.js
var require_copy = __commonJS((exports2, module2) => {
	var fs = require_fs();
	var path = require('path');
	var { mkdirs } = require_mkdirs();
	var { pathExists } = require_path_exists();
	var { utimesMillis } = require_utimes();
	var stat = require_stat();
	async function copy(src, dest, opts = {}) {
		if (typeof opts === 'function') {
			opts = { filter: opts };
		}
		opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
		opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
		if (opts.preserveTimestamps && process.arch === 'ia32') {
			process.emitWarning(
				`Using the preserveTimestamps option in 32-bit node is not recommended;

` + '\tsee https://github.com/jprichardson/node-fs-extra/issues/269',
				'Warning',
				'fs-extra-WARN0001'
			);
		}
		const { srcStat, destStat } = await stat.checkPaths(src, dest, 'copy', opts);
		await stat.checkParentPaths(src, srcStat, dest, 'copy');
		const include = await runFilter(src, dest, opts);
		if (!include) return;
		const destParent = path.dirname(dest);
		const dirExists = await pathExists(destParent);
		if (!dirExists) {
			await mkdirs(destParent);
		}
		await getStatsAndPerformCopy(destStat, src, dest, opts);
	}
	async function runFilter(src, dest, opts) {
		if (!opts.filter) return true;
		return opts.filter(src, dest);
	}
	async function getStatsAndPerformCopy(destStat, src, dest, opts) {
		const statFn = opts.dereference ? fs.stat : fs.lstat;
		const srcStat = await statFn(src);
		if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);
		if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);
		if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);
		if (srcStat.isSocket()) throw new Error(`Cannot copy a socket file: ${src}`);
		if (srcStat.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${src}`);
		throw new Error(`Unknown file: ${src}`);
	}
	async function onFile(srcStat, destStat, src, dest, opts) {
		if (!destStat) return copyFile(srcStat, src, dest, opts);
		if (opts.overwrite) {
			await fs.unlink(dest);
			return copyFile(srcStat, src, dest, opts);
		}
		if (opts.errorOnExist) {
			throw new Error(`'${dest}' already exists`);
		}
	}
	async function copyFile(srcStat, src, dest, opts) {
		await fs.copyFile(src, dest);
		if (opts.preserveTimestamps) {
			if (fileIsNotWritable(srcStat.mode)) {
				await makeFileWritable(dest, srcStat.mode);
			}
			const updatedSrcStat = await fs.stat(src);
			await utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
		}
		return fs.chmod(dest, srcStat.mode);
	}
	function fileIsNotWritable(srcMode) {
		return (srcMode & 128) === 0;
	}
	function makeFileWritable(dest, srcMode) {
		return fs.chmod(dest, srcMode | 128);
	}
	async function onDir(srcStat, destStat, src, dest, opts) {
		if (!destStat) {
			await fs.mkdir(dest);
		}
		const promises = [];
		for await (const item of await fs.opendir(src)) {
			const srcItem = path.join(src, item.name);
			const destItem = path.join(dest, item.name);
			promises.push(
				runFilter(srcItem, destItem, opts).then((include) => {
					if (include) {
						return stat.checkPaths(srcItem, destItem, 'copy', opts).then(({ destStat: destStat2 }) => {
							return getStatsAndPerformCopy(destStat2, srcItem, destItem, opts);
						});
					}
				})
			);
		}
		await Promise.all(promises);
		if (!destStat) {
			await fs.chmod(dest, srcStat.mode);
		}
	}
	async function onLink(destStat, src, dest, opts) {
		let resolvedSrc = await fs.readlink(src);
		if (opts.dereference) {
			resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
		}
		if (!destStat) {
			return fs.symlink(resolvedSrc, dest);
		}
		let resolvedDest = null;
		try {
			resolvedDest = await fs.readlink(dest);
		} catch (e) {
			if (e.code === 'EINVAL' || e.code === 'UNKNOWN') return fs.symlink(resolvedSrc, dest);
			throw e;
		}
		if (opts.dereference) {
			resolvedDest = path.resolve(process.cwd(), resolvedDest);
		}
		if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
			throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
		}
		if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
			throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
		}
		await fs.unlink(dest);
		return fs.symlink(resolvedSrc, dest);
	}
	module2.exports = copy;
});

// node_modules/fs-extra/lib/copy/copy-sync.js
var require_copy_sync = __commonJS((exports2, module2) => {
	var fs = require_graceful_fs();
	var path = require('path');
	var mkdirsSync = require_mkdirs().mkdirsSync;
	var utimesMillisSync = require_utimes().utimesMillisSync;
	var stat = require_stat();
	function copySync(src, dest, opts) {
		if (typeof opts === 'function') {
			opts = { filter: opts };
		}
		opts = opts || {};
		opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
		opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
		if (opts.preserveTimestamps && process.arch === 'ia32') {
			process.emitWarning(
				`Using the preserveTimestamps option in 32-bit node is not recommended;

` + '\tsee https://github.com/jprichardson/node-fs-extra/issues/269',
				'Warning',
				'fs-extra-WARN0002'
			);
		}
		const { srcStat, destStat } = stat.checkPathsSync(src, dest, 'copy', opts);
		stat.checkParentPathsSync(src, srcStat, dest, 'copy');
		if (opts.filter && !opts.filter(src, dest)) return;
		const destParent = path.dirname(dest);
		if (!fs.existsSync(destParent)) mkdirsSync(destParent);
		return getStats(destStat, src, dest, opts);
	}
	function getStats(destStat, src, dest, opts) {
		const statSync = opts.dereference ? fs.statSync : fs.lstatSync;
		const srcStat = statSync(src);
		if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);
		else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);
		else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);
		else if (srcStat.isSocket()) throw new Error(`Cannot copy a socket file: ${src}`);
		else if (srcStat.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${src}`);
		throw new Error(`Unknown file: ${src}`);
	}
	function onFile(srcStat, destStat, src, dest, opts) {
		if (!destStat) return copyFile(srcStat, src, dest, opts);
		return mayCopyFile(srcStat, src, dest, opts);
	}
	function mayCopyFile(srcStat, src, dest, opts) {
		if (opts.overwrite) {
			fs.unlinkSync(dest);
			return copyFile(srcStat, src, dest, opts);
		} else if (opts.errorOnExist) {
			throw new Error(`'${dest}' already exists`);
		}
	}
	function copyFile(srcStat, src, dest, opts) {
		fs.copyFileSync(src, dest);
		if (opts.preserveTimestamps) handleTimestamps(srcStat.mode, src, dest);
		return setDestMode(dest, srcStat.mode);
	}
	function handleTimestamps(srcMode, src, dest) {
		if (fileIsNotWritable(srcMode)) makeFileWritable(dest, srcMode);
		return setDestTimestamps(src, dest);
	}
	function fileIsNotWritable(srcMode) {
		return (srcMode & 128) === 0;
	}
	function makeFileWritable(dest, srcMode) {
		return setDestMode(dest, srcMode | 128);
	}
	function setDestMode(dest, srcMode) {
		return fs.chmodSync(dest, srcMode);
	}
	function setDestTimestamps(src, dest) {
		const updatedSrcStat = fs.statSync(src);
		return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
	}
	function onDir(srcStat, destStat, src, dest, opts) {
		if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts);
		return copyDir(src, dest, opts);
	}
	function mkDirAndCopy(srcMode, src, dest, opts) {
		fs.mkdirSync(dest);
		copyDir(src, dest, opts);
		return setDestMode(dest, srcMode);
	}
	function copyDir(src, dest, opts) {
		const dir = fs.opendirSync(src);
		try {
			let dirent;
			while ((dirent = dir.readSync()) !== null) {
				copyDirItem(dirent.name, src, dest, opts);
			}
		} finally {
			dir.closeSync();
		}
	}
	function copyDirItem(item, src, dest, opts) {
		const srcItem = path.join(src, item);
		const destItem = path.join(dest, item);
		if (opts.filter && !opts.filter(srcItem, destItem)) return;
		const { destStat } = stat.checkPathsSync(srcItem, destItem, 'copy', opts);
		return getStats(destStat, srcItem, destItem, opts);
	}
	function onLink(destStat, src, dest, opts) {
		let resolvedSrc = fs.readlinkSync(src);
		if (opts.dereference) {
			resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
		}
		if (!destStat) {
			return fs.symlinkSync(resolvedSrc, dest);
		} else {
			let resolvedDest;
			try {
				resolvedDest = fs.readlinkSync(dest);
			} catch (err) {
				if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlinkSync(resolvedSrc, dest);
				throw err;
			}
			if (opts.dereference) {
				resolvedDest = path.resolve(process.cwd(), resolvedDest);
			}
			if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
				throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
			}
			if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
				throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
			}
			return copyLink(resolvedSrc, dest);
		}
	}
	function copyLink(resolvedSrc, dest) {
		fs.unlinkSync(dest);
		return fs.symlinkSync(resolvedSrc, dest);
	}
	module2.exports = copySync;
});

// node_modules/fs-extra/lib/copy/index.js
var require_copy2 = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	module2.exports = {
		copy: u(require_copy()),
		copySync: require_copy_sync(),
	};
});

// node_modules/fs-extra/lib/remove/index.js
var require_remove = __commonJS((exports2, module2) => {
	var fs = require_graceful_fs();
	var u = require_universalify().fromCallback;
	function remove(path, callback) {
		fs.rm(path, { recursive: true, force: true }, callback);
	}
	function removeSync(path) {
		fs.rmSync(path, { recursive: true, force: true });
	}
	module2.exports = {
		remove: u(remove),
		removeSync,
	};
});

// node_modules/fs-extra/lib/empty/index.js
var require_empty = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	var fs = require_fs();
	var path = require('path');
	var mkdir = require_mkdirs();
	var remove = require_remove();
	var emptyDir = u(async function emptyDir(dir) {
		let items;
		try {
			items = await fs.readdir(dir);
		} catch {
			return mkdir.mkdirs(dir);
		}
		return Promise.all(items.map((item) => remove.remove(path.join(dir, item))));
	});
	function emptyDirSync(dir) {
		let items;
		try {
			items = fs.readdirSync(dir);
		} catch {
			return mkdir.mkdirsSync(dir);
		}
		items.forEach((item) => {
			item = path.join(dir, item);
			remove.removeSync(item);
		});
	}
	module2.exports = {
		emptyDirSync,
		emptydirSync: emptyDirSync,
		emptyDir,
		emptydir: emptyDir,
	};
});

// node_modules/fs-extra/lib/ensure/file.js
var require_file = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	var path = require('path');
	var fs = require_fs();
	var mkdir = require_mkdirs();
	async function createFile(file) {
		let stats;
		try {
			stats = await fs.stat(file);
		} catch {}
		if (stats && stats.isFile()) return;
		const dir = path.dirname(file);
		let dirStats = null;
		try {
			dirStats = await fs.stat(dir);
		} catch (err) {
			if (err.code === 'ENOENT') {
				await mkdir.mkdirs(dir);
				await fs.writeFile(file, '');
				return;
			} else {
				throw err;
			}
		}
		if (dirStats.isDirectory()) {
			await fs.writeFile(file, '');
		} else {
			await fs.readdir(dir);
		}
	}
	function createFileSync(file) {
		let stats;
		try {
			stats = fs.statSync(file);
		} catch {}
		if (stats && stats.isFile()) return;
		const dir = path.dirname(file);
		try {
			if (!fs.statSync(dir).isDirectory()) {
				fs.readdirSync(dir);
			}
		} catch (err) {
			if (err && err.code === 'ENOENT') mkdir.mkdirsSync(dir);
			else throw err;
		}
		fs.writeFileSync(file, '');
	}
	module2.exports = {
		createFile: u(createFile),
		createFileSync,
	};
});

// node_modules/fs-extra/lib/ensure/link.js
var require_link = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	var path = require('path');
	var fs = require_fs();
	var mkdir = require_mkdirs();
	var { pathExists } = require_path_exists();
	var { areIdentical } = require_stat();
	async function createLink(srcpath, dstpath) {
		let dstStat;
		try {
			dstStat = await fs.lstat(dstpath);
		} catch {}
		let srcStat;
		try {
			srcStat = await fs.lstat(srcpath);
		} catch (err) {
			err.message = err.message.replace('lstat', 'ensureLink');
			throw err;
		}
		if (dstStat && areIdentical(srcStat, dstStat)) return;
		const dir = path.dirname(dstpath);
		const dirExists = await pathExists(dir);
		if (!dirExists) {
			await mkdir.mkdirs(dir);
		}
		await fs.link(srcpath, dstpath);
	}
	function createLinkSync(srcpath, dstpath) {
		let dstStat;
		try {
			dstStat = fs.lstatSync(dstpath);
		} catch {}
		try {
			const srcStat = fs.lstatSync(srcpath);
			if (dstStat && areIdentical(srcStat, dstStat)) return;
		} catch (err) {
			err.message = err.message.replace('lstat', 'ensureLink');
			throw err;
		}
		const dir = path.dirname(dstpath);
		const dirExists = fs.existsSync(dir);
		if (dirExists) return fs.linkSync(srcpath, dstpath);
		mkdir.mkdirsSync(dir);
		return fs.linkSync(srcpath, dstpath);
	}
	module2.exports = {
		createLink: u(createLink),
		createLinkSync,
	};
});

// node_modules/fs-extra/lib/ensure/symlink-paths.js
var require_symlink_paths = __commonJS((exports2, module2) => {
	var path = require('path');
	var fs = require_fs();
	var { pathExists } = require_path_exists();
	var u = require_universalify().fromPromise;
	async function symlinkPaths(srcpath, dstpath) {
		if (path.isAbsolute(srcpath)) {
			try {
				await fs.lstat(srcpath);
			} catch (err) {
				err.message = err.message.replace('lstat', 'ensureSymlink');
				throw err;
			}
			return {
				toCwd: srcpath,
				toDst: srcpath,
			};
		}
		const dstdir = path.dirname(dstpath);
		const relativeToDst = path.join(dstdir, srcpath);
		const exists = await pathExists(relativeToDst);
		if (exists) {
			return {
				toCwd: relativeToDst,
				toDst: srcpath,
			};
		}
		try {
			await fs.lstat(srcpath);
		} catch (err) {
			err.message = err.message.replace('lstat', 'ensureSymlink');
			throw err;
		}
		return {
			toCwd: srcpath,
			toDst: path.relative(dstdir, srcpath),
		};
	}
	function symlinkPathsSync(srcpath, dstpath) {
		if (path.isAbsolute(srcpath)) {
			const exists2 = fs.existsSync(srcpath);
			if (!exists2) throw new Error('absolute srcpath does not exist');
			return {
				toCwd: srcpath,
				toDst: srcpath,
			};
		}
		const dstdir = path.dirname(dstpath);
		const relativeToDst = path.join(dstdir, srcpath);
		const exists = fs.existsSync(relativeToDst);
		if (exists) {
			return {
				toCwd: relativeToDst,
				toDst: srcpath,
			};
		}
		const srcExists = fs.existsSync(srcpath);
		if (!srcExists) throw new Error('relative srcpath does not exist');
		return {
			toCwd: srcpath,
			toDst: path.relative(dstdir, srcpath),
		};
	}
	module2.exports = {
		symlinkPaths: u(symlinkPaths),
		symlinkPathsSync,
	};
});

// node_modules/fs-extra/lib/ensure/symlink-type.js
var require_symlink_type = __commonJS((exports2, module2) => {
	var fs = require_fs();
	var u = require_universalify().fromPromise;
	async function symlinkType(srcpath, type) {
		if (type) return type;
		let stats;
		try {
			stats = await fs.lstat(srcpath);
		} catch {
			return 'file';
		}
		return stats && stats.isDirectory() ? 'dir' : 'file';
	}
	function symlinkTypeSync(srcpath, type) {
		if (type) return type;
		let stats;
		try {
			stats = fs.lstatSync(srcpath);
		} catch {
			return 'file';
		}
		return stats && stats.isDirectory() ? 'dir' : 'file';
	}
	module2.exports = {
		symlinkType: u(symlinkType),
		symlinkTypeSync,
	};
});

// node_modules/fs-extra/lib/ensure/symlink.js
var require_symlink = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	var path = require('path');
	var fs = require_fs();
	var { mkdirs, mkdirsSync } = require_mkdirs();
	var { symlinkPaths, symlinkPathsSync } = require_symlink_paths();
	var { symlinkType, symlinkTypeSync } = require_symlink_type();
	var { pathExists } = require_path_exists();
	var { areIdentical } = require_stat();
	async function createSymlink(srcpath, dstpath, type) {
		let stats;
		try {
			stats = await fs.lstat(dstpath);
		} catch {}
		if (stats && stats.isSymbolicLink()) {
			const [srcStat, dstStat] = await Promise.all([fs.stat(srcpath), fs.stat(dstpath)]);
			if (areIdentical(srcStat, dstStat)) return;
		}
		const relative = await symlinkPaths(srcpath, dstpath);
		srcpath = relative.toDst;
		const toType = await symlinkType(relative.toCwd, type);
		const dir = path.dirname(dstpath);
		if (!(await pathExists(dir))) {
			await mkdirs(dir);
		}
		return fs.symlink(srcpath, dstpath, toType);
	}
	function createSymlinkSync(srcpath, dstpath, type) {
		let stats;
		try {
			stats = fs.lstatSync(dstpath);
		} catch {}
		if (stats && stats.isSymbolicLink()) {
			const srcStat = fs.statSync(srcpath);
			const dstStat = fs.statSync(dstpath);
			if (areIdentical(srcStat, dstStat)) return;
		}
		const relative = symlinkPathsSync(srcpath, dstpath);
		srcpath = relative.toDst;
		type = symlinkTypeSync(relative.toCwd, type);
		const dir = path.dirname(dstpath);
		const exists = fs.existsSync(dir);
		if (exists) return fs.symlinkSync(srcpath, dstpath, type);
		mkdirsSync(dir);
		return fs.symlinkSync(srcpath, dstpath, type);
	}
	module2.exports = {
		createSymlink: u(createSymlink),
		createSymlinkSync,
	};
});

// node_modules/fs-extra/lib/ensure/index.js
var require_ensure = __commonJS((exports2, module2) => {
	var { createFile, createFileSync } = require_file();
	var { createLink, createLinkSync } = require_link();
	var { createSymlink, createSymlinkSync } = require_symlink();
	module2.exports = {
		createFile,
		createFileSync,
		ensureFile: createFile,
		ensureFileSync: createFileSync,
		createLink,
		createLinkSync,
		ensureLink: createLink,
		ensureLinkSync: createLinkSync,
		createSymlink,
		createSymlinkSync,
		ensureSymlink: createSymlink,
		ensureSymlinkSync: createSymlinkSync,
	};
});

// node_modules/jsonfile/utils.js
var require_utils2 = __commonJS((exports2, module2) => {
	function stringify(
		obj,
		{
			EOL = `
`,
			finalEOL = true,
			replacer = null,
			spaces,
		} = {}
	) {
		const EOF = finalEOL ? EOL : '';
		const str = JSON.stringify(obj, replacer, spaces);
		return str.replace(/\n/g, EOL) + EOF;
	}
	function stripBom(content) {
		if (Buffer.isBuffer(content)) content = content.toString('utf8');
		return content.replace(/^\uFEFF/, '');
	}
	module2.exports = { stringify, stripBom };
});

// node_modules/jsonfile/index.js
var require_jsonfile = __commonJS((exports2, module2) => {
	var _fs;
	try {
		_fs = require_graceful_fs();
	} catch (_) {
		_fs = require('fs');
	}
	var universalify = require_universalify();
	var { stringify, stripBom } = require_utils2();
	async function _readFile(file, options = {}) {
		if (typeof options === 'string') {
			options = { encoding: options };
		}
		const fs = options.fs || _fs;
		const shouldThrow = 'throws' in options ? options.throws : true;
		let data = await universalify.fromCallback(fs.readFile)(file, options);
		data = stripBom(data);
		let obj;
		try {
			obj = JSON.parse(data, options ? options.reviver : null);
		} catch (err) {
			if (shouldThrow) {
				err.message = `${file}: ${err.message}`;
				throw err;
			} else {
				return null;
			}
		}
		return obj;
	}
	var readFile = universalify.fromPromise(_readFile);
	function readFileSync(file, options = {}) {
		if (typeof options === 'string') {
			options = { encoding: options };
		}
		const fs = options.fs || _fs;
		const shouldThrow = 'throws' in options ? options.throws : true;
		try {
			let content = fs.readFileSync(file, options);
			content = stripBom(content);
			return JSON.parse(content, options.reviver);
		} catch (err) {
			if (shouldThrow) {
				err.message = `${file}: ${err.message}`;
				throw err;
			} else {
				return null;
			}
		}
	}
	async function _writeFile(file, obj, options = {}) {
		const fs = options.fs || _fs;
		const str = stringify(obj, options);
		await universalify.fromCallback(fs.writeFile)(file, str, options);
	}
	var writeFile = universalify.fromPromise(_writeFile);
	function writeFileSync(file, obj, options = {}) {
		const fs = options.fs || _fs;
		const str = stringify(obj, options);
		return fs.writeFileSync(file, str, options);
	}
	var jsonfile = {
		readFile,
		readFileSync,
		writeFile,
		writeFileSync,
	};
	module2.exports = jsonfile;
});

// node_modules/fs-extra/lib/json/jsonfile.js
var require_jsonfile2 = __commonJS((exports2, module2) => {
	var jsonFile = require_jsonfile();
	module2.exports = {
		readJson: jsonFile.readFile,
		readJsonSync: jsonFile.readFileSync,
		writeJson: jsonFile.writeFile,
		writeJsonSync: jsonFile.writeFileSync,
	};
});

// node_modules/fs-extra/lib/output-file/index.js
var require_output_file = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	var fs = require_fs();
	var path = require('path');
	var mkdir = require_mkdirs();
	var pathExists = require_path_exists().pathExists;
	async function outputFile(file, data, encoding = 'utf-8') {
		const dir = path.dirname(file);
		if (!(await pathExists(dir))) {
			await mkdir.mkdirs(dir);
		}
		return fs.writeFile(file, data, encoding);
	}
	function outputFileSync(file, ...args) {
		const dir = path.dirname(file);
		if (!fs.existsSync(dir)) {
			mkdir.mkdirsSync(dir);
		}
		fs.writeFileSync(file, ...args);
	}
	module2.exports = {
		outputFile: u(outputFile),
		outputFileSync,
	};
});

// node_modules/fs-extra/lib/json/output-json.js
var require_output_json = __commonJS((exports2, module2) => {
	var { stringify } = require_utils2();
	var { outputFile } = require_output_file();
	async function outputJson(file, data, options = {}) {
		const str = stringify(data, options);
		await outputFile(file, str, options);
	}
	module2.exports = outputJson;
});

// node_modules/fs-extra/lib/json/output-json-sync.js
var require_output_json_sync = __commonJS((exports2, module2) => {
	var { stringify } = require_utils2();
	var { outputFileSync } = require_output_file();
	function outputJsonSync(file, data, options) {
		const str = stringify(data, options);
		outputFileSync(file, str, options);
	}
	module2.exports = outputJsonSync;
});

// node_modules/fs-extra/lib/json/index.js
var require_json = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	var jsonFile = require_jsonfile2();
	jsonFile.outputJson = u(require_output_json());
	jsonFile.outputJsonSync = require_output_json_sync();
	jsonFile.outputJSON = jsonFile.outputJson;
	jsonFile.outputJSONSync = jsonFile.outputJsonSync;
	jsonFile.writeJSON = jsonFile.writeJson;
	jsonFile.writeJSONSync = jsonFile.writeJsonSync;
	jsonFile.readJSON = jsonFile.readJson;
	jsonFile.readJSONSync = jsonFile.readJsonSync;
	module2.exports = jsonFile;
});

// node_modules/fs-extra/lib/move/move.js
var require_move = __commonJS((exports2, module2) => {
	var fs = require_fs();
	var path = require('path');
	var { copy } = require_copy2();
	var { remove } = require_remove();
	var { mkdirp } = require_mkdirs();
	var { pathExists } = require_path_exists();
	var stat = require_stat();
	async function move(src, dest, opts = {}) {
		const overwrite = opts.overwrite || opts.clobber || false;
		const { srcStat, isChangingCase = false } = await stat.checkPaths(src, dest, 'move', opts);
		await stat.checkParentPaths(src, srcStat, dest, 'move');
		const destParent = path.dirname(dest);
		const parsedParentPath = path.parse(destParent);
		if (parsedParentPath.root !== destParent) {
			await mkdirp(destParent);
		}
		return doRename(src, dest, overwrite, isChangingCase);
	}
	async function doRename(src, dest, overwrite, isChangingCase) {
		if (!isChangingCase) {
			if (overwrite) {
				await remove(dest);
			} else if (await pathExists(dest)) {
				throw new Error('dest already exists.');
			}
		}
		try {
			await fs.rename(src, dest);
		} catch (err) {
			if (err.code !== 'EXDEV') {
				throw err;
			}
			await moveAcrossDevice(src, dest, overwrite);
		}
	}
	async function moveAcrossDevice(src, dest, overwrite) {
		const opts = {
			overwrite,
			errorOnExist: true,
			preserveTimestamps: true,
		};
		await copy(src, dest, opts);
		return remove(src);
	}
	module2.exports = move;
});

// node_modules/fs-extra/lib/move/move-sync.js
var require_move_sync = __commonJS((exports2, module2) => {
	var fs = require_graceful_fs();
	var path = require('path');
	var copySync = require_copy2().copySync;
	var removeSync = require_remove().removeSync;
	var mkdirpSync = require_mkdirs().mkdirpSync;
	var stat = require_stat();
	function moveSync(src, dest, opts) {
		opts = opts || {};
		const overwrite = opts.overwrite || opts.clobber || false;
		const { srcStat, isChangingCase = false } = stat.checkPathsSync(src, dest, 'move', opts);
		stat.checkParentPathsSync(src, srcStat, dest, 'move');
		if (!isParentRoot(dest)) mkdirpSync(path.dirname(dest));
		return doRename(src, dest, overwrite, isChangingCase);
	}
	function isParentRoot(dest) {
		const parent = path.dirname(dest);
		const parsedPath = path.parse(parent);
		return parsedPath.root === parent;
	}
	function doRename(src, dest, overwrite, isChangingCase) {
		if (isChangingCase) return rename(src, dest, overwrite);
		if (overwrite) {
			removeSync(dest);
			return rename(src, dest, overwrite);
		}
		if (fs.existsSync(dest)) throw new Error('dest already exists.');
		return rename(src, dest, overwrite);
	}
	function rename(src, dest, overwrite) {
		try {
			fs.renameSync(src, dest);
		} catch (err) {
			if (err.code !== 'EXDEV') throw err;
			return moveAcrossDevice(src, dest, overwrite);
		}
	}
	function moveAcrossDevice(src, dest, overwrite) {
		const opts = {
			overwrite,
			errorOnExist: true,
			preserveTimestamps: true,
		};
		copySync(src, dest, opts);
		return removeSync(src);
	}
	module2.exports = moveSync;
});

// node_modules/fs-extra/lib/move/index.js
var require_move2 = __commonJS((exports2, module2) => {
	var u = require_universalify().fromPromise;
	module2.exports = {
		move: u(require_move()),
		moveSync: require_move_sync(),
	};
});

// node_modules/fs-extra/lib/index.js
var require_lib = __commonJS((exports2, module2) => {
	module2.exports = {
		...require_fs(),
		...require_copy2(),
		...require_empty(),
		...require_ensure(),
		...require_json(),
		...require_mkdirs(),
		...require_move2(),
		...require_output_file(),
		...require_path_exists(),
		...require_remove(),
	};
});

// node_modules/dotenv/package.json
var require_package = __commonJS((exports2, module2) => {
	module2.exports = {
		name: 'dotenv',
		version: '16.5.0',
		description: 'Loads environment variables from .env file',
		main: 'lib/main.js',
		types: 'lib/main.d.ts',
		exports: {
			'.': {
				types: './lib/main.d.ts',
				require: './lib/main.js',
				default: './lib/main.js',
			},
			'./config': './config.js',
			'./config.js': './config.js',
			'./lib/env-options': './lib/env-options.js',
			'./lib/env-options.js': './lib/env-options.js',
			'./lib/cli-options': './lib/cli-options.js',
			'./lib/cli-options.js': './lib/cli-options.js',
			'./package.json': './package.json',
		},
		scripts: {
			'dts-check': 'tsc --project tests/types/tsconfig.json',
			lint: 'standard',
			pretest: 'npm run lint && npm run dts-check',
			test: 'tap run --allow-empty-coverage --disable-coverage --timeout=60000',
			'test:coverage': 'tap run --show-full-coverage --timeout=60000 --coverage-report=lcov',
			prerelease: 'npm test',
			release: 'standard-version',
		},
		repository: {
			type: 'git',
			url: 'git://github.com/motdotla/dotenv.git',
		},
		homepage: 'https://github.com/motdotla/dotenv#readme',
		funding: 'https://dotenvx.com',
		keywords: ['dotenv', 'env', '.env', 'environment', 'variables', 'config', 'settings'],
		readmeFilename: 'README.md',
		license: 'BSD-2-Clause',
		devDependencies: {
			'@types/node': '^18.11.3',
			decache: '^4.6.2',
			sinon: '^14.0.1',
			standard: '^17.0.0',
			'standard-version': '^9.5.0',
			tap: '^19.2.0',
			typescript: '^4.8.4',
		},
		engines: {
			node: '>=12',
		},
		browser: {
			fs: false,
		},
	};
});

// node_modules/dotenv/lib/main.js
var require_main = __commonJS((exports2, module2) => {
	var fs9 = require('fs');
	var path6 = require('path');
	var os2 = require('os');
	var crypto = require('crypto');
	var packageJson = require_package();
	var version = packageJson.version;
	var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
	function parse(src) {
		const obj = {};
		let lines = src.toString();
		lines = lines.replace(
			/\r\n?/gm,
			`
`
		);
		let match;
		while ((match = LINE.exec(lines)) != null) {
			const key = match[1];
			let value = match[2] || '';
			value = value.trim();
			const maybeQuote = value[0];
			value = value.replace(/^(['"`])([\s\S]*)\1$/gm, '$2');
			if (maybeQuote === '"') {
				value = value.replace(
					/\\n/g,
					`
`
				);
				value = value.replace(/\\r/g, '\r');
			}
			obj[key] = value;
		}
		return obj;
	}
	function _parseVault(options) {
		const vaultPath = _vaultPath(options);
		const result = DotenvModule.configDotenv({ path: vaultPath });
		if (!result.parsed) {
			const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
			err.code = 'MISSING_DATA';
			throw err;
		}
		const keys = _dotenvKey(options).split(',');
		const length = keys.length;
		let decrypted;
		for (let i = 0; i < length; i++) {
			try {
				const key = keys[i].trim();
				const attrs = _instructions(result, key);
				decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
				break;
			} catch (error) {
				if (i + 1 >= length) {
					throw error;
				}
			}
		}
		return DotenvModule.parse(decrypted);
	}
	function _warn(message) {
		console.log(`[dotenv@${version}][WARN] ${message}`);
	}
	function _debug(message) {
		console.log(`[dotenv@${version}][DEBUG] ${message}`);
	}
	function _dotenvKey(options) {
		if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
			return options.DOTENV_KEY;
		}
		if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
			return process.env.DOTENV_KEY;
		}
		return '';
	}
	function _instructions(result, dotenvKey) {
		let uri;
		try {
			uri = new URL(dotenvKey);
		} catch (error) {
			if (error.code === 'ERR_INVALID_URL') {
				const err = new Error('INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development');
				err.code = 'INVALID_DOTENV_KEY';
				throw err;
			}
			throw error;
		}
		const key = uri.password;
		if (!key) {
			const err = new Error('INVALID_DOTENV_KEY: Missing key part');
			err.code = 'INVALID_DOTENV_KEY';
			throw err;
		}
		const environment = uri.searchParams.get('environment');
		if (!environment) {
			const err = new Error('INVALID_DOTENV_KEY: Missing environment part');
			err.code = 'INVALID_DOTENV_KEY';
			throw err;
		}
		const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
		const ciphertext = result.parsed[environmentKey];
		if (!ciphertext) {
			const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
			err.code = 'NOT_FOUND_DOTENV_ENVIRONMENT';
			throw err;
		}
		return { ciphertext, key };
	}
	function _vaultPath(options) {
		let possibleVaultPath = null;
		if (options && options.path && options.path.length > 0) {
			if (Array.isArray(options.path)) {
				for (const filepath of options.path) {
					if (fs9.existsSync(filepath)) {
						possibleVaultPath = filepath.endsWith('.vault') ? filepath : `${filepath}.vault`;
					}
				}
			} else {
				possibleVaultPath = options.path.endsWith('.vault') ? options.path : `${options.path}.vault`;
			}
		} else {
			possibleVaultPath = path6.resolve(process.cwd(), '.env.vault');
		}
		if (fs9.existsSync(possibleVaultPath)) {
			return possibleVaultPath;
		}
		return null;
	}
	function _resolveHome(envPath) {
		return envPath[0] === '~' ? path6.join(os2.homedir(), envPath.slice(1)) : envPath;
	}
	function _configVault(options) {
		const debug = Boolean(options && options.debug);
		if (debug) {
			_debug('Loading env from encrypted .env.vault');
		}
		const parsed = DotenvModule._parseVault(options);
		let processEnv = process.env;
		if (options && options.processEnv != null) {
			processEnv = options.processEnv;
		}
		DotenvModule.populate(processEnv, parsed, options);
		return { parsed };
	}
	function configDotenv(options) {
		const dotenvPath = path6.resolve(process.cwd(), '.env');
		let encoding = 'utf8';
		const debug = Boolean(options && options.debug);
		if (options && options.encoding) {
			encoding = options.encoding;
		} else {
			if (debug) {
				_debug('No encoding is specified. UTF-8 is used by default');
			}
		}
		let optionPaths = [dotenvPath];
		if (options && options.path) {
			if (!Array.isArray(options.path)) {
				optionPaths = [_resolveHome(options.path)];
			} else {
				optionPaths = [];
				for (const filepath of options.path) {
					optionPaths.push(_resolveHome(filepath));
				}
			}
		}
		let lastError;
		const parsedAll = {};
		for (const path7 of optionPaths) {
			try {
				const parsed = DotenvModule.parse(fs9.readFileSync(path7, { encoding }));
				DotenvModule.populate(parsedAll, parsed, options);
			} catch (e) {
				if (debug) {
					_debug(`Failed to load ${path7} ${e.message}`);
				}
				lastError = e;
			}
		}
		let processEnv = process.env;
		if (options && options.processEnv != null) {
			processEnv = options.processEnv;
		}
		DotenvModule.populate(processEnv, parsedAll, options);
		if (lastError) {
			return { parsed: parsedAll, error: lastError };
		} else {
			return { parsed: parsedAll };
		}
	}
	function config(options) {
		if (_dotenvKey(options).length === 0) {
			return DotenvModule.configDotenv(options);
		}
		const vaultPath = _vaultPath(options);
		if (!vaultPath) {
			_warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
			return DotenvModule.configDotenv(options);
		}
		return DotenvModule._configVault(options);
	}
	function decrypt(encrypted, keyStr) {
		const key = Buffer.from(keyStr.slice(-64), 'hex');
		let ciphertext = Buffer.from(encrypted, 'base64');
		const nonce = ciphertext.subarray(0, 12);
		const authTag = ciphertext.subarray(-16);
		ciphertext = ciphertext.subarray(12, -16);
		try {
			const aesgcm = crypto.createDecipheriv('aes-256-gcm', key, nonce);
			aesgcm.setAuthTag(authTag);
			return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
		} catch (error) {
			const isRange = error instanceof RangeError;
			const invalidKeyLength = error.message === 'Invalid key length';
			const decryptionFailed = error.message === 'Unsupported state or unable to authenticate data';
			if (isRange || invalidKeyLength) {
				const err = new Error('INVALID_DOTENV_KEY: It must be 64 characters long (or more)');
				err.code = 'INVALID_DOTENV_KEY';
				throw err;
			} else if (decryptionFailed) {
				const err = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY');
				err.code = 'DECRYPTION_FAILED';
				throw err;
			} else {
				throw error;
			}
		}
	}
	function populate(processEnv, parsed, options = {}) {
		const debug = Boolean(options && options.debug);
		const override = Boolean(options && options.override);
		if (typeof parsed !== 'object') {
			const err = new Error('OBJECT_REQUIRED: Please check the processEnv argument being passed to populate');
			err.code = 'OBJECT_REQUIRED';
			throw err;
		}
		for (const key of Object.keys(parsed)) {
			if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
				if (override === true) {
					processEnv[key] = parsed[key];
				}
				if (debug) {
					if (override === true) {
						_debug(`"${key}" is already defined and WAS overwritten`);
					} else {
						_debug(`"${key}" is already defined and was NOT overwritten`);
					}
				}
			} else {
				processEnv[key] = parsed[key];
			}
		}
	}
	var DotenvModule = {
		configDotenv,
		_configVault,
		_parseVault,
		config,
		decrypt,
		parse,
		populate,
	};
	module2.exports.configDotenv = DotenvModule.configDotenv;
	module2.exports._configVault = DotenvModule._configVault;
	module2.exports._parseVault = DotenvModule._parseVault;
	module2.exports.config = DotenvModule.config;
	module2.exports.decrypt = DotenvModule.decrypt;
	module2.exports.parse = DotenvModule.parse;
	module2.exports.populate = DotenvModule.populate;
	module2.exports = DotenvModule;
});

// node_modules/ms/index.js
var require_ms = __commonJS((exports2, module2) => {
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;
	module2.exports = function (val, options) {
		options = options || {};
		var type = typeof val;
		if (type === 'string' && val.length > 0) {
			return parse(val);
		} else if (type === 'number' && isFinite(val)) {
			return options.long ? fmtLong(val) : fmtShort(val);
		}
		throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
	};
	function parse(str) {
		str = String(str);
		if (str.length > 100) {
			return;
		}
		var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
		if (!match) {
			return;
		}
		var n = parseFloat(match[1]);
		var type = (match[2] || 'ms').toLowerCase();
		switch (type) {
			case 'years':
			case 'year':
			case 'yrs':
			case 'yr':
			case 'y':
				return n * y;
			case 'weeks':
			case 'week':
			case 'w':
				return n * w;
			case 'days':
			case 'day':
			case 'd':
				return n * d;
			case 'hours':
			case 'hour':
			case 'hrs':
			case 'hr':
			case 'h':
				return n * h;
			case 'minutes':
			case 'minute':
			case 'mins':
			case 'min':
			case 'm':
				return n * m;
			case 'seconds':
			case 'second':
			case 'secs':
			case 'sec':
			case 's':
				return n * s;
			case 'milliseconds':
			case 'millisecond':
			case 'msecs':
			case 'msec':
			case 'ms':
				return n;
			default:
				return;
		}
	}
	function fmtShort(ms) {
		var msAbs = Math.abs(ms);
		if (msAbs >= d) {
			return Math.round(ms / d) + 'd';
		}
		if (msAbs >= h) {
			return Math.round(ms / h) + 'h';
		}
		if (msAbs >= m) {
			return Math.round(ms / m) + 'm';
		}
		if (msAbs >= s) {
			return Math.round(ms / s) + 's';
		}
		return ms + 'ms';
	}
	function fmtLong(ms) {
		var msAbs = Math.abs(ms);
		if (msAbs >= d) {
			return plural(ms, msAbs, d, 'day');
		}
		if (msAbs >= h) {
			return plural(ms, msAbs, h, 'hour');
		}
		if (msAbs >= m) {
			return plural(ms, msAbs, m, 'minute');
		}
		if (msAbs >= s) {
			return plural(ms, msAbs, s, 'second');
		}
		return ms + ' ms';
	}
	function plural(ms, msAbs, n, name) {
		var isPlural = msAbs >= n * 1.5;
		return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
	}
});

// src/index.ts
var exports_src = {};
__export(exports_src, {
	zodMergeSchemas: () => zodMergeSchemas,
	unflattenObject: () => unflattenObject,
	truthy: () => truthy,
	throwError: () => throwError,
	temporarySave: () => temporarySave,
	sleepSync: () => sleepSync,
	sleep: () => sleep,
	shuffleArray: () => shuffleArray,
	runPerformanceTest: () => runPerformanceTest,
	runInParallel: () => runInParallel,
	runFunctionsInParallel: () => runFunctionsInParallel,
	returnRandomWeightedObject: () => returnRandomWeightedObject,
	returnRandomElement: () => returnRandomElement,
	retry: () => retry,
	replaceAll: () => replaceAll,
	racePromises: () => racePromises,
	pluck: () => pluck,
	pathToFileName: () => pathToFileName,
	objectMap: () => objectMap,
	objectHasKeysWithType: () => objectHasKeysWithType,
	multiSort: () => multiSort,
	lowerCaseObjectKeys: () => lowerCaseObjectKeys,
	keys: () => keys,
	isObject: () => isObject,
	initDotenv: () => initDotenv,
	initConfig: () => initConfig,
	indexOfAll: () => indexOfAll,
	getUniques: () => getUniques,
	getRandomCharacters: () => getRandomCharacters,
	getNextOutputPath: () => getNextOutputPath,
	getFlag: () => getFlag,
	getDirectory: () => getDirectory,
	getAmountOfTimesInArray: () => getAmountOfTimesInArray,
	getAllFilesSync: () => getAllFilesSync,
	getAllFiles: () => getAllFiles,
	floorToPrecision: () => floorToPrecision,
	flattenObject: () => flattenObject,
	ensureFileExists: () => ensureFileExists,
	ensureExists: () => ensureExists,
	ensureDirectoryExists: () => ensureDirectoryExists,
	deepCompare: () => deepCompare,
	createTemporaryDirectory: () => createTemporaryDirectory,
	createError: () => createError,
	combineObjects: () => combineObjects,
	clone: () => clone,
	clamp: () => clamp,
	blockF: () => blockF,
	block: () => block,
	assertType: () => assertType,
	UwU: () => UwU,
});
module.exports = __toCommonJS(exports_src);

// src/utils/assertType/index.ts
var import_picocolors2 = __toESM(require_picocolors());

// src/utils/createError/index.ts
var import_fs_extra2 = __toESM(require_lib());

// src/dev-utils/findPackageJson/index.ts
var import_fs_extra = __toESM(require_lib());
var import_path = __toESM(require('path'));
function findPackageJsonPathFromInside(filepath) {
	const packageJsonPath = import_path.default.join(filepath, 'package.json');
	const exists = import_fs_extra.default.existsSync(packageJsonPath);
	if (exists) return packageJsonPath;
	const nextPath = import_path.default.join(filepath, '..');
	if (nextPath === filepath) return null;
	return findPackageJsonPathFromInside(nextPath);
}

// src/utils/throwError/index.ts
var import_picocolors = __toESM(require_picocolors());
function throwError(...message) {
	const { packageName, stackTrace, functionName, filePath } = createError(true);
	stackTrace
		.split(
			`
`
		)
		.splice(1, 5);
	let output = '';
	output +=
		`
` + import_picocolors.default.red(import_picocolors.default.bold(packageName));
	output +=
		`
` + import_picocolors.default.white(`Function called from the file: ${import_picocolors.default.blue(filePath)}`);
	output +=
		`
` + import_picocolors.default.white(`Function called: ${import_picocolors.default.cyan(functionName)}`);
	output +=
		`
` + import_picocolors.default.white(`You made the mistake: ${import_picocolors.default.magenta(message.join(' '))}`);
	output +=
		`

` + import_picocolors.default.gray(stackTrace);
	output +=
		`

` + import_picocolors.default.gray('This error was thrown by the throwError() function from @lawlzer/utils.');
	throw new Error(output);
}

// src/utils/createError/index.ts
var packageNames = {};
function getPackageName(filePath) {
	if (packageNames[filePath]) {
		return packageNames[filePath];
	}
	const packageJsonPath = findPackageJsonPathFromInside(filePath);
	if (packageJsonPath === null) {
		return 'unknown package name';
	}
	const packageJson = import_fs_extra2.default.readJsonSync(packageJsonPath);
	if (typeof packageJson.name !== 'string') throwError('createError - package.json name is not a string. This should never happen.');
	packageNames[filePath] = packageJson.name;
	return packageJson.name;
}
function createError(removeRecentFunction = false) {
	const errorStack = new Error().stack;
	if (errorStack === undefined) {
		throw new Error('@lawlzer/utils - throwError - error.stack is undefined... We errored, in the throwError/createError function. Wow.');
	}
	let errorArray = errorStack.split(`
`);
	const callerFunction = errorArray[2].trim().split(' ')[1];
	errorArray.splice(1, 1);
	if (removeRecentFunction) {
		errorArray = errorArray.filter((line) => !line.includes(`at ${callerFunction}`));
	}
	const lineThreeSplit = errorArray[1].trim().split(' '),
		filePath = lineThreeSplit[lineThreeSplit.length - 1].replace('(', '').replace(')', ''),
		packageName = filePath ? getPackageName(filePath) : 'unknown package path';
	let functionName = errorArray[1].trim().split(' ')[1];
	if (functionName === '<anonymous>') {
		functionName = 'Object.<anonymous>';
	}
	if (functionName === 'Object.<anonymous>') {
		functionName += ' (this is an anonymous function)';
	}
	return {
		packageName,
		stackTrace: errorArray.join(`
`),
		functionName,
		filePath,
	};
}

// src/utils/assertType/index.ts
function assertType(variable, expectedType) {
	const text = Object.keys(variable);
	const key = text[0];
	if (text.length !== 1) throwError(`You can only assert one value at a time. You passed in ${text.length} values. Variable name: ${text.join(', ')}`);
	const value = variable[key];
	const isCorrectType = expectedType === typeof value;
	if (isCorrectType) return;
	const { stackTrace, functionName, filePath, packageName } = createError(true);
	let output = '';
	output += `
 ${import_picocolors2.default.white(import_picocolors2.default.bold(packageName))}`;
	output += `
 ${import_picocolors2.default.white(`Function called from the file: ${import_picocolors2.default.red(filePath)}`)}`;
	output += `
 ${import_picocolors2.default.white(`Function called: ${import_picocolors2.default.yellow(functionName)}`)}`;
	output += `
 ${import_picocolors2.default.white(`Variable name: ${import_picocolors2.default.green(key)}`)}`;
	output += `
 ${import_picocolors2.default.white(`Variable value: ${import_picocolors2.default.blue(String(value))}`)}`;
	output += `
 ${import_picocolors2.default.white(`Variable type: ${import_picocolors2.default.cyan(typeof value)}`)}`;
	output += `
 ${import_picocolors2.default.white(`Expected type: ${import_picocolors2.default.magenta(expectedType)}`)}`;
	output += `

' ${import_picocolors2.default.gray(stackTrace)}`;
	output += `

' ${import_picocolors2.default.gray('This error was thrown by the assertType() function from @lawlzer/utils.')}`;
	throw output;
}
// src/utils/block/index.ts
var import_util = __toESM(require('util'));
function blockF(timeout) {
	const start = Date.now();
	while (Date.now() - start < timeout) {}
}
var block = import_util.default.deprecate(blockF, '@lawlzer/utils "block()" function has been renamed to "sleepSync".');
// src/utils/clamp/index.ts
function clamp(value, min, max) {
	assertType({ value }, 'number');
	assertType({ min }, 'number');
	assertType({ max }, 'number');
	return Math.min(Math.max(value, min), max);
}
// src/utils/objectMap/index.ts
function objectMap(obj, valSelector, keySelector, ctx) {
	const ret = {};
	for (const key of Object.keys(obj)) {
		const retKey = keySelector ? keySelector.call(ctx ?? null, key, obj) : key;
		const retVal = valSelector.call(ctx ?? null, obj[key], obj);
		ret[retKey] = retVal;
	}
	return ret;
}

// src/utils/clone/index.ts
function clone(input) {
	const isArray = Array.isArray(input);
	if (isArray)
		return input.map((item) => {
			return clone(item);
		});
	const isObject = typeof input === 'object' && input !== null;
	if (isObject) {
		const output = objectMap(input, (value) => {
			return clone(value);
		});
		return output;
	}
	return input;
}
// src/utils/combineObjects/index.ts
function combineObjects(...args) {
	const result = {};
	for (const obj of args) {
		if (typeof obj !== 'object') throwError('Input is not an object. Input: ', obj);
		if (Array.isArray(obj)) throwError('Input is an array. Input: ', JSON.stringify(obj, null, 2));
		if (obj === null) throwError('Input is null. Input: ', obj);
		for (const key in obj) {
			const value = obj[key];
			const isObject = typeof value === 'object' && value !== null;
			if (isObject) {
				result[key] = combineObjects(result[key] ?? {}, value);
				continue;
			}
			const isNumber = typeof value === 'number';
			if (isNumber) {
				if (typeof result[key] !== 'number' && typeof result[key] !== 'undefined') throwError(`@lawlzer/utils - combineOptions: property "${key}" is different between objects`);
				result[key] = (result[key] ?? 0) + value;
				continue;
			}
			const isDifferentType = typeof result[key] !== typeof value && typeof result[key] !== 'undefined';
			if (isDifferentType) throw new Error(`@lawlzer/utils - combineOptions: property "${key}" is different between objects`);
			const isDifferentValue = result[key] !== value && typeof result[key] !== 'undefined';
			if (isDifferentValue) throw new Error(`@lawlzer/utils - combineOptions: "${key}" is different between objects`);
			result[key] = value;
		}
	}
	return result;
}
// src/utils/createTemporaryDirectory/index.ts
var import_fs_extra3 = __toESM(require_lib());
var import_os = __toESM(require('os'));
var import_path2 = __toESM(require('path'));

// src/utils/getRandomCharacters/index.ts
function getRandomCharacters(length, { letters = false, numbers = false, symbols = false }) {
	if (!letters && !numbers && !symbols) throwError(`@lawlzer/utils: userOptions was passed in, but every value is false.`);
	let validCharacters = '';
	if (letters) validCharacters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (numbers) validCharacters += '0123456789';
	if (symbols) validCharacters += '!@#$%^&*()_+-=[]{};:|,./<>?';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
	}
	return result;
}

// src/utils/createTemporaryDirectory/index.ts
async function createTemporaryDirectory() {
	const testPath = import_path2.default.join(import_os.default.tmpdir(), getRandomCharacters(50, { letters: true, symbols: false }));
	await import_fs_extra3.default.remove(testPath);
	await import_fs_extra3.default.mkdir(testPath);
	return testPath;
}
// src/utils/deepCompare/index.ts
function deepCompare(x, y) {
	if (x === y) return true;
	if (!(x instanceof Object) || !(y instanceof Object)) return false;
	if (x.constructor !== y.constructor) return false;
	let p;
	for (p in x) {
		if (!x.hasOwnProperty(p)) continue;
		if (!y.hasOwnProperty(p)) return false;
		if (x[p] === y[p]) continue;
		if (typeof x[p] !== 'object') return false;
		if (!deepCompare(x[p], y[p])) return false;
	}
	for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
	return true;
}
// src/utils/ensureDirectoryExists/index.ts
var import_fs_extra4 = __toESM(require_lib());

// src/utils/getDirectory/index.ts
var import_path3 = require('path');
function getDirectory(path3) {
	const extension = import_path3.extname(path3);
	if (extension) path3 = import_path3.dirname(path3);
	return path3;
}

// src/utils/ensureDirectoryExists/index.ts
async function ensureDirectoryExists(path3) {
	const directory = getDirectory(path3);
	await import_fs_extra4.default.ensureDir(directory);
}
// src/utils/ensureExists/index.ts
var import_util2 = __toESM(require('util'));
async function ensureExists(path3, _initialFileContent = '') {
	import_util2.default.deprecate(() => {}, 'ensureExists is deprecated. Use ensureFileExists or ensureDirectoryExists instead.')();
}
// src/utils/ensureFileExists/index.ts
var import_fs_extra5 = __toESM(require_lib());
async function ensureFileExists(path3, initialFileContent = '') {
	const directory = getDirectory(path3);
	await ensureDirectoryExists(directory);
	const fileExists = await import_fs_extra5.default.pathExists(path3);
	if (!fileExists) await import_fs_extra5.default.writeFile(path3, initialFileContent);
}
// src/utils/flatten/index.ts
function flattenObject(input, separator = '-', output, currentPath) {
	output ??= {};
	currentPath ??= '';
	if (Array.isArray(input)) throwError('@lawlzer/utils - flattenObject - Arrays are not supported.');
	if (typeof input === 'object' && input !== null) {
		for (const key of Object.keys(input)) {
			const value = input[key];
			const newPath = `${currentPath}${separator}${key}`;
			flattenObject(value, separator, output, newPath);
		}
		return output;
	}
	currentPath = currentPath.replace(separator, '');
	output[currentPath] = input;
	return output;
}
function unflattenObject(input, separator = '-') {
	const output = {};
	for (const [key, value] of Object.entries(input)) {
		const parts = key.split(separator);
		let current = output;
		for (let index = 0; index < parts.length; index++) {
			const part = parts[index];
			if (current[part] === undefined) current[part] = {};
			if (index === parts.length - 1) {
				current[part] = value;
				continue;
			}
			current = current[part];
		}
	}
	return output;
}
// src/utils/floorToPrecision/index.ts
function floorToPrecision(numberToFloor, precision) {
	assertType({ numberToFloor }, 'number');
	assertType({ precision }, 'number');
	return Math.floor(numberToFloor * Math.pow(10, precision)) / Math.pow(10, precision);
}
// src/utils/getAllFiles/index.ts
var import_fs_extra6 = __toESM(require_lib());
var import_path4 = __toESM(require('path'));
async function getAllFiles(pathToFolder, excludeDirs = []) {
	const allFiles = await import_fs_extra6.default.readdir(pathToFolder);
	const output = await Promise.all(
		allFiles.map(async (file) => {
			const filePath = import_path4.default.join(pathToFolder, file);
			const isDirectory = (await import_fs_extra6.default.lstat(filePath)).isDirectory();
			if (isDirectory) {
				if (excludeDirs.includes(file)) {
					return [];
				}
				return getAllFiles(filePath, excludeDirs);
			}
			return filePath;
		})
	);
	return output.flat(1);
}
// src/utils/getAllFilesSync/index.ts
var import_fs_extra7 = __toESM(require_lib());
var import_path5 = __toESM(require('path'));
function getAllFilesSync(pathToFolder) {
	const allFiles = import_fs_extra7.default.readdirSync(pathToFolder);
	const output = allFiles.map((file) => {
		const filePath = import_path5.default.join(pathToFolder, file);
		const isDirectory = import_fs_extra7.default.lstatSync(filePath).isDirectory();
		if (isDirectory) return getAllFilesSync(filePath);
		return filePath;
	});
	return output.flat(1);
}
// src/utils/getAmountOfTimesInArray/index.ts
function getAmountOfTimesInArray(array, itemToFind) {
	if (!Array.isArray(array))
		throwError(`@lawlzer/utils - getAmountOfTimesInArray - The input is not an array. array: ${JSON.stringify(array, null, 2)}.  
itemToFind: ${JSON.stringify(itemToFind, null, 2)}`);
	return array.filter((item) => item === itemToFind).length;
}
// src/dev-utils/flagStuff/index.ts
function getFlagCli(flagInput) {
	const flagToFind = flagInput.toLowerCase();
	const argv = process.argv.slice(2);
	for (const argCurrent of argv) {
		let arg = argCurrent.toLowerCase();
		if (arg.startsWith('-')) arg = arg.replace('-', '');
		if (arg.startsWith('-')) arg = arg.replace('-', '');
		if (arg.startsWith(flagToFind)) {
			arg = arg.replace(flagToFind, '');
			if (arg.startsWith('=') && arg.length > 1) arg = arg.replace('=', '');
			return { original: argCurrent, value: arg };
		}
	}
	return;
}
function getFlagEnv(flagInput) {
	const flagToFind = flagInput.toLowerCase();
	for (const [key, value] of Object.entries(process.env)) {
		if (typeof value !== 'string') {
			console.warn(`getFlagEnv found a non-string value: ${value} for the flag: ${key}`);
			continue;
		}
		if (key.toLowerCase() === flagToFind) return { original: `${key}=${value}`, value };
	}
	return;
}

// src/utils/getFlag/index.ts
function getFlag(flagInput, flagTypeNecessary) {
	if (typeof flagTypeNecessary !== 'string') throwError('Was not passed in a flagTypeNecessary.');
	const cliFlag = getFlagCli(flagInput);
	const envFlag = getFlagEnv(flagInput);
	if (cliFlag !== undefined && envFlag !== undefined) {
		if (cliFlag !== envFlag) throwError(`Flag "${flagInput}" was found in both process.argv and process.env. This is not allowed.`);
		console.warn(`Flag "${flagInput}" was found in both process.argv and process.env, but they have the same value.`);
	}
	if (cliFlag === undefined && envFlag === undefined) return;
	const flag = cliFlag ?? envFlag;
	if (!flag) throwError('...?');
	if (flagTypeNecessary === 'boolean') {
		if (flag.value.toLowerCase() === 'true' || flag.value === '') return true;
		if (flag.value.toLowerCase() === 'false') return false;
		throwError(`Flag "${flagInput}" is supposed to be a boolean, but has a value of '${flag.value}'.`);
	}
	if (flagTypeNecessary === 'string') {
		return flag.value;
	}
	if (flagTypeNecessary === 'number') {
		if (flag.value === '') throwError(`Flag "${flagInput}" is supposed to be a number, but has a value of '${flag.value}'.`);
		const valueParsed = parseFloat(flag.value);
		if (isNaN(valueParsed)) throwError(`Flag "${flagInput}" is supposed to be a number, but has a value of '${flag.value}' when parseFloat is called on it.`);
		return valueParsed;
	}
	throwError(`flagTypeNecessary was most likely invalid: "${String(flagTypeNecessary)}"`);
}
// src/utils/getNextOutputPath/index.ts
var import_fs_extra8 = __toESM(require_lib());
var import_path6 = __toESM(require('path'));
async function getNextOutputPath(iPath) {
	await ensureDirectoryExists(iPath);
	const allFolders = await import_fs_extra8.default.readdir(iPath);
	const highest = allFolders.reduce((acc, curr) => {
		const currNum = parseInt(curr);
		if (currNum > acc) {
			return currNum;
		}
		return acc;
	}, -1);
	return import_path6.default.resolve(iPath, String(highest + 1));
}
// src/utils/getUniques/index.ts
function getUniques(input) {
	const output = [];
	for (const item of input) {
		if (output.some((x) => deepCompare(x, item))) continue;
		output.push(item);
	}
	return output;
}
// src/utils/indexOfAll/index.ts
function indexOfAll(wholeString, find) {
	if (find === '') return [];
	const indexes = [];
	let i = wholeString.indexOf(find);
	while (i !== -1) {
		indexes.push(i);
		i = wholeString.indexOf(find, ++i);
	}
	return indexes;
}
// src/utils/initConfig/index.ts
var types = ['boolean', 'number', 'string'];
function initConfig(requirements) {
	const errors = [];
	const output = {};
	for (const [keyName, data] of Object.entries(requirements)) {
		const { type, default: defaultValue, required } = data;
		if (defaultValue !== undefined) output[keyName] = defaultValue;
		if (!types.includes(type)) errors.push(`The key "${keyName}" has an invalid type: "${type}". It must be one of: ${types.join(', ')}`);
		const valueEnv = getFlagEnv(keyName)?.value;
		const valueCli = getFlagCli(keyName)?.value;
		if (valueEnv !== undefined && valueCli !== undefined) {
			if (valueEnv !== valueCli) {
				errors.push(`ENV and CLI flags for key "${keyName}" are different: ${valueEnv} !== ${valueCli}. Using CLI flag.`);
				continue;
			}
			console.warn(`ENV and CLI flags for key "${keyName}" are the same: ${valueEnv} === ${valueCli}. We will not throw an error, but this should probably be fixed.`);
		}
		const value = valueEnv ?? valueCli ?? defaultValue;
		if (value === undefined) {
			if (required === true) errors.push(`Missing ENV flag: ${keyName}`);
			else output[keyName] = undefined;
			continue;
		}
		if (type === 'string') {
			if (typeof value !== 'string') errors.push(`Invalid type for key: ${keyName}. Value: ${value}. Expected typeof ${type} `);
			output[keyName] = value;
			continue;
		}
		if (type === 'number') {
			const valueParsed = parseFloat(String(value));
			if (isNaN(valueParsed)) errors.push(`Invalid type for key: ${keyName}. Value: ${value}. Expected typeof ${type} `);
			output[keyName] = valueParsed;
			continue;
		}
		if (type === 'boolean') {
			let valueParsed = undefined;
			if ((typeof value === 'string' && value.toLowerCase() === 'true') || value === true) valueParsed = true;
			if ((typeof value === 'string' && value.toLowerCase() === 'false') || value === 'false') valueParsed = false;
			if (valueParsed === undefined && value !== undefined) {
				errors.push(`Invalid type for key: ${keyName}. Value: ${value}. Expected typeof ${type} `);
				continue;
			}
			output[keyName] = valueParsed;
			continue;
		}
		errors.push(`Invalid type for key: ${keyName}. Value: ${value}. Expected typeof ${String(type)}`);
	}
	if (errors.length > 0)
		throwError(`
${errors.join(`
`)}`);
	return output;
}
// src/utils/initDotenv/index.ts
var import_dotenv = __toESM(require_main());
var import_fs_extra9 = __toESM(require_lib());
var import_path7 = __toESM(require('path'));
function initDotenv() {
	const allowedDotenvs = ['.env'];
	let directory = process.cwd();
	let lastDirectory = '';
	while (lastDirectory !== directory) {
		lastDirectory = directory;
		for (const dotenvName of allowedDotenvs) {
			const dotenvPath = import_path7.default.join(directory, dotenvName);
			const fileExists = import_fs_extra9.default.existsSync(dotenvPath);
			if (fileExists) {
				import_dotenv.default.config({ path: dotenvPath });
				console.info(`We are using the .env file located at ${dotenvPath}`);
				return;
			}
		}
		directory = import_path7.default.dirname(directory);
	}
	throwError(`No .env file could be found, starting at ${process.cwd()} and going up the directory tree. We looked for the dotenvs: ${allowedDotenvs.join(', ')}`);
}
// src/utils/isObject/index.ts
function isObject(input) {
	return typeof input === 'object' && input !== null;
}
// src/utils/keys/index.ts
function keys(obj) {
	return Object.keys(obj);
}
// src/utils/lowerCaseObjectKeys/index.ts
function lowerCaseObjectKeys(input) {
	if (typeof input !== 'object') return input;
	const output = {};
	if (Array.isArray(input)) {
		const result = input
			.map((item) => {
				return lowerCaseObjectKeys(item);
			})
			.flat(99);
		return result;
	}
	for (const key in input) {
		output[key.toLowerCase()] = lowerCaseObjectKeys(input[key]);
	}
	return output;
}
// src/utils/multiSort/index.ts
function multiSort(arr, ...keys2) {
	arr.sort((a, b) => {
		for (const key of keys2) {
			if (a[key] < b[key]) return -1;
			if (a[key] > b[key]) return 1;
		}
		return 0;
	});
	return;
}
// src/utils/objectHasKeysWithType/index.ts
function objectHasKeysWithType(inputObject, keys2, type) {
	return typeof inputObject === 'object' && inputObject !== null && keys2.every((key) => key in inputObject && typeof inputObject[key] === type);
}
// src/utils/pathToFileName/index.ts
function pathToFileName(path7) {
	assertType({ path: path7 }, 'string');
	const fileName = path7.replaceAll('\\', '/').split('/').pop();
	if (fileName === undefined) throwError('fileName passed in turned into undefined. Path: ', path7);
	return fileName;
}
// src/utils/sleep/index.ts
var import_ms = __toESM(require_ms());
async function sleep(inputTime) {
	let numericTimeValue;
	if (typeof inputTime === 'number') {
		numericTimeValue = inputTime;
	} else if (typeof inputTime === 'string') {
		const parsedMilliseconds = import_ms.default(inputTime);
		if (typeof parsedMilliseconds === 'number') {
			numericTimeValue = parsedMilliseconds;
		}
	}
	if (typeof numericTimeValue !== 'number' || isNaN(numericTimeValue)) {
		throwError(`Invalid time value provided: "${String(inputTime)}". Expected a number or a parsable time string (e.g., "10s", "2m").`);
	}
	const millisecondsToSleep = numericTimeValue;
	const oneDayInMs = import_ms.default('1d');
	if (typeof oneDayInMs === 'number' && millisecondsToSleep >= oneDayInMs) {
		console.warn(`@lawlzer/utils: sleep() has been called for 1d or longer with input: "${String(inputTime)}".`);
	}
	return new Promise((resolve) => setTimeout(resolve, millisecondsToSleep));
}

// src/utils/performanceTest/index.ts
async function runPerformanceTest(testName, testFn, iterations, sleepFn = sleep) {
	console.info(`Starting performance test: "${testName}" (${iterations} iterations)...`);
	const times = [];
	for (let i = 0; i < iterations; i++) {
		const start = performance.now();
		await testFn();
		const end = performance.now();
		times.push(end - start);
		if (iterations > 1 && i < iterations - 1) {
			await sleepFn(1);
		}
	}
	const result = {
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
	const sortedTimes = [...times].sort((a, b) => a - b);
	const mid = Math.floor(sortedTimes.length / 2);
	result.medianTime = sortedTimes.length % 2 !== 0 ? sortedTimes[mid] : (sortedTimes[mid - 1] + sortedTimes[mid]) / 2;
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
// src/utils/pluck/index.ts
function pluck(array, key) {
	return array.map((o) => o[key]);
}
// src/utils/racePromises/index.ts
async function racePromises(promises) {
	const wrappedPromises = [];
	promises.map((promise) => {
		wrappedPromises.push(
			new Promise((resolve) => {
				promise.then(resolve).catch(resolve);
			}).catch()
		);
	});
	return Promise.race(wrappedPromises).catch();
}
// src/utils/replaceAll/index.ts
function replaceAll(str, find, replace) {
	const innerEscapeRegExp = (string) => {
		return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
	};
	return str.replace(new RegExp(innerEscapeRegExp(find), 'g'), replace);
}
// src/utils/retry/index.ts
var RETRY_DELAY_MS = 10;
async function retry(timeoutMs, fn, sleepFn = sleep) {
	const startTime = Date.now();
	while (true) {
		const elapsedTime = Date.now() - startTime;
		if (elapsedTime >= timeoutMs) {
			throwError(`Timeout of ${timeoutMs}ms exceeded (loop start)`);
		}
		try {
			const remainingTimeInSlot = timeoutMs - elapsedTime;
			if (remainingTimeInSlot <= 0) {
				throwError(`Timeout of ${timeoutMs}ms exceeded (no time left for attempt)`);
			}
			const timeoutSignalPromise = new Promise((_, reject) => {
				sleepFn(remainingTimeInSlot)
					.then(() => {
						reject(new Error('fn_internal_timeout_signal'));
					})
					.catch(reject);
			});
			const result = await Promise.race([fn(), timeoutSignalPromise]);
			return result;
		} catch (e) {
			if (e && e.message === 'fn_internal_timeout_signal') {
				throwError(`Timeout of ${timeoutMs}ms exceeded (function call timed out within its slot)`);
			}
			if (Date.now() - startTime >= timeoutMs) {
				throwError(`Timeout of ${timeoutMs}ms exceeded (after function error: ${e.message ?? e}, no time left)`);
			}
			if (Date.now() - startTime + RETRY_DELAY_MS < timeoutMs) {
				await sleepFn(RETRY_DELAY_MS);
			} else {
				throwError(`Timeout of ${timeoutMs}ms exceeded (insufficient time for retry after error: ${e.message ?? e})`);
			}
		}
	}
}
// src/utils/returnRandomElement/index.ts
function returnRandomElement(array) {
	if (!Array.isArray(array)) throwError(`Array must be an array. Array: ${JSON.stringify(array, null, 2)}`);
	if (array.length === 0) return;
	return array[Math.floor(Math.random() * array.length)];
}
// src/utils/returnRandomWeightedObject/index.ts
function returnRandomWeightedObject(allObjects) {
	let totalWeight = 0;
	if (Array.isArray(allObjects)) {
		for (const object of allObjects) {
			if (object.weight === undefined) throwError('allObjects must have a weight property');
			totalWeight += object.weight;
		}
	}
	let currentWeight = Math.floor(Math.random() * totalWeight);
	for (const object of allObjects) {
		if (typeof object.weight !== 'number') throwError(`An object did not have weight. Object: ${JSON.stringify(object, null, 2)}`);
		currentWeight -= object.weight;
		if (currentWeight <= 0) return object;
	}
	throwError(`We did not find an object to return, but this should be impossible. allObjects: ${JSON.stringify(allObjects, null, 2)}`);
}
// src/utils/runFunctionsInParallel/index.ts
async function runFunctionsInParallel(parallelAmount, functions) {
	const results = [];
	let index = 0;
	async function runOne() {
		if (index >= functions.length) return;
		const func = functions[index];
		index++;
		const result = await func();
		results.push(result);
		await runOne();
	}
	const promises = [];
	for (let i = 0; i < parallelAmount; i++) {
		promises.push(runOne());
	}
	await Promise.all(promises);
	return results;
}
// src/utils/runInParallel/index.ts
async function runInParallel(totalAmount, maxParallel, func) {
	let amountHandled = 0;
	if (maxParallel > totalAmount) throwError('maxParallel is greater than totalAmount. The values are likely meant to be swapped.');
	async function runOne() {
		amountHandled++;
		if (amountHandled > totalAmount) return;
		await func();
		await runOne();
	}
	const promises = [];
	for (let i = 0; i < maxParallel; i++) {
		promises.push(runOne());
	}
	await Promise.all(promises);
}
// src/utils/shuffleArray/index.ts
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}
// src/utils/sleepSync/index.ts
function sleepSync(timeout) {
	const start = Date.now();
	while (Date.now() - start < timeout) {}
}
// src/utils/temporarySave/index.ts
var import_fs_extra10 = __toESM(require_lib());
var import_os2 = __toESM(require('os'));
var import_path8 = __toESM(require('path'));
async function temporarySave(data) {
	assertType({ data }, 'string');
	const tempFilePath = import_os2.default.tmpdir();
	const fileName = getRandomCharacters(100, { letters: true });
	const filePath = import_path8.default.join(tempFilePath, `LawlzerTemp_${fileName}`);
	await import_fs_extra10.default.writeFile(filePath, data);
	return filePath;
}
// src/utils/truthy/index.ts
function truthy(value) {
	return !!value;
}
// src/utils/UwU/index.ts
function UwU(text, addFaces = false) {
	const faces = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^'];
	text = text.replace(/(?:r|l)/g, 'w');
	text = text.replace(/(?:R|L)/g, 'W');
	text = text.replace(/n([aeiou])/g, 'ny$1');
	text = text.replace(/N([aeiou])/g, 'Ny$1');
	text = text.replace(/N([AEIOU])/g, 'Ny$1');
	text = text.replace(/ove/g, 'uv');
	if (addFaces) text = text.replace(/\!+/g, ' ' + faces[Math.floor(Math.random() * faces.length)] + ' ');
	return text;
}
// node_modules/zod/lib/index.mjs
var util3;
(function (util4) {
	util4.assertEqual = (val) => val;
	function assertIs(_arg) {}
	util4.assertIs = assertIs;
	function assertNever(_x) {
		throw new Error();
	}
	util4.assertNever = assertNever;
	util4.arrayToEnum = (items) => {
		const obj = {};
		for (const item of items) {
			obj[item] = item;
		}
		return obj;
	};
	util4.getValidEnumValues = (obj) => {
		const validKeys = util4.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== 'number');
		const filtered = {};
		for (const k of validKeys) {
			filtered[k] = obj[k];
		}
		return util4.objectValues(filtered);
	};
	util4.objectValues = (obj) => {
		return util4.objectKeys(obj).map(function (e) {
			return obj[e];
		});
	};
	util4.objectKeys =
		typeof Object.keys === 'function'
			? (obj) => Object.keys(obj)
			: (object) => {
					const keys2 = [];
					for (const key in object) {
						if (Object.prototype.hasOwnProperty.call(object, key)) {
							keys2.push(key);
						}
					}
					return keys2;
				};
	util4.find = (arr, checker) => {
		for (const item of arr) {
			if (checker(item)) return item;
		}
		return;
	};
	util4.isInteger = typeof Number.isInteger === 'function' ? (val) => Number.isInteger(val) : (val) => typeof val === 'number' && isFinite(val) && Math.floor(val) === val;
	function joinValues(array, separator = ' | ') {
		return array.map((val) => (typeof val === 'string' ? `'${val}'` : val)).join(separator);
	}
	util4.joinValues = joinValues;
	util4.jsonStringifyReplacer = (_, value) => {
		if (typeof value === 'bigint') {
			return value.toString();
		}
		return value;
	};
})(util3 || (util3 = {}));
var objectUtil;
(function (objectUtil2) {
	objectUtil2.mergeShapes = (first, second) => {
		return {
			...first,
			...second,
		};
	};
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util3.arrayToEnum(['string', 'nan', 'number', 'integer', 'float', 'boolean', 'date', 'bigint', 'symbol', 'function', 'undefined', 'null', 'array', 'object', 'unknown', 'promise', 'void', 'never', 'map', 'set']);
var getParsedType = (data) => {
	const t = typeof data;
	switch (t) {
		case 'undefined':
			return ZodParsedType.undefined;
		case 'string':
			return ZodParsedType.string;
		case 'number':
			return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
		case 'boolean':
			return ZodParsedType.boolean;
		case 'function':
			return ZodParsedType.function;
		case 'bigint':
			return ZodParsedType.bigint;
		case 'symbol':
			return ZodParsedType.symbol;
		case 'object':
			if (Array.isArray(data)) {
				return ZodParsedType.array;
			}
			if (data === null) {
				return ZodParsedType.null;
			}
			if (data.then && typeof data.then === 'function' && data.catch && typeof data.catch === 'function') {
				return ZodParsedType.promise;
			}
			if (typeof Map !== 'undefined' && data instanceof Map) {
				return ZodParsedType.map;
			}
			if (typeof Set !== 'undefined' && data instanceof Set) {
				return ZodParsedType.set;
			}
			if (typeof Date !== 'undefined' && data instanceof Date) {
				return ZodParsedType.date;
			}
			return ZodParsedType.object;
		default:
			return ZodParsedType.unknown;
	}
};
var ZodIssueCode = util3.arrayToEnum(['invalid_type', 'invalid_literal', 'custom', 'invalid_union', 'invalid_union_discriminator', 'invalid_enum_value', 'unrecognized_keys', 'invalid_arguments', 'invalid_return_type', 'invalid_date', 'invalid_string', 'too_small', 'too_big', 'invalid_intersection_types', 'not_multiple_of', 'not_finite']);
var quotelessJson = (obj) => {
	const json = JSON.stringify(obj, null, 2);
	return json.replace(/"([^"]+)":/g, '$1:');
};

class ZodError extends Error {
	get errors() {
		return this.issues;
	}
	constructor(issues) {
		super();
		this.issues = [];
		this.addIssue = (sub) => {
			this.issues = [...this.issues, sub];
		};
		this.addIssues = (subs = []) => {
			this.issues = [...this.issues, ...subs];
		};
		const actualProto = new.target.prototype;
		if (Object.setPrototypeOf) {
			Object.setPrototypeOf(this, actualProto);
		} else {
			this.__proto__ = actualProto;
		}
		this.name = 'ZodError';
		this.issues = issues;
	}
	format(_mapper) {
		const mapper =
			_mapper ||
			function (issue) {
				return issue.message;
			};
		const fieldErrors = { _errors: [] };
		const processError = (error) => {
			for (const issue of error.issues) {
				if (issue.code === 'invalid_union') {
					issue.unionErrors.map(processError);
				} else if (issue.code === 'invalid_return_type') {
					processError(issue.returnTypeError);
				} else if (issue.code === 'invalid_arguments') {
					processError(issue.argumentsError);
				} else if (issue.path.length === 0) {
					fieldErrors._errors.push(mapper(issue));
				} else {
					let curr = fieldErrors;
					let i = 0;
					while (i < issue.path.length) {
						const el = issue.path[i];
						const terminal = i === issue.path.length - 1;
						if (!terminal) {
							curr[el] = curr[el] || { _errors: [] };
						} else {
							curr[el] = curr[el] || { _errors: [] };
							curr[el]._errors.push(mapper(issue));
						}
						curr = curr[el];
						i++;
					}
				}
			}
		};
		processError(this);
		return fieldErrors;
	}
	static assert(value) {
		if (!(value instanceof ZodError)) {
			throw new Error(`Not a ZodError: ${value}`);
		}
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, util3.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(mapper = (issue) => issue.message) {
		const fieldErrors = {};
		const formErrors = [];
		for (const sub of this.issues) {
			if (sub.path.length > 0) {
				fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
				fieldErrors[sub.path[0]].push(mapper(sub));
			} else {
				formErrors.push(mapper(sub));
			}
		}
		return { formErrors, fieldErrors };
	}
	get formErrors() {
		return this.flatten();
	}
}
ZodError.create = (issues) => {
	const error = new ZodError(issues);
	return error;
};
var errorMap = (issue, _ctx) => {
	let message;
	switch (issue.code) {
		case ZodIssueCode.invalid_type:
			if (issue.received === ZodParsedType.undefined) {
				message = 'Required';
			} else {
				message = `Expected ${issue.expected}, received ${issue.received}`;
			}
			break;
		case ZodIssueCode.invalid_literal:
			message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util3.jsonStringifyReplacer)}`;
			break;
		case ZodIssueCode.unrecognized_keys:
			message = `Unrecognized key(s) in object: ${util3.joinValues(issue.keys, ', ')}`;
			break;
		case ZodIssueCode.invalid_union:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_union_discriminator:
			message = `Invalid discriminator value. Expected ${util3.joinValues(issue.options)}`;
			break;
		case ZodIssueCode.invalid_enum_value:
			message = `Invalid enum value. Expected ${util3.joinValues(issue.options)}, received '${issue.received}'`;
			break;
		case ZodIssueCode.invalid_arguments:
			message = `Invalid function arguments`;
			break;
		case ZodIssueCode.invalid_return_type:
			message = `Invalid function return type`;
			break;
		case ZodIssueCode.invalid_date:
			message = `Invalid date`;
			break;
		case ZodIssueCode.invalid_string:
			if (typeof issue.validation === 'object') {
				if ('includes' in issue.validation) {
					message = `Invalid input: must include "${issue.validation.includes}"`;
					if (typeof issue.validation.position === 'number') {
						message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
					}
				} else if ('startsWith' in issue.validation) {
					message = `Invalid input: must start with "${issue.validation.startsWith}"`;
				} else if ('endsWith' in issue.validation) {
					message = `Invalid input: must end with "${issue.validation.endsWith}"`;
				} else {
					util3.assertNever(issue.validation);
				}
			} else if (issue.validation !== 'regex') {
				message = `Invalid ${issue.validation}`;
			} else {
				message = 'Invalid';
			}
			break;
		case ZodIssueCode.too_small:
			if (issue.type === 'array') message = `Array must contain ${issue.exact ? 'exactly' : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
			else if (issue.type === 'string') message = `String must contain ${issue.exact ? 'exactly' : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
			else if (issue.type === 'number') message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === 'date') message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
			else message = 'Invalid input';
			break;
		case ZodIssueCode.too_big:
			if (issue.type === 'array') message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
			else if (issue.type === 'string') message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
			else if (issue.type === 'number') message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === 'bigint') message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === 'date') message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
			else message = 'Invalid input';
			break;
		case ZodIssueCode.custom:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_intersection_types:
			message = `Intersection results could not be merged`;
			break;
		case ZodIssueCode.not_multiple_of:
			message = `Number must be a multiple of ${issue.multipleOf}`;
			break;
		case ZodIssueCode.not_finite:
			message = 'Number must be finite';
			break;
		default:
			message = _ctx.defaultError;
			util3.assertNever(issue);
	}
	return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
	overrideErrorMap = map;
}
function getErrorMap() {
	return overrideErrorMap;
}
var makeIssue = (params) => {
	const { data, path: path8, errorMaps, issueData } = params;
	const fullPath = [...path8, ...(issueData.path || [])];
	const fullIssue = {
		...issueData,
		path: fullPath,
	};
	if (issueData.message !== undefined) {
		return {
			...issueData,
			path: fullPath,
			message: issueData.message,
		};
	}
	let errorMessage = '';
	const maps = errorMaps
		.filter((m) => !!m)
		.slice()
		.reverse();
	for (const map of maps) {
		errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
	}
	return {
		...issueData,
		path: fullPath,
		message: errorMessage,
	};
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
	const overrideMap = getErrorMap();
	const issue = makeIssue({
		issueData,
		data: ctx.data,
		path: ctx.path,
		errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, overrideMap, overrideMap === errorMap ? undefined : errorMap].filter((x) => !!x),
	});
	ctx.common.issues.push(issue);
}

class ParseStatus {
	constructor() {
		this.value = 'valid';
	}
	dirty() {
		if (this.value === 'valid') this.value = 'dirty';
	}
	abort() {
		if (this.value !== 'aborted') this.value = 'aborted';
	}
	static mergeArray(status, results) {
		const arrayValue = [];
		for (const s of results) {
			if (s.status === 'aborted') return INVALID;
			if (s.status === 'dirty') status.dirty();
			arrayValue.push(s.value);
		}
		return { status: status.value, value: arrayValue };
	}
	static async mergeObjectAsync(status, pairs) {
		const syncPairs = [];
		for (const pair of pairs) {
			const key = await pair.key;
			const value = await pair.value;
			syncPairs.push({
				key,
				value,
			});
		}
		return ParseStatus.mergeObjectSync(status, syncPairs);
	}
	static mergeObjectSync(status, pairs) {
		const finalObject = {};
		for (const pair of pairs) {
			const { key, value } = pair;
			if (key.status === 'aborted') return INVALID;
			if (value.status === 'aborted') return INVALID;
			if (key.status === 'dirty') status.dirty();
			if (value.status === 'dirty') status.dirty();
			if (key.value !== '__proto__' && (typeof value.value !== 'undefined' || pair.alwaysSet)) {
				finalObject[key.value] = value.value;
			}
		}
		return { status: status.value, value: finalObject };
	}
}
var INVALID = Object.freeze({
	status: 'aborted',
});
var DIRTY = (value) => ({ status: 'dirty', value });
var OK = (value) => ({ status: 'valid', value });
var isAborted = (x) => x.status === 'aborted';
var isDirty = (x) => x.status === 'dirty';
var isValid = (x) => x.status === 'valid';
var isAsync = (x) => typeof Promise !== 'undefined' && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
	if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter');
	if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot read private member from an object whose class did not declare it');
	return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
	if (kind === 'm') throw new TypeError('Private method is not writable');
	if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a setter');
	if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot write private member to an object whose class did not declare it');
	return kind === 'a' ? f.call(receiver, value) : f ? (f.value = value) : state.set(receiver, value), value;
}
var errorUtil;
(function (errorUtil2) {
	errorUtil2.errToObj = (message) => (typeof message === 'string' ? { message } : message || {});
	errorUtil2.toString = (message) => (typeof message === 'string' ? message : message === null || message === undefined ? undefined : message.message);
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache;
var _ZodNativeEnum_cache;

class ParseInputLazyPath {
	constructor(parent, value, path8, key) {
		this._cachedPath = [];
		this.parent = parent;
		this.data = value;
		this._path = path8;
		this._key = key;
	}
	get path() {
		if (!this._cachedPath.length) {
			if (this._key instanceof Array) {
				this._cachedPath.push(...this._path, ...this._key);
			} else {
				this._cachedPath.push(...this._path, this._key);
			}
		}
		return this._cachedPath;
	}
}
var handleResult = (ctx, result) => {
	if (isValid(result)) {
		return { success: true, data: result.value };
	} else {
		if (!ctx.common.issues.length) {
			throw new Error('Validation failed but no issues detected.');
		}
		return {
			success: false,
			get error() {
				if (this._error) return this._error;
				const error = new ZodError(ctx.common.issues);
				this._error = error;
				return this._error;
			},
		};
	}
};
function processCreateParams(params) {
	if (!params) return {};
	const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
	if (errorMap2 && (invalid_type_error || required_error)) {
		throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
	}
	if (errorMap2) return { errorMap: errorMap2, description };
	const customMap = (iss, ctx) => {
		var _a, _b;
		const { message } = params;
		if (iss.code === 'invalid_enum_value') {
			return { message: message !== null && message !== undefined ? message : ctx.defaultError };
		}
		if (typeof ctx.data === 'undefined') {
			return { message: (_a = message !== null && message !== undefined ? message : required_error) !== null && _a !== undefined ? _a : ctx.defaultError };
		}
		if (iss.code !== 'invalid_type') return { message: ctx.defaultError };
		return { message: (_b = message !== null && message !== undefined ? message : invalid_type_error) !== null && _b !== undefined ? _b : ctx.defaultError };
	};
	return { errorMap: customMap, description };
}

class ZodType {
	get description() {
		return this._def.description;
	}
	_getType(input) {
		return getParsedType(input.data);
	}
	_getOrReturnCtx(input, ctx) {
		return (
			ctx || {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent,
			}
		);
	}
	_processInputParams(input) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent,
			},
		};
	}
	_parseSync(input) {
		const result = this._parse(input);
		if (isAsync(result)) {
			throw new Error('Synchronous parse encountered promise.');
		}
		return result;
	}
	_parseAsync(input) {
		const result = this._parse(input);
		return Promise.resolve(result);
	}
	parse(data, params) {
		const result = this.safeParse(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	safeParse(data, params) {
		var _a;
		const ctx = {
			common: {
				issues: [],
				async: (_a = params === null || params === undefined ? undefined : params.async) !== null && _a !== undefined ? _a : false,
				contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
			},
			path: (params === null || params === undefined ? undefined : params.path) || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data),
		};
		const result = this._parseSync({ data, path: ctx.path, parent: ctx });
		return handleResult(ctx, result);
	}
	'~validate'(data) {
		var _a, _b;
		const ctx = {
			common: {
				issues: [],
				async: !!this['~standard'].async,
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data),
		};
		if (!this['~standard'].async) {
			try {
				const result = this._parseSync({ data, path: [], parent: ctx });
				return isValid(result)
					? {
							value: result.value,
						}
					: {
							issues: ctx.common.issues,
						};
			} catch (err) {
				if ((_b = (_a = err === null || err === undefined ? undefined : err.message) === null || _a === undefined ? undefined : _a.toLowerCase()) === null || _b === undefined ? undefined : _b.includes('encountered')) {
					this['~standard'].async = true;
				}
				ctx.common = {
					issues: [],
					async: true,
				};
			}
		}
		return this._parseAsync({ data, path: [], parent: ctx }).then((result) =>
			isValid(result)
				? {
						value: result.value,
					}
				: {
						issues: ctx.common.issues,
					}
		);
	}
	async parseAsync(data, params) {
		const result = await this.safeParseAsync(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	async safeParseAsync(data, params) {
		const ctx = {
			common: {
				issues: [],
				contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
				async: true,
			},
			path: (params === null || params === undefined ? undefined : params.path) || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data),
		};
		const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
		const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
		return handleResult(ctx, result);
	}
	refine(check, message) {
		const getIssueProperties = (val) => {
			if (typeof message === 'string' || typeof message === 'undefined') {
				return { message };
			} else if (typeof message === 'function') {
				return message(val);
			} else {
				return message;
			}
		};
		return this._refinement((val, ctx) => {
			const result = check(val);
			const setError = () =>
				ctx.addIssue({
					code: ZodIssueCode.custom,
					...getIssueProperties(val),
				});
			if (typeof Promise !== 'undefined' && result instanceof Promise) {
				return result.then((data) => {
					if (!data) {
						setError();
						return false;
					} else {
						return true;
					}
				});
			}
			if (!result) {
				setError();
				return false;
			} else {
				return true;
			}
		});
	}
	refinement(check, refinementData) {
		return this._refinement((val, ctx) => {
			if (!check(val)) {
				ctx.addIssue(typeof refinementData === 'function' ? refinementData(val, ctx) : refinementData);
				return false;
			} else {
				return true;
			}
		});
	}
	_refinement(refinement) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: { type: 'refinement', refinement },
		});
	}
	superRefine(refinement) {
		return this._refinement(refinement);
	}
	constructor(def) {
		this.spa = this.safeParseAsync;
		this._def = def;
		this.parse = this.parse.bind(this);
		this.safeParse = this.safeParse.bind(this);
		this.parseAsync = this.parseAsync.bind(this);
		this.safeParseAsync = this.safeParseAsync.bind(this);
		this.spa = this.spa.bind(this);
		this.refine = this.refine.bind(this);
		this.refinement = this.refinement.bind(this);
		this.superRefine = this.superRefine.bind(this);
		this.optional = this.optional.bind(this);
		this.nullable = this.nullable.bind(this);
		this.nullish = this.nullish.bind(this);
		this.array = this.array.bind(this);
		this.promise = this.promise.bind(this);
		this.or = this.or.bind(this);
		this.and = this.and.bind(this);
		this.transform = this.transform.bind(this);
		this.brand = this.brand.bind(this);
		this.default = this.default.bind(this);
		this.catch = this.catch.bind(this);
		this.describe = this.describe.bind(this);
		this.pipe = this.pipe.bind(this);
		this.readonly = this.readonly.bind(this);
		this.isNullable = this.isNullable.bind(this);
		this.isOptional = this.isOptional.bind(this);
		this['~standard'] = {
			version: 1,
			vendor: 'zod',
			validate: (data) => this['~validate'](data),
		};
	}
	optional() {
		return ZodOptional.create(this, this._def);
	}
	nullable() {
		return ZodNullable.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ZodArray.create(this);
	}
	promise() {
		return ZodPromise.create(this, this._def);
	}
	or(option) {
		return ZodUnion.create([this, option], this._def);
	}
	and(incoming) {
		return ZodIntersection.create(this, incoming, this._def);
	}
	transform(transform) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: { type: 'transform', transform },
		});
	}
	default(def) {
		const defaultValueFunc = typeof def === 'function' ? def : () => def;
		return new ZodDefault({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: defaultValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodDefault,
		});
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def),
		});
	}
	catch(def) {
		const catchValueFunc = typeof def === 'function' ? def : () => def;
		return new ZodCatch({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: catchValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodCatch,
		});
	}
	describe(description) {
		const This = this.constructor;
		return new This({
			...this._def,
			description,
		});
	}
	pipe(target) {
		return ZodPipeline.create(this, target);
	}
	readonly() {
		return ZodReadonly.create(this);
	}
	isOptional() {
		return this.safeParse(undefined).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
	let secondsRegexSource = `[0-5]\\d`;
	if (args.precision) {
		secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
	} else if (args.precision == null) {
		secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
	}
	const secondsQuantifier = args.precision ? '+' : '?';
	return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
	return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
	let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
	const opts = [];
	opts.push(args.local ? `Z?` : `Z`);
	if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
	regex = `${regex}(${opts.join('|')})`;
	return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
	if ((version === 'v4' || !version) && ipv4Regex.test(ip)) {
		return true;
	}
	if ((version === 'v6' || !version) && ipv6Regex.test(ip)) {
		return true;
	}
	return false;
}
function isValidJWT(jwt, alg) {
	if (!jwtRegex.test(jwt)) return false;
	try {
		const [header] = jwt.split('.');
		const base64 = header
			.replace(/-/g, '+')
			.replace(/_/g, '/')
			.padEnd(header.length + ((4 - (header.length % 4)) % 4), '=');
		const decoded = JSON.parse(atob(base64));
		if (typeof decoded !== 'object' || decoded === null) return false;
		if (!decoded.typ || !decoded.alg) return false;
		if (alg && decoded.alg !== alg) return false;
		return true;
	} catch (_a) {
		return false;
	}
}
function isValidCidr(ip, version) {
	if ((version === 'v4' || !version) && ipv4CidrRegex.test(ip)) {
		return true;
	}
	if ((version === 'v6' || !version) && ipv6CidrRegex.test(ip)) {
		return true;
	}
	return false;
}

class ZodString extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = String(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.string) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.string,
				received: ctx2.parsedType,
			});
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = undefined;
		for (const check of this._def.checks) {
			if (check.kind === 'min') {
				if (input.data.length < check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						minimum: check.value,
						type: 'string',
						inclusive: true,
						exact: false,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'max') {
				if (input.data.length > check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						maximum: check.value,
						type: 'string',
						inclusive: true,
						exact: false,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'length') {
				const tooBig = input.data.length > check.value;
				const tooSmall = input.data.length < check.value;
				if (tooBig || tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx);
					if (tooBig) {
						addIssueToContext(ctx, {
							code: ZodIssueCode.too_big,
							maximum: check.value,
							type: 'string',
							inclusive: true,
							exact: true,
							message: check.message,
						});
					} else if (tooSmall) {
						addIssueToContext(ctx, {
							code: ZodIssueCode.too_small,
							minimum: check.value,
							type: 'string',
							inclusive: true,
							exact: true,
							message: check.message,
						});
					}
					status.dirty();
				}
			} else if (check.kind === 'email') {
				if (!emailRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'email',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'emoji') {
				if (!emojiRegex) {
					emojiRegex = new RegExp(_emojiRegex, 'u');
				}
				if (!emojiRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'emoji',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'uuid') {
				if (!uuidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'uuid',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'nanoid') {
				if (!nanoidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'nanoid',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'cuid') {
				if (!cuidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'cuid',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'cuid2') {
				if (!cuid2Regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'cuid2',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'ulid') {
				if (!ulidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'ulid',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'url') {
				try {
					new URL(input.data);
				} catch (_a) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'url',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'regex') {
				check.regex.lastIndex = 0;
				const testResult = check.regex.test(input.data);
				if (!testResult) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'regex',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'trim') {
				input.data = input.data.trim();
			} else if (check.kind === 'includes') {
				if (!input.data.includes(check.value, check.position)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { includes: check.value, position: check.position },
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'toLowerCase') {
				input.data = input.data.toLowerCase();
			} else if (check.kind === 'toUpperCase') {
				input.data = input.data.toUpperCase();
			} else if (check.kind === 'startsWith') {
				if (!input.data.startsWith(check.value)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { startsWith: check.value },
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'endsWith') {
				if (!input.data.endsWith(check.value)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { endsWith: check.value },
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'datetime') {
				const regex = datetimeRegex(check);
				if (!regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: 'datetime',
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'date') {
				const regex = dateRegex;
				if (!regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: 'date',
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'time') {
				const regex = timeRegex(check);
				if (!regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: 'time',
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'duration') {
				if (!durationRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'duration',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'ip') {
				if (!isValidIP(input.data, check.version)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'ip',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'jwt') {
				if (!isValidJWT(input.data, check.alg)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'jwt',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'cidr') {
				if (!isValidCidr(input.data, check.version)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'cidr',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'base64') {
				if (!base64Regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'base64',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'base64url') {
				if (!base64urlRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: 'base64url',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else {
				util3.assertNever(check);
			}
		}
		return { status: status.value, value: input.data };
	}
	_regex(regex, validation, message) {
		return this.refinement((data) => regex.test(data), {
			validation,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(message),
		});
	}
	_addCheck(check) {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, check],
		});
	}
	email(message) {
		return this._addCheck({ kind: 'email', ...errorUtil.errToObj(message) });
	}
	url(message) {
		return this._addCheck({ kind: 'url', ...errorUtil.errToObj(message) });
	}
	emoji(message) {
		return this._addCheck({ kind: 'emoji', ...errorUtil.errToObj(message) });
	}
	uuid(message) {
		return this._addCheck({ kind: 'uuid', ...errorUtil.errToObj(message) });
	}
	nanoid(message) {
		return this._addCheck({ kind: 'nanoid', ...errorUtil.errToObj(message) });
	}
	cuid(message) {
		return this._addCheck({ kind: 'cuid', ...errorUtil.errToObj(message) });
	}
	cuid2(message) {
		return this._addCheck({ kind: 'cuid2', ...errorUtil.errToObj(message) });
	}
	ulid(message) {
		return this._addCheck({ kind: 'ulid', ...errorUtil.errToObj(message) });
	}
	base64(message) {
		return this._addCheck({ kind: 'base64', ...errorUtil.errToObj(message) });
	}
	base64url(message) {
		return this._addCheck({
			kind: 'base64url',
			...errorUtil.errToObj(message),
		});
	}
	jwt(options) {
		return this._addCheck({ kind: 'jwt', ...errorUtil.errToObj(options) });
	}
	ip(options) {
		return this._addCheck({ kind: 'ip', ...errorUtil.errToObj(options) });
	}
	cidr(options) {
		return this._addCheck({ kind: 'cidr', ...errorUtil.errToObj(options) });
	}
	datetime(options) {
		var _a, _b;
		if (typeof options === 'string') {
			return this._addCheck({
				kind: 'datetime',
				precision: null,
				offset: false,
				local: false,
				message: options,
			});
		}
		return this._addCheck({
			kind: 'datetime',
			precision: typeof (options === null || options === undefined ? undefined : options.precision) === 'undefined' ? null : options === null || options === undefined ? undefined : options.precision,
			offset: (_a = options === null || options === undefined ? undefined : options.offset) !== null && _a !== undefined ? _a : false,
			local: (_b = options === null || options === undefined ? undefined : options.local) !== null && _b !== undefined ? _b : false,
			...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message),
		});
	}
	date(message) {
		return this._addCheck({ kind: 'date', message });
	}
	time(options) {
		if (typeof options === 'string') {
			return this._addCheck({
				kind: 'time',
				precision: null,
				message: options,
			});
		}
		return this._addCheck({
			kind: 'time',
			precision: typeof (options === null || options === undefined ? undefined : options.precision) === 'undefined' ? null : options === null || options === undefined ? undefined : options.precision,
			...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message),
		});
	}
	duration(message) {
		return this._addCheck({ kind: 'duration', ...errorUtil.errToObj(message) });
	}
	regex(regex, message) {
		return this._addCheck({
			kind: 'regex',
			regex,
			...errorUtil.errToObj(message),
		});
	}
	includes(value, options) {
		return this._addCheck({
			kind: 'includes',
			value,
			position: options === null || options === undefined ? undefined : options.position,
			...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message),
		});
	}
	startsWith(value, message) {
		return this._addCheck({
			kind: 'startsWith',
			value,
			...errorUtil.errToObj(message),
		});
	}
	endsWith(value, message) {
		return this._addCheck({
			kind: 'endsWith',
			value,
			...errorUtil.errToObj(message),
		});
	}
	min(minLength, message) {
		return this._addCheck({
			kind: 'min',
			value: minLength,
			...errorUtil.errToObj(message),
		});
	}
	max(maxLength, message) {
		return this._addCheck({
			kind: 'max',
			value: maxLength,
			...errorUtil.errToObj(message),
		});
	}
	length(len, message) {
		return this._addCheck({
			kind: 'length',
			value: len,
			...errorUtil.errToObj(message),
		});
	}
	nonempty(message) {
		return this.min(1, errorUtil.errToObj(message));
	}
	trim() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: 'trim' }],
		});
	}
	toLowerCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: 'toLowerCase' }],
		});
	}
	toUpperCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: 'toUpperCase' }],
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((ch) => ch.kind === 'datetime');
	}
	get isDate() {
		return !!this._def.checks.find((ch) => ch.kind === 'date');
	}
	get isTime() {
		return !!this._def.checks.find((ch) => ch.kind === 'time');
	}
	get isDuration() {
		return !!this._def.checks.find((ch) => ch.kind === 'duration');
	}
	get isEmail() {
		return !!this._def.checks.find((ch) => ch.kind === 'email');
	}
	get isURL() {
		return !!this._def.checks.find((ch) => ch.kind === 'url');
	}
	get isEmoji() {
		return !!this._def.checks.find((ch) => ch.kind === 'emoji');
	}
	get isUUID() {
		return !!this._def.checks.find((ch) => ch.kind === 'uuid');
	}
	get isNANOID() {
		return !!this._def.checks.find((ch) => ch.kind === 'nanoid');
	}
	get isCUID() {
		return !!this._def.checks.find((ch) => ch.kind === 'cuid');
	}
	get isCUID2() {
		return !!this._def.checks.find((ch) => ch.kind === 'cuid2');
	}
	get isULID() {
		return !!this._def.checks.find((ch) => ch.kind === 'ulid');
	}
	get isIP() {
		return !!this._def.checks.find((ch) => ch.kind === 'ip');
	}
	get isCIDR() {
		return !!this._def.checks.find((ch) => ch.kind === 'cidr');
	}
	get isBase64() {
		return !!this._def.checks.find((ch) => ch.kind === 'base64');
	}
	get isBase64url() {
		return !!this._def.checks.find((ch) => ch.kind === 'base64url');
	}
	get minLength() {
		let min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value;
			}
		}
		return min;
	}
	get maxLength() {
		let max = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return max;
	}
}
ZodString.create = (params) => {
	var _a;
	return new ZodString({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
		...processCreateParams(params),
	});
};
function floatSafeRemainder(val, step) {
	const valDecCount = (val.toString().split('.')[1] || '').length;
	const stepDecCount = (step.toString().split('.')[1] || '').length;
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	const valInt = parseInt(val.toFixed(decCount).replace('.', ''));
	const stepInt = parseInt(step.toFixed(decCount).replace('.', ''));
	return (valInt % stepInt) / Math.pow(10, decCount);
}

class ZodNumber extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
		this.step = this.multipleOf;
	}
	_parse(input) {
		if (this._def.coerce) {
			input.data = Number(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.number) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: ctx2.parsedType,
			});
			return INVALID;
		}
		let ctx = undefined;
		const status = new ParseStatus();
		for (const check of this._def.checks) {
			if (check.kind === 'int') {
				if (!util3.isInteger(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_type,
						expected: 'integer',
						received: 'float',
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'min') {
				const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
				if (tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						minimum: check.value,
						type: 'number',
						inclusive: check.inclusive,
						exact: false,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'max') {
				const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
				if (tooBig) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						maximum: check.value,
						type: 'number',
						inclusive: check.inclusive,
						exact: false,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'multipleOf') {
				if (floatSafeRemainder(input.data, check.value) !== 0) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_multiple_of,
						multipleOf: check.value,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'finite') {
				if (!Number.isFinite(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_finite,
						message: check.message,
					});
					status.dirty();
				}
			} else {
				util3.assertNever(check);
			}
		}
		return { status: status.value, value: input.data };
	}
	gte(value, message) {
		return this.setLimit('min', value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit('min', value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit('max', value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit('max', value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodNumber({
			...this._def,
			checks: [
				...this._def.checks,
				{
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message),
				},
			],
		});
	}
	_addCheck(check) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, check],
		});
	}
	int(message) {
		return this._addCheck({
			kind: 'int',
			message: errorUtil.toString(message),
		});
	}
	positive(message) {
		return this._addCheck({
			kind: 'min',
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message),
		});
	}
	negative(message) {
		return this._addCheck({
			kind: 'max',
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message),
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: 'max',
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message),
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: 'min',
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message),
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: 'multipleOf',
			value,
			message: errorUtil.toString(message),
		});
	}
	finite(message) {
		return this._addCheck({
			kind: 'finite',
			message: errorUtil.toString(message),
		});
	}
	safe(message) {
		return this._addCheck({
			kind: 'min',
			inclusive: true,
			value: Number.MIN_SAFE_INTEGER,
			message: errorUtil.toString(message),
		})._addCheck({
			kind: 'max',
			inclusive: true,
			value: Number.MAX_SAFE_INTEGER,
			message: errorUtil.toString(message),
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value;
			}
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return max;
	}
	get isInt() {
		return !!this._def.checks.find((ch) => ch.kind === 'int' || (ch.kind === 'multipleOf' && util3.isInteger(ch.value)));
	}
	get isFinite() {
		let max = null,
			min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'finite' || ch.kind === 'int' || ch.kind === 'multipleOf') {
				return true;
			} else if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value;
			} else if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return Number.isFinite(min) && Number.isFinite(max);
	}
}
ZodNumber.create = (params) => {
	return new ZodNumber({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodNumber,
		coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
		...processCreateParams(params),
	});
};

class ZodBigInt extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
	}
	_parse(input) {
		if (this._def.coerce) {
			try {
				input.data = BigInt(input.data);
			} catch (_a) {
				return this._getInvalidInput(input);
			}
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.bigint) {
			return this._getInvalidInput(input);
		}
		let ctx = undefined;
		const status = new ParseStatus();
		for (const check of this._def.checks) {
			if (check.kind === 'min') {
				const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
				if (tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						type: 'bigint',
						minimum: check.value,
						inclusive: check.inclusive,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'max') {
				const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
				if (tooBig) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						type: 'bigint',
						maximum: check.value,
						inclusive: check.inclusive,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === 'multipleOf') {
				if (input.data % check.value !== BigInt(0)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_multiple_of,
						multipleOf: check.value,
						message: check.message,
					});
					status.dirty();
				}
			} else {
				util3.assertNever(check);
			}
		}
		return { status: status.value, value: input.data };
	}
	_getInvalidInput(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.bigint,
			received: ctx.parsedType,
		});
		return INVALID;
	}
	gte(value, message) {
		return this.setLimit('min', value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit('min', value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit('max', value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit('max', value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodBigInt({
			...this._def,
			checks: [
				...this._def.checks,
				{
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message),
				},
			],
		});
	}
	_addCheck(check) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, check],
		});
	}
	positive(message) {
		return this._addCheck({
			kind: 'min',
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message),
		});
	}
	negative(message) {
		return this._addCheck({
			kind: 'max',
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message),
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: 'max',
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message),
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: 'min',
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message),
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: 'multipleOf',
			value,
			message: errorUtil.toString(message),
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value;
			}
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return max;
	}
}
ZodBigInt.create = (params) => {
	var _a;
	return new ZodBigInt({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
		...processCreateParams(params),
	});
};

class ZodBoolean extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = Boolean(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.boolean) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
}
ZodBoolean.create = (params) => {
	return new ZodBoolean({
		typeName: ZodFirstPartyTypeKind.ZodBoolean,
		coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
		...processCreateParams(params),
	});
};

class ZodDate extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = new Date(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.date) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: ctx2.parsedType,
			});
			return INVALID;
		}
		if (isNaN(input.data.getTime())) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_date,
			});
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = undefined;
		for (const check of this._def.checks) {
			if (check.kind === 'min') {
				if (input.data.getTime() < check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						message: check.message,
						inclusive: true,
						exact: false,
						minimum: check.value,
						type: 'date',
					});
					status.dirty();
				}
			} else if (check.kind === 'max') {
				if (input.data.getTime() > check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						message: check.message,
						inclusive: true,
						exact: false,
						maximum: check.value,
						type: 'date',
					});
					status.dirty();
				}
			} else {
				util3.assertNever(check);
			}
		}
		return {
			status: status.value,
			value: new Date(input.data.getTime()),
		};
	}
	_addCheck(check) {
		return new ZodDate({
			...this._def,
			checks: [...this._def.checks, check],
		});
	}
	min(minDate, message) {
		return this._addCheck({
			kind: 'min',
			value: minDate.getTime(),
			message: errorUtil.toString(message),
		});
	}
	max(maxDate, message) {
		return this._addCheck({
			kind: 'max',
			value: maxDate.getTime(),
			message: errorUtil.toString(message),
		});
	}
	get minDate() {
		let min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value;
			}
		}
		return min != null ? new Date(min) : null;
	}
	get maxDate() {
		let max = null;
		for (const ch of this._def.checks) {
			if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return max != null ? new Date(max) : null;
	}
}
ZodDate.create = (params) => {
	return new ZodDate({
		checks: [],
		coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
		typeName: ZodFirstPartyTypeKind.ZodDate,
		...processCreateParams(params),
	});
};

class ZodSymbol extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.symbol) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
}
ZodSymbol.create = (params) => {
	return new ZodSymbol({
		typeName: ZodFirstPartyTypeKind.ZodSymbol,
		...processCreateParams(params),
	});
};

class ZodUndefined extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
}
ZodUndefined.create = (params) => {
	return new ZodUndefined({
		typeName: ZodFirstPartyTypeKind.ZodUndefined,
		...processCreateParams(params),
	});
};

class ZodNull extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.null) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
}
ZodNull.create = (params) => {
	return new ZodNull({
		typeName: ZodFirstPartyTypeKind.ZodNull,
		...processCreateParams(params),
	});
};

class ZodAny extends ZodType {
	constructor() {
		super(...arguments);
		this._any = true;
	}
	_parse(input) {
		return OK(input.data);
	}
}
ZodAny.create = (params) => {
	return new ZodAny({
		typeName: ZodFirstPartyTypeKind.ZodAny,
		...processCreateParams(params),
	});
};

class ZodUnknown extends ZodType {
	constructor() {
		super(...arguments);
		this._unknown = true;
	}
	_parse(input) {
		return OK(input.data);
	}
}
ZodUnknown.create = (params) => {
	return new ZodUnknown({
		typeName: ZodFirstPartyTypeKind.ZodUnknown,
		...processCreateParams(params),
	});
};

class ZodNever extends ZodType {
	_parse(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: ctx.parsedType,
		});
		return INVALID;
	}
}
ZodNever.create = (params) => {
	return new ZodNever({
		typeName: ZodFirstPartyTypeKind.ZodNever,
		...processCreateParams(params),
	});
};

class ZodVoid extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
}
ZodVoid.create = (params) => {
	return new ZodVoid({
		typeName: ZodFirstPartyTypeKind.ZodVoid,
		...processCreateParams(params),
	});
};

class ZodArray extends ZodType {
	_parse(input) {
		const { ctx, status } = this._processInputParams(input);
		const def = this._def;
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		if (def.exactLength !== null) {
			const tooBig = ctx.data.length > def.exactLength.value;
			const tooSmall = ctx.data.length < def.exactLength.value;
			if (tooBig || tooSmall) {
				addIssueToContext(ctx, {
					code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
					minimum: tooSmall ? def.exactLength.value : undefined,
					maximum: tooBig ? def.exactLength.value : undefined,
					type: 'array',
					inclusive: true,
					exact: true,
					message: def.exactLength.message,
				});
				status.dirty();
			}
		}
		if (def.minLength !== null) {
			if (ctx.data.length < def.minLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minLength.value,
					type: 'array',
					inclusive: true,
					exact: false,
					message: def.minLength.message,
				});
				status.dirty();
			}
		}
		if (def.maxLength !== null) {
			if (ctx.data.length > def.maxLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxLength.value,
					type: 'array',
					inclusive: true,
					exact: false,
					message: def.maxLength.message,
				});
				status.dirty();
			}
		}
		if (ctx.common.async) {
			return Promise.all(
				[...ctx.data].map((item, i) => {
					return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
				})
			).then((result2) => {
				return ParseStatus.mergeArray(status, result2);
			});
		}
		const result = [...ctx.data].map((item, i) => {
			return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		});
		return ParseStatus.mergeArray(status, result);
	}
	get element() {
		return this._def.type;
	}
	min(minLength, message) {
		return new ZodArray({
			...this._def,
			minLength: { value: minLength, message: errorUtil.toString(message) },
		});
	}
	max(maxLength, message) {
		return new ZodArray({
			...this._def,
			maxLength: { value: maxLength, message: errorUtil.toString(message) },
		});
	}
	length(len, message) {
		return new ZodArray({
			...this._def,
			exactLength: { value: len, message: errorUtil.toString(message) },
		});
	}
	nonempty(message) {
		return this.min(1, message);
	}
}
ZodArray.create = (schema, params) => {
	return new ZodArray({
		type: schema,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ZodFirstPartyTypeKind.ZodArray,
		...processCreateParams(params),
	});
};
function deepPartialify(schema) {
	if (schema instanceof ZodObject) {
		const newShape = {};
		for (const key in schema.shape) {
			const fieldSchema = schema.shape[key];
			newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
		}
		return new ZodObject({
			...schema._def,
			shape: () => newShape,
		});
	} else if (schema instanceof ZodArray) {
		return new ZodArray({
			...schema._def,
			type: deepPartialify(schema.element),
		});
	} else if (schema instanceof ZodOptional) {
		return ZodOptional.create(deepPartialify(schema.unwrap()));
	} else if (schema instanceof ZodNullable) {
		return ZodNullable.create(deepPartialify(schema.unwrap()));
	} else if (schema instanceof ZodTuple) {
		return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
	} else {
		return schema;
	}
}

class ZodObject extends ZodType {
	constructor() {
		super(...arguments);
		this._cached = null;
		this.nonstrict = this.passthrough;
		this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const shape = this._def.shape();
		const keys2 = util3.objectKeys(shape);
		return (this._cached = { shape, keys: keys2 });
	}
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.object) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx2.parsedType,
			});
			return INVALID;
		}
		const { status, ctx } = this._processInputParams(input);
		const { shape, keys: shapeKeys } = this._getCached();
		const extraKeys = [];
		if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === 'strip')) {
			for (const key in ctx.data) {
				if (!shapeKeys.includes(key)) {
					extraKeys.push(key);
				}
			}
		}
		const pairs = [];
		for (const key of shapeKeys) {
			const keyValidator = shape[key];
			const value = ctx.data[key];
			pairs.push({
				key: { status: 'valid', value: key },
				value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
				alwaysSet: key in ctx.data,
			});
		}
		if (this._def.catchall instanceof ZodNever) {
			const unknownKeys = this._def.unknownKeys;
			if (unknownKeys === 'passthrough') {
				for (const key of extraKeys) {
					pairs.push({
						key: { status: 'valid', value: key },
						value: { status: 'valid', value: ctx.data[key] },
					});
				}
			} else if (unknownKeys === 'strict') {
				if (extraKeys.length > 0) {
					addIssueToContext(ctx, {
						code: ZodIssueCode.unrecognized_keys,
						keys: extraKeys,
					});
					status.dirty();
				}
			} else if (unknownKeys === 'strip');
			else {
				throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
			}
		} else {
			const catchall = this._def.catchall;
			for (const key of extraKeys) {
				const value = ctx.data[key];
				pairs.push({
					key: { status: 'valid', value: key },
					value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
					alwaysSet: key in ctx.data,
				});
			}
		}
		if (ctx.common.async) {
			return Promise.resolve()
				.then(async () => {
					const syncPairs = [];
					for (const pair of pairs) {
						const key = await pair.key;
						const value = await pair.value;
						syncPairs.push({
							key,
							value,
							alwaysSet: pair.alwaysSet,
						});
					}
					return syncPairs;
				})
				.then((syncPairs) => {
					return ParseStatus.mergeObjectSync(status, syncPairs);
				});
		} else {
			return ParseStatus.mergeObjectSync(status, pairs);
		}
	}
	get shape() {
		return this._def.shape();
	}
	strict(message) {
		errorUtil.errToObj;
		return new ZodObject({
			...this._def,
			unknownKeys: 'strict',
			...(message !== undefined
				? {
						errorMap: (issue, ctx) => {
							var _a, _b, _c, _d;
							const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === undefined ? undefined : _b.call(_a, issue, ctx).message) !== null && _c !== undefined ? _c : ctx.defaultError;
							if (issue.code === 'unrecognized_keys')
								return {
									message: (_d = errorUtil.errToObj(message).message) !== null && _d !== undefined ? _d : defaultError,
								};
							return {
								message: defaultError,
							};
						},
					}
				: {}),
		});
	}
	strip() {
		return new ZodObject({
			...this._def,
			unknownKeys: 'strip',
		});
	}
	passthrough() {
		return new ZodObject({
			...this._def,
			unknownKeys: 'passthrough',
		});
	}
	extend(augmentation) {
		return new ZodObject({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...augmentation,
			}),
		});
	}
	merge(merging) {
		const merged = new ZodObject({
			unknownKeys: merging._def.unknownKeys,
			catchall: merging._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...merging._def.shape(),
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject,
		});
		return merged;
	}
	setKey(key, schema) {
		return this.augment({ [key]: schema });
	}
	catchall(index) {
		return new ZodObject({
			...this._def,
			catchall: index,
		});
	}
	pick(mask) {
		const shape = {};
		util3.objectKeys(mask).forEach((key) => {
			if (mask[key] && this.shape[key]) {
				shape[key] = this.shape[key];
			}
		});
		return new ZodObject({
			...this._def,
			shape: () => shape,
		});
	}
	omit(mask) {
		const shape = {};
		util3.objectKeys(this.shape).forEach((key) => {
			if (!mask[key]) {
				shape[key] = this.shape[key];
			}
		});
		return new ZodObject({
			...this._def,
			shape: () => shape,
		});
	}
	deepPartial() {
		return deepPartialify(this);
	}
	partial(mask) {
		const newShape = {};
		util3.objectKeys(this.shape).forEach((key) => {
			const fieldSchema = this.shape[key];
			if (mask && !mask[key]) {
				newShape[key] = fieldSchema;
			} else {
				newShape[key] = fieldSchema.optional();
			}
		});
		return new ZodObject({
			...this._def,
			shape: () => newShape,
		});
	}
	required(mask) {
		const newShape = {};
		util3.objectKeys(this.shape).forEach((key) => {
			if (mask && !mask[key]) {
				newShape[key] = this.shape[key];
			} else {
				const fieldSchema = this.shape[key];
				let newField = fieldSchema;
				while (newField instanceof ZodOptional) {
					newField = newField._def.innerType;
				}
				newShape[key] = newField;
			}
		});
		return new ZodObject({
			...this._def,
			shape: () => newShape,
		});
	}
	keyof() {
		return createZodEnum(util3.objectKeys(this.shape));
	}
}
ZodObject.create = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: 'strip',
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	});
};
ZodObject.strictCreate = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: 'strict',
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	});
};
ZodObject.lazycreate = (shape, params) => {
	return new ZodObject({
		shape,
		unknownKeys: 'strip',
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	});
};

class ZodUnion extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const options = this._def.options;
		function handleResults(results) {
			for (const result of results) {
				if (result.result.status === 'valid') {
					return result.result;
				}
			}
			for (const result of results) {
				if (result.result.status === 'dirty') {
					ctx.common.issues.push(...result.ctx.common.issues);
					return result.result;
				}
			}
			const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors,
			});
			return INVALID;
		}
		if (ctx.common.async) {
			return Promise.all(
				options.map(async (option) => {
					const childCtx = {
						...ctx,
						common: {
							...ctx.common,
							issues: [],
						},
						parent: null,
					};
					return {
						result: await option._parseAsync({
							data: ctx.data,
							path: ctx.path,
							parent: childCtx,
						}),
						ctx: childCtx,
					};
				})
			).then(handleResults);
		} else {
			let dirty = undefined;
			const issues = [];
			for (const option of options) {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: [],
					},
					parent: null,
				};
				const result = option._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx,
				});
				if (result.status === 'valid') {
					return result;
				} else if (result.status === 'dirty' && !dirty) {
					dirty = { result, ctx: childCtx };
				}
				if (childCtx.common.issues.length) {
					issues.push(childCtx.common.issues);
				}
			}
			if (dirty) {
				ctx.common.issues.push(...dirty.ctx.common.issues);
				return dirty.result;
			}
			const unionErrors = issues.map((issues2) => new ZodError(issues2));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors,
			});
			return INVALID;
		}
	}
	get options() {
		return this._def.options;
	}
}
ZodUnion.create = (types2, params) => {
	return new ZodUnion({
		options: types2,
		typeName: ZodFirstPartyTypeKind.ZodUnion,
		...processCreateParams(params),
	});
};
var getDiscriminator = (type) => {
	if (type instanceof ZodLazy) {
		return getDiscriminator(type.schema);
	} else if (type instanceof ZodEffects) {
		return getDiscriminator(type.innerType());
	} else if (type instanceof ZodLiteral) {
		return [type.value];
	} else if (type instanceof ZodEnum) {
		return type.options;
	} else if (type instanceof ZodNativeEnum) {
		return util3.objectValues(type.enum);
	} else if (type instanceof ZodDefault) {
		return getDiscriminator(type._def.innerType);
	} else if (type instanceof ZodUndefined) {
		return [undefined];
	} else if (type instanceof ZodNull) {
		return [null];
	} else if (type instanceof ZodOptional) {
		return [undefined, ...getDiscriminator(type.unwrap())];
	} else if (type instanceof ZodNullable) {
		return [null, ...getDiscriminator(type.unwrap())];
	} else if (type instanceof ZodBranded) {
		return getDiscriminator(type.unwrap());
	} else if (type instanceof ZodReadonly) {
		return getDiscriminator(type.unwrap());
	} else if (type instanceof ZodCatch) {
		return getDiscriminator(type._def.innerType);
	} else {
		return [];
	}
};

class ZodDiscriminatedUnion extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const discriminator = this.discriminator;
		const discriminatorValue = ctx.data[discriminator];
		const option = this.optionsMap.get(discriminatorValue);
		if (!option) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [discriminator],
			});
			return INVALID;
		}
		if (ctx.common.async) {
			return option._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			});
		} else {
			return option._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			});
		}
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	static create(discriminator, options, params) {
		const optionsMap = new Map();
		for (const type of options) {
			const discriminatorValues = getDiscriminator(type.shape[discriminator]);
			if (!discriminatorValues.length) {
				throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
			}
			for (const value of discriminatorValues) {
				if (optionsMap.has(value)) {
					throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
				}
				optionsMap.set(value, type);
			}
		}
		return new ZodDiscriminatedUnion({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator,
			options,
			optionsMap,
			...processCreateParams(params),
		});
	}
}
function mergeValues(a, b) {
	const aType = getParsedType(a);
	const bType = getParsedType(b);
	if (a === b) {
		return { valid: true, data: a };
	} else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
		const bKeys = util3.objectKeys(b);
		const sharedKeys = util3.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = { ...a, ...b };
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) {
				return { valid: false };
			}
			newObj[key] = sharedValue.data;
		}
		return { valid: true, data: newObj };
	} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
		if (a.length !== b.length) {
			return { valid: false };
		}
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) {
				return { valid: false };
			}
			newArray.push(sharedValue.data);
		}
		return { valid: true, data: newArray };
	} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
		return { valid: true, data: a };
	} else {
		return { valid: false };
	}
}

class ZodIntersection extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const handleParsed = (parsedLeft, parsedRight) => {
			if (isAborted(parsedLeft) || isAborted(parsedRight)) {
				return INVALID;
			}
			const merged = mergeValues(parsedLeft.value, parsedRight.value);
			if (!merged.valid) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_intersection_types,
				});
				return INVALID;
			}
			if (isDirty(parsedLeft) || isDirty(parsedRight)) {
				status.dirty();
			}
			return { status: status.value, value: merged.data };
		};
		if (ctx.common.async) {
			return Promise.all([
				this._def.left._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
				this._def.right._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
			]).then(([left, right]) => handleParsed(left, right));
		} else {
			return handleParsed(
				this._def.left._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
				this._def.right._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				})
			);
		}
	}
}
ZodIntersection.create = (left, right, params) => {
	return new ZodIntersection({
		left,
		right,
		typeName: ZodFirstPartyTypeKind.ZodIntersection,
		...processCreateParams(params),
	});
};

class ZodTuple extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		if (ctx.data.length < this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_small,
				minimum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: 'array',
			});
			return INVALID;
		}
		const rest = this._def.rest;
		if (!rest && ctx.data.length > this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_big,
				maximum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: 'array',
			});
			status.dirty();
		}
		const items = [...ctx.data]
			.map((item, itemIndex) => {
				const schema = this._def.items[itemIndex] || this._def.rest;
				if (!schema) return null;
				return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
			})
			.filter((x) => !!x);
		if (ctx.common.async) {
			return Promise.all(items).then((results) => {
				return ParseStatus.mergeArray(status, results);
			});
		} else {
			return ParseStatus.mergeArray(status, items);
		}
	}
	get items() {
		return this._def.items;
	}
	rest(rest) {
		return new ZodTuple({
			...this._def,
			rest,
		});
	}
}
ZodTuple.create = (schemas, params) => {
	if (!Array.isArray(schemas)) {
		throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
	}
	return new ZodTuple({
		items: schemas,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(params),
	});
};

class ZodRecord extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const pairs = [];
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		for (const key in ctx.data) {
			pairs.push({
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
				value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
				alwaysSet: key in ctx.data,
			});
		}
		if (ctx.common.async) {
			return ParseStatus.mergeObjectAsync(status, pairs);
		} else {
			return ParseStatus.mergeObjectSync(status, pairs);
		}
	}
	get element() {
		return this._def.valueType;
	}
	static create(first, second, third) {
		if (second instanceof ZodType) {
			return new ZodRecord({
				keyType: first,
				valueType: second,
				typeName: ZodFirstPartyTypeKind.ZodRecord,
				...processCreateParams(third),
			});
		}
		return new ZodRecord({
			keyType: ZodString.create(),
			valueType: first,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(second),
		});
	}
}

class ZodMap extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.map) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.map,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		const pairs = [...ctx.data.entries()].map(([key, value], index) => {
			return {
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, 'key'])),
				value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, 'value'])),
			};
		});
		if (ctx.common.async) {
			const finalMap = new Map();
			return Promise.resolve().then(async () => {
				for (const pair of pairs) {
					const key = await pair.key;
					const value = await pair.value;
					if (key.status === 'aborted' || value.status === 'aborted') {
						return INVALID;
					}
					if (key.status === 'dirty' || value.status === 'dirty') {
						status.dirty();
					}
					finalMap.set(key.value, value.value);
				}
				return { status: status.value, value: finalMap };
			});
		} else {
			const finalMap = new Map();
			for (const pair of pairs) {
				const key = pair.key;
				const value = pair.value;
				if (key.status === 'aborted' || value.status === 'aborted') {
					return INVALID;
				}
				if (key.status === 'dirty' || value.status === 'dirty') {
					status.dirty();
				}
				finalMap.set(key.value, value.value);
			}
			return { status: status.value, value: finalMap };
		}
	}
}
ZodMap.create = (keyType, valueType, params) => {
	return new ZodMap({
		valueType,
		keyType,
		typeName: ZodFirstPartyTypeKind.ZodMap,
		...processCreateParams(params),
	});
};

class ZodSet extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.set) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.set,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const def = this._def;
		if (def.minSize !== null) {
			if (ctx.data.size < def.minSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minSize.value,
					type: 'set',
					inclusive: true,
					exact: false,
					message: def.minSize.message,
				});
				status.dirty();
			}
		}
		if (def.maxSize !== null) {
			if (ctx.data.size > def.maxSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxSize.value,
					type: 'set',
					inclusive: true,
					exact: false,
					message: def.maxSize.message,
				});
				status.dirty();
			}
		}
		const valueType = this._def.valueType;
		function finalizeSet(elements2) {
			const parsedSet = new Set();
			for (const element of elements2) {
				if (element.status === 'aborted') return INVALID;
				if (element.status === 'dirty') status.dirty();
				parsedSet.add(element.value);
			}
			return { status: status.value, value: parsedSet };
		}
		const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
		if (ctx.common.async) {
			return Promise.all(elements).then((elements2) => finalizeSet(elements2));
		} else {
			return finalizeSet(elements);
		}
	}
	min(minSize, message) {
		return new ZodSet({
			...this._def,
			minSize: { value: minSize, message: errorUtil.toString(message) },
		});
	}
	max(maxSize, message) {
		return new ZodSet({
			...this._def,
			maxSize: { value: maxSize, message: errorUtil.toString(message) },
		});
	}
	size(size, message) {
		return this.min(size, message).max(size, message);
	}
	nonempty(message) {
		return this.min(1, message);
	}
}
ZodSet.create = (valueType, params) => {
	return new ZodSet({
		valueType,
		minSize: null,
		maxSize: null,
		typeName: ZodFirstPartyTypeKind.ZodSet,
		...processCreateParams(params),
	});
};

class ZodFunction extends ZodType {
	constructor() {
		super(...arguments);
		this.validate = this.implement;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.function) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.function,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		function makeArgsIssue(args, error) {
			return makeIssue({
				data: args,
				path: ctx.path,
				errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: error,
				},
			});
		}
		function makeReturnsIssue(returns, error) {
			return makeIssue({
				data: returns,
				path: ctx.path,
				errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: error,
				},
			});
		}
		const params = { errorMap: ctx.common.contextualErrorMap };
		const fn = ctx.data;
		if (this._def.returns instanceof ZodPromise) {
			const me = this;
			return OK(async function (...args) {
				const error = new ZodError([]);
				const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
					error.addIssue(makeArgsIssue(args, e));
					throw error;
				});
				const result = await Reflect.apply(fn, this, parsedArgs);
				const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
					error.addIssue(makeReturnsIssue(result, e));
					throw error;
				});
				return parsedReturns;
			});
		} else {
			const me = this;
			return OK(function (...args) {
				const parsedArgs = me._def.args.safeParse(args, params);
				if (!parsedArgs.success) {
					throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
				}
				const result = Reflect.apply(fn, this, parsedArgs.data);
				const parsedReturns = me._def.returns.safeParse(result, params);
				if (!parsedReturns.success) {
					throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
				}
				return parsedReturns.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...items) {
		return new ZodFunction({
			...this._def,
			args: ZodTuple.create(items).rest(ZodUnknown.create()),
		});
	}
	returns(returnType) {
		return new ZodFunction({
			...this._def,
			returns: returnType,
		});
	}
	implement(func) {
		const validatedFunc = this.parse(func);
		return validatedFunc;
	}
	strictImplement(func) {
		const validatedFunc = this.parse(func);
		return validatedFunc;
	}
	static create(args, returns, params) {
		return new ZodFunction({
			args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
			returns: returns || ZodUnknown.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(params),
		});
	}
}

class ZodLazy extends ZodType {
	get schema() {
		return this._def.getter();
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const lazySchema = this._def.getter();
		return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
	}
}
ZodLazy.create = (getter, params) => {
	return new ZodLazy({
		getter,
		typeName: ZodFirstPartyTypeKind.ZodLazy,
		...processCreateParams(params),
	});
};

class ZodLiteral extends ZodType {
	_parse(input) {
		if (input.data !== this._def.value) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value,
			});
			return INVALID;
		}
		return { status: 'valid', value: input.data };
	}
	get value() {
		return this._def.value;
	}
}
ZodLiteral.create = (value, params) => {
	return new ZodLiteral({
		value,
		typeName: ZodFirstPartyTypeKind.ZodLiteral,
		...processCreateParams(params),
	});
};
function createZodEnum(values, params) {
	return new ZodEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(params),
	});
}

class ZodEnum extends ZodType {
	constructor() {
		super(...arguments);
		_ZodEnum_cache.set(this, undefined);
	}
	_parse(input) {
		if (typeof input.data !== 'string') {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				expected: util3.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type,
			});
			return INVALID;
		}
		if (!__classPrivateFieldGet(this, _ZodEnum_cache, 'f')) {
			__classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), 'f');
		}
		if (!__classPrivateFieldGet(this, _ZodEnum_cache, 'f').has(input.data)) {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues,
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const enumValues = {};
		for (const val of this._def.values) {
			enumValues[val] = val;
		}
		return enumValues;
	}
	get Values() {
		const enumValues = {};
		for (const val of this._def.values) {
			enumValues[val] = val;
		}
		return enumValues;
	}
	get Enum() {
		const enumValues = {};
		for (const val of this._def.values) {
			enumValues[val] = val;
		}
		return enumValues;
	}
	extract(values, newDef = this._def) {
		return ZodEnum.create(values, {
			...this._def,
			...newDef,
		});
	}
	exclude(values, newDef = this._def) {
		return ZodEnum.create(
			this.options.filter((opt) => !values.includes(opt)),
			{
				...this._def,
				...newDef,
			}
		);
	}
}
_ZodEnum_cache = new WeakMap();
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
	constructor() {
		super(...arguments);
		_ZodNativeEnum_cache.set(this, undefined);
	}
	_parse(input) {
		const nativeEnumValues = util3.getValidEnumValues(this._def.values);
		const ctx = this._getOrReturnCtx(input);
		if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
			const expectedValues = util3.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				expected: util3.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type,
			});
			return INVALID;
		}
		if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, 'f')) {
			__classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util3.getValidEnumValues(this._def.values)), 'f');
		}
		if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, 'f').has(input.data)) {
			const expectedValues = util3.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues,
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get enum() {
		return this._def.values;
	}
}
_ZodNativeEnum_cache = new WeakMap();
ZodNativeEnum.create = (values, params) => {
	return new ZodNativeEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
		...processCreateParams(params),
	});
};

class ZodPromise extends ZodType {
	unwrap() {
		return this._def.type;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.promise,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
		return OK(
			promisified.then((data) => {
				return this._def.type.parseAsync(data, {
					path: ctx.path,
					errorMap: ctx.common.contextualErrorMap,
				});
			})
		);
	}
}
ZodPromise.create = (schema, params) => {
	return new ZodPromise({
		type: schema,
		typeName: ZodFirstPartyTypeKind.ZodPromise,
		...processCreateParams(params),
	});
};

class ZodEffects extends ZodType {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const effect = this._def.effect || null;
		const checkCtx = {
			addIssue: (arg) => {
				addIssueToContext(ctx, arg);
				if (arg.fatal) {
					status.abort();
				} else {
					status.dirty();
				}
			},
			get path() {
				return ctx.path;
			},
		};
		checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
		if (effect.type === 'preprocess') {
			const processed = effect.transform(ctx.data, checkCtx);
			if (ctx.common.async) {
				return Promise.resolve(processed).then(async (processed2) => {
					if (status.value === 'aborted') return INVALID;
					const result = await this._def.schema._parseAsync({
						data: processed2,
						path: ctx.path,
						parent: ctx,
					});
					if (result.status === 'aborted') return INVALID;
					if (result.status === 'dirty') return DIRTY(result.value);
					if (status.value === 'dirty') return DIRTY(result.value);
					return result;
				});
			} else {
				if (status.value === 'aborted') return INVALID;
				const result = this._def.schema._parseSync({
					data: processed,
					path: ctx.path,
					parent: ctx,
				});
				if (result.status === 'aborted') return INVALID;
				if (result.status === 'dirty') return DIRTY(result.value);
				if (status.value === 'dirty') return DIRTY(result.value);
				return result;
			}
		}
		if (effect.type === 'refinement') {
			const executeRefinement = (acc) => {
				const result = effect.refinement(acc, checkCtx);
				if (ctx.common.async) {
					return Promise.resolve(result);
				}
				if (result instanceof Promise) {
					throw new Error('Async refinement encountered during synchronous parse operation. Use .parseAsync instead.');
				}
				return acc;
			};
			if (ctx.common.async === false) {
				const inner = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				});
				if (inner.status === 'aborted') return INVALID;
				if (inner.status === 'dirty') status.dirty();
				executeRefinement(inner.value);
				return { status: status.value, value: inner.value };
			} else {
				return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
					if (inner.status === 'aborted') return INVALID;
					if (inner.status === 'dirty') status.dirty();
					return executeRefinement(inner.value).then(() => {
						return { status: status.value, value: inner.value };
					});
				});
			}
		}
		if (effect.type === 'transform') {
			if (ctx.common.async === false) {
				const base = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				});
				if (!isValid(base)) return base;
				const result = effect.transform(base.value, checkCtx);
				if (result instanceof Promise) {
					throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
				}
				return { status: status.value, value: result };
			} else {
				return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
					if (!isValid(base)) return base;
					return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
				});
			}
		}
		util3.assertNever(effect);
	}
}
ZodEffects.create = (schema, effect, params) => {
	return new ZodEffects({
		schema,
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		effect,
		...processCreateParams(params),
	});
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
	return new ZodEffects({
		schema,
		effect: { type: 'preprocess', transform: preprocess },
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		...processCreateParams(params),
	});
};

class ZodOptional extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType === ZodParsedType.undefined) {
			return OK(undefined);
		}
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
}
ZodOptional.create = (type, params) => {
	return new ZodOptional({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodOptional,
		...processCreateParams(params),
	});
};

class ZodNullable extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType === ZodParsedType.null) {
			return OK(null);
		}
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
}
ZodNullable.create = (type, params) => {
	return new ZodNullable({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodNullable,
		...processCreateParams(params),
	});
};

class ZodDefault extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		let data = ctx.data;
		if (ctx.parsedType === ZodParsedType.undefined) {
			data = this._def.defaultValue();
		}
		return this._def.innerType._parse({
			data,
			path: ctx.path,
			parent: ctx,
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
}
ZodDefault.create = (type, params) => {
	return new ZodDefault({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodDefault,
		defaultValue: typeof params.default === 'function' ? params.default : () => params.default,
		...processCreateParams(params),
	});
};

class ZodCatch extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const newCtx = {
			...ctx,
			common: {
				...ctx.common,
				issues: [],
			},
		};
		const result = this._def.innerType._parse({
			data: newCtx.data,
			path: newCtx.path,
			parent: {
				...newCtx,
			},
		});
		if (isAsync(result)) {
			return result.then((result2) => {
				return {
					status: 'valid',
					value:
						result2.status === 'valid'
							? result2.value
							: this._def.catchValue({
									get error() {
										return new ZodError(newCtx.common.issues);
									},
									input: newCtx.data,
								}),
				};
			});
		} else {
			return {
				status: 'valid',
				value:
					result.status === 'valid'
						? result.value
						: this._def.catchValue({
								get error() {
									return new ZodError(newCtx.common.issues);
								},
								input: newCtx.data,
							}),
			};
		}
	}
	removeCatch() {
		return this._def.innerType;
	}
}
ZodCatch.create = (type, params) => {
	return new ZodCatch({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodCatch,
		catchValue: typeof params.catch === 'function' ? params.catch : () => params.catch,
		...processCreateParams(params),
	});
};

class ZodNaN extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.nan) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return { status: 'valid', value: input.data };
	}
}
ZodNaN.create = (params) => {
	return new ZodNaN({
		typeName: ZodFirstPartyTypeKind.ZodNaN,
		...processCreateParams(params),
	});
};
var BRAND = Symbol('zod_brand');

class ZodBranded extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const data = ctx.data;
		return this._def.type._parse({
			data,
			path: ctx.path,
			parent: ctx,
		});
	}
	unwrap() {
		return this._def.type;
	}
}

class ZodPipeline extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.common.async) {
			const handleAsync = async () => {
				const inResult = await this._def.in._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				});
				if (inResult.status === 'aborted') return INVALID;
				if (inResult.status === 'dirty') {
					status.dirty();
					return DIRTY(inResult.value);
				} else {
					return this._def.out._parseAsync({
						data: inResult.value,
						path: ctx.path,
						parent: ctx,
					});
				}
			};
			return handleAsync();
		} else {
			const inResult = this._def.in._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			});
			if (inResult.status === 'aborted') return INVALID;
			if (inResult.status === 'dirty') {
				status.dirty();
				return {
					status: 'dirty',
					value: inResult.value,
				};
			} else {
				return this._def.out._parseSync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx,
				});
			}
		}
	}
	static create(a, b) {
		return new ZodPipeline({
			in: a,
			out: b,
			typeName: ZodFirstPartyTypeKind.ZodPipeline,
		});
	}
}

class ZodReadonly extends ZodType {
	_parse(input) {
		const result = this._def.innerType._parse(input);
		const freeze = (data) => {
			if (isValid(data)) {
				data.value = Object.freeze(data.value);
			}
			return data;
		};
		return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
	}
	unwrap() {
		return this._def.innerType;
	}
}
ZodReadonly.create = (type, params) => {
	return new ZodReadonly({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodReadonly,
		...processCreateParams(params),
	});
};
function cleanParams(params, data) {
	const p = typeof params === 'function' ? params(data) : typeof params === 'string' ? { message: params } : params;
	const p2 = typeof p === 'string' ? { message: p } : p;
	return p2;
}
function custom(check, _params = {}, fatal) {
	if (check)
		return ZodAny.create().superRefine((data, ctx) => {
			var _a, _b;
			const r = check(data);
			if (r instanceof Promise) {
				return r.then((r2) => {
					var _a2, _b2;
					if (!r2) {
						const params = cleanParams(_params, data);
						const _fatal = (_b2 = (_a2 = params.fatal) !== null && _a2 !== undefined ? _a2 : fatal) !== null && _b2 !== undefined ? _b2 : true;
						ctx.addIssue({ code: 'custom', ...params, fatal: _fatal });
					}
				});
			}
			if (!r) {
				const params = cleanParams(_params, data);
				const _fatal = (_b = (_a = params.fatal) !== null && _a !== undefined ? _a : fatal) !== null && _b !== undefined ? _b : true;
				ctx.addIssue({ code: 'custom', ...params, fatal: _fatal });
			}
			return;
		});
	return ZodAny.create();
}
var late = {
	object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind2) {
	ZodFirstPartyTypeKind2['ZodString'] = 'ZodString';
	ZodFirstPartyTypeKind2['ZodNumber'] = 'ZodNumber';
	ZodFirstPartyTypeKind2['ZodNaN'] = 'ZodNaN';
	ZodFirstPartyTypeKind2['ZodBigInt'] = 'ZodBigInt';
	ZodFirstPartyTypeKind2['ZodBoolean'] = 'ZodBoolean';
	ZodFirstPartyTypeKind2['ZodDate'] = 'ZodDate';
	ZodFirstPartyTypeKind2['ZodSymbol'] = 'ZodSymbol';
	ZodFirstPartyTypeKind2['ZodUndefined'] = 'ZodUndefined';
	ZodFirstPartyTypeKind2['ZodNull'] = 'ZodNull';
	ZodFirstPartyTypeKind2['ZodAny'] = 'ZodAny';
	ZodFirstPartyTypeKind2['ZodUnknown'] = 'ZodUnknown';
	ZodFirstPartyTypeKind2['ZodNever'] = 'ZodNever';
	ZodFirstPartyTypeKind2['ZodVoid'] = 'ZodVoid';
	ZodFirstPartyTypeKind2['ZodArray'] = 'ZodArray';
	ZodFirstPartyTypeKind2['ZodObject'] = 'ZodObject';
	ZodFirstPartyTypeKind2['ZodUnion'] = 'ZodUnion';
	ZodFirstPartyTypeKind2['ZodDiscriminatedUnion'] = 'ZodDiscriminatedUnion';
	ZodFirstPartyTypeKind2['ZodIntersection'] = 'ZodIntersection';
	ZodFirstPartyTypeKind2['ZodTuple'] = 'ZodTuple';
	ZodFirstPartyTypeKind2['ZodRecord'] = 'ZodRecord';
	ZodFirstPartyTypeKind2['ZodMap'] = 'ZodMap';
	ZodFirstPartyTypeKind2['ZodSet'] = 'ZodSet';
	ZodFirstPartyTypeKind2['ZodFunction'] = 'ZodFunction';
	ZodFirstPartyTypeKind2['ZodLazy'] = 'ZodLazy';
	ZodFirstPartyTypeKind2['ZodLiteral'] = 'ZodLiteral';
	ZodFirstPartyTypeKind2['ZodEnum'] = 'ZodEnum';
	ZodFirstPartyTypeKind2['ZodEffects'] = 'ZodEffects';
	ZodFirstPartyTypeKind2['ZodNativeEnum'] = 'ZodNativeEnum';
	ZodFirstPartyTypeKind2['ZodOptional'] = 'ZodOptional';
	ZodFirstPartyTypeKind2['ZodNullable'] = 'ZodNullable';
	ZodFirstPartyTypeKind2['ZodDefault'] = 'ZodDefault';
	ZodFirstPartyTypeKind2['ZodCatch'] = 'ZodCatch';
	ZodFirstPartyTypeKind2['ZodPromise'] = 'ZodPromise';
	ZodFirstPartyTypeKind2['ZodBranded'] = 'ZodBranded';
	ZodFirstPartyTypeKind2['ZodPipeline'] = 'ZodPipeline';
	ZodFirstPartyTypeKind2['ZodReadonly'] = 'ZodReadonly';
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (
	cls,
	params = {
		message: `Input not instance of ${cls.name}`,
	}
) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
	string: (arg) => ZodString.create({ ...arg, coerce: true }),
	number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
	boolean: (arg) =>
		ZodBoolean.create({
			...arg,
			coerce: true,
		}),
	bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
	date: (arg) => ZodDate.create({ ...arg, coerce: true }),
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	defaultErrorMap: errorMap,
	setErrorMap,
	getErrorMap,
	makeIssue,
	EMPTY_PATH,
	addIssueToContext,
	ParseStatus,
	INVALID,
	DIRTY,
	OK,
	isAborted,
	isDirty,
	isValid,
	isAsync,
	get util() {
		return util3;
	},
	get objectUtil() {
		return objectUtil;
	},
	ZodParsedType,
	getParsedType,
	ZodType,
	datetimeRegex,
	ZodString,
	ZodNumber,
	ZodBigInt,
	ZodBoolean,
	ZodDate,
	ZodSymbol,
	ZodUndefined,
	ZodNull,
	ZodAny,
	ZodUnknown,
	ZodNever,
	ZodVoid,
	ZodArray,
	ZodObject,
	ZodUnion,
	ZodDiscriminatedUnion,
	ZodIntersection,
	ZodTuple,
	ZodRecord,
	ZodMap,
	ZodSet,
	ZodFunction,
	ZodLazy,
	ZodLiteral,
	ZodEnum,
	ZodNativeEnum,
	ZodPromise,
	ZodEffects,
	ZodTransformer: ZodEffects,
	ZodOptional,
	ZodNullable,
	ZodDefault,
	ZodCatch,
	ZodNaN,
	BRAND,
	ZodBranded,
	ZodPipeline,
	ZodReadonly,
	custom,
	Schema: ZodType,
	ZodSchema: ZodType,
	late,
	get ZodFirstPartyTypeKind() {
		return ZodFirstPartyTypeKind;
	},
	coerce,
	any: anyType,
	array: arrayType,
	bigint: bigIntType,
	boolean: booleanType,
	date: dateType,
	discriminatedUnion: discriminatedUnionType,
	effect: effectsType,
	enum: enumType,
	function: functionType,
	instanceof: instanceOfType,
	intersection: intersectionType,
	lazy: lazyType,
	literal: literalType,
	map: mapType,
	nan: nanType,
	nativeEnum: nativeEnumType,
	never: neverType,
	null: nullType,
	nullable: nullableType,
	number: numberType,
	object: objectType,
	oboolean,
	onumber,
	optional: optionalType,
	ostring,
	pipeline: pipelineType,
	preprocess: preprocessType,
	promise: promiseType,
	record: recordType,
	set: setType,
	strictObject: strictObjectType,
	string: stringType,
	symbol: symbolType,
	transformer: effectsType,
	tuple: tupleType,
	undefined: undefinedType,
	union: unionType,
	unknown: unknownType,
	void: voidType,
	NEVER,
	ZodIssueCode,
	quotelessJson,
	ZodError,
});

// src/utils/zod/zodMergeSchemas/index.ts
function zodMergeSchemas(...arr) {
	let combined = z.object({});
	for (const element of arr) {
		combined = z.intersection(combined, element);
	}
	return combined;
}

//# debugId=88A3E4D223546A0064756E2164756E21
//# sourceMappingURL=index.js.map
