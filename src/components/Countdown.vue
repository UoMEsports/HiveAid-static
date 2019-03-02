<template>
  <div class="countdown">
    <div class="block">
      <img class="hexagon" src="../assets/img/hexagon.png"/>
      <div class="text-wrapper">
        <p class="digit">{{ days | two_digits }}</p>
        <p class="text">Days</p>
      </div>
    </div>
    <div class="block">
      <img class="hexagon" src="../assets/img/hexagon.png"/>
      <div class="text-wrapper">
        <p class="digit">{{ hours | two_digits }}</p>
        <p class="text">Hours</p>
      </div>
    </div>
    <div class="block">
      <img class="hexagon" src="../assets/img/hexagon.png"/>
      <div class="text-wrapper">
        <p class="digit">{{ minutes | two_digits }}</p>
        <p class="text">Minutes</p>
      </div>
    </div>
    <div class="block">
      <img class="hexagon" src="../assets/img/hexagon.png"/>
      <div class="text-wrapper">
        <p class="digit">{{ seconds | two_digits }}</p>
        <p class="text">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countdown',

  props: {
    date: String
  },

  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },

  mounted () {
    this.$options.countdownInterval = setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 999)
  },

  computed: {
    seconds () {
      return (this.timestamp - this.now) % 60
    },

    minutes () {
      return Math.trunc((this.timestamp - this.now) / 60) % 60
    },

    hours () {
      return Math.trunc((this.timestamp - this.now) / 60 / 60) % 24
    },

    days () {
      return Math.trunc((this.timestamp - this.now) / 60 / 60 / 24)
    },

    timestamp () {
      return Math.trunc(Date.parse(this.date) / 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

.countdown {
  display: flex;
  margin: auto;
  justify-content: center;
}

.block {
  margin: 20px;
  position: relative;

  color: black;

  .hexagon {
    height: auto;
    width: 120px;
  }

  .text-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 100%;

    * {
      width: 100%;
      margin: 0;
      text-align: center;
    }

    .text {
      font-size: 18px;
    }

    .digit {
      font-size: 60px;
    }
  }
}

</style>
