class WeatherList {
  constructor (parentSelector) {
    this.parent = document.querySelector(parentSelector)
  }

  addCondition (parent, className, word) {
    let _newLi = document.createElement('li')
    _newLi.classList.add(className)
    _newLi.textContent = `The ${className} is ${word}`
    parent.appendChild(_newLi)
  }
}

class WeatherApi {
  constructor (json) {
    // save json into the state
    this.json = json
  }

  doIt (json) {
    const weatherList = new WeatherList('.weatherconditions')
    weatherList.addCondition(parent, 'temp', json.main.temp)
    weatherList.addCondition(parent, 'high', json.main.temp_max)
    weatherList.addCondition(parent, 'low', json.main.temp_min)
    weatherList.addCondition(parent, 'humidity', json.main.humidity)
  }
}

let parent = document.querySelector('.weatherconditions')

const main = () => {
  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')

  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value

    // 5 get the value from the input field and request that data be 'fetched' by the API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=imperial&appid=56318bdcff51b6ee1860d2579e4c01b8`
    )
      .then(response => {
        return response.json()
      })
      .then(json => {
        const pass = new WeatherApi(json)
        pass.doIt(json)
      })
  })
}

document.addEventListener('DOMContentLoaded', main)
