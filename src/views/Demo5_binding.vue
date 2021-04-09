<template>
  <div id="demo5">
    <h1>Demo 5 Bilding</h1>
    <div :class="error">bildingstyle1</div>
    <div :class="[false ? error : '', true ? important : '']">
      bildingstyle2
    </div>
    <a :href="link"> google </a>

    <!-- shotform  color: color, fontSize: fontSize -->
    <div :style="{ color, fontSize }">Bilding 3</div>

    <!-- style object -->
    <div :style="styleObj">Bilding Style Object</div>
    <div :style="isActive ? styleObj : ''">Bilding Style Object2</div>
    <button @click="isActive = !isActive">ToggleActive</button>

    <img v-bind:src="imageUrl" />
  </div>
</template>

<script>
export default {
  name: "demo5",
  data() {
    return {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      link: "https://www.google.com",
      error: "error",
      important: "important",
      color: "red",
      fontSize: "30px",
      /// style obj
      styleObj: {
        backgroundColor: "yellow",
        color: "green",
      },
      isActive: false,
    };
  },
};
</script>

<style>
.error {
  background-color: green;
  color: white;
}
.important {
  font-weight: 800;
}
</style>