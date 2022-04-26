let buscarDireccion = document.getElementById(`buscarDireccion`)


//Configuraciones del la api de Trueway Geocoding (Obtener cordenadas desde la dirreccion ingresada)
const CredencialesDireccion = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com',
        'X-RapidAPI-Key': 'e20b1e171bmsh58d117850934993p1a68aejsn650d8db4d5b1'
    }
};
//Al momento de cargar la pagina carga la informacion climatica de Los Andes, ya que el colegio se ubica alli
window.addEventListener('load', () => {

    let temperaturaValor = document.getElementById(`temperaturaValor`)
    let temperaturaDescripcion = document.getElementById(`temperaturaDescripcion`)
    let ubicacion = document.getElementById(`ubicacion`)
    let iconoAnimado = document.getElementById(`icono-animado`)
    let vientoVelocidad = document.getElementById(`vientoVelocidad`)

    //ubicacion por ciudad especifica
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=-32.8337&lon=-70.5983&lang=es&units=metric&appid=527af813823205f3a60509919a23380c`
    fetch(url)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data) //datos primera API "openweathermap"
            var ubi = data.name
            if (ubi == null) {
                ubi = "No disponible por el momento"
            }
            ubicacion.textContent = data.name
            temperaturaValor.textContent = Math.round(parseFloat(data.main.temp)) + " °C"
            //console.log(data.weather[0].description)
            let desc = data.weather[0].description
            temperaturaDescripcion.textContent = desc.toUpperCase()

            vientoVelocidad.textContent = `${data.wind.speed} m/s`

            /* Iconos Animados */
            //Selecciona el icono en base a la opciones de clima de la api
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
//Actualiza el clima en base a lo ingresado por el usuario
function actualizarClima() {
    let temperaturaValor = document.getElementById(`temperaturaValor`)
    let temperaturaDescripcion = document.getElementById(`temperaturaDescripcion`)
    let ubicacion = document.getElementById(`ubicacion`)
    let iconoAnimado = document.getElementById(`icono-animado`)
    let vientoVelocidad = document.getElementById(`vientoVelocidad`)
    let buscarDireccion = document.getElementById(`buscarDireccion`).value
    let direccion = buscarDireccion

    if (direccion != "") {
        direccion = direccion.replace(/ /g, "%20") //Elimina los espacios en blanco y los remplaza por %20
        direccion = direccion.replace(/,/g, "%2C") //Elimina las comas  y las remplaza por %2C
        var lat
        var lon
        //La dirrecion se actualiza en base a lo ingresado
        urlDireccion = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${direccion}&language=es&country=.cl`

        fetch(urlDireccion, CredencialesDireccion)
            .then(response => response.json())
            .then(info => {
                console.log(info)
                lat = info.results[0].location.lat
                lon = info.results[0].location.lng
                //Se utiliza la latitud y longitud de la direccion ingresada para actualizar el clima
                url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=527af813823205f3a60509919a23380c`


                fetch(url2)
                    .then(response => { return response.json() })
                    .then(data2 => {
                        console.log(data2)

                        var ubi = data2.name
                        if (ubi == null) {
                            ubi = "No disponible por el momento"
                        }
                        ubicacion.textContent = data2.name
                        temperaturaValor.textContent = Math.round(parseFloat(data2.main.temp)) + " °C"
                        let desc = data2.weather[0].description
                        temperaturaDescripcion.textContent = desc.toUpperCase()

                        vientoVelocidad.textContent = `${data2.wind.speed} m/s`
                        switch (data2.weather[0].main) {
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
            .catch(error => {
                console.log(error)
            })
    }
    else {
    }

}