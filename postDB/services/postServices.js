const Post=require('../models/postModels');

async function createPost(title,content){
    const newPost=new Post({title,content});
    await  newPost.save();
    return newPost;
}
//get all post
async function getPost(){
    return await Post.find();
}

//get post by id
async function getPostById(postId){
    return await Post.find(postId)
}
//find and update
async function updatePostById(postId,updateId){
    return await Post.findByIdAndUpdate(postId,updateId,{new:true})//callback
}
//delete
async function deletePostById(postId){
    return await Post.findByIdAndDelete(postId)
}
module.exports={
    createPost,
    getPost,
    getPostById,
    updatePostById,
    deletePostById
}