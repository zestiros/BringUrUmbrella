import express ,{Router} from 'express';  
var axios=require('axios')
var fetch = require('node-fetch');
const router=Router();

//test
const lat=32.3424;
const lon= -6.3758;

//Functions

var weatherTestId=(id)=>(id<700)?1:0;

var weatherStateToday=(response)=>{
    for(let i=0;i<8;i++){
        if(weatherTestId(response.data.list[i].weather[0].id))
            return true    
    }
}
var weatherStateTomorrow=(response)=>{
    for(let i=9;i<16;i++){
        if(weatherTestId(response.data.list[i].weather[0].id))
            return true    
    }
}

var userLocation = (url1, url2, lat,lon) => {
    let newUrl = url1 +'lat='+ lat +'&lon='+ lon + url2;
    return newUrl;
};	

var getUmbrella=(lat,lon)=>{
    //build api URL with user zip
    const apiKey='6167870c339128307c81cd6eeac9c6ee';

    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
    
    const apiId = '&appid='+apiKey+'&units=metric';

    const apiUrl = userLocation(baseUrl, apiId, lat,lon);
    
    return axios.get(apiUrl)
}




//Routes
router.get('/weather',(req,res)=>{
    getUmbrella(lat,lon).then(function (response) {
        var test=JSON.stringify({
            'today':weatherStateToday(response),
            'tomorrow':weatherStateTomorrow(response)
        })
        console.log(test)
        res.send(test) // now the data is accessable from here.
    }).catch(function (err) {
        console.log(err);
    });
    
})



export default router;