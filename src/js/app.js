'use strict'
import Spinner from './components/Spinner.js'
import Toast from './components/Toast.js'
import countryList from './components/CountryList.js'
import config from './config.js'

const els = {
  parentEl: document.querySelector('.app'),
  input: document.querySelector('.input'),
  btn_search: document.querySelector('.btn-search'),
  btn_back: document.querySelector('.btn-back'),
  section1: document.querySelector('.section__search'),
  section2: document.querySelector('.section__info'),
  spinner: document.querySelector('.spinner'),
  weather: document.querySelector('.weather'),
  weather__city: document.querySelector('.weather__city'),
  weather__img: document.querySelector('.weather__img'),
  weather__temperature: document.querySelector('.weather__temperature'),
  weather__description: document.querySelector('.weather__description'),
  weather__additional: document.querySelector('.weather__additional'),
  weather__info: document
    .querySelector('.weather__additional')
    .querySelectorAll('.weather__info'),
  weather__sunrise: document
    .querySelector('.weather__additional--2')
    .querySelectorAll('.weather__info')[0]
    .querySelector('.weather__info--1'),
  weather__sunset: document
    .querySelector('.weather__additional--2')
    .querySelectorAll('.weather__info')[1]
    .querySelector('.weather__info--1'),
}

function clearInput() {
  els.input.value = ''
}

function injectInfo(data) {
  const climates = {
    clouds: 'Nublado',
    clear: 'Céu Limpo',
    fog: 'Névoa',
    mist: 'Neblina',
    haze: 'Névoa',
    rain: 'Chuvoso',
    drizzle: 'Garoa',
  }

  els.weather__img.src = `${data.weather}.png`
  els.weather__temperature.textContent = data.temperature + '°'
  els.weather__city.textContent = data.name + ' / ' + data.country
  els.weather__description.textContent = climates[data.weather]

  for (let item in data.additionals) {
    const el = els.weather__additional.querySelector('.' + item)
    el.querySelector('.weather__info--1').textContent = data.additionals[item]
  }

  els.weather__sunrise.textContent = data.sunrise
  els.weather__sunset.textContent = data.sunset
}

function unfocusSection1() {
  els.section1.classList.toggle('shrink')
}

function unfocusSection2() {
  els.section2.classList.toggle('hidden')

  setTimeout(() => {
    els.section2.classList.toggle('overlay')
  }, 1000)
}

function renderSection1() {
  unfocusSection2()

  setTimeout(() => {
    els.section1.classList.toggle('shrink')
  }, 500)
}

function renderSection2(data) {
  injectInfo(data)

  els.section2.classList.toggle('overlay')

  els.section2.classList.toggle('hidden')
}

function renderSpinner() {
  els.spinner.classList.toggle('hidden')
}

function rotateSpinner() {
  els.spinner.classList.toggle('rotating')
}

function hideSpinner() {
  renderSpinner()
  setTimeout(() => {
    rotateSpinner()
  }, 1000)
}

function renderToast(msg) {
  const app = document.querySelector('.app')

  app.insertAdjacentHTML('beforeend', Toast(msg))

  setTimeout(() => {
    document.querySelector('.toast').remove()
  }, 4500)
}

async function getNewWeather(city) {
  function toCelsius(value) {
    return Math.round(value - 273.15)
  }

  function toTime(seconds) {
    let date = new Date(null)
    date.setSeconds(seconds)
    return date.toISOString().substr(11, 5)
  }

  const url = config.api + city + '&appid=' + config.key

  try {
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      //  CITY NAME - COUNTRY NAME

      const fulldata = {
        name: data.name,
        country: countryList[data.sys.country],
        temperature: toCelsius(data.main.temp).toString(),
        weather: data.weather[0].main.toLowerCase(),
        sunrise: toTime(data.sys.sunrise),
        sunset: toTime(data.sys.sunset),
        additionals: {
          feelsLike: toCelsius(data.main.feels_like).toString() + '°',
          minTemp: toCelsius(data.main.temp_min).toString() + '°',
          maxTemp: toCelsius(data.main.temp_max).toString() + '°',
          wind: data.wind.speed.toString() + 'km/h',
          humidity: data.main.humidity.toString(),
          visibility: data.visibility.toString(),
        },
      }

      return fulldata
    } else {
      return false
    }
  } catch (e) {
    console.log('Error on loading data')
  }
}

function waitForWeather() {
  renderSpinner()
  rotateSpinner()
}

function newQuery() {
  const city = els.input.value

  clearInput()
  els.input.blur()

  if (!city) return

  waitForWeather()

  getNewWeather(city).then((data) => {
    setTimeout(() => {
      hideSpinner()
      if (data) {
        unfocusSection1()
        renderSection2(data)
      } else {
        renderToast('Não encontrado')
      }
    }, 1000)
  })
}
els.input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') newQuery()
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (els.section2.classList.contains('overlay')) renderSection1()
  }
})
els.btn_search.addEventListener('click', newQuery)
els.btn_back.addEventListener('click', renderSection1)

// const key = 'cb4a23b091bf8992281f5bb6c7f749ad'
// const url = `https://api.openweathermap.org/data/2.5/weather?q=rio+de+janeiro&appid=${key}`
//
// const response = await fetch(url)
//
// const data = await response.json()
//
// console.log(data)
