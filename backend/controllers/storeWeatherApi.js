const cities=require('../assets/city.list.min.json')
const weatherFunctions=require('./actions')
const mongoose=require('mongoose')
const CronJob = require('cron').CronJob;

//Connect to MongoDB
mongoose.connect('mongodb://localhost/weather',{useNewUrlParser:true});

// Define weather schema
var weatherSchema = new mongoose.Schema({
  
    "city":{
      "id":{type: Number , unique:true},
      "name":{type:String},
      "coord":{
      "lat":{type:Number},
      "lon":{type:Number}
      },
      "country":{type:String}
      }
  },{ strict: false });
  
  
//  Mongoose model
const Weather=mongoose.model('weather', weatherSchema);

//GetCoordinates of a city
const getCoord=(i)=>{
    return {
        'lat' : cities[i].coord.lat,
        'lon' : cities[i].coord.lon
    }
}

var cityId=0;
getWeatherStateAPI=function(){
        console.log(cityId)
        
        var lat=getCoord(cityId).lat
        var lon=getCoord(cityId).lon

        weatherFunctions.getUmbrella(lat,lon).then(function (response) {
            
            Weather.findOneAndUpdate({ 
                        'city.coord.lat': Number(response.data.city.coord.lat), //we'll replace it after we finish the frontend 
                        'city.coord.lon':Number(response.data.city.coord.lon)
                        },
                        response.data,
                        {upsert:true}, function(err){
                            if (err) return console.log(err)
                            return console.log('success')
                        } )
        }).catch(function (err) {
            console.log(err);
        });

        //pass on the next city in the list
        cityId++
}   


const job = new CronJob('*/2 * * * * *', function() {
	getWeatherStateAPI()
});

job.start();