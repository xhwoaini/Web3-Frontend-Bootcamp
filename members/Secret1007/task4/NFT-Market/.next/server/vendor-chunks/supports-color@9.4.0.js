"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color@9.4.0";
exports.ids = ["vendor-chunks/supports-color@9.4.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/supports-color@9.4.0/node_modules/supports-color/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/supports-color@9.4.0/node_modules/supports-color/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSupportsColor: () => (/* binding */ createSupportsColor),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:process */ \"node:process\");\n/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:os */ \"node:os\");\n/* harmony import */ var node_tty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:tty */ \"node:tty\");\n\n\n\n\n// From: https://github.com/sindresorhus/has-flag/blob/main/index.js\n/// function hasFlag(flag, argv = globalThis.Deno?.args ?? process.argv) {\nfunction hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : node_process__WEBPACK_IMPORTED_MODULE_0__.argv) {\n\tconst prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');\n\tconst position = argv.indexOf(prefix + flag);\n\tconst terminatorPosition = argv.indexOf('--');\n\treturn position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);\n}\n\nconst {env} = node_process__WEBPACK_IMPORTED_MODULE_0__;\n\nlet flagForceColor;\nif (\n\thasFlag('no-color')\n\t|| hasFlag('no-colors')\n\t|| hasFlag('color=false')\n\t|| hasFlag('color=never')\n) {\n\tflagForceColor = 0;\n} else if (\n\thasFlag('color')\n\t|| hasFlag('colors')\n\t|| hasFlag('color=true')\n\t|| hasFlag('color=always')\n) {\n\tflagForceColor = 1;\n}\n\nfunction envForceColor() {\n\tif ('FORCE_COLOR' in env) {\n\t\tif (env.FORCE_COLOR === 'true') {\n\t\t\treturn 1;\n\t\t}\n\n\t\tif (env.FORCE_COLOR === 'false') {\n\t\t\treturn 0;\n\t\t}\n\n\t\treturn env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);\n\t}\n}\n\nfunction translateLevel(level) {\n\tif (level === 0) {\n\t\treturn false;\n\t}\n\n\treturn {\n\t\tlevel,\n\t\thasBasic: true,\n\t\thas256: level >= 2,\n\t\thas16m: level >= 3,\n\t};\n}\n\nfunction _supportsColor(haveStream, {streamIsTTY, sniffFlags = true} = {}) {\n\tconst noFlagForceColor = envForceColor();\n\tif (noFlagForceColor !== undefined) {\n\t\tflagForceColor = noFlagForceColor;\n\t}\n\n\tconst forceColor = sniffFlags ? flagForceColor : noFlagForceColor;\n\n\tif (forceColor === 0) {\n\t\treturn 0;\n\t}\n\n\tif (sniffFlags) {\n\t\tif (hasFlag('color=16m')\n\t\t\t|| hasFlag('color=full')\n\t\t\t|| hasFlag('color=truecolor')) {\n\t\t\treturn 3;\n\t\t}\n\n\t\tif (hasFlag('color=256')) {\n\t\t\treturn 2;\n\t\t}\n\t}\n\n\t// Check for Azure DevOps pipelines.\n\t// Has to be above the `!streamIsTTY` check.\n\tif ('TF_BUILD' in env && 'AGENT_NAME' in env) {\n\t\treturn 1;\n\t}\n\n\tif (haveStream && !streamIsTTY && forceColor === undefined) {\n\t\treturn 0;\n\t}\n\n\tconst min = forceColor || 0;\n\n\tif (env.TERM === 'dumb') {\n\t\treturn min;\n\t}\n\n\tif (node_process__WEBPACK_IMPORTED_MODULE_0__.platform === 'win32') {\n\t\t// Windows 10 build 10586 is the first Windows release that supports 256 colors.\n\t\t// Windows 10 build 14931 is the first release that supports 16m/TrueColor.\n\t\tconst osRelease = node_os__WEBPACK_IMPORTED_MODULE_1__.release().split('.');\n\t\tif (\n\t\t\tNumber(osRelease[0]) >= 10\n\t\t\t&& Number(osRelease[2]) >= 10_586\n\t\t) {\n\t\t\treturn Number(osRelease[2]) >= 14_931 ? 3 : 2;\n\t\t}\n\n\t\treturn 1;\n\t}\n\n\tif ('CI' in env) {\n\t\tif ('GITHUB_ACTIONS' in env || 'GITEA_ACTIONS' in env) {\n\t\t\treturn 3;\n\t\t}\n\n\t\tif (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'BUILDKITE', 'DRONE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {\n\t\t\treturn 1;\n\t\t}\n\n\t\treturn min;\n\t}\n\n\tif ('TEAMCITY_VERSION' in env) {\n\t\treturn /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n\t}\n\n\tif (env.COLORTERM === 'truecolor') {\n\t\treturn 3;\n\t}\n\n\tif (env.TERM === 'xterm-kitty') {\n\t\treturn 3;\n\t}\n\n\tif ('TERM_PROGRAM' in env) {\n\t\tconst version = Number.parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);\n\n\t\tswitch (env.TERM_PROGRAM) {\n\t\t\tcase 'iTerm.app': {\n\t\t\t\treturn version >= 3 ? 3 : 2;\n\t\t\t}\n\n\t\t\tcase 'Apple_Terminal': {\n\t\t\t\treturn 2;\n\t\t\t}\n\t\t\t// No default\n\t\t}\n\t}\n\n\tif (/-256(color)?$/i.test(env.TERM)) {\n\t\treturn 2;\n\t}\n\n\tif (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n\t\treturn 1;\n\t}\n\n\tif ('COLORTERM' in env) {\n\t\treturn 1;\n\t}\n\n\treturn min;\n}\n\nfunction createSupportsColor(stream, options = {}) {\n\tconst level = _supportsColor(stream, {\n\t\tstreamIsTTY: stream && stream.isTTY,\n\t\t...options,\n\t});\n\n\treturn translateLevel(level);\n}\n\nconst supportsColor = {\n\tstdout: createSupportsColor({isTTY: node_tty__WEBPACK_IMPORTED_MODULE_2__.isatty(1)}),\n\tstderr: createSupportsColor({isTTY: node_tty__WEBPACK_IMPORTED_MODULE_2__.isatty(2)}),\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supportsColor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vc3VwcG9ydHMtY29sb3JAOS40LjAvbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBQ1Y7QUFDRTs7QUFFM0I7QUFDQTtBQUNBLHVFQUF1RSw4Q0FBWTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sS0FBSyxFQUFFLHlDQUFPOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsZ0NBQWdDLElBQUk7QUFDekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSyxrREFBZ0I7QUFDckI7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxHQUFHO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyxpREFBaUQ7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLE9BQU8sNENBQVUsSUFBSTtBQUNuRCw4QkFBOEIsT0FBTyw0Q0FBVSxJQUFJO0FBQ25EOztBQUVBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3VwcG9ydHMtY29sb3JAOS40LjAvbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzP2ZkNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCBvcyBmcm9tICdub2RlOm9zJztcbmltcG9ydCB0dHkgZnJvbSAnbm9kZTp0dHknO1xuXG4vLyBGcm9tOiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2hhcy1mbGFnL2Jsb2IvbWFpbi9pbmRleC5qc1xuLy8vIGZ1bmN0aW9uIGhhc0ZsYWcoZmxhZywgYXJndiA9IGdsb2JhbFRoaXMuRGVubz8uYXJncyA/PyBwcm9jZXNzLmFyZ3YpIHtcbmZ1bmN0aW9uIGhhc0ZsYWcoZmxhZywgYXJndiA9IGdsb2JhbFRoaXMuRGVubyA/IGdsb2JhbFRoaXMuRGVuby5hcmdzIDogcHJvY2Vzcy5hcmd2KSB7XG5cdGNvbnN0IHByZWZpeCA9IGZsYWcuc3RhcnRzV2l0aCgnLScpID8gJycgOiAoZmxhZy5sZW5ndGggPT09IDEgPyAnLScgOiAnLS0nKTtcblx0Y29uc3QgcG9zaXRpb24gPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3NpdGlvbiA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0cmV0dXJuIHBvc2l0aW9uICE9PSAtMSAmJiAodGVybWluYXRvclBvc2l0aW9uID09PSAtMSB8fCBwb3NpdGlvbiA8IHRlcm1pbmF0b3JQb3NpdGlvbik7XG59XG5cbmNvbnN0IHtlbnZ9ID0gcHJvY2VzcztcblxubGV0IGZsYWdGb3JjZUNvbG9yO1xuaWYgKFxuXHRoYXNGbGFnKCduby1jb2xvcicpXG5cdHx8IGhhc0ZsYWcoJ25vLWNvbG9ycycpXG5cdHx8IGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJylcblx0fHwgaGFzRmxhZygnY29sb3I9bmV2ZXInKVxuKSB7XG5cdGZsYWdGb3JjZUNvbG9yID0gMDtcbn0gZWxzZSBpZiAoXG5cdGhhc0ZsYWcoJ2NvbG9yJylcblx0fHwgaGFzRmxhZygnY29sb3JzJylcblx0fHwgaGFzRmxhZygnY29sb3I9dHJ1ZScpXG5cdHx8IGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpXG4pIHtcblx0ZmxhZ0ZvcmNlQ29sb3IgPSAxO1xufVxuXG5mdW5jdGlvbiBlbnZGb3JjZUNvbG9yKCkge1xuXHRpZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0XHRpZiAoZW52LkZPUkNFX0NPTE9SID09PSAndHJ1ZScpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICdmYWxzZScpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWluKE51bWJlci5wYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSwgMyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcblx0aWYgKGxldmVsID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsZXZlbCxcblx0XHRoYXNCYXNpYzogdHJ1ZSxcblx0XHRoYXMyNTY6IGxldmVsID49IDIsXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzLFxuXHR9O1xufVxuXG5mdW5jdGlvbiBfc3VwcG9ydHNDb2xvcihoYXZlU3RyZWFtLCB7c3RyZWFtSXNUVFksIHNuaWZmRmxhZ3MgPSB0cnVlfSA9IHt9KSB7XG5cdGNvbnN0IG5vRmxhZ0ZvcmNlQ29sb3IgPSBlbnZGb3JjZUNvbG9yKCk7XG5cdGlmIChub0ZsYWdGb3JjZUNvbG9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRmbGFnRm9yY2VDb2xvciA9IG5vRmxhZ0ZvcmNlQ29sb3I7XG5cdH1cblxuXHRjb25zdCBmb3JjZUNvbG9yID0gc25pZmZGbGFncyA/IGZsYWdGb3JjZUNvbG9yIDogbm9GbGFnRm9yY2VDb2xvcjtcblxuXHRpZiAoZm9yY2VDb2xvciA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0aWYgKHNuaWZmRmxhZ3MpIHtcblx0XHRpZiAoaGFzRmxhZygnY29sb3I9MTZtJylcblx0XHRcdHx8IGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKVxuXHRcdFx0fHwgaGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcblx0XHRcdHJldHVybiAzO1xuXHRcdH1cblxuXHRcdGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuXHRcdFx0cmV0dXJuIDI7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgZm9yIEF6dXJlIERldk9wcyBwaXBlbGluZXMuXG5cdC8vIEhhcyB0byBiZSBhYm92ZSB0aGUgYCFzdHJlYW1Jc1RUWWAgY2hlY2suXG5cdGlmICgnVEZfQlVJTEQnIGluIGVudiAmJiAnQUdFTlRfTkFNRScgaW4gZW52KSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoaGF2ZVN0cmVhbSAmJiAhc3RyZWFtSXNUVFkgJiYgZm9yY2VDb2xvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yIHx8IDA7XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdCBXaW5kb3dzIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLlxuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlIGZpcnN0IHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwXG5cdFx0XHQmJiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMF81ODZcblx0XHQpIHtcblx0XHRcdHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNF85MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmICgnR0lUSFVCX0FDVElPTlMnIGluIGVudiB8fCAnR0lURUFfQUNUSU9OUycgaW4gZW52KSB7XG5cdFx0XHRyZXR1cm4gMztcblx0XHR9XG5cblx0XHRpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJywgJ0JVSUxES0lURScsICdEUk9ORSddLnNvbWUoc2lnbiA9PiBzaWduIGluIGVudikgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAoJ1RFQU1DSVRZX1ZFUlNJT04nIGluIGVudikge1xuXHRcdHJldHVybiAvXig5XFwuKDAqWzEtOV1cXGQqKVxcLnxcXGR7Mix9XFwuKS8udGVzdChlbnYuVEVBTUNJVFlfVkVSU0lPTikgPyAxIDogMDtcblx0fVxuXG5cdGlmIChlbnYuQ09MT1JURVJNID09PSAndHJ1ZWNvbG9yJykge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKGVudi5URVJNID09PSAneHRlcm0ta2l0dHknKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IE51bWJlci5wYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cblx0XHRzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcblx0XHRcdGNhc2UgJ2lUZXJtLmFwcCc6IHtcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6IHtcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHR9XG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9XG5cblx0aWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF52dDIyMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRyZXR1cm4gbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VwcG9ydHNDb2xvcihzdHJlYW0sIG9wdGlvbnMgPSB7fSkge1xuXHRjb25zdCBsZXZlbCA9IF9zdXBwb3J0c0NvbG9yKHN0cmVhbSwge1xuXHRcdHN0cmVhbUlzVFRZOiBzdHJlYW0gJiYgc3RyZWFtLmlzVFRZLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH0pO1xuXG5cdHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbmNvbnN0IHN1cHBvcnRzQ29sb3IgPSB7XG5cdHN0ZG91dDogY3JlYXRlU3VwcG9ydHNDb2xvcih7aXNUVFk6IHR0eS5pc2F0dHkoMSl9KSxcblx0c3RkZXJyOiBjcmVhdGVTdXBwb3J0c0NvbG9yKHtpc1RUWTogdHR5LmlzYXR0eSgyKX0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydHNDb2xvcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/supports-color@9.4.0/node_modules/supports-color/index.js\n");

/***/ })

};
;