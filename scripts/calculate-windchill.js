function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const temperature = document.getElementById('temperature').innerText.replace("°C", "");
const windSpeed = document.getElementById('wind').innerText.replace("KM/H", "");
if (temperature <= 10 && windSpeed > 4.8) {
    console.log("haha")
    document.getElementById('chillWind').innerText = calculateWindChill(Number(temperature), Number(windSpeed)).toFixed(2) + "°C";
}

