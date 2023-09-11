import Age from './../src/earth.js';
// DRY up this suite with a beforeEach function //
describe('earthAge', () => {

  test('should return a number', () => {
    const exampleAge = new Age(1);
    expect(exampleAge.age).toEqual(1);
  });

  test('should correctly return age multiplied by .24, stored in mercury key of constructor', () => {
    const exampleAge = new Age(1);
    exampleAge.mercury();
    expect(exampleAge.mercuryAge).toEqual(.24);
  });

  test('should correctly return age multiplied by .62 stored in venus key of constructor', () => {
    const exampleAge = new Age(1);
    exampleAge.venus();
    expect(exampleAge.venusAge).toEqual(.62);
  });

  test('should correctly return age multiplied by 1.88 stored in mars key of constructor', () => {
    const exampleAge = new Age(1);
    exampleAge.mars();
    expect(exampleAge.marsAge).toEqual(1.88);
  });

  test('should correctly return age multiplied by 11.86 stored in its own key', () => {
    const exampleAge = new Age(1);
    exampleAge.jupiter();
    expect(exampleAge.jupiterAge).toEqual(11.86);
  });




});

