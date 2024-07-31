const mongoose = require('mongoose');

const BlogsSchema = mongoose.Schema({
    title: { type: String },
    content: { type: String },
    Comments : [{
        u_id : {type : mongoose.Schema.Types.ObjectId, ref :'User'},
        Note : {type : String}
    }]
})

const Blogs = mongoose.model("blog", BlogsSchema);
module.exports = Blogs;

// {
//    "title":"TCS"
//       "position":"HR Manager"
//       "status":"Fresher"
//       "Date_applied":"21-11-2023"
// }


