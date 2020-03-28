async function getData(){
    const data = await fetch('https://ipapi.co/json/');
    const jData = await data.json();
    return jData;
};
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
}
getData()
    .then(Data => {
        console.log(Data);
        setupUi(Data);
    })
    .catch(Err => console.log(Err));