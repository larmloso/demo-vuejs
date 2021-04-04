<template>
  <div name='demo2'>
      <h1>Demo 2</h1>
      <button @click="clickMe"> ClickMe</button>
      <button v-on:click="clickMe2('welcom to vuejs')"> ClickMe2</button>

        <h3>{{getTimestamp()}}</h3>
  </div>
</template>


<script> 
export default {
    name: 'demo2',
    methods: {
        clickMe(){
            alert("Hi")
        },
        clickMe2(message){
            alert(message)
        },
        getTimestamp(){
            return Date();
        }
    }


}
</script>

<style>
    @import url('../views/style.css');
</style>