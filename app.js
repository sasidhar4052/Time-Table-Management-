const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://localhost:27017/";

const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(authRoutes);

app.use(userRoutes);

app.use(adminRoutes);

mongoose.connect(MONGODB_URI)
    .then(result=>{
        console.log('connected');
        app.listen(4000);
    })
    .catch(err=>console.log(err));