<template>
  <div id="clock">
      <slot>Now</slot> : {{time}}
      <slot name="header"></slot>
      <slot name="footer"></slot>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'clock',
    data() {
        return {
            time: ''
        }
    },
    mounted() {
        setInterval(()=> {
            this.time = moment(Date()).format('MM/DD/YYYY hh:mm:ss')
        }, 100)
    }
}
</script>

<style>

</style>