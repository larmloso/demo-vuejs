<template>
  <div id="demo3">
    <h1>Demo3</h1>
    <button @click="count++; isLogin=true;">Count++</button>
    <span>{{ count }}</span>
    <div> {{ message }} </div>
    <div> {{ isLogin }} </div>
    <input v-model="message" type="text" placeholder="Enter a message">
    <h2 v-if="message == 'larm'"> Yahoo</h2>
    <h2 v-if="isLogin"> Yahoo3</h2>
    <div>{{account}}</div>
    <div>{{couses}}</div>
    <ul>
        <li v-for="(item, index) in couses" :key="index">{{item}}</li>
    </ul>

    <span class="title">55666</span>
  </div>
</template>

<script>
export default {
  name: "demo3",
  mounted() {
    this.message = "larm.dev.333";
  },
  data() {
    return {
      count: 0,
      message: "larm.dev",
      isLogin: false,
      account: {
          username: 'admin',
          password: 1234
      },
      couses: [
          'angular.js',
          'react.js',
          'vue.js'
      ]
    };
  },
};
</script>

<style>
</style>