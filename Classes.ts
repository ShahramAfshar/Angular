class Person {
  name: string;
  family: string;

  constructor() {
    this.name = "";
    this.family = "";
  }
   FullName(){
       return this.name + " " + this.family;
   }

}

let shahrm = new Person();
console.log(shahrm.FullName());
