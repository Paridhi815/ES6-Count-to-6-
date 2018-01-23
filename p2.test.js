const tester = require('./p2');

s = `Hello, PARIDHI!
Your name lowercased is "paridhi".`;
test('testing UPPER case', () => {
  expect(tester('PARIDHI')).toBe(s);
});

input = 'PARidhi';
test('testing MIXED case', () => {
  expect(tester(input)).toBe(`Hello, ${input}!
Your name lowercased is "${input.toLowerCase()}".`);
});


test('testing EMPTY', () => {
  expect(tester('')).toBe(`Hello, !
Your name lowercased is "".`);
});

test('The function should return string:', () => {
  expect(typeof tester('Pari')).toBe('string');
});
