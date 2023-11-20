function classDecorator<T extends {new (...args:any[]):{}}>(/*funciones modificar omportamientos de ls clases*/
    constructor:T
    ){
        return class extends constructor{
            newProperty='New Property';
            hello='override';
        }
}


@classDecorator
export class SuperClass{
    public myProperty: string ='Abc123'
    print(){
        console.log('Hola mundo')
    }
}
console.log(SuperClass) //definicón de la clase
const myClass= new SuperClass();
console.log(myClass);