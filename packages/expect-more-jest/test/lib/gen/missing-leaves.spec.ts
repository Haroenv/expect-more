import * as gen from '../../../src/lib/gen';

it('returns incomplete copies of basic arrays', () => {
  expect(gen.missingLeaves([1, 2, 3]).permutations).toEqual([undefined, [2, 3], [1, 3], [1, 2]]);
});

it('returns incomplete copies of basic objects', () => {
  expect(gen.missingLeaves({ a: 1, b: 2, c: 3 }).permutations).toEqual([
    undefined,
    { b: 2, c: 3 },
    { a: 1, c: 3 },
    { a: 1, b: 2 }
  ]);
});

it('returns incomplete copies of arrays of objects', () => {
  expect(gen.missingLeaves([{ a: 1 }, { b: 2 }]).permutations).toEqual([undefined, [{}, { b: 2 }], [{ a: 1 }, {}]]);
});

it('returns incomplete copies of indexes of arrays', () => {
  expect(gen.missingLeaves({ a: [1], b: [2] }).permutations).toEqual([undefined, { a: [], b: [2] }, { a: [1], b: [] }]);
});

it('returns incomplete copies of nested objects', () => {
  expect(gen.missingLeaves({ a: { b: { c: 1 } } }).permutations).toEqual([undefined, { a: { b: {} } }]);
});

it('returns incomplete copies of nested objects containing arrays', () => {
  expect(gen.missingLeaves({ a: { b: { c: [1, 2] } } }).permutations).toEqual([
    undefined,
    { a: { b: { c: [2] } } },
    { a: { b: { c: [1] } } }
  ]);
});

it('returns incomplete copies of nested arrays', () => {
  expect(gen.missingLeaves([1, [2, [3]]]).permutations).toEqual([undefined, [[2, [3]]], [1, [[3]]], [1, [2, []]]]);
});
