let promise = new Promise((resolve, reject)=>{
    let c = true;
    if(c){
        resolve("Promise Resolved");
    }else{
        reject("Promise Rejected");
    }
})

promise.then((message)=>{
    console.log(message);

}).catch((m)=>{
    console.log(m);
});