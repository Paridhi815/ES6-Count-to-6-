const tester = require('./p5');


test('testing Basic case', () => {
  expect(tester(['userId', 'Paridhi', 'pari815', 'age', 'firstName', 'lastName'])).toEqual({ username: 'Paridhi', email: 'pari815' });
});

test('testing array with empty elements', () => {
  expect(tester(['', '', '', '', '', ''])).toEqual({ username: '', email: '' });
});

test('testing Basic case', () => {
  expect(tester(['userId', 'Paridhi'])).toEqual({ username: 'Paridhi', email: undefined });
});

test('testing empty array', () => {
  expect(tester([])).toEqual({});
});

test('testing null array elements', () => {
  expect(tester([null, null, null, null, null])).toEqual({ username: null, email: null });
});

test('testing undefined array elements', () => {
  expect(tester([undefined, undefined, undefined, undefined, undefined])).toEqual({ username: undefined, email: undefined });
});
