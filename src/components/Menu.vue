<!-- Menu.vue-->

<template>
  <div>
    <ul>
      <ul>
        Изучение иностранных языков
      </ul>
      <div style="display: flex;justify-content: space-between;width: 100%">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/languages">Все языки</router-link></li>
        <li class="dropdown">
          <span class="dropbtn">Расписание</span>
          <div class="dropdown-content">
            <router-link to="/schedulereng">Английский</router-link>
            <router-link to="/schedulerfr">Французский</router-link>
            <router-link to="/schedulerisp">Испанский</router-link>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
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
  position: fixed; /* Изменили на absolute */
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

/* Dropdown Button */
.dropbtn {
  color: #646cfe;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #646cfe;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #646cfe}

@media (max-width: 600px) {
  li {
    border-bottom: 1px solid #747ed4;
    border-right: none;
  }
}
</style>
