import mongoose from 'mongoose';
import Weather from './models/weather';


const weathers = [
    {
        id: 1,
    },
    {
        id: 2,
    },  
]
// Connect to MongoDB
mongoose.connect('mongodb://localhost/weather',{useNewUrlParser:true});

// Go through each city
weathers.map(data => {
  // Initialize a model with weather data
  const weather = new Weather(data);
  // and save it into the database
  weather.save();
});