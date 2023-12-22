<template>
  <div id="app">
    <!-- Вставляем компонент Menu в верхнюю часть -->
    <Menu />
    <Footer />
    <!-- Остальное содержимое приложения -->

    <router-view />
  </div>
</template>

<script>
// Подключаем компонент Menu
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";


export default {
  components: {
    Menu,
    Footer,
  },
  // Остальная логика вашего приложения
};
</script>

<!-- Стили для вашего приложения -->
<style>
/* здесь вы можете добавить стили для всего приложения */
</style>
<!-- Стили для вашего приложения -->
