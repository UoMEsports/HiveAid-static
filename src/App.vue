<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  @import './assets/scss/global.scss';

  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  @font-face {
    font-family: 'Azonix Regular';
    font-style: normal;
    font-weight: normal;
    src: url('./assets/fonts/azonix.woff') format('woff');
  }

  * {
    font-family: azonix, sans-serif;
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
