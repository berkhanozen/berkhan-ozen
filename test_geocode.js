const req=require('request')

const geocode=(address,callback)=>{
    const mapUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiY3VidWtjdWVtaXIiLCJhIjoiY2wxZXFqeDd5MGR0NDNkcnRsNTQzOWFkayJ9.t2fh6Pn9OClsJpkcDR83pA"
    
    req({url:mapUrl,json:true},(error,{body})=>{
        if(error){
            //console.log("Connection error")
            callback("Unable to connect geociding services",undefined)
        }
        else if(body.features.length===0){
            //console.log("Unable to find location")
            callback("Unable to find location",undefined)
        }
        else {
            callback(undefined,{
                longitude:body.features[0].center[0],
                latitude: body.features[0].center[1],
                cityName: body.features[0].place_name
            })

            // const longitude=body.features[0].center[0]
            // const latitude=body.features[0].center[1]
            // const cityName=body.features[0].place_name

            //console.log(longitude+" "+latitude)
        }
    })
}

module.exports=geocode