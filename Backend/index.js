const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const errorController = require('./controllers/error');


//import { express } from 'express';
//import { bodyParser} from 'body-parser';
//import {authRoutes} from './routes/auth';
//import {errorController} from './controllers/error';

const app = express();
const  port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.use('/auth', authRoutes);

app.use(errorController.get404);
app.use(errorController.get500);
console.log(app.route);

app.listen(port,()=>console.log(`Listening on port ${port}`));

