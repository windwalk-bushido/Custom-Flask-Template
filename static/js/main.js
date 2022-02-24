// Automatic dark or light mode
let light_mode_on = null;

function CheckMode() {
  if (localStorage.getItem("mode") == "dark") {
    light_mode_on = false;
  } else {
    light_mode_on = true;
  }
}

let app_body = document.getElementById("body");

function Render() {
  if (light_mode_on == true) {
    app_body.classList.remove("dark-bg");
    app_body.classList.add("light-bg");
  } else {
    app_body.classList.remove("light-bg");
    app_body.classList.add("dark-bg");
  }
}

function ChangeMode() {
  light_mode_on = !light_mode_on;
  if (light_mode_on == true) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
  Render();
}

CheckMode();
Render();
