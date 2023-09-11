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

  test('should determine how many years have passed on each planet since a past birthday', () => {
    const exampleAge = new Age(2);
    const newAges = exampleAge.yearsPassed(1);
    expect(newAges).toEqual([1, .24, .62, 1.88, 11.86]);
  });

  // test('should determine how many years have passed on each planet given a future birthday', () => {
  //   let currentAge = 50; 
  //   let futureDate = 55;
  //   let futureMinusTargetAge = futureDate - currentAge;
  //   const exampleAge = new Age(currentAge);
  //   const newAges = exampleAge.yearsUntil(futureDate);
  //   const futureMercuryAge = futureMinusTargetAge * 0.24;
  //   const futureVenusAge = futureMinusTargetAge * 0.62;
  //   const futureMarsAge = futureMinusTargetAge * 1.88;
  //   const futureJupiterAge = futureMinusTargetAge * 11.86;
  //   expect(newAges).toEqual([futureMinusTargetAge, futureMercuryAge, futureVenusAge, futureMarsAge, futureJupiterAge]);
  // });


});

