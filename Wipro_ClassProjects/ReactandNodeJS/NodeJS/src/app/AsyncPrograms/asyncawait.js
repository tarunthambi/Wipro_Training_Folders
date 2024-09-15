async function fetchData(){
    //Simulate an asynchronous API call
    const response= await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({data:"This is the fetched data from API"});
        },2000);
    });
    return response.data;
}

async function main(){
    try{
        const data=await fetchData();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

main();