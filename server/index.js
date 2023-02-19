import express from 'express';
import mysql from 'mysql';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())
const PORT = 5000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aman@1998"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.post('/register',(req,res)=>{
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    console.log('Register', username);
    var sql = "insert into blog.user (username, email, password) values ?"
    var values = [ [username, email, password] ];
    
    con.query(sql, [values], (err,result)=>{
        if (err) throw err; 
        console.log("Number of records inserted: " + result.affectedRows); 
    });
});

app.post('/login', (req,res) =>{
    var username = req.body.username;
    var password = req.body.password;
    console.log('login',username);
    var sql = "select * from blog.user where username = ?"
    var value = username;
    con.query(sql,[value],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length == 0){
            res.send("User is not Registered");
            console.log("User not Registered!");
        }else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get('/',(req,res) =>{
    var sql = "select * from blog.user";
    con.query(sql, (err,result)=>{
        if (err) throw err;  
        console.log(result); 
        res.send(result)
    });
})
app.listen(PORT, ()=>{
    console.log("Hi");
})