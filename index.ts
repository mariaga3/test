
// let age: number =20;
// if(age < 50)
//     age += 10;
// console.log(age);


// let sales = 1233445;
// let course = "typescoi";
// let u=true;
// let level;
//  function render(document :any){
//     console.log(document);
//  }

// arrays
//  let numbers=[1,2,3,4];

//  numbers.forEach(n=> n.)

// tuples

// let user:  [number, string]= [1,"kke"]
// user.push(1);

console.log("kessellle")

class Person{
   private Name:string;
   private Age:number;
   private City:string;

   constructor (name:string, age:number, city:string){
      this.Name=name;
      this.Age=age;
      this.City=city;
   }
      public Sentence():string{
         return this.Name + " is " +this.Age+ "live in" +this.City;
      
   }
   
}
var person:Person = new Person("jin", 23,"Boston");

var Sentence: string =person.Sentence();

console.log(Sentence);
