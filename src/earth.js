export default class Age {
 constructor(age) {
  this.age=age;
  this.mercuryAge= 0;
  this.venusAge= 0;
  this.marsAge= 0;
  this.jupiterAge= 0;
  }

  mercury() {
    this.mercuryAge = this.age * .24;
    return this.mercuryAge;
  }

  venus() {
    this.venusAge = this.age * .62;
    return this.venusAge;
   }

   mars() {
 
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
