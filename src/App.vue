<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Raleway';
  background: linear-gradient(0deg, #F2F2F2, #F2F2F2), #F6F6F6;

  font-size: 18px;
  line-height: 1.6;
  color: $primary-black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

p {
  margin: 0;
  line-height: 150%;
}

.container {
  width: 100%;
  max-width: 1510px;
  margin: 0 auto;
  padding: 70px;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: $primary-black;
}

img {
  max-width: 100%;
}
</style>
