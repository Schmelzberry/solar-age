import Age from './../src/earth.js';

describe('earthAge', () => {

  test('should return a number', () => {
    let number = Number;
    const exampleAge = new Age(number);
    expect(exampleAge.age).toEqual(number);
  });

  test('should correctly return a number multiplied by .24', () => {
    let mercuryNumber = Number;
    const exampleAge = new Age(mercuryNumber);
    expect(exampleAge.mercury).toEqual(mercuryNumber * .24);
  });


});

