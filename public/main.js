
// class domLogic {
//   constructor(parentSelector) {
//     this.parent = document.querySelector(parentSelector)
//   }

//   addWeather (message) {
//     const msg = document.createElement('ls')
//     msg.textContent = message
//     msg.classList.add('weather-message')
//     this.parent.appendChild(msg)
//   }
//new behaviors here




//new behaviors here
//}




// const searchWeather = () => {
//   let searchInput = document.querySelector('.search-city')
//   let citySearch = searchInput.value
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&appid=56318bdcff51b6ee1860d2579e4c01b8`)
//     .then(response => {
//       return response.json()
//     }).then(weatherAttributes => {
//       let weatherOnPage = document.querySelector('.weather-display')

//       let weatherLiName = document.createElement('li')
//       weatherLiName.textContent = weatherAttributes.name
//       weatherOnPage.appendChild(weatherLiName)
//       console.log(weatherAttributes.name)

//       let weatherLiTemp = document.createElement('li')
//       weatherLiTemp.textContent = weatherAttributes.main.temp
//       weatherOnPage.appendChild(weatherLiTemp)
//       console.log(weatherAttributes.main.temp)

//       weatherAttributes.weather.forEach(weatherCondition => {
//         let weatherLi = document.createElement('li')
//         weatherLi.textContent = weatherCondition.main
//         weatherOnPage.appendChild(weatherLi)
//         console.log(weatherCondition.main)
//       })
// })
// }

let parent = document.querySelector('.weatherconditions')

const addCondition = (parent, className, word) => {
  let _newLi = document.createElement('li')
  _newLi.classList.add(className)
  _newLi.textContent = word
  parent.appendChild(_newLi)
}
// const conditions = (humidity, temp, dayHigh, dayLow) => {

//   let tempLI = document.createElement('li')
//   tempLI.textContent = `it is currently ${temp}°F`
//   weather.appendChild(tempLI)
 
//   let conditionsLI = document.createElement('li')
//   conditionsLI.textContent = `with a humidity of ${humidity}%` 
//   weather.appendChild(conditionsLI)
 
//   let highLI = document.createElement('li')
//   highLI.textContent = `today's high is ${dayHigh}°F`
//   weather.appendChild(highLI)
 
//   let lowLI = document.createElement('li')
//   lowLI.textContent = `today's low is ${dayLow}°F`
//   weather.appendChild(lowLI)
//  }



const main = () => {

  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')
 
  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value
 
    // 5 get the value from the input field and request that data be 'fetched' by the API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=imperial&appid=56318bdcff51b6ee1860d2579e4c01b8`)
      .then(response => { return response.json(); }).then(json => {
        addCondition(parent, 'temp', json.main.temp)
        addCondition(parent, 'high', json.main.temp_max)
        addCondition(parent, 'low', json.main.temp_min)
        addCondition(parent, 'humidity', json.main.humidity)
        


        // const humidity = json.main.humidity
        // const temp = json.main.temp
        // const dayHigh = json.main.temp_max
        // const dayLow = json.main.temp_min
        // weather.textContent = ''
        // conditions(humidity, temp, dayHigh, dayLow)
      }
      )
  })
}

document.addEventListener('DOMContentLoaded', main)
