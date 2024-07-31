
const express = require ('express');
const BlogController = require('../Controllers/Blogs_controller')
const authorise = require('../middleware/authorise')

const blogrouter = express.Router();


blogrouter.post('/addblog',BlogController.addBlog)

blogrouter.get('/getBlog',BlogController.getBlog);

blogrouter.put('/updateBlog/:id',BlogController.updateBlog);

blogrouter.delete('/deleteBlog/:id',BlogController.deleteBlog);

blogrouter.get('/getBlogbyId/:id',BlogController.getBlogbyId);

blogrouter.post('/:id/addcomments',authorise,BlogController.addComments);

blogrouter.get('/:id/comments',BlogController.getComments);



module.exports = blogrouter;