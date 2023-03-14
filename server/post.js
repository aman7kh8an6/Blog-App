import express from 'express';
const app = express();
// app.use(cors())

app.use(express.json())

export const writePost = (req,res) =>{
    const post_detail = req.body.createPost.username;
    console.log(post_detail);
    var sql = "insert into blog.posts (username, email, password) values ?"
    var values = [ [username, email, password] ];
    
    con.query(sql, [values], (err,result)=>{
        if (err) throw err; 
        console.log("Number of records inserted: " + result.affectedRows); 
    });
}
