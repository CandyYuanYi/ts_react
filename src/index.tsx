import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div />, document.getElementById('root'));

function sayHello(person:string) {
   return 'hello,' + person;
}
let user = 'amy';
console.log(sayHello(user))

//原始数据类型
let flag: boolean = false;
let newcreateBoolean: boolean = Boolean(1);

let newcreateSsring: string = String(123);
let nnewcreateSsring: string = `123${flag}`;
//其他基本类型同上


function add (): void {
   console.log(nnewcreateSsring)
}
add()

let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | undefined {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse(123);

//类型断言


serviceWorker.unregister();

function getLength(something: string | number): number {
   if ((something as string).length) {
       return (something as string).length;
   } else {
       return something.toString().length;
   }
}
