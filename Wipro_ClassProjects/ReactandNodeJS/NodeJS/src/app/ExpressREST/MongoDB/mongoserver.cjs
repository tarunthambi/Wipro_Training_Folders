// npm install express mongoose body-parser

const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyparser=require('body-parser');


const app=express();
const port=3000;

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/demo',{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log('Connected to MongoDB');
});

//Define ItemSchema and Model
const itemSchema=new mongoose.Schema({
    itemname:{type:String,required:true},
    price:{type:Number,required:true}
});

const Item=mongoose.model('Item',itemSchema);

//Middleware
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname)));

//API Routes for items
app.get('/api/items',async(req,res)=>{
    try{
        const items=await Item.find();
        res.json(items);
    }catch(error){
        res.status(500).send(error);
    }
})

//API Routes for iemm by id
app.get('/api/items/:id',async(req,res)=>{
    try{
        const item=await Item.findById(req.params.id);
        if(!item)
            return res.status(404).send('Item Not Found');
        res.json(item);
    }catch(error){
        res.status(500).send(error);
    }
})

//API Routes for post a new item
app.post('/api/items',async(req,res)=>{
    try{
        const newitem=new Item(req.body);
        await newitem.save();
        res.status(201).json(newitem);
    }catch(error){
        res.status(500).send(error);
    }
})

//API Routes for updating an item
app.put('/api/items/:id',async(req,res)=>{
    try{
        const item=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!item)
            return res.status(404).send('Item Not Found');
        res.json(item);
    }catch(error){
        res.status(500).send(error);
    }
})

//API Routes for updating an item
app.delete('/api/items/:id',async(req,res)=>{
    try{
        const item=await Item.findByIdAndDelete(req.params.id);
        if(!item)
            return res.status(404).send('Item Not Found');
        res.status(204).send();
    }catch(error){
        res.status(500).send(error);
    }
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})