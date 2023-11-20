export class Person{
    //public name:string;
    //private address: string;

    constructor(
        public firstname:string,
        public lastname:string,
        private address:string= 'no address'
    ){
        //this.name=name;
        //this.address = address;
    }
}
/*export class Hero extends Person{
   constructor(
    public alterEgo:string,
    public age:number,
    public realName:string,
    ){
        super(realName,'new york');
   }
}*/
export class Hero {
    /*public person:Person;*/
    constructor(
     public alterEgo:string,
     public age:number,
     public realName:string,
     public person:Person,
     ){
       //this.person=new Person(realName);
 }
}
const tony =new Person('Tony','Stark','New York');
const ironman = new Hero('Ironman', 45,'Tony',tony);
console.log(ironman);