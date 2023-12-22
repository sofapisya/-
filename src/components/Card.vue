<template>
  <div
    style="display: flex; flex-direction: column; margin: 10px; color: black"
  >
    <div
      style="
        display: flex;
        flex-direction: column;
        padding: 20px;
        max-width: 1600px;
        max-height: 400px;
        background-color: #dfdddd;
        border-radius: 10px;
        margin: 10px;
      "
    >
      <h1 style="font-weight: bold; text-align: left">Английский</h1>
      <div style="display: flex; flex-direction: row; gap: 10px">
        <h2 style="font-weight: bold">Преимущества изучения:</h2>
        <h2 style="font-weight: normal">
          Международный язык комуникации, повышение карьерных перспектив, доступ
          к англоязычной культуре
        </h2>
      </div>
      <div style="display: flex; flex-direction: row; gap: 10px">
        <h2 style="font-weight: bold; gap: 10px">Цена за курс:</h2>
        <h2 style="font-weight: normal">200$</h2>
      </div>
    </div>

    <div
      style="
        display: flex;
        flex-direction: column;
        padding: 20px;
        max-width: 1600px;
        max-height: 400px;
        background-color: #dfdddd;
        border-radius: 10px;
        margin: 10px;
      "
    >
      <h1 style="font-weight: bold; text-align: left">Французский</h1>
      <div style="display: flex; flex-direction: row; gap: 10px">
        <h2 style="font-weight: bold">Преимущества изучения:</h2>
        <h2 style="font-weight: normal">
          Красивый язык, доступ к французской культуре, улучшение мозгвоой
          активности
        </h2>
      </div>
      <div style="display: flex; flex-direction: row; gap: 10px">
        <h2 style="font-weight: bold; gap: 10px">Цена за курс:</h2>
        <h2 style="font-weight: normal">250$</h2>
      </div>
    </div>

    <div
      style="
        display: flex;
        flex-direction: column;
        padding: 20px;
        max-width: 1600px;
        max-height: 400px;
        background-color: #dfdddd;
        border-radius: 10px;
        margin: 10px;
      "
    >
      <h1 style="font-weight: bold; text-align: left">Испанский</h1>
      <div style="display: flex; flex-direction: row; gap: 10px">
        <h2 style="font-weight: bold">Преимущества изучения:</h2>
        <h2 style="font-weight: normal">
          Второй по популярности язык в мире, возможность общения с большим
          количеством людей, открытие испанской культуры
        </h2>
      </div>
      <div style="display: flex; flex-direction: row; gap: 10px">
        <h2 style="font-weight: bold; gap: 10px">Цена за курс:</h2>
        <h2 style="font-weight: normal">180$</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: "",
  },
};
</script>

<style scoped></style>
