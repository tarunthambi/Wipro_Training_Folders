class CustomError extends Error{
    constructor(message){
        super(message);
        this.name="CustomError";
    }
}

function testfunction(){
    throw new CustomError('Something went wrong');
}

try
{
    testfunction();
}
catch(error){
    if(error instanceof CustomError){
        console.error('Caught custom error: ',error.message);
    }else
    {
        console.error('Caught an error: ',error.message);
    }
}