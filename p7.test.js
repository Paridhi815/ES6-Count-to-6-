const tester = require('./p7');

test('testing Whole Number case', () => {
  expect(tester(1, 2, 3)).toBe('2.00');
});

test('testing Negative Number case', () => {
  expect(tester(1, 2, -3)).toBe('0.00');
});
// test('testing decimal point case', () => {
//   expect(tester(1, 2, 3, 4)).toBe('2.50');
// });

test('testing recurring decimal', () => {
  expect(tester(1, 1, 2, 3, 5, 8)).toBe('3.33');
});

test('testing No Arguments case', () => {
  expect(tester()).toBe('');
});

test('The function should return string:', () => {
  expect(typeof tester(1, 2)).toBe('number');
});

// return type should be a number
