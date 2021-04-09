<template>
  <div id="app">
    <Hearder />
    <Content />
    <Footer
      @onClock="onClock"
      title="copying 2021 by larm ldt."
      color="green"
    />
    <span>{{ time }}</span>
  </div>
</template>

<script>
import Hearder from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import Content from '../src/components/layout/Content';
import moment from "moment";
export default {
  name: "app",
  components: {
    Hearder,
    Footer,
    Content,
  },
  methods: {
    onClock(value) {
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
      //this.time = value
    },
  },
  data() {
    return {
      time: "",
    };
  },
};
</script>

<style scoped>

</style>