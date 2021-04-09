<template>
  <div name='demo2'>
      <h1>Demo 2</h1>
      <button @click="clickMe"> ClickMe</button>
      <button v-on:click="clickMe2('welcom to vuejs')"> ClickMe2</button>

        <h3>{{getTimestamp()}}</h3>
        <span class="title">1234</span>
  </div>
</template>


<script> 
export default {
    name: 'demo2',

    /// คลายๆ constructor
    mounted(){
        this.initial();
    },
    methods: {
        initial() {
            console.log("initailzation")
        },
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

<style scoped>
    .title {
        font-size: 29px;
    }
</style>