<template>
  <div style="display: flex;flex-direction: column">
    <div id="app" style="max-width: 1300px">
      <!-- Карусель -->
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image" class="image" alt="Slide" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </swiper>

      <!-- Основное содержимое -->
      <div id="main-content">
        <!-- Здесь будет основное содержимое вашего приложения -->
        <router-view></router-view>
      </div>
    </div>
    <div style="display: flex;flex-direction: column;padding: 20px;align-items: start">
      <h3 style="font-weight: bold;">Записаться на занятие</h3>
      <div style="display: flex;flex-direction: row;gap: 10px;">
        <div class="input-box" style="display: flex;">
          <input type="text" placeholder="Ваше имя" />
        </div>
        <div class="input-box" style="display: flex;">
          <input type="text" placeholder="фамилия" />
        </div>
        <li class="dropdown" style="display: flex;">
          <span class="dropbtn">Расписание</span>
          <div class="dropdown-content">
            <div>Английский</div>
            <div>Французский</div>
            <div>Испанский</div>
          </div>
        </li>
        <button style="background-color: #1a1a1a;border-radius: 10px;max-width: 100px;max-height: 30px;text-align: center;justify-content: center;margin-top: 0;margin-bottom: 0; align-items: center">
          <h5 style="color: white;margin-top: 0;margin-bottom: 0;">Записаться</h5>
        </button>
      </div>
      <h4>
        Чуть позже с вами свяжутся
      </h4>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // Опции карусели
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      images: [
        "https://vplate.ru/images/article/orig/2021/12/hitrosti-kotorye-pomogut-vyuchit-anglijskij-yazyk.jpg",
        "https://thumbs.dreamstime.com/b/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B0%D1%8F-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BA%D1%83%D1%80%D1%81-%D1%84%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D0%BE%D0%B2-%D1%8F%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9-%D1%88%D0%BA%D0%BE%D0%BB%D1%8B-196297841.jpg",
        "https://inring.ru/images/detailed/9/ODAzOTYxNzkw.jpg",
        // Добавьте дополнительные ссылки на изображения по необходимости
      ],
    };
  },
};
</script>

<style>
#app {
  display: flex;
}
.image {
  weight: 300px;
  height: 300px;
}
#main-content {
  flex-grow: 1;
  padding: 20px;
  margin-bottom: 100px;
}

/* Dropdown Button */
.dropbtn {
  background-color: #9b9b9b;
  color: white;
  font-size: 16px;
  border: none; /* Убираем границы */
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;

}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  background-color: #9b9b9b;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #202020;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

</style>
