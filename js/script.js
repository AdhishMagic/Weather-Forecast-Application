document.getElementById("searchButton").addEventListener("click", function () {
    searchWeather();
});

document.getElementById("cityInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});

function searchWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "30486d7426ef93fb3b6790d35a80c8bf";
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            if (data.success === false) {
                throw new Error(data.error.info);
            }
            displayWeather(data);
        })
        .catch((error) => {
            document.getElementById("weatherResult").innerHTML =
                `<p class="text-danger text-center">City not found. Please try again</p>`;
        });
}

function displayWeather(data) {
    const weatherHtml = `
        <div id="weather">
        <h3>${data.location.name}, ${data.location.country}</h3>
        <p><strong>Temperature:</strong> ${data.current.temperature} °C</p>
        <p><strong>Condition:</strong> ${data.current.weather_descriptions[0]}</p>
        <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.current.wind_speed} km/h</p>
        </div>
    `;
    document.getElementById("weatherResult").innerHTML = weatherHtml;
}

let isFirstGradient = true;

document.getElementById('bgButton').addEventListener('click', function () {
    if(isFirstGradient){
        document.body.style.background = 'linear-gradient(to right, rgb(87, 0, 43), rgb(58, 0, 27))';
        document.body.style.color = 'rgb(255, 143, 236)';

    } else {    
        document.body.style.background = 'linear-gradient(to right, rgb(255, 230, 253), rgba(255, 160, 234, 0.712))';
        document.body.style.color = 'black';
    }
    isFirstGradient = !isFirstGradient;
});