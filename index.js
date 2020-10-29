const express = require('express');
const app = express();

app.use(express.json())
const connect=require('./connection/connect')
const db = require('./model/item')


app.post('/post',(req,res)=>{
    let id = req.params.id
    db.find()
    .then((data1)=>{
        var data = new db({
            id:data1.length+1,
            name:req.body.name,
            age:req.body.age
        })
        data.save()
        .then((data1)=>{
            console.log(data1)
            res.send(data1)
        })
    })
    
})
// for get the data
app.get('/get',(req,res)=>{
    db.find()
    .then((data1)=>{
        res.send(data1)
        console.log(' we got the data  >>>>%%%%%')
    })
})
// for getting the data id-wise
app.get('/get/:id',(req,res)=>{
    let id = req.params.id
    db.find()
    .then((data1)=>{
        res.send(data1[id-1])
    })
})

// })
// for updating the particular data
app.put('/put/:id',(req,res)=>{
    let updated_data = db.updateOne({id:req.params.id},{$set:{
        name:req.body.name,
        age:req.body.age
    }})
    .then((data1)=>{
        res.send('data updates')
        console.log('data has been updated---')
    })
})

// for deleeting the particular the data
app.delete('/delete/:id',(req,res)=>{
    let deleted_data=db.deleteOne({id:req.params.id})
    .then((data1)=>{
        res.send('data has been deleted')
        console.log('data has beem deleted')
    })
})

// for listening the data
app.listen(8000,()=>{
    console.log('server started @ 8000 port number$$$$$$')
})