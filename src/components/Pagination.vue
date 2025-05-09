<script setup lang="ts" generic="T">
import { computed, ref, watchEffect } from 'vue';

const props = defineProps<{
  data: T[];
  pageSize: number;
}>();

const emit = defineEmits<{
  change: [data: T[]];
}>();

// pagination
const currentPage = ref(1);
const currentPageZeroIndexed = computed(() => currentPage.value - 1);
const availablePages = computed(() => Math.ceil(props.data.length / props.pageSize));
const paginatedEntries = computed(() =>
  props.data.slice(
    currentPageZeroIndexed.value * props.pageSize,
    currentPageZeroIndexed.value * props.pageSize + props.pageSize
  )
);

watchEffect(() => {
  if (currentPage.value > availablePages.value || currentPage.value < 1) currentPage.value = 1;
});

watchEffect(() => emit('change', paginatedEntries.value));
</script>

<template>
  <div
    v-if="availablePages > 1"
    class="page-select-wrapper"
  >
    <div class="page-select-item">
      <button
        :disabled="currentPage === 1"
        class="outline"
        type="button"
        @click="currentPage--"
      >
        &lt;
      </button>
    </div>

    <template v-if="currentPage > 2">
      <div class="page-select-item">
        <button
          class="outline"
          type="button"
          @click="currentPage = 1"
        >
          1
        </button>
      </div>

      <div
        v-if="currentPage - 2 !== 1"
        class="placeholder"
      >
        ...
      </div>
    </template>

    <div
      v-if="currentPage - 1 > 0"
      class="page-select-item"
    >
      <button
        :key="currentPage - 1"
        class="outline"
        type="button"
        @click="currentPage--"
      >
        {{ currentPage - 1 }}
      </button>
    </div>
    <div
      :key="currentPage"
      class="page-select-item"
    >
      <button type="button">
        {{ currentPage }}
      </button>
    </div>
    <div
      v-if="currentPage + 1 <= availablePages"
      class="page-select-item"
    >
      <button
        :key="currentPage + 1"
        class="outline"
        type="button"
        @click="currentPage++"
      >
        {{ currentPage + 1 }}
      </button>
    </div>

    <template v-if="currentPage < availablePages - 1">
      <div
        v-if="currentPage + 2 !== availablePages"
        class="placeholder"
      >
        ...
      </div>

      <div class="page-select-item">
        <button
          class="outline"
          type="button"
          @click="currentPage = availablePages"
        >
          {{ availablePages }}
        </button>
      </div>
    </template>

    <div class="page-select-item">
      <button
        :disabled="currentPage === availablePages"
        class="outline"
        type="button"
        @click="currentPage++"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<style scoped>
.page-select-wrapper {
  display: flex;
  gap: 0.5rem;
  margin-block-end: 1rem;

  .placeholder {
    display: flex;
    align-items: center;
  }

  .page-select-item {
    aspect-ratio: 1;
    display: flex;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0;

      &.outline:hover {
        background-color: var(--pico-primary-hover-background);
        color: var(--pico-primary-inverse);
        border: 1px solid transparent;
      }
    }
  }
}
</style>
