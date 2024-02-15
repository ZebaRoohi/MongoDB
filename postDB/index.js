const mongoose=require('mongoose')
const  postService=require('./services/postServices')

mongoose.connect('mongodb://localhost:27017/postDB')

//performing crud op

async function performOperation(){
    try{
        //create new post
        const newPost=await postService.createPost('Sample Post','This is a blog post');
        console.log('Post created',newPost);


    //get post
        const allPost=await postService.getPost();
        console.log('All posts',allPost);

    //getting id
        const postIdToUpdate=newPost._id;
        console.log('post id',postIdToUpdate);

    //geting specific id
        const specifId=await postService.getPostById(postIdToUpdate)
        console.log('Specific id is',specifId);

    //update and get id
        const updatePost=await postService.updatePostById(postIdToUpdate,{title:'Updated Post'});
        console.log('Updated post',updatePost)
    
        //delete by id
        const deleteId=await postService.deletePostById(postIdToUpdate);
        console.log('deleted id',deleteId);

    }
    catch(err){
        console.log('Error in crud ',err)
    }
}
performOperation()