let authorized=true;

function getUserById(id){
    return new Promise((resolve,reject)=>{
        if(!authorized){
            reject("Unauthorized access to the user data");
        }
        resolve({
            id:id,
            username:'admin'
        });
    });
}

getUserById(1)
.then(user=>console.log(user.id+" "+user.username+"\n"+"User is authorized"))
.catch(err=>console.log(`Caught by .catch ${err}`))
.finally(console.log("Done"));