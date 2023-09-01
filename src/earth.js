export default class Age {
 constructor(age) {
  this.age=age;
  this.mercury= this.age * .24;
  this.venus= this.age * .62;
  this.mars= this.age * 1.88;
  this.jupiter= this.age * 11.86;
  }
  yearsPassed(pastDate) {
    pastDate = Number(pastDate);
    let ageMinusDate = (this.age - pastDate);
    this.mercury = ageMinusDate * .24;
    this.venus = ageMinusDate * .62;
    this.mars = ageMinusDate * 1.88;
    this.jupiter = ageMinusDate *  11.86;
    return [this.age, this.mercury, this.venus, this.mars, this.jupiter];

  }
} 
