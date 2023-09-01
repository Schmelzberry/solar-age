import Age from './../src/earth.js';

describe('earthAge', () => {

  test('should return a number', () => {
    let number = Number;
    const exampleAge = new Age(number);
    expect(exampleAge.age).toEqual(number);
  });

  test('should correctly return age multiplied by .24 stored in its own key', () => {
    let number = Number;
    const exampleAge = new Age(number);
    expect(exampleAge.mercury).toEqual(exampleAge.age * .24);
  });

  test('should correctly return age multiplied by .62 stored in its own key', () => {
    let number = Number;
    const exampleAge = new Age(number);
    expect(exampleAge.venus).toEqual(exampleAge.age * .62);
  });


});

