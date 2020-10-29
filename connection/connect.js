const mongoose = require('mongoose')
mongoose.connect(' mongodb://127.0.0.1:27017/complete',{
    useNewUrlParser: true,useUnifiedTopology: true
})

.then(()=>{
    console.log("connected databases")
})

.catch((err)=>{
    console.log(err)
})