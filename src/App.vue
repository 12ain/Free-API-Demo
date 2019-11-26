<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <van-button type="primary">Home</van-button>
      </router-link>
      <router-link to="/about">
        <van-button type="danger">About</van-button>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
