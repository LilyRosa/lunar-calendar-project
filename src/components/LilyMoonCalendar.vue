<template>
  <div class="calendar-card">
    <div class="header">
      <h2>{{ monthName }} {{ year }}</h2>
    </div>
    <div class="calendar-grid">
      <div
        v-for="(day, index) in daysInMonth"
        :key="index"
        :class="[
          'calendar-cell',
          { today: isToday(new Date(year, month, index + 1)) },
        ]"
      >
        <ToolTip :text="getMoonPhase(new Date(year, month, index + 1), false)">
          <div class="day-number">{{ day.getDate() }}</div>

          <span class="lunar-phase">
            {{ getLunarPhaseEmoji(new Date(year, month, index + 1)) }}
          </span>
        </ToolTip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Moon } from "lunarphase-js";
import { getMoonPhase } from "../utils/moonPhases";
import ToolTip from "./ToolTip.vue";

// Props para recibir el año y el mes
const props = defineProps({
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
});

// Computed para obtener los días del mes
const daysInMonth = computed(() => {
  const days = new Date(props.year, props.month + 1, 0).getDate();

  return Array.from(
    { length: days },
    (_, i) => new Date(props.year, props.month, i + 1)
  );
});

// Computed para obtener el nombre del mes
const monthName = computed(() => {
  const name = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
    new Date(props.year, props.month)
  );

  return name.charAt(0).toUpperCase() + name.substring(1);
});

// Función para obtener la imagen de la fase lunar
const getLunarPhaseEmoji = (date) => {
  return Moon.lunarPhaseEmoji(date); // Asegúrate de tener las imágenes en esta ruta
};

const isToday = (date) => {
  const today = new Date();
  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  );
};
</script>
<style scoped>
.calendar-card {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h2 {
  font-size: 30px;
  color: #333;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-cell {
  width: 60px; /* Aumentar ancho para mejor visualización */
  height: 80px; /* Aumentar altura */
  text-align: center;
  position: relative;
  margin: 5px; /* Espaciado entre celdas */
  border-radius: 10px;

  /* Centrar contenido verticalmente */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.day-number {
  font-size: 26px; /* Tamaño del número más grande */
  font-weight: bold; /* Negrita para destacar */
}

.lunar-phase {
  font-size: 16px; /* Tamaño del emoji más pequeño */
}

.today {
  background-color: hotpink; /* Resaltar el día actual con un color suave */
}

.ToolTip {
  position: absolute;
  bottom: -30px;
  left: -10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}
</style>
