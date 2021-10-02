/**
 * this contains the database connection specification
 * @author Sahil Siddiqui
 * @since 2 octomber 2021
 */
 import mongoose from 'mongoose';
 import { Promise as es6Promise } from 'es6-promise';
 import { mongoConnectionString } from '../constants';
 
 const useNewUrlParser = true;
 //const useCreateIndex = true;
 const useUnifiedTopology = true;
 mongoose.Promise = es6Promise;

 mongoose.connect(mongoConnectionString, {
     useNewUrlParser, useUnifiedTopology,
 }, (err) => {
     console.log(mongoConnectionString)
     if (err) {
         console.log('mongo connection err', err);
     } else {
        console.log('database connected');
     }
 });
 
 export default mongoose;
 