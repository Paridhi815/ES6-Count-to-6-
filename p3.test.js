const tester = require('./p3');


test('testing Basic case', () => {
  expect(tester(['PARIDHI', 'Aditi', 'Parth'])).toBe('[PARIDHI,Aditi,Parth] becomes "PAP"');
});

test('testing Basic case', () => {
  expect(tester(['PARIDHI', 'Aditi', ''])).toBe('[PARIDHI,Aditi] becomes "PA"');
});

test('testing EMPTY', () => {
  expect(tester([])).toBe('[] becomes ""');
});

test('testing Basic case', () => {
  expect(tester(['PARIDHI', '', 'Parth'])).toBe('[PARIDHI,Parth] becomes "PP"');
});
test('testing Basic case', () => {
  expect(tester(['', '', ''])).toBe('[] becomes ""');
});

test('testing if string length is equivalent to number of strings in the array', () => {
  expect(tester(['adi', 'ver', 'paridhi']).length).toBe('[adi,ver,paridhi] becomes "avv"'.length);
});

test('The function should return string:', () => {
  expect(typeof tester(['PARIDHI', 'Aditi'])).toBe('string');
});
