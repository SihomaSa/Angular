import {Product} from './06-function-destructuring';/*desestrurar*/
import { taxCalculation } from './06-function-destructuring';
const shoppingCart:Product[]=[
    {
        description:'Nokia',
        price:100
    },
    {
        description:'',
        price:250
    }
];
//Tax=0.15
const[total, tax]=taxCalculation({
    products: shoppingCart,
    tax: 0.15
});
console.log('Total',total);//375
console.log('Tax',tax);//48.75