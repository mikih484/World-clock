function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("HH:mm:ss");
  }

  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = barcelonaElement.querySelector(".date");
    let barcelonaTimeElement = barcelonaElement.querySelector(".time");
    barcelonaDateElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("MMMM Do YYYY");
    barcelonaTimeElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("HH:mm:ss");
  }

  let bratislavaElement = document.querySelector("#bratislava");
  if (bratislavaElement) {
    let bratislavaDateElement = bratislavaElement.querySelector(".date");
    let bratislavaTimeElement = bratislavaElement.querySelector(".time");
    bratislavaDateElement.innerHTML = moment()
      .tz("Europe/Bratislava")
      .format("MMMM Do YYYY");
    bratislavaTimeElement.innerHTML = moment()
      .tz("Europe/Bratislava")
      .format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="time">${cityTime.format("HH:mm:ss")}
        </div>
        </div>
          <a href="/">Back to all cities</a>
          `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
