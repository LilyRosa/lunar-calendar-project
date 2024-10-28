<template>
  <main class="main">
    <div class="paper">
      <RouterLink to="/">
        <button class="back-button">
          <img src="/images/flecha_volver.png" alt="Atrás" />
        </button>
      </RouterLink>

      <div class="calendar">
        <LilyMoonCalendar :year="parseInt(year)" :month="parseInt(month)" />
      </div>

      <div class="selectors">
        <div class="selector-group">
          <div class="month">
            <h4 class="text">Mes</h4>
            <select v-model="month">
              <option value="0">Enero</option>
              <option value="1">Febrero</option>
              <option value="2">Marzo</option>
              <option value="3">Abril</option>
              <option value="4">Mayo</option>
              <option value="5">Junio</option>
              <option value="6">Julio</option>
              <option value="7">Agosto</option>
              <option value="8">Septiembre</option>
              <option value="9">Octubre</option>
              <option value="10">Noviembre</option>
              <option value="11">Diciembre</option>
            </select>
          </div>

          <div class="year">
            <h4 class="text">Año</h4>
            <input type="number" v-model="year" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import LilyMoonCalendar from "./LilyMoonCalendar.vue";
import { RouterLink } from "vue-router";

const month = ref(new Date().getMonth());
const year = ref(new Date().getFullYear());

// Función para manejar el clic en el botón de regreso
const goBack = () => {
  console.log("Regresando...");
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("/images/background.gif");
  background-size: contain;
  background-position: center;
}

.paper {
  display: flex;
  flex-direction: column;
  align-items: center; /* Cambiado a center para centrar todo el contenido */
  justify-content: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  position: relative; /* Permite posicionar elementos dentro */
  margin: 5px;
}

.back-button {
  position: absolute; /* Posicionamiento absoluto */
  top: 20px; /* Espacio desde la parte superior */
  left: 20px; /* Espacio desde la izquierda */
  background: transparent; /* Fondo transparente */
  border: 2px deeppink; /* Sin borde */
  cursor: pointer;
}

.back-button img {
  width: 42px; /* Tamaño de la imagen */
}

.calendar {
  margin-top: 60px; /* Espacio entre el botón y el calendario */
}

.selectors {
  display: flex;
  justify-content: center; /* Centrar los selectores en la fila */
}

.selector-group {
  display: flex; /* Colocar los selectores uno al lado del otro */
}

.month,
.year {
  display: flex;
  flex-direction: column; /* Colocar el texto encima del selector/input */
  align-items: center; /* Centrar el contenido */
  margin-right: 20px; /* Espacio entre los selectores */
}

.text {
  margin-bottom: 5px; /* Espacio entre el texto y el selector/input */
}

input[type="number"],
select {
  padding: 8px; /* Espaciado interno para los selectores e input */
  border-radius: 5px; /* Bordes redondeados para un aspecto moderno */
  border: 1px solid #ccc; /* Borde suave */
}

input[type="number"]:focus,
select:focus {
  border-color: deeppink; /* Color del borde al enfocar */
  outline: none; /* Eliminar el contorno predeterminado */
}
</style>
