
const API_KEY = "965141151fb0422abe0b7f2d694c7a14";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `Today's Weather?
                            ${data.weather[0].main} ${data.main.temp}℃`;
    });
}
function onGeoError(){
    alert("Cnat find you. No werther for you")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);