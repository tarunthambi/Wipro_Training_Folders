// npm install mysql2 express path

const express=require('express');
const mysql=require('mysql2');
const path=require('path');

const app=express();
const port=3000;

//Middleware to parse JSON data
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


//create a connection
const connection=mysql.createConnection({
    host: 'localhost',    
    user: 'root', //username
    password: 'Carry@123', //password
    database:'demo'
});

connection.connect(err=>{
    if(err){
        console.error('Error connecting to the database: ',err.stack);
        return;
    }
    console.log('Connected to the database');
})

// Route to get all items
app.get('/items',(req,res)=>{
    connection.query('select * from items',(error,result)=>{
        if(error)
            return res.status(500).send(error);
        res.json(result);
    })
})

// Route to get an item by id
app.get('/items/:id',(req,res)=>{
    connection.query('select * from items where id=?',[req.params.id],(error,result)=>{
        if(error)
            return res.status(500).send(error);
        if(result.length === 0)
            return res.status(404).send('Item Not Found');
        res.json(result[0]);
    })
})

// Route to create a new item
app.post('/items',(req,res)=>{
    const {itemname}=req.body;
    const {price}=req.body;
    connection.query('insert into items (itemname,price) values(?,?)',[itemname,price],(error,result)=>{
        if(error)
            return res.status(500).send(error);        
        res.status(201).json({id:result.insertId,itemname,price});
    })
})

// Route to update an item
app.put('/items/:id',(req,res)=>{
    const {itemname}=req.body;
    const {price}=req.body;
    connection.query('update items set itemname=?,price=? where id=?',[itemname,price,req.params.id],(error,result)=>{
        if(error)
            return res.status(500).send(error);   
        if(result.affectedRows === 0)
            return res.status(404).send('Item Not Found');
        res.json({id:parseInt(req.params.id),itemname,price});
    })
})

//Route to delete an item
app.delete('/items/:id',(req,res)=>{
    connection.query('delete from items where id=?',[req.params.id],(error,result)=>{
        if(error)
            return res.status(500).send(error);
        if(result.affectedRows === 0)
            return res.status(404).send('Item Not Found');
        res.status(204).send();
    })
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})