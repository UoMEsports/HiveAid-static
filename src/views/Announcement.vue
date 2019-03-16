<template>
  <div class="announcement">
    <img class="banner" src="../assets/img/banner.png"/>

    <Countdown date="March 30, 2019 10:00"/>

    <div class="highlight-container">
      <div class="highlight left">
        <h1>30<sup>th</sup> - 31<sup>st</sup> March</h1>
      </div>
      <div class="divider-container">
        <div class="divider"></div>
      </div>
      <div class="highlight right">
        <h1>24 Hours</h1>
      </div>
    </div>

    <div class="button-wrapper donate">
      <div class="button">
        <a href="https://honeypot.uomesports.co.uk">
          <img class="button-img" src="../assets/img/button.png">
        </a>
        <a class="button-link" href="https://honeypot.uomesports.co.uk">
          <h3>DONATE NOW</h3>
        </a>
      </div>
    </div>

    <div class="charity-container">
      <h3>Raising for</h3>
      <img src="../assets/img/special-effect.png" class="charity-logo"/>
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
        <p>The main attraction will be several "all-star" events, where we take the best players from the uni esports scene, mix them up, and make them battle it out to find the best of the best.</p>
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
    <div class="button-wrapper footer">
      <div class="button">
        <a href="mailto:info@uomesports.co.uk">
          <img class="button-img" src="../assets/img/button.png">
        </a>
        <a class="button-link" href="mailto:info@uomesports.co.uk">
          <h3>CONTACT US</h3>
        </a>
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
    sup {
      font-size: 20px;
    }
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

.charity-container {
  color: white;

  .charity-logo {
    max-width: 100%;
    margin-bottom: 15px;
    margin-top: -15px;
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
    }

    p {
      font-size: 20px;
      font-family: serenity, sans-serif;
      font-weight: 300;
      font-style: normal;
    }
  }
}

.button-wrapper {
  max-width: 300px;
  margin: auto;
  padding-bottom: 15px;

  &.footer {
    padding-bottom: 50px;
  }

  .button {
    color: black;
    position: relative;
    max-width: 100%;

    .button-img {
      height: 100%;
      width: 100%;
    }

    .button-link {
      color: black;
      position: absolute;
      left: 50%;
      top: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      text-decoration: none;
      h3 {
        color: black;
        font-size: 30px;
      }
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
