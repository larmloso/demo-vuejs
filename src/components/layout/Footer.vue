<template>
  <div id="footer">
      <span :style="{color}">{{title}}</span>
  </div>
</template>

<script>
export default {
    name: 'footer',
    mounted() {
        setInterval(() => {
            /// อ้างอิงจาก component แม่
            this.$emit("onClock", Date())
        }, 100)
    },
    props:[
        'title',
        'color'
    ],
}
</script>

<style scoped>
    .footer {
        font-size: 12px;
        color: gray;
    }
</style>