const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://sarthakroy2002:root@cluster0.8hik3.mongodb.net/test',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(ok =>console.log("Connected to Database"))
.catch(err =>console.log(err))

module.exports = mongoose;