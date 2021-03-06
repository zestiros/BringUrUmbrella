import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './routes'
import bodyParser from 'body-parser';


// Connect to MongoDB
mongoose.connect('mongodb://localhost/weather',{useNewUrlParser:true});

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use v1 as prefix for all API endpoints
app.use('/api/v1',router);



const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});