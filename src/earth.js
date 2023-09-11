export default class Age {
 constructor(age) {
  this.age=age;
  this.mercury= 0;
  this.venus= 0;
  this.mars= 0;
  this.jupiter= 0;
  }

  mercury(age) {
    return;
  }

  yearsPassed(pastDate) {
    pastDate = Number(pastDate);
    let ageMinusDate = (this.age - pastDate);
    this.mercury = ageMinusDate * .24;
    this.venus = ageMinusDate * .62;
    this.mars = ageMinusDate * 1.88;
    this.jupiter = ageMinusDate *  11.86;
    return [ageMinusDate, this.mercury, this.venus, this.mars, this.jupiter];

  }
  yearsUntil(futureDate) {
    futureDate = Number(futureDate);
    let howLong = (futureDate - this.age);
    this.mercury = howLong * .24;
    this.venus = howLong * .62;
    this.mars = howLong * 1.88;
    this.jupiter = howLong *  11.86;
    return [howLong, this.mercury, this.venus, this.mars, this.jupiter];
  }
} 
