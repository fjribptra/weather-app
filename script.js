const endpoint = "https://api.weatherapi.com/v1/current.json?"
const apiKey = "bf55e0ab799948498c325935231911"

const inputSearch = document.getElementById('inputSearch')
const searchButton = document.getElementById('searchButton')

const requestDataWeather = (input) => {
    fetch(endpoint + `key=${apiKey}` + `&q=${input}`)
    .finally(
        document.querySelector('.loading').style.display = 'flex'
    )
    .then(res => res.json())
    .then(res => {
        document.querySelector('.loading').style.display = 'none'
        updateWeather(res)
    })
    // .catch(alert('Location not Found'))
}

const updateWeather = (data) => {
    document.getElementById('Country').innerHTML = data.location.country
    document.getElementById('tempC').innerHTML = data.current.temp_c + " &#8451"
    document.getElementById('location').innerHTML = data.location.name
    document.getElementById('time').innerHTML = data.location.localtime
    document.getElementById('condition').innerHTML = data.current.condition.text
    document.getElementById('icon').setAttribute("src", `${data.current.condition.icon}`)
}

searchButton.addEventListener('click', function() {requestDataWeather(inputSearch.value)})
inputSearch.addEventListener('keydown', function(e) { if(e.key == "Enter") requestDataWeather(inputSearch.value) })

requestDataWeather("indonesia")
