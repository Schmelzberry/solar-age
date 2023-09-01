import Age from './../src/earth.js';
// DRY up this suite with a beforeEach function //
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

  test('should correctly return age multiplied by 1.88 stored in its own key', () => {
    let number = Number;
    const exampleAge = new Age(number);
    expect(exampleAge.mars).toEqual(exampleAge.age * 1.88);
  });

  test('should correctly return age multiplied by 11.86 stored in its own key', () => {
    let number = Number;
    const exampleAge = new Age(number);
    expect(exampleAge.jupiter).toEqual(exampleAge.age * 11.86);
  });

  test('should determine how many years have passed on each planet since a past birthday', () => {
    let currentAge = 20; 
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
    let currentAge2 = 30; 
    let futureDate = 10;
    let currentPlusTargetAge = currentAge2 + futureDate;
    const exampleAge = new Age(currentAge2);
    const newAges = exampleAge.yearsUntil(futureDate);
    const futureMercuryAge = currentPlusTargetAge * 0.24;
    const futureVenusAge = currentPlusTargetAge * 0.62;
    const futureMarsAge = currentPlusTargetAge * 1.88;
    const futureJupiterAge = currentPlusTargetAge * 11.86;
    expect(newAges).toEqual([currentPlusTargetAge, futureMercuryAge, futureVenusAge, futureMarsAge, futureJupiterAge]);
  });


});

