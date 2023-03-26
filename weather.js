

   const keyId = "362909f0dd0d4ef676e2c050d99d6720";
   
   async function getWeatherData(city){
   const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyId}&units=metric`);
    const data = await result.json();
    console.log(data)
    return weatherData(data);
    
   }
   
  
 let weatherData = async (data) =>{
   
    document.getElementById("location").innerHTML = data.name+",";
    
   
    document.getElementById("temp").innerHTML =  `${data.main.temp}  &#8451;`;
    
    document.getElementById("country").innerHTML = data.sys.country;
    document.getElementById("wtype").innerHTML = data.weather[0].description;
    document.querySelector("#image").src =  `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
 }

 

let form = document.querySelector("form")

form.addEventListener(
    "submit",
    function(event){
        getWeatherData(search.value)
        event.preventDefault();
    }
)