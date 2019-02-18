const fetch = require('node-fetch');
module.exports=(app)=>{
    /*
    let zipcode;

	app.post('/search-location', (req, res) => {

		zipcode = req.body.zipcode;

		if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
			res.redirect('/error');
		} else { 
			res.redirect('/current-weather');
		}
    })
    */
   
    let city='Beni-Mellal';

	app.get('/weather', (req, res) => {
		//build api URL with user zip
		const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';	
		const apiId = '&appid=6167870c339128307c81cd6eeac9c6ee&units=imperial';

		const userLocation = (url1, url2, city) => {

		   let newUrl = url1 + city + url2;
		   return newUrl;
		};	

		const apiUrl = userLocation(baseUrl, city, apiId);


		fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
            res.redirect('/error');
            console.log(err);
		});

	})

}