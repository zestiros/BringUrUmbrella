import Weather from '../models/weather'
import weatherFunctions from './actions'
import cities from '../assets/city.list.min.json'

const getCoord = (i) => {
    return {
        'lat': cities[i].coord.lat,
        'lon': cities[i].coord.lon
    }
}


export const test = (req, res) => {
    const x = JSON.parse(req.body.location)
    const lat = x.coords.latitude
    const lon = x.coords.longitude
    weatherFunctions.getUmbrella(lat, lon).then(function (response) {
        var test = JSON.stringify({
            'today': weatherFunctions.weatherStateToday(response),
            'tomorrow': weatherFunctions.weatherStateTomorrow(response)
        })
        console.log(response.data.city)
        res.send(response.data.city) // now the data is accessable from here.
    }).catch(function (err) {
        console.log(err);
    });
}


export const getWeatherStateClient = (req, res) => {

    //find a location weather based on the geo coordinates
    Weather.find({
        'city.coord.lat': Number(req.body.lat), //we'll replace it after we finish the frontend 
        'city.coord.lon': Number(req.body.lon)
    },
        function (err, weather) {
            if (err) throw err
            //Print city name
            res.send(weather)
        }
    )

};


/*
export const test=function(req,res){
    const x=JSON.parse(req.body.location)
    console.log(x)
}
*/
