<template>
  <div id="damo4">
      <h1>Demo4 Computed</h1>

      <h3>{{firstname}}</h3>
      <h3>{{lastname}}</h3>
      <h3>{{fullname}}</h3>
      <h3>{{}}</h3>
  </div>
</template>

<script>
export default {
    name: 'demo4',
    methods: {

    },
    data() {
        return {
            firstname: "Larm",
            lastname: "dev"
        }
    },
    //computed return ค่าล่าสุด
    computed: {
        fullname() {
            return this.firstname + " " + this.lastname;
        }
        
    }
}
</script>

<style>

</style>