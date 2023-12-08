import key from "./key.js";

const weatherContainer = document.getElementById('weather-container')
const button = document.getElementById('button')
const input = document.querySelector('input')
const projectTitle = document.getElementById('title-project')

let temperatureDiv = document.createElement('div');
let humidityDiv = document.createElement('div')
function getInfo(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=fc24e715c40043d9a6b223122230812&q=${location}`, { mode: 'cors' })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let response = data;
            console.log(response)
            temperatureDiv.innerText = `Temperature: ${response.current.feelslike_c}°C/${response.current.feelslike_f}°F`
            humidityDiv.innerText = `Humidity: ${response.current.humidity}%`

        })
        .catch(function (err) {
            console.error(err)
        });
}

button.addEventListener('click', () => {
    temperatureDiv.classList.add('title', 'is-5', 'mb-5');
    humidityDiv.classList.add('title', 'is-5', 'mb-5');
    weatherContainer.appendChild(temperatureDiv)
    weatherContainer.appendChild(humidityDiv)
    if (!input.value) {
        return alert("Please enter a location 🙂")
    } 
    getInfo(input.value);
    projectTitle.innerText = `🌞 Weather of: ${input.value}`
})
