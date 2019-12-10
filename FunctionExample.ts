// function sum(a:number,b:number):number {
    
//     return a+b;
// }

let sum=(a:number,b:number):number=> a+b ;



console.log(sum(10,20));


let fullName= function(fistName:string,lastName:string):string {
    
    return fistName+"-"+lastName;   
}
console.log(fullName("shahram","afshar"));


function sum2(a:any,b:any):any {
    return a+b;
}
console.log(sum2(10,20));
console.log(sum2("10","20"));

function rest(name:string,...param:string[]):string {
    return name +"----"+param.join("-");
}

console.log(rest("shahram","sady","sakineh","farzaneh"));
