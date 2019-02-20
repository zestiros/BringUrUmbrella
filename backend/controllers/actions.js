var axios=require('axios')

//Functions

var weatherTestId=(id)=>(id<700)?1:0;

module.exports={

weatherStateToday:(response)=>{
    for(let i=0;i<8;i++){
        if(weatherTestId(response.data.list[i].weather[0].id))
            return true    
    }
    return false
},

weatherStateTomorrow:(response)=>{
    for(let i=9;i<16;i++){
        if(weatherTestId(response.data.list[i].weather[0].id))
            return true    
    }
    return false
},

 userLocation : (url1, url2, lat,lon) => {
    let newUrl = url1 +'lat='+ lat +'&lon='+ lon + url2;
    return newUrl;
},	

getUmbrella:(lat,lon)=>{
    //build api URL with user zip
    const apiKey='6167870c339128307c81cd6eeac9c6ee';

    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
    
    const apiId = '&appid='+apiKey+'&units=metric';

    const apiUrl =baseUrl +'lat='+ lat +'&lon='+ lon + apiId;
    
    return axios.get(apiUrl)
}


}