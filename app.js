async function getData(){
    const data = await fetch('http://ip-api.com/json');
    const jData = await data.json();
    return jData;
};
const setupUi = (Data)=>{
    const {country,city,zip,lat,lon,isp,query} = Data;
    //setting main Card
    document.getElementById("ipAddress").innerHTML = `Your ip Address: ${query}`;
    document.getElementById("country").innerHTML = `Your country: ${country}`;
    document.getElementById("isp").innerHTML = `Your Isp: ${isp}`;
    //setting secondary Card
    document.getElementById("city").innerHTML = `City: ${city}`;
    zip === `` ? document.getElementById("zipCode").innerHTML = `Your Zip-code is not Available`:document.getElementById("zipCode").innerHTML = `Zip-code: ${zip}`; 
    document.getElementById("lat").innerHTML = `Lat: ${lat}`;
    document.getElementById("lon").innerHTML = `Lon: ${lon}`;
}
getData()
    .then(Data => {
        console.log(Data);
        setupUi(Data);
    })
    .catch(Err => console.log(Err));