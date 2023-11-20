export interface Passenger{
    name: string;
    children?:string[];
}
const passenger1: Passenger={
    name:"John",
}
const passenger2: Passenger={
    name:"Jane",
    children:['Natalia', 'Jose'],
}
const returnChildrenNumber=(passenger: Passenger)=>{
    const howManyChildren=passenger.children?.length || 0;
    //if(!passenger.children)return 0;
   //const howManyChildren=passenger.children!.length;
    console.log(passenger.name,howManyChildren);
}
returnChildrenNumber(passenger1) //undefined