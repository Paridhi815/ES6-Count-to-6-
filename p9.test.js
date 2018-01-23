const tester = require('./p9');

test('testing with a number paprameter passed:', () => {
  expect(tester('hi', 5)).toBe('hi!!!!!');
});

test('The function should return string:', () => {
  expect(typeof tester('hi')).toBe('string');
});

test('testing with no number parameter:', () => {
  expect(tester('hi')).toBe('hi!!');
});

test('testing with already existing exclamations:', () => {
  expect(tester('hi!!!')).toBe('hi!!!!!!!!');
});

test('testing with sezo as a parameter:', () => {
  expect(tester('hi', 0)).toBe('hi');
});

test('testing with no ', () => {
  expect(tester('')).toBe('');
});

test('Strings with only exclamations:', () => {
  expect(tester('!!!')).toBe('!!!!!!');
});
test('Strings with only exclamations ans parameter:', () => {
  expect(tester('!!!', 2)).toBe('!!!!!');
});
test('Strings with only exclamations ans parameter:', () => {
  expect(tester('hi!!!', -2)).toBe('Number of exclamations to be added cant be negative');
});
