let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

async function getwheatherdata(city) {
  let res_data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90 `
  );
  var res = await res_data.json();
  //   console.log(res);
  let cityValue = cityRef.value;
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  } else {
    //console.log(res);
    console.log(res.weather[0].icon);
    console.log(res.weather[0].main);
    console.log(res.weather[0].temp);
    console.log(res.name);
    console.log(res.main.temp_min);
    console.log(res.main.temp_max);
    result.innerHTML = `
        <h2>${res.name}</h2>
        <h4 class="weather">${res.weather[0].main}</h4>
        <h4 class="desc">${res.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${res.weather[0].icon}.png">
        <h1>${Math.round(res.main.temp - 273.15)} &#176;</h1> 
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${Math.round(
                  res.main.temp_min - 273.15
                )}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${Math.round(
                  res.main.temp_max - 273.15
                )}&#176;</h4>
            </div>
        </div>
    `;
  }
}
function getData() {
  getwheatherdata(cityRef.value);
}
