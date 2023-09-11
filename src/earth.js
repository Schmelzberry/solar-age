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
    this.marsAge = this.age * 1.88;
    return this.marsAge;
   }

   jupiter() {
    this.jupiterAge = this.age * 11.86;
    return this.jupiterAge;
   }

  yearsPassed(pastDate) {
    let ageMinusDate = (this.age - pastDate);
    this.mercuryAge = ageMinusDate * .24;
    this.venusAge = ageMinusDate * .62;
    this.marsAge = ageMinusDate * 1.88;
    this.jupiterAge = ageMinusDate *  11.86;
    return [ageMinusDate, this.mercuryAge, this.venusAge, this.marsAge, this.jupiterAge];

  }
  // yearsUntil(futureDate) {
  //   futureDate = Number(futureDate);
  //   let howLong = (futureDate - this.age);
  //   this.mercury = howLong * .24;
  //   this.venus = howLong * .62;
  //   this.mars = howLong * 1.88;
  //   this.jupiter = howLong *  11.86;
  //   return [howLong, this.mercury, this.venus, this.mars, this.jupiter];
  // }
} 
  