import { Moon } from "lunarphase-js";
export function getCurrentMoonPhase() {
  const phase = Moon.lunarPhase(new Date());
  const emoji = Moon.lunarPhaseEmoji();
  let resp = "";
  if (phase === "New") {
    resp = "Luna Nueva " + emoji;
  } else if (phase === "Waxing Crescent") {
    resp = "Luna Creciente Iluminante " + emoji;
  } else if (phase === "First Quarter") {
    resp = "Luna Cuarto Creciente " + emoji;
  } else if (phase === "Waxing Gibbous") {
    resp = "Luna Gibbosa Creciente " + emoji;
  } else if (phase === "Full") {
    resp = "Luna Llena " + emoji;
  } else if (phase === "Waning Gibbous") {
    resp = "Luna Gibbosa Menguante " + emoji;
  } else if (phase === "Last Quarter") {
    resp = "Luna Cuarto Menguante " + emoji;
  } else if (phase === "Waning Crescent") {
    resp = "Luna Menguante " + emoji;
  }
  return resp;
}

export function getNextMoonPhase() {
  const phase = Moon.lunarPhase(new Date());
  let resp = "";
  if (phase === "New") {
    resp = "Luna Creciente Iluminante 🌒";
  } else if (phase === "Waxing Crescent") {
    resp = "Luna Cuarto Creciente 🌓";
  } else if (phase === "First Quarter") {
    resp = "Luna Gibbosa Creciente 🌔";
  } else if (phase === "Waxing Gibbous") {
    resp = "Luna Llena 🌕";
  } else if (phase === "Full") {
    resp = "Luna Gibbosa Menguante 🌖";
  } else if (phase === "Waning Gibbous") {
    resp = "Luna Cuarto Menguante 🌗";
  } else if (phase === "Last Quarter") {
    resp = "Luna Menguante 🌘";
  } else if (phase === "Waning Crescent") {
    resp = "Luna Nueva 🌑";
  }
  return resp;
}

export function getMoonPhasePhoto() {
  const phase = Moon.lunarPhase(new Date());
  let ruta = "";
  if (phase === "New") {
    ruta = "/images/luna nueva original.jpg";
  } else if (phase === "Waxing Crescent") {
    ruta = "/images/luna creciente iluminante original.jpg";
  } else if (phase === "First Quarter") {
    ruta = "/images/luna cuarto creciente original.jpg";
  } else if (phase === "Waxing Gibbous") {
    ruta = "/images/luna gibosa creciente original.jpg";
  } else if (phase === "Full") {
    ruta = "/images/luna llena original.jpg";
  } else if (phase === "Waning Gibbous") {
    ruta = "/images/luna gibosa menguante original.jpg";
  } else if (phase === "Last Quarter") {
    ruta = "/images/luna cuarto menguante original.jpg";
  } else if (phase === "Waning Crescent") {
    ruta = "/images/luna_menguante_original.png";
  }
  return ruta;
}

export function findNextMoonPhaseChange() {
  const currentDate = new Date();
  let currentPhase = Moon.lunarPhase(currentDate);

  let nextPhaseDate = currentDate;

  let nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);

  while (true) {
    const nextPhase = Moon.lunarPhase(nextDate);

    if (nextPhase !== currentPhase) {
      nextPhaseDate = nextDate;
      break;
    }
    nextDate.setDate(nextDate.getDate() + 1);
  }

  return nextPhaseDate;
}

export function getDaysBeforeNextPhase() {
  const currentDate = new Date();
  let currentPhase = Moon.lunarPhase(currentDate);
  let cont = 0;

  let nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);

  while (true) {
    const nextPhase = Moon.lunarPhase(nextDate);
    cont++;

    if (nextPhase !== currentPhase) {
      break;
    }
    nextDate.setDate(nextDate.getDate() + 1);
  }

  return cont;
}

export function getFormatedDate(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return `${dd}/${mm}/${yyyy}`;
}
