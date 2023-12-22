<template>
  <div style="display: flex; flex-direction: column">
    <div id="app" style="max-width: 1300px">
      <!-- Карусель -->
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image" class="image" alt="Slide" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </swiper>

      <!-- Основное содержимое -->
      <div id="main-content">
        <div
          style="
            display: flex;
            flex-direction: column;
            padding: 20px;
            align-items: start;
          "
        >
          <h3 style="font-weight: bold">Записаться на занятие</h3>
          <div style="display: flex; flex-direction: row; gap: 10px">
            <div class="input-box" style="display: flex">
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div class="input-box" style="display: flex">
              <input type="text" placeholder="Фамилия" />
            </div>
            <select id="selectvalue">
              <option>Английский</option>
              <option>Французский</option>
              <option>Испанский</option>
            </select>

            <button
              style="
                background-color: #1a1a1a;
                border-radius: 10px;
                max-width: 100px;
                max-height: 30px;
                text-align: center;
                justify-content: center;
                margin-top: 0;
                margin-bottom: 0;
                align-items: center;
              "
            >
              <h5 style="color: white; margin-top: -6px; margin-left: -6px">
                Записаться
              </h5>
            </button>
          </div>
          <h5>Позже с вами свяжутся</h5>
        </div>
      </div>
      <router-view></router-view>
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
  z-index: 0;
  height: 300px;
}
#main-content {
  flex-grow: 1;
  padding: 20px;
  z-index: 1;
  margin-bottom: 100px;
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
</style>
