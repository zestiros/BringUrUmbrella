var axios=require('axios')

//Functions

var weatherTestId=(id)=>(id<700)?1:0;

export var weatherStateToday=(response)=>{
    for(let i=0;i<8;i++){
        if(weatherTestId(response.data.list[i].weather[0].id))
            return true    
    }
    return false
}
export var weatherStateTomorrow=(response)=>{
    for(let i=9;i<16;i++){
        if(weatherTestId(response.data.list[i].weather[0].id))
            return true    
    }
    return false
}

var userLocation = (url1, url2, lat,lon) => {
    let newUrl = url1 +'lat='+ lat +'&lon='+ lon + url2;
    return newUrl;
};	

export var getUmbrella=(lat,lon)=>{
    //build api URL with user zip
    const apiKey='6167870c339128307c81cd6eeac9c6ee';

    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
    
    const apiId = '&appid='+apiKey+'&units=metric';

    const apiUrl = userLocation(baseUrl, apiId, lat,lon);
    
    return axios.get(apiUrl)
}


