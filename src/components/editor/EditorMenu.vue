<template>
  <v-menu offset="5" :close-on-content-click="false" attach="#menu-btn">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" id="menu-btn" color="primary" class="mt-5">
        Добавить модуль
      </v-btn>
    </template>

    <v-list class="dropdown">
      <v-list-item class="dropdown__item" @click="modules.insertTitle">
        Заголовок
      </v-list-item>
      <v-list-item class="dropdown__item" @click="modules.insertParagraph">
        Параграф
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import * as modules from '@/utils/module'
</script>
