/*
REQUISITOS BASICOS:
Paleta de colores = https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557
Hacer en html csss y js Deberas reailizar un proyecto, que dependiendo de un valor ingresado por el usuario.
Deberá realizar el calculo de la temperatura escogida, esto puedes hacerlo mediante una etiqueta "Select", las opciones de temperaturas seran las siguientes: 
- celsius
- fahrenheit
- kelvin
Una vez escogida, se preciona el boton de ejecutar o como quieras llamarlo, para que realice el calculo dependiendo de la temperatura.
Debera ser posible que al momento de precionar la tecla "Enter" se realice la ejecucion del calculo de temperaturas.
*/

document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const convertBtn = document.getElementById('convert-btn');
    const output = document.getElementById('output');
    const thermometerFill = document.getElementById('thermometer-fill');

    function convertTemperature() {
        const temp = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let celsius;

        switch (unit) {
            case 'celsius':
                celsius = temp;
                output.innerText = `${temp} °C`;
                break;
            case 'fahrenheit':
                celsius = (temp - 32) * 5 / 9;
                output.innerText = `${temp} °F = ${celsius.toFixed(2)} °C`;
                break;
            case 'kelvin':
                celsius = temp - 273.15;
                output.innerText = `${temp} K = ${celsius.toFixed(2)} °C`;
                break;
        }

        const percentage = Math.min(100, Math.max(0, (celsius + 50) * 100 / 150));
        thermometerFill.style.height = `${percentage}%`;
    }

    convertBtn.addEventListener('click', convertTemperature);
    temperatureInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            convertTemperature();
        }
    });
});
