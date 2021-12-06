const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema ={
    name:String,
    age:Number,
    health:String
}
const mydata = mongoose.model('Cat',schema);

const kitty = new mydata({name:'Zildjian'});
kitty.save().then(()=>console.log('testmeow'));
const kitty1 = new mydata({name:"zhang2",age:1,health:"good"});
kitty1.save().then(()=>console.log("new schema weited"))
mydata.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})