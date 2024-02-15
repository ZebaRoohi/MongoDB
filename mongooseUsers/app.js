const mongoose=require('mongoose');
const User=require('./models/users')

const connectionString='mongodb://localhost:27017/usersDB'

mongoose.connect(connectionString)
.then(()=>{
    console.log('Connection established')
    createUsers()
})
.catch((err)=>{
    console.log('Connection refused',err)
})

async function createUsers(){
    try{
        const newUsers=await User.create({
            name:'peter',
            email:'peter@test.com',
            password:'perter123'
        });
        console.log('User created:',newUsers)
    }catch(err){
        console.log('Error creating Users',err)
    }
}