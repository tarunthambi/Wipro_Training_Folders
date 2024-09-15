//HTTP server
const http=require('http')
const url=require('url')
const querystring=require('querystring')

//port number
const PORT=3000;

const server=http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true);
    const path=parsedurl.pathname;
    const method=req.method;

    //content-type
    res.setHeader('Content-Type','application/json');

    //GET request to the '/users' route
    if(method === 'GET' && path === '/users'){
        res.statusCode=200;
        res.end(JSON.stringify(users));
    }

    //GET request with query parameter
    else if(method === 'GET' && path === '/user'){
        const id=parseInt(parsedurl.query.id);
        const user=users.find(u=>u.id===id);
        if(user){
            res.statusCode=200;
            res.end(JSON.stringify(user));
        }
        else
        {
            res.statusCode=404;
            res.end(JSON.stringify({message:'User Not Found'}));
        }
    }

    //POST request to the '/user' route to add new user
    else if(method === 'POST' && path === '/user'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });

        req.on('end',()=>{
            const parsedBody=querystring.parse(body);
            const newUser={
                id:users.length+1,
                name:parsedBody.name,
                age:parseInt(parsedBody.age),
                email:parsedBody.email
            };
            users.push(newUser);

            res.statusCode=201;
            res.end(JSON.stringify(newUser));
        });
    }

    //PUT request to the '/user' route to update existing user
    else if(method === 'PUT' && path === '/user'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });

        req.on('end',()=>{
            const parsedBody=querystring.parse(body);
            const id=parseInt(parsedBody.id);
            const user=users.find(u=>u.id===id);

            if(user){
                user.name=parsedBody.name || user.name;
                user.age=parseInt(parsedBody.age) || user.age;
                user.email=parsedBody.email || user.email;

                res.statusCode=200;
                res.end(JSON.stringify(user));
            }else{
                res.statusCode=404;
                res.end(JSON.stringify({message:'User Not Found'}));
            }
            
        });
    }

    //DELETE request to the '/user' route to delete a user
    else if(method === 'DELETE' && path === '/user'){
        const id=parseInt(parsedurl.query.id);
        const user=users.findIndex(u=>u.id===id);

        if(user !== -1){
            const deleteduser=users.splice(user,1)[0];
            res.statusCode=200;
            res.end(JSON.stringify(deleteduser));
        }
        else
        {
            res.statusCode=404;
            res.end(JSON.stringify({message:'User Not Found'}));
        }
    }

    //Unknown routes
    else{
        res.statusCode=404;
        res.end(JSON.stringify({messsage:'Route Not Found'}));        
    }
});

//Start the server
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});

//Sample Data
let users=[
    {id:1,name:'Jane',age:30,email:'jane@test.com'},
    {id:2,name:'Jack',age:32,email:'jack@test.com'}
];

// curl http://localhost:3000/users
// curl -X GET http://localhost:3000/user?id=1
// curl -X POST http://localhost:3000/user -d "name=Smith&age=25&email=smith@test.com"
// curl -X PUT http://localhost:3000/user -d "id=4&name=Smith&age=31&email=smith@gmail.com"
// curl -X DELETE http://localhost:3000/user?id=10