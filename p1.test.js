const disp = require('./p1');

test('Should Print->', () => {
  expect(disp()).toBe('HELLO ES6');
});
test('For any string other than HELLO ES^->', () => {
  expect(disp()).not.toBe('HELLO 6');
});
test('The function should return string:', () => {
  expect(typeof disp()).toBe('string');
});
