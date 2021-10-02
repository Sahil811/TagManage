/**
* This is the server file for Sociofy
* @author {{app_author}}
* @since {{app_date}}
*/
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import flash from 'connect-flash';
import passport from 'passport';
import cors from 'cors';
import ActivateRoutes from './routes';

const dotenv = require('dotenv');
const path = require('path')
dotenv.config({path: path.resolve('.env')})

const app = express();
// enable cors support
app.use(cors({
	origin: '*',
	methods: ['GET', 'POST'],
	allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-HTTP-Method-Override', 'Accept'],
	credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(flash());

// call this to activate routes or define inside the route directory
ActivateRoutes(app);

const port = 3000;

app.listen(port, () => console.log(`Backend is running on port ${port}`));
