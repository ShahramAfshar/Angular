interface IUser{
    name:string;
fname:string;
age:number;
phone?:string
}

let shahram:IUser={
    name:"shahram",
     fname:"afshar",
     age:29
}


function register(user:IUser) {
    console.log(user);
    
}

register(shahram);