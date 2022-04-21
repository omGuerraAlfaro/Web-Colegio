/* geo localizacion*/
window.addEventListener('load', () => {
    let lon
    let lat
    let temperaturaValor = document.getElementById(`temperatura-valor`)
    let temperaturaDescripcion = document.getElementById(`temperatura-descripcion`)
    let ubicacion = document.getElementById(`ubicacion`)
    let iconoAnimado = document.getElementById(`icono-animado`)
    let vientoVelocidad = document.getElementById(`viento-velocidad`)

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {

            //ubicacion por ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Quillota,CL&lang=es&units=metric&appid=527af813823205f3a60509919a23380c`

            console.log(url)
            fetch(url)
                .then(response => { return response.json() })
                .then(data => {

                    let ubi = data.name
                    ubicacion.textContent = `${ubi}`

                    let tempe = toString(data.main.temp)
                    temperaturaValor.textContent = tempe

                    console.log(data)



                })
                .catch(error => {
                    console.log(error)
                })
        })
    }
})