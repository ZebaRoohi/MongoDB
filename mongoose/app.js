const mongoose=require('mongoose');
const { Schema } = mongoose;

//add connection string
const connectionString='mongodb://localhost:27017/blogSchema';

//connect to MongoDb

mongoose.connect(connectionString)
    .then(async()=>{
        console.log('Connection established');


//Define Schemas.
    const blogSchema = new Schema({
        title: String, // String is shorthand for {type: String}
        author: String,
        body: String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
        votes: Number,
        favs: Number
        }
    });

    const Blog=mongoose.model('Blog',blogSchema)

//blog entries
    const newBlog=new Blog({
        title:'Sample Blog post',
        author: 'Innomatics',
        body: 'Example of Blogs',
        comments: [{ body: 'Blog posts', date: new Date() }],
        hidden: true,
        meta: {
        votes: 10,
        favs: 5
        }

    });

    const saveBlog=await newBlog.save();
    console.log('New blog post created',saveBlog);
//clse connection
   mongoose.connection.close()
})
.catch((err)=>{
    console.log('Err in establishing conentiong to MongoDb',err)
})