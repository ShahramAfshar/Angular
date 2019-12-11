function message(name:string):string{

    return name;
}

console.log(message('shahrm'));

function generic<T>(value:T):T{
    return value
}

console.log(generic(123));
console.log(generic<string>("shahrm"));





