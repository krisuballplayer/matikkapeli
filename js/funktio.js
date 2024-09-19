"use strict";

let satun_numero1 = 0;
let satun_numero2 = 0;
let oikein = 0;
let vaarin = 0;

const luoSatunLuvut = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const luodaanLuvut = () => {
  satun_numero1 = luoSatunLuvut(1, 10);
  satun_numero2 = luoSatunLuvut(1, 10);
  document.querySelector("#numero1").innerHTML = satun_numero1;
  document.querySelector("#numero2").innerHTML = satun_numero2;
};

addEventListener("DOMContentLoaded", () => {
  luodaanLuvut();
});

document.querySelector("button").addEventListener("click", () => {
  const vastaus = Number(document.querySelector("input").value);
  const oikeaVastaus = satun_numero1 + satun_numero2;
  if (vastaus === oikeaVastaus) {
    alert("Oikein!");
    oikein += 1;
    document.querySelector("#oikein").innerHTML = oikein;
  } else {
    alert("Väärin!");
    vaarin += 1;
    document.querySelector("#vaarin").innerHTML = vaarin;
  }

  luodaanLuvut();
  document.querySelector("input").value = "";
});
