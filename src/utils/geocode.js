const request = require('request');

const geocode = (address, callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibGFjb250cmVyYXM3NSIsImEiOiJjbGF1MGp4OHMwMXJ3M3VtcThjODA5ejc1In0.ZumfbwjhY6VhBl0vWvJO9g&limit=1`;

    request({
        url,
        json: true
    },(error, {body})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if (body.features.length === 0) {
            callback('Unable to find location!', undefined)
        }else{
            let {place_name : location, center} = body.features[0]
            callback(undefined, {
                location,
                latitude : center[1],
                longitude : center[0]
            })
        }
    })


}

module.exports = geocode