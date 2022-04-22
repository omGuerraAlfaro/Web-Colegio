let buscarDireccion = document.getElementById(`buscarDireccion`)
let lon
let lat


fetch("./js/pais.json")
    .then(response => { return response.json() })
    .then(data => {
        console.log(data)


    })



window.addEventListener('load', () => {
    let temperaturaValor = document.getElementById(`temperaturaValor`)
    let temperaturaDescripcion = document.getElementById(`temperaturaDescripcion`)
    let ubicacion = document.getElementById(`ubicacion`)
    let iconoAnimado = document.getElementById(`icono-animado`)
    let vientoVelocidad = document.getElementById(`vientoVelocidad`)

    //ubicacion por ciudad
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=-32.8337&lon=-70.5983&lang=es&units=metric&appid=527af813823205f3a60509919a23380c`
    console.log(url)
    fetch(url)
        .then(response => { return response.json() })
        .then(data => {

            var ubi = data.name
            var icon = data.weather[0].icon
            if (ubi == null) {
                ubi = "No disponible por el momento"
            }
            ubicacion.textContent = data.name

            temperaturaValor.textContent = Math.round(parseFloat(data.main.temp)) + " °C"

            //console.log(data.weather[0].description)
            let desc = data.weather[0].description
            temperaturaDescripcion.textContent = desc.toUpperCase()

            vientoVelocidad.textContent = `${data.wind.speed} m/s`

            const urlIcon = `http://openweathermap.org/img/wn/${icon}.png`
            iconoAnimado.src = urlIcon





            /* Iconos Animados */

            switch (data.weather[0].main) {
                case 'Thunderstorm':
                    iconoAnimado.src = 'animated/thunder.svg'
                    console.log('TORMENTA');
                    break;
                case 'Drizzle':
                    iconoAnimado.src = 'animated/rainy-2.svg'
                    console.log('LLOVIZNA');
                    break;
                case 'Rain':
                    iconoAnimado.src = 'animated/rainy-7.svg'
                    console.log('LLUVIA');
                    break;
                case 'Snow':
                    iconoAnimado.src = 'animated/snowy-6.svg'
                    console.log('NIEVE');
                    break;
                case 'Clear':
                    iconoAnimado.src = 'animated/day.svg'
                    console.log('LIMPIO');
                    break;
                case 'Atmosphere':
                    iconoAnimado.src = 'animated/weather.svg'
                    console.log('ATMOSFERA');
                    break;
                case 'Clouds':
                    iconoAnimado.src = 'animated/cloudy-day-1.svg'
                    console.log('NUBES');
                    break;
                default:
                    iconoAnimado.src = 'animated/cloudy-day-1.svg'
                    console.log('por defecto');
            }


        })
        .catch(error => {
            console.log(error)
        })

})