<!-- Menu.vue-->

<template>
  <div>
    <ul>
      <ul>
        Изучение иностранных языков
      </ul>
      <li v-for="item in menuItems" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, text: "Главная" },
        { id: 2, text: "Все языки" },
        { id: 3, text: "Расписание" },
      ],
    };
  },
};
</script>

<style scoped>
/* Стили, специфичные для этого компонента */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around; /* Размещаем элементы по горизонтали с равным отступом */
  background-color: #747ed4;
  position: absolute; /* Изменили на absolute */
  top: 0;
  width: 100%; /* Занимаем всю ширину страницы */
  left: 50%; /* размещаем посередине */
  transform: translateX(-50%); /* центрируем */
}

li {
  padding: 25px;
  border-right: 1px solid #747ed4;
  cursor: pointer;
  transition: color 0.3s; /* Добавляем плавное изменение цвета */
}

li:hover {
  color: #74c9d4; /* Изменяем цвет текста при наведении курсора */
}

li:last-child {
  border-right: none;
}

/* Добавляем стили для адаптивности */
@media (max-width: 600px) {
  li {
    border-bottom: 1px solid #747ed4;
    border-right: none;
  }
}
</style>
