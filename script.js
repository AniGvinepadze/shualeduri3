// let longitudeP = document.querySelector(".longitude");
// let latitudeP = document.querySelector(".latitude");
// let weatherContainer = document.querySelector(".Weather-Container")

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=43.3569&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m";

// function weather(info) {
//   latitudeP.textContent = `Latitude: ${info.latitude}`;
//   longitudeP.textContent = `Longitude: ${info.longitude}`;

//   if(isDay){
//   sunImg.src ="Ellipse 30.png"
//   sunImg.alt = "sun"
//   }else{
//     moonImg.src ="Group 1214.png"
//     sunImg.alt = "moon"
//   }
// }

fetch(url, { method: "GET" })
  .then((info) => {
    if (info.status === 200) {
      return info.json();
    } else {
      console.log("Its an error");
    }
  })
  .then((infodata) => {
    console.log(infodata);
    
    // if (infodata.current.is_day === 1){
    //     const weatherimg = document.querySelector(".sunimg")
    //     weatherimg.src = "Ellipse 30.png"
    // }else{
    //     const moonimg = document.querySelector(".moonimg")
    //     moonimg.src = "Group 1214.png";
    // }

    if(infodata.current.is_day === 1){
        const sunimg = document.querySelector(".sunimg")
        sunimg.src = "Ellipse 30.png"
    }else{
        let moonimg = document.querySelector(".sunimg")
        moonimg.src = "Group 1214.png"
    }

    const temp = document.querySelector(".temperature")
    temp.textContent = ` ${infodata.current.temperature_2m}`
    
    if(infodata.current.temperature_2m <= -1){
        const todaysWeather = document.querySelector(".weatherimg")
      todaysWeather.src = "snow.png"
      
    }else if ( infodata.current.temperature_2m >= 11 &&
        infodata.current.temperature_2m <= 30){
            const todaysWeather = document.querySelector(".weatherimg")
            todaysWeather.src = "Union.png"
        }
        else if(infodata.current.temperature_2m >= 0 &&
            infodata.current.temperature_2m <= 10
        ){
            const todaysWeather = document.querySelector(".weatherimg")
         todaysWeather.src = "Group 1214 (1).png"
        }
    let longitudeP = document.querySelector(".longitude");
let latitudeP = document.querySelector(".latitude");


latitudeP.textContent = `Latitude: ${infodata.latitude}`;

longitudeP.textContent = `Longitude: ${infodata.longitude}`;


let windspeed = document.querySelector(".wind-speed")
windspeed.textContent = `${infodata.current.wind_speed_10m}`







//     const latitude = infodata.latitude
//     const longitude = infodata.longitude
//     const isDay =  infodata.current_units.is_day
    
//     if (infodata && infodata.latitude !== undefined && infodata.longitude !== undefined && infodata.isDay !== undefined){
//         weather(latitude, longitude, isDay)
//     } else{
//    console.log("something is error")
//     }

  });
