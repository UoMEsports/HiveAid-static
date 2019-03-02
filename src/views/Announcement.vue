<template>
  <div class="announcement">
    <img class="banner" src="../assets/img/banner.png"/>
    <Countdown date="March 30, 2019 10:00"/>
    <div class="twitch-wrapper">
      <div id="twitch-embed"></div>
    </div>
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
      width: '100%',
      height: '100%',
      layout: "video",
      channel: "uomesports",
      frameBorder: 0
    });
    /* eslint-enable */
  }
}
</script>

<style lang="scss" scoped>
.announcement {
  max-width: 1000px;
  margin: auto;
}
.twitch-wrapper {
  max-width: 800px;
  margin: auto;

  #twitch-embed {
    position: relative;
    max-width: 100%;
    padding-bottom: 56.25%;
  }
}
.banner {
  width: 90%;
  margin-top: 50px;
}
</style>
