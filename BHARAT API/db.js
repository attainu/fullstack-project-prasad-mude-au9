var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BHARAT',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(()=>{
    console.log("connection successfully....")
  })
  .catch((err)=>{
    console.log(err)
  })