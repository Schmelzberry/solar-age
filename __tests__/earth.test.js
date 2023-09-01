import Age from './../src/earth.js';

describe('earthAge', () => {

  test('should return a number', () => {
    const exampleAge = new Age(6);
    expect(exampleAge.age).toEqual(6);
  });
});