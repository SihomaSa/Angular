export interface Product{
    description:string;
    price:number;
}

/*const phone:Product={
    description:'Nokia A1',
    price:500.0
}
const tablet:Product={
    description:'Samsung Galaxy Tab',
    price:1000.0
}*/
interface TaxCalculationOptions{
    tax: number;
    products:Product[];
}
//function taxCalculation(options:TaxCalculationOptions):[number,number]{
//function taxCalculation({tax, products}:TaxCalculationOptions):[number,number]{
export function taxCalculation(options:TaxCalculationOptions):[number,number]{
    const{tax,products}=options;
    let total=0;
    //options.products.forEach(product => {
    products.forEach(({price}) => {
        total += price;
    });
    return [total,total*tax];
}

/*const shoppingCart=[phone,tablet];
const tax = 0.15;
const [total,taxTotal]= taxCalculation({
    products:shoppingCart,
    tax: tax,
});*/
//console.log('Total', total);
//console.log('Tax', taxTotal);