<template>
  <v-layout>
    <!-- Шапка -->
    <router-view name="header" />

    <!-- Сайдбар -->
    <router-view name="sidebar" />

    <!-- Страница -->
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>
