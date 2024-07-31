
const Blog = require('../models/Blogs_model');

// function for Add Blogs

async function addBlog(req,res){
    console.log("req.body GetBlogs****",req.body);
    try{
        const blog = new Blog(req.body);  

        const result = await blog.save();
        res
            .status(200)
            .send({message:"Blog added Successfully",task: result});
    } catch(error){
        res.status(500).send(error);
    }
}

// // function for get all Blogs
async function getBlog(req, res) {
    console.log("**------**")
    try {
        result = await Blog.find();
        console.log(result);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}


// // function for get by id
async function getBlogbyId(req, res) {
    console.log(req.params.id);
    ID = req.params.id;
    try {
        result = await Blog.findById(req.params.id);
        console.log(result);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

// function for delete application
async function deleteBlog(req, res) {
    console.log(req.params.id);
    ID = req.params.id;
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if(!blog){
            res.status(400).send({message:"Blog Not Found"});
        }
        res.send({task:blog,message:"Blog Deleted"})
    } catch (error) {
        res.status(500).send(error);
    }
}


// // function for update application

async function updateBlog(req, res) {
    console.log("updatedBlog req.params.id=",req.params.id);
    console.log("updatedBlog req.body",req.body);


    try{
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        if (!blog){
            res.status(400).send({message:"Blog no found"});
        }
        res.status(200).send({message: "Blog updated", task: blog});
    }catch(error){
        res.status(500).send(error);
    }
}

async function addComments(req,res){
    try {
       const id = req.params.id;
    //    console.log(req.params.id);
       const uId = req.user.id;
    //    console.log(req.user.id);
       const newcomment = req.body.Note;
        console.log(id,uId,newcomment);
        const result = await Blog.findById(id);
        // console.log(result);
        if(!result){
            res.status(400).send({message : "Blogs not found"})
        }
        result.Comments.push({u_id : uId, Note : newcomment})
        await result.save();
        console.log(result.Comments);

        res.status(200).send({message : "Comments Added Successfully"})

    } catch (error) {
        res.status(500).send(error);
    }
}

async function getComments(req, res) {
    const id = req.params.id;
    console.log(req.params.id)
    try {
       
        const blog = await Blog.findById(id).populate('Comments.Note'); 
        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send(blog.Comments);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    addBlog,
    getBlog,
    deleteBlog,
    updateBlog,
    getBlogbyId,
    addComments,
    getComments
}
