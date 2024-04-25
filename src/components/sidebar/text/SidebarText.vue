<template>
  <v-expansion-panels v-model="panels" class="sidebar__option">
    <v-expansion-panel hide-actions>
      <template #title>
        <span
          class="d-flex align-center justify-space-between flex-grow-1 pa-0">
          Шрифт
          <v-icon
            icon="iconArrowAlt"
            size="6"
            :class="{ 'rotate-180': typeof panels !== 'undefined' }" />
        </span>
      </template>
      <template #text>
        <!-- Семейство шрифтов -->
        <!--        <SidebarTextFont />-->
        <!-- Стили шрифта -->
        <SidebarTextStyle />
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
const panels = ref(0)
</script>
