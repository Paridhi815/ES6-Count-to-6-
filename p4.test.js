const tester = require('./p4');


test('testing Basic case', () => {
  expect(tester()).toBe('Ouch!');
});

// test("testing Basic case", () => {
//  expect(tester(["PARIDHI","Aditi",""])).toBe(`[PARIDHI,Aditi] becomes "PA"`);
// });
//
// test("testing EMPTY", () => {
//  expect(tester([])).toBe(`[] becomes ""`);
// });
//
// test("testing Basic case", () => {
//  expect(tester(["PARIDHI","","Parth"])).toBe(`[PARIDHI,Parth] becomes "PP"`);
// });
// test("testing Basic case", () => {
//  expect(tester(["","",""])).toBe(`[] becomes ""`);
// });
