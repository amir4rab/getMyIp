async function getData(){
    const data = await fetch('https://ipapi.co/json/');
    const jData = await data.json();
    return jData;
}
async function getMap(longitude,latitude){
    const data = await fetch(`https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/${longitude},${latitude},13/1280x1280?access_token=pk.eyJ1IjoiYW1pcjAweCIsImEiOiJjazhiYWc4MHgwOXlzM2RvM2QzaGowanczIn0.5V1QbKuJ02Gtr7AP6YmX-A`);
    const jData = await data;
    console.log(jData);
    return data;
}
const setupUi = (Data)=>{
    const {country_name,city,postal,latitude,longitude,org,ip} = Data;
    //setting main Card
    document.getElementById("ipAddress").innerHTML = `Your ip Address: ${ip}`;
    document.getElementById("country").innerHTML = `Your country: ${country_name}`;
    document.getElementById("isp").innerHTML = `Your Isp: ${org}`;
    //setting secondary Card
    document.getElementById("city").innerHTML = `City: ${city}`;
    postal === null ? document.getElementById("zipCode").innerHTML = `Your Zip-code is not Available`:document.getElementById("zipCode").innerHTML = `Zip-code: ${postal}`; 
    document.getElementById("lat").innerHTML = `Latitude: ${latitude}`;
    document.getElementById("lon").innerHTML = `Longitude: ${longitude}`;
    //setting map image
    getMap(longitude,latitude)
        .then(Data => document.getElementById("map").src = Data.url)
        .catch(Err => console.log(Err));
}
getData()
    .then(Data => {
        console.log(Data);
        setupUi(Data);
    })
    .catch(Err => console.log(Err));
