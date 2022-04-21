
window.addEventListener('load', () => {
    let lon
    let lat
    let temperaturaValor = document.getElementById(`temperaturaValor`)
    let temperaturaDescripcion = document.getElementById(`temperatura-descripcion`)
    let ubicacion = document.getElementById(`ubicacion`)
    let iconoAnimado = document.getElementById(`Icono`)
    let vientoVelocidad = document.getElementById(`vientoVelocidad`)

    //ubicacion por ciudad
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=-32.8337&lon=-70.5983&lang=es&units=metric&appid=527af813823205f3a60509919a23380c`
    console.log(url)
    fetch(url)
        .then(response => { return response.json() })
        .then(data => {

            var ubi = data.name
            var icon = data.weather[0].icon
            if (ubi==null){
                ubi="No disponible por el momen"
            }
            ubicacion.textContent = data.name

            temperaturaValor.textContent =  Math.round(parseFloat(data.main.temp)) + " °C"
            
            vientoVelocidad.textContent = "Velocidad del viento: " + data.wind.speed + " m/s"

            const urlIcon = `http://openweathermap.org/img/wn/${icon}.png`
            iconoAnimado.src=  urlIcon
            
            console.log(data)


        })
        .catch(error => {
            console.log(error)
        })

})