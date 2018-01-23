const tester = require('./p6');


test('testing only positive', () => {
  expect(tester([1, 1, 2, 3, 5, 8])).toBe('The minimum of [1,1,2,3,5,8] is 1');
});

test('testing both positive and negative', () => {
  expect(tester([1, 1, -2, 3, -5, 8])).toBe('The minimum of [1,1,-2,3,-5,8] is -5');
});

test('testing only negative', () => {
  expect(tester([-1, -1, -2, -3, -5, -8])).toBe('The minimum of [-1,-1,-2,-3,-5,-8] is -8');
});


test('testing Bempty array case', () => {
  expect(tester([])).toBe('The minimum of [] is Infinity');
});

test('The function should return string:', () => {
  expect(typeof tester([1, 2])).toBe('string');
});
