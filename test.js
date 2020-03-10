const assert = require('assert');
const getOutput = require('./index');

// 1 rover
assert(getOutput('1 1\n0 0 N\n') === '0 0 N');
assert(getOutput('1 1\n0 1 N\n') === '0 1 N');
assert(getOutput('1 1\n1 1 S\n') === '1 1 S');
assert(getOutput('1 1\n0 0 N\nM') === '0 1 N');
assert(getOutput('2 2\n0 0 N\nMM') === '0 2 N');
assert(getOutput('1 1\n0 0 N\nMRM') === '1 1 E');
assert(getOutput('1 1\n0 0 N\nMRMR') === '1 1 S');
assert(getOutput('1 1\n0 0 N\nMRMRM') === '1 0 S');
assert(getOutput('1 1\n0 0 N\nMRMRMR') === '1 0 W');
assert(getOutput('1 1\n0 0 N\nMRMRMRM') === '0 0 W');
assert(getOutput('1 1\n0 0 N\nMRMRMRMR') === '0 0 N');
assert(getOutput('1 1\n1 0 N\nMLM') === '0 1 W');
assert(getOutput('1 1\n1 0 N\nMLML') === '0 1 S');
assert(getOutput('1 1\n1 0 N\nMLMLM') === '0 0 S');
assert(getOutput('1 1\n1 0 N\nMLMLML') === '0 0 E');
assert(getOutput('1 1\n1 0 N\nMLMLMLM') === '1 0 E');
assert(getOutput('1 1\n1 0 N\nMLMLMLML') === '1 0 N');
assert(getOutput('5 5\n1 2 N\nLMLMLMLMM') === '1 3 N');
assert(getOutput('5 5\n3 3 E\nMMRMMRMRRM') === '5 1 E');
// 2 rovers
assert(getOutput('1 1\n0 0 N\n\n1 1 N\n') === '0 0 N\n1 1 N');
assert(getOutput('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM') === '1 3 N\n5 1 E');
// 3 rovers
assert(getOutput('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM\n0 0 N\nMMM') === '1 3 N\n5 1 E\n0 3 N');
