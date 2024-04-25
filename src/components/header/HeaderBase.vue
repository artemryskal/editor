<template>
  <v-app-bar app height="58" class="header">
    <!-- Кнопка "Домой" -->
    <router-link to="/docs" class="header__home">
      <v-icon icon="iconHome" color="text" />
    </router-link>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header {
  position: fixed !important;
  border-bottom: 1px solid rgba(var(--v-theme-border), 0.4);

  &__home {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58px;
    height: 100%;
    padding: 0;
    border-right: 1px solid rgb(var(--v-theme-border));
  }
}
</style>
