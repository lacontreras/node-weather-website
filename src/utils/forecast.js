const request = require('request');

const forecast = (latitude, longitude, callback) => {
    let url = `http://api.weatherstack.com/current?access_key=b1048a5af6714421b76f3084c3cd6463&query=${latitude},${longitude}&units=m`

    request({
        url,
        json: true
    }, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if (body.error) {
            callback('Unable to find location!', undefined)
        }else{
            let {weather_descriptions, temperature, feelslike, humidity} = body.current
            // let location = response.body.location.name;
            // let description = response.body.current.weather_descriptions[0];
            // let current = response.body.current.temperature;
            // let feelsLike = response.body.current.feelslike;
            callback(undefined, `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} out. The humidity is ${humidity}%`)
        }
    })
}

module.exports = forecast