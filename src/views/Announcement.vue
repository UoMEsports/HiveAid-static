<template>
  <div class="announcement">
    <img class="banner" src="../assets/img/banner.png"/>
    <Countdown date="March 30, 2019 10:00"/>
    <div id="twitch-embed"></div>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue'

export default {
  name: 'announcement',
  components: {
    Countdown
  },
  mounted () {
    /* eslint-disable */
    new Twitch.Embed("twitch-embed", {
      width: 760,
      height: 428,
      layout: "video",
      channel: "uomesports"
    });
    /* eslint-enable */
  }
}
</script>

<style lang="scss" scoped>
.announcement {
  width: 1000px;
  margin: auto;
}
.banner {
  width: 90%;
  margin-top: 50px;
}
</style>
