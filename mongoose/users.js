const mongoose=require('mongoose');

//cntion str
const connectionString='mongodb://localhost:27017/userSchema'

mongoose.connect(connectionString)
.then(()=>{
    console.log('connection established');

//create schema
    const userSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:0
        }
    })
    const userDetails=mongoose.model('User',userSchema)

//user entries
    const userInfo=new userDetails({
        name:'Jarry',
        email:'jarry@test.com',
       
    })
    const saveUsers=userInfo.save();
    console.log('User are saved',saveUsers);

    //mongoose.connection.close();
})
.catch((err)=>{
    console.log('Err in establoshing connection',err)
})