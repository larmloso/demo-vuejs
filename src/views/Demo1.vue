<template>
  <div id="demo1">
    <h1>Demo 1</h1>
    <h1>v-model</h1>
    <input v-model="message" type="text" placeholder="Enter your message" />
    <div>{{ message }}</div>
    <button @click="message = ''">Reset</button>
  </div>
</template>

<script>
export default {
  naem: "demo1",
    data() {
    return {
      message: "",
    };
  },
};
</script>

<style>
</style>