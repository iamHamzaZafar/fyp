import express from 'express';
import dotenv from 'dotenv'
import databaseConnection from './db/connectDb.js';


dotenv.config();




databaseConnection().then(()=>{
    console.log('Database connected') ;
}) ;
