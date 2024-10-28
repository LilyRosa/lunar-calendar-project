<template>
  <div
    class="tooltip-wrapper"
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot />
    <span v-if="visible" class="tooltip">{{ text }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const visible = ref(false);

const showTooltip = () => {
  visible.value = true;
};

const hideTooltip = () => {
  visible.value = false;
};
</script>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  background-color: deeppink;
  color: white;
  padding: 5px;
  border-radius: 10px;
  z-index: 999;
  bottom: 100%; /* Muestra el tooltip arriba del elemento */
  left: 50%;
  transform: translateX(-50%);
}
</style>
