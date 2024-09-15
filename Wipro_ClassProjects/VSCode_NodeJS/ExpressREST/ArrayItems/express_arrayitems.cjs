const express=require('express');
const app=express();
const port=3000;

//Middleware to parse JSON data
app.use(express.json());

//In memory database
let items=[];

//Route to get all items
app.get('/items',(req,res)=>{
    res.json(items);
})

//Route to get an item by id
app.get('/items/:id',(req,res)=>{
    const item=items.find(i=>i.id===parseInt(req.params.id));
    if(!item)
        return res.status(404).send('Item Not Found');
    res.json(item);
})

//Route for creating a new item
app.post('/items',(req,res)=>{
    const newItem={
        id:items.length+1,
        name:req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
})

//Route for updating an item
app.put('/items/:id',(req,res)=>{
    const item=items.find(i=>i.id===parseInt(req.params.id));
    if(!item)
        return res.status(404).send('Item Not Found');

    item.name=req.body.name;
    res.json(item);
})

//Route to delete an item
app.delete('/items/:id',(req,res)=>{
    const itemindex=items.findIndex(i=>i.id===parseInt(req.params.id));
    if(itemindex === -1)
        return res.status(404).send('Item Not Found'); 
    items.splice(itemindex,1);
    res.status(204).send();
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})