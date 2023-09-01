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
    const exampleAge = new Age(currentAge);
    const newAges = exampleAge.yearsPassed(pastDate);

    const expectedMercuryAge = currentAge * 0.24;
    const expectedVenusAge = currentAge * 0.62;
    const expectedMarsAge = currentAge * 1.88;
    const expectedJupiterAge = currentAge * 11.86;

    // exampleAge.yearsPassed(years);
    expect(newAges).toEqual([currentAge, expectedMercuryAge, expectedVenusAge, expectedMarsAge, expectedJupiterAge]);
  });


});

