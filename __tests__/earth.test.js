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
    let number = Number;
    const exampleAge = new Age(number);
    exampleAge.yearsPassed();
    expect(exampleAge.yearsPassed()).toEqual(exampleAge.age, (exampleAge.mercury * number), (exampleAge.venus * number), (exampleAge.mars * number), (exampleAge.jupiter * number));
  });


});

