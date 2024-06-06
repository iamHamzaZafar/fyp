import mongoose from 'mongoose';
import {dbName} from '../constant.js';


const databaseConnection = async () =>{

    try {

     const connection =    await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);
     console.log("MongoDb connection Successfull!!!!!!!!!!!!") ;
        
    } catch (error) {
        console.log("Mongo DB Connection failed " , error) ;
        
    }

}

export default databaseConnection;