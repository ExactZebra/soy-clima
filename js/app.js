const btnGetWeather = document.getElementById('btnGetWeather')
const citySearch = document.getElementById('city')
let cityFound = {}
let tempFound={}
let windFound={}
let humiFound={}
let weathFound={}
let timeFound={}
let aqiFound={}

btnGetWeather.addEventListener('click',()=>{
    if(citySearch.value.trim().length>0){
        getWeather(citySearch.value)
    } else{
        alert('No hay nadie')
            citySearch.focus()
        }
})

const newData=()=>{
    const city = document.getElementById('newCity')
    const temp = document.getElementById('newTemp')
    const wind = document.getElementById('newWind')
    const humi = document.getElementById('newHumi')
    const weath = document.getElementById('newWeath')
    const time = document.getElementById('newTime')
    const aqi = document.getElementById('newAqi')

    city.textContent=cityFound.city
    temp.textContent=tempFound.temp
    wind.textContent=windFound.wind
    humi.textContent=humiFound.humidity
    weath.textContent=weathFound.current_weather
    time.textContent=timeFound.last_update
    aqi.textContent=aqiFound.aqi
}
