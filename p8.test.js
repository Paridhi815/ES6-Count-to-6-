const tester = require('./p8');

test('testing Whole Number case:', () => {
  expect(tester(1, 2)).toBe(1.5);
});

test('Using default parameters:', () => {
  expect(tester()).toBe(0.5);
});

test('passing one parameter:', () => {
  expect(tester(1)).toBe(1);
});

test('passing undefined as an argument:', () => {
  expect(tester(undefined, 6)).toBe(3);
});

test('Negative Number Case:', () => {
  expect(tester(undefined, -1)).toBe(-0.5);
});

test('passing undefined as an argument:', () => {
  expect(tester(null, null)).toBe(0);
});
