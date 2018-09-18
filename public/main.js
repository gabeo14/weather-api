

const searchWeather = () => {
  let searchInput = document.querySelector('.search-city')
  let citySearch = searchInput.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&appid=56318bdcff51b6ee1860d2579e4c01b8`)
    .then(response => {
      return response.json()
    }).then(weatherAttributes => {
      let weatherOnPage = document.querySelector('.weather-display')

      let weatherLiName = document.createElement('li')
      weatherLiName.textContent = weatherAttributes.name
      weatherOnPage.appendChild(weatherLiName)
      console.log(weatherAttributes.name)

      let weatherLiTemp = document.createElement('li')
      weatherLiTemp.textContent = weatherAttributes.main.temp
      weatherOnPage.appendChild(weatherLiTemp)
      console.log(weatherAttributes.main.temp)

      weatherAttributes.weather.forEach(weatherCondition => {
        let weatherLi = document.createElement('li')
        weatherLi.textContent = weatherCondition.main
        weatherOnPage.appendChild(weatherLi)
        console.log(weatherCondition.main)
      })
})
}

const main = () => {
  document.querySelector('button').addEventListener('click', searchWeather)
}

document.addEventListener('DOMContentLoaded', main)