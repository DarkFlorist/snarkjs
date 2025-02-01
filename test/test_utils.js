import {
  deepStrictEqual
} from 'node:assert';
const assert = function(clause) { deepStrictEqual( true, clause) };
assert.equal = deepStrictEqual;
export { assert };
