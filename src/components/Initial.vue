<template>
  <main class="main">
    <div class="paper">
      <div class="moon"><img :src="moonPhasePhoto" alt="Luna" /></div>

      <div class="current-moon-phase">
        <h3 class="curren-moon-phase-text">{{ moonPhaseCurrent }}</h3>
      </div>

      <div class="card">
        <div class="left-days">
          <h4>
            Quedan {{ daysBeforeNextPhase }}
            <span v-if="daysBeforeNextPhase > 1">días</span>
            <span v-else>día</span>
            <br />de la fase actual
          </h4>
        </div>

        <div class="next-moon-phase-card">
          <h3>Próxima fase</h3>
          <h4>{{ nextPhase }}</h4>
          <h4>{{ nextPhaseDate }}</h4>
        </div>
      </div>

      <div class="btn">
        <button>📆 Ver Calendario</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import {
  getCurrentMoonPhase,
  getNextMoonPhase,
  getMoonPhasePhoto,
  getDaysBeforeNextPhase,
  findNextMoonPhaseChange,
  getFormatedDate,
} from "../utils/moonPhases.js";

let moonPhasePhoto = ref(getMoonPhasePhoto());
let moonPhaseCurrent = ref(getCurrentMoonPhase());
let nextPhase = ref(getNextMoonPhase());
let nextPhaseDate = ref(getFormatedDate(findNextMoonPhaseChange()));
let daysBeforeNextPhase = ref(getDaysBeforeNextPhase());
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("/images/background.gif");
  background-size: cover;
  background-position: center;
}

.paper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px); /* Efecto de desenfoque para glassmorphism */
  background-color: rgba(255, 255, 255, 0.2); /* Fondo semitransparente */
  border-radius: 20px; /* Bordes redondeados */
  padding: 40px; /* Espaciado interno */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3); /* Sombra más pronunciada */
}

.moon img {
  width: 100%;
  max-width: 400px;
  border-radius: 20%; /* Asegura que la imagen sea circular */
  filter: drop-shadow(2px 2px 20px deeppink);
}

.current-moon-phase {
  margin-top: 20px;
  font-size: 2em;
  color: #282727; /* Texto oscuro para mejor contraste */
  font-weight: bolder;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Aplicar glassmorphism al card */
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px; /* Bordes redondeados */
  padding: 20px;
  margin-top: 20px;
  width: calc(100% - 40px);
  transition: transform 0.3s ease; /* Transición suave para la animación */
  box-shadow: rgba(0, 0, 0, 0.3) -4px -4px -12px inset,
    rgba(255, 255, 255, 0.5) -4px -4px -12px inset,
    rgba(0, 0, 0, 0.3) -4px -4px -12px, rgba(255, 255, 255, 0.5) -4px -4px -12px; /* Sombra más pronunciada */
}

.card:hover {
  transform: scale(1.02); /* Efecto de aumento al pasar el mouse */
}

.left-days {
  flex-grow: 1;
  padding-right: 10px; /* Espacio entre columnas */
}

.next-moon-phase-card {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Alinear a la derecha para mejor presentación */
}

.next-moon-phase-card h3,
.next-moon-phase-card h4 {
  margin: 5px;
  text-align: right; /* Alinear texto a la derecha */
}

.btn {
  margin-top: 20px;
}

.btn button {
  padding: 12px 24px; /* Aumentar el tamaño del botón */
  font-size: large;
  color: #fff;
  background-color: deeppink;
  border: none;
  border-radius: 25px; /* Bordes más redondeados */

  box-shadow: rgba(0, 0, 0, 0.2) -4px -4px -8px inset,
    rgba(255, 255, 255, 0.5) -4px -4px -8px inset,
    rgba(0, 0, 0, 0.2) -4px -4px -8px, rgba(255, 255, 255, 0.5) -4px -4px -8px;

  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease; /* Transiciones suaves */
}

.btn button:hover {
  background-color: #981a66;
  transform: translateY(-4px) scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.3) -6px -6px -12px inset,
    rgba(255, 255, 255, 0.6) -6px -6px -12px inset,
    rgba(0, 0, 0, 0.3) -6px -6px -12px, rgba(255, 255, 255, 0.6) -6px -6px -12px;
}
</style>
