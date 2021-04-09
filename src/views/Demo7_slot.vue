<template>
  <div id="demo7">

      <!-- using falback (defalt) content -->
    <Clock />


    <!-- การทำ slot -->
    <Clock>
      <span style="color: red">เวลาปัจจุบัน :</span>
    </Clock>

    <Clock>
      <span style="color: green">present tiem :</span>
    </Clock>

    <Clock>
        <span style="color: orange">เวลาปัจจุบัน :</span>

        <template v-slot:header>
            <h1>Header</h1>
        </template>

        <template v-slot:footer>
            <span>Footer</span>
        </template>
    </Clock>

  </div>
</template>

<script>
import Clock from "../components/heipers/Clock";
export default {
  name: "demo7",
  components: {
    Clock,
  },
  data() {
    return {
      color: "red",
    };
  },
};
</script>

<style>
</style>