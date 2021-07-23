const express=require("express");
const path = require("path");
const connectDB = require('./DB/Connection');
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
const Port = process.env.Port || 3000;
// const mongoose = require('mongoose');
const bodyparser=require("body-parser");
const User = require("./DB/User");
// mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});


// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String
// });

// const Contact = mongoose.model('Contact', contactSchema);

// express specific stuff 
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// pug specific Stuff 
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
// end points 7
app.get('/',(req,res)=>{
    const params={ }
    res.status(200).render('home.pug',params);
})
app.get('/about',(req,res)=>{
    const params={ }
    res.status(200).render('about.pug',params);
})
app.get('/services',(req,res)=>{
    const params={ }
    res.status(200).render('services.pug',params);
})
app.get('/contact',(req,res)=>{
    const params={ }
    res.status(200).render('contact.pug',params);
})
app.post('/contact',(req,res)=>{
    var mydata= new User(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to data base")
    }).catch(()=>{
    res.status(400).send("item wasn't saved to data base") });

    
})

// start the server 
app.listen(Port, ()=>{
        console.log(`the application started successfully on port ${Port}`)
})

