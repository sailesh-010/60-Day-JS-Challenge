const usr={
    usrname:"sailesh",
    isadmin:true,
    greating:function(){
        return `Hello ${this.usrname}`;
    }
}
console.log(usr.greating());

if(usr.isadmin){
    console.log("Redirecting to your panel, Please wait...");
}
else{
    console.log("Access denied! You are not an admin.");
}

