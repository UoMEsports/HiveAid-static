<template>
  <div class="announcement">
    <img class="banner" src="../assets/img/banner.png"/>

    <Countdown date="March 30, 2019 10:00"/>

    <div class="highlight-container">
      <div class="highlight left">
        <h1>30th-31st March</h1>
      </div>
      <div class="divider-container">
        <div class="divider"></div>
      </div>
      <div class="highlight right">
        <h1>24 Hours</h1>
      </div>
    </div>

    <div class="twitch-wrapper">
      <div id="twitch-embed"></div>
    </div>

    <div class="info-wrapper">
      <div class="info">
        <div class="header">
          <h1>What is HiveAid?</h1>
        </div>
        <p>HiveAid is a 24 hour livestream hosted by the University of Manchester Esports Society, raising money for SpecialEffect.</p>
        <p>Streamed in two segments across one weekend with a variety of different games on show, there'll be something for everyone.</p>
        <p>PLUS, with the added excitement of the unique donation goals and incentives, you can be involved with shaping the outcome of the matches, and competitions going on throughtout the event.</p>
      </div>
      <div class="info">
        <div class="header">
          <h1>What is SpecialEffect?</h1>
        </div>
        <p>SpecialEffect enable severely disabled people to use technology in any way possible – using whichever part(s) of their body that work best - by adapting technology to their individual needs.</p>
        <p>It’s so important they can join in with family/friends, to be included and not left out. This can hugely benefit rehabilitation, mental wellbeing, self-esteem and quality of life – and much needed FUN!</p>
        <h4><a href="https://specialeffect.org.uk" target="_blank">Find out more about SpecialEffect</a></h4>
      </div>
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

.banner {
  width: 90%;
  margin-top: 50px;
}

.highlight-container {
  color: white;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  font-size: 15pt;

  .highlight {
    margin: 0 15px;
    &.left {
      text-align: right;
    }
    &.right {
      text-align: left;
    }
  }

  .divider-container {
    height: 80px;

    .divider {
      margin-top: 13px;
      height: 50px;
      border-left: 1px solid white;
    }
  }
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

.info-wrapper {
  display: flex;
  max-width: 100%;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;

  .info {
    color: white;
    margin: 18px;
    width: 400px;

    .header {
      display:flex;
      align-items: center;
      justify-content: center;
      height: 4em;

      h1, h2, h3, h4, h5 {
      }
    }

    p {
      font-size: 20px;
      font-family: serenity, sans-serif;
      font-weight: 300;
      font-style: normal;
    }
  }
}

@media only screen and (max-width: 745px) {
  .divider-container {
    display: none !important;
  }
  .left, .right {
    text-align: center !important;
  }
}

</style>
