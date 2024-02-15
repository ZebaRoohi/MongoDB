const mongoose=require('mongoose');

//conn string
const connectionString=`mongodb+srv://batch30:fsdbatch@cluster0.2kmuect.mongodb.net/demo`
//con to string
mongoose.connect(connectionString)
.then(()=>{
    console.log('conn established');

//schema
    const userSchema=new mongoose.Schema({
        name:String,
        email:String,
        age:Number
    })
    const userModel=mongoose.model('User',userSchema);

//add entries
    const userInfo=new userModel({
        name:'John',
        email:'john@test.com',
        age:23
    })
   userInfo.save()
   .then((result)=>{
    console.log('User saved',result)
   })
   .catch((err)=>{
    console.log('Err in saving users',err)
   })

})
.catch((err)=>{
    console.log("Err in with mongoDb",err)
})