const APIKEY = '0dac6c8cdee5ce567a419835fb6d5e22'

// const url = (city, apikey) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

const form = document.getElementById('form')
const searchInput = document.getElementById('search')

const cityNotFound = 404

const getWeatherByCity = async (city, apikey) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)

        if (response.status === cityNotFound) {
            Toastify({
                text: 'La ciudad no fue encontrada!',
                duration: 3000,
                style: {
                    background: '#25282A'
                }
            }).showToast()
        }

        const data = await response.json()
        showWeather(data)
    } catch (error) {
        console.log(error)
    }
};

const showWeather = (data) => {
    const temp = getCelsius(data.main.temp)
    const div = document.createElement('div')
    div.classList.add('weather')

    div.innerHTML = `
        <h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        </h2>
        <small>${data.weather[0].main}</small>
    `
    main.innerHTML = ''
    main.appendChild(div)
};

const getCelsius = (kelvin) => {
    return Math.floor(kelvin - 273)
};

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const city = searchInput.value

    if (city) {
        getWeatherByCity(city, APIKEY)
    }
})