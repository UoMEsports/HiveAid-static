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
  max-width: 100%;

  font-family: Azonix Regular, sans-serif;

  background-image: url('./assets/img/background-tile.png');
  background-repeat: repeat;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
