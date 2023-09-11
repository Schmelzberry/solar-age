import Age from './../src/earth.js';
// DRY up this suite with a beforeEach function //
describe('earthAge', () => {

  test('should return a number', () => {
    let number = 1;
    const exampleAge = new Age(number);
    expect(exampleAge.age).toEqual(1);
  });

  test('should correctly return age multiplied by .24, stored in mercury key of constructor', () => {
    let number = 1;
    const exampleAge = new Age(number);
    exampleAge.mercury();
    expect(exampleAge.mercuryAge).toEqual(.24);
  });

  test('should correctly return age multiplied by .62 stored in venus key of constructor', () => {
    let number = 1;
    const exampleAge = new Age(number);
    exampleAge.venus();
    expect(exampleAge.venusAge).toEqual(.62);
  });

  test('should correctly return age multiplied by 1.88 stored in mars key of constructor', () => {
    let number = 1;
    const exampleAge = new Age(number);
    exampleAge.mars();
    expect(exampleAge.marsAge).toEqual(1.88);
  });

  test('should correctly return age multiplied by 11.86 stored in its own key', () => {
    let number = 1;
    const exampleAge = new Age(number);
    exampleAge.jupiter();
    expect(exampleAge.jupiter).toEqual(11.86);
  });

  test('should determine how many years have passed on each planet since a past birthday', () => {
    let currentAge = 50; 
    let pastDate = 10;
    let currentMinusTargetAge = currentAge - pastDate;
    const exampleAge = new Age(currentAge);
    const newAges = exampleAge.yearsPassed(pastDate);
    const pastMercuryAge = currentMinusTargetAge * 0.24;
    const pastVenusAge = currentMinusTargetAge * 0.62;
    const pastMarsAge = currentMinusTargetAge * 1.88;
    const pastJupiterAge = currentMinusTargetAge * 11.86;
    expect(newAges).toEqual([currentMinusTargetAge, pastMercuryAge, pastVenusAge, pastMarsAge, pastJupiterAge]);
  });

  test('should determine how many years have passed on each planet given a future birthday', () => {
    let currentAge = 50; 
    let futureDate = 55;
    let futureMinusTargetAge = futureDate - currentAge;
    const exampleAge = new Age(currentAge);
    const newAges = exampleAge.yearsUntil(futureDate);
    const futureMercuryAge = futureMinusTargetAge * 0.24;
    const futureVenusAge = futureMinusTargetAge * 0.62;
    const futureMarsAge = futureMinusTargetAge * 1.88;
    const futureJupiterAge = futureMinusTargetAge * 11.86;
    expect(newAges).toEqual([futureMinusTargetAge, futureMercuryAge, futureVenusAge, futureMarsAge, futureJupiterAge]);
  });


});

