const getWeather=async(city)=>{
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'65949bbecbmsh04f71089e6189dcp1eec44jsnc72b10f8aa03',
		'X-RapidAPI-Host':'the-weather-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	if(result.success)
	{	
		cityFound = result.data
		tempFound = result.data
		windFound = result.data
		humiFound = result.data
		weathFound = result.data
		timeFound = result.data
		aqiFound = result.data
		newData()
		console.log('@@@ cityFound =>',cityFound)
	}
	else{
		alert('City was not found')
	}
} catch (error) {
	console.error(error);
}

}

