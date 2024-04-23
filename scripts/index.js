function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const currentYear = new Date().getFullYear();
const lastModifiedDate = new Date(document.lastModified);

document.getElementById('currentyear').innerText = currentYear;
document.getElementById('lastModified').innerText = "Last Modified: " + lastModifiedDate;

const temperature = Number(document.getElementById('temperature').innerText.replace("°C", ""));
const windSpeed = Number(document.getElementById('wind').innerText.replace("KM/H", ""));
if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById('chillWind').innerText = calculateWindChill(temperature, windSpeed).toFixed(2) + "°C";
}
