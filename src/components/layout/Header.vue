<template>
  <div id="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/demo1">Demo1</router-link></li>
      <li><router-link to="/demo2">Demo2</router-link></li>
      <li><router-link to="/demo3">Demo3</router-link></li>
      <li><router-link to="/demo4">Demo4</router-link></li>
      <li><router-link to="/demo5">Demo5</router-link></li>
      <li><router-link to="/demo6">Demo6</router-link></li>
      <li><router-link to="/demo7">Demo7</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    margin-right: 7px;
  }
</style>