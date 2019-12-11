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

interface IUserManager{
    Register:(user : IUser)=>boolean;
    Login:(userName:string, password:string)=>void;
}

class UserManager implements IUserManager{
    Register(user:IUser){
return true;
    }

    Login(userName:string, password:string){
        
    }
}
