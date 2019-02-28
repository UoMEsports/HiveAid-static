<template>
  <div class="announcement">

    <Countdown date="March 30, 2019 10:00"/>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue'

export default {
  name: 'announcement',
  components: {
    Countdown
  }
}
</script>
