// function getLength<T>(arg: T){
//     if(arg.hasOwnProperty('length')){
//         return arg['length'];
//     }
//     return 0;
// }
// console.log(getLength<number>(22));
// console.log(getLength('Hello World'));

interface HasLength {
     length: number;
}

function getLength<T extends HasLength>(arg: T): number {
    return arg.length;
}

console.log(getLength<number>(22));
console.log(getLength('Hello World!'));