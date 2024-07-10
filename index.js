const express= require('express');
const app=express();
const cors = require('cors');
const port= process.env.PORT||5000;
// relation between two another side  { (3,6) line  lage...} 
app.use(cors());

// solutation **express post body undefind**
 app.use(express.json())

const users=[
    {id:1,name:'rohim',email:'rohim@yehoo.com'},
    {id:2,name:'korim',email:'korim@yehoo.com'},
    {id:3,name:'jodu',email:'rohim@yehoo.com'},
    {id:4,name:'modu',email:'modu@yehoo.com'},
    {id:5,name:'kodu',email:'kodu@yehoo.com'},
    {id:6,name:'mimi',email:'mimi@yehoo.com'},
    {id:7,name:'mariya',email:'mariya@yehoo.com'},
    {id:8,name:'marium',email:'marium@yehoo.com'},
    {id:9,name:'manik',email:'manik@yehoo.com'},
]
app.get('/',(req,res)=>{
    res.send('search user');
})
  
    app.get('/users',(req,res)=>{
        res.send(users);
    })


    app.get('/user/:id',(req,res)=>{
        const id=parseInt(req.params.id);
        const user=users.find(u=>u.id===id);
        res.send(user);

    })

    app.post('/user',(req,res)=>{
        console.log('request',req.body);
        const user=req.body;
        user.id=users.length+1;
        users.push(user);
        res.send(user);
    }
    )


app.listen(port,()=>{
    console.log('listening to port',port);
})