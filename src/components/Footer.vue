<!-- Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="contact-info">
        <p>Телефон: {{ phoneNumber }}</p>
        <p>ФИО: {{ FIO }}</p>
      </div>
      <div class="social-links">
        <a
          href="https://vk.com/pesyakova"
          target="_blank"
          rel="noopener noreferrer"
          >Вконтакте</a
        >
        <img src="../assets/VK.svg" />
        <br />
        <a href="@sofapisya" target="_blank" rel="noopener noreferrer"
          >Telegram</a
        >
        <img src="../assets/Telegram.svg" />
        <br />
        <a href="https://rutube.ru/" target="_blank" rel="noopener noreferrer"
          >Rutube</a
        >
        <img src="../assets/YouTube.svg" />
      </div>
    </div>
    <p>&copy; 2023 Изучение иностранных языков. Все права защищены.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      phoneNumber: "+7 (921) 076-70-12", // Замените на ваш номер телефона
      FIO: "Песьякова Софья Игоревна", // Замените на ваше юридическое имя
    };
  },
};
</script>

<style scoped>
/* Стили для вашего футера */
footer.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  text-align: left;
}

.social-links a {
  color: #fff;
  margin-right: 25px;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>
