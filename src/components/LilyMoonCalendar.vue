<template>
  <div class="calendar-card">
    <div class="header">
      <h2>{{ monthName }} {{ year }}</h2>
    </div>
    <div class="calendar-grid" role="grid">
      <div
        v-for="(day, index) in daysInMonth"
        :key="index"
        :class="[
          'calendar-cell',
          { today: isToday(new Date(year, month, index + 1)) },
        ]"
        role="gridcell"
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

const daysInMonth = computed(() => {
  const days = new Date(props.year, props.month + 1, 0).getDate();
  return Array.from(
    { length: days },
    (_, i) => new Date(props.year, props.month, i + 1)
  );
});

const monthName = computed(() => {
  const name = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
    new Date(props.year, props.month)
  );
  return name.charAt(0).toUpperCase() + name.substring(1);
});

const getLunarPhaseEmoji = (date) => {
  return Moon.lunarPhaseEmoji(date);
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
  padding: 10px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h2 {
  font-size: calc(1.5rem + 1vw); /* Tamaño de fuente responsivo */
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr)); /* Siempre 7 columnas */
}

.calendar-cell {
  min-width: 60px;
  min-height: calc(80px + (2vw)); /* Altura mínima que se ajusta */

  /* Centrar contenido vertical y horizontalmente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5px;
  border-radius: 10px;

  transition: background-color 0.3s; /* Transición suave para el efecto hover */
}

.day-number {
  font-size: calc(1rem + 0.5vw); /* Tamaño de fuente responsivo */
  font-weight: bold;
}

.lunar-phase {
  font-size: calc(0.8rem + 0.2vw); /* Tamaño de fuente responsivo */
}

.today {
  background-color: hotpink;
}

/* Media Queries para ajustar el tamaño en pantallas pequeñas */
@media (max-width: 600px) {
  .calendar-cell {
    min-height: calc(60px + (2vw)); /* Reducir altura en pantallas pequeñas */
    min-width: calc(40px + (1vw)); /* Reducir altura en pantallas pequeñas */
  }
}
</style>
