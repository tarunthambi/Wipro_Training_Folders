const {Sequelize,DataTypes}=require('sequelize');

//Initialize Sequelize with database connection
const sequelize=new Sequelize('test','root','Carry@123',{
    host:'localhost',
    dialect:'mysql',
});

//Test the connection
sequelize.authenticate()
.then(()=>{
    console.log("Connected !!!");
})
.catch(err=>{
    console.log("Error - Not Connected:",err)
})

//Define the model
const User=sequelize.define('User',{
    //Define Attributes
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,        
    },
    firstname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastname:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },

},{
    tableName:'users', //custom table name
    timestamps:false, //disable createdAt and UpdatedAt
});

//Sync the model with the database
sequelize.sync()
.then(()=>{
    console.log('users table created');

    //User.create() will create a single user
    //Create new users
    return User.bulkCreate([{      
        id:1,  
        firstname:'John',
        lastname:'Doe',
        email:'john.doe@example.com'
    },
    {        
        id:2,
        firstname:'Mark',
        lastname:'Jae',
        email:'mark.jae@example.com'
    },
    {       
        id:3, 
        firstname:'Smith',
        lastname:'W',
        email:'smith.w@example.com'
    }

]);
})
.then(users=>{
    console.log('Users created:',users.map(user=>user.toJSON()));

    //Read all users
    return User.findAll();
})
.then(users=>{
    console.log('All users: ',JSON.stringify(users,null,2));

    //Update a user
    return User.update({email:'john.doe@test.com'},{
        where:{
            id:1
        }
    });
})
.then(()=>{
    console.log("User updated");

    //Delete a user
    return User.destroy({
        where:{
            id:3
        }
    });
})
.then(()=>{
    console.log('User deleted succcessfully');
})
.catch(err=>{
    console.log('Error: ',err);
})