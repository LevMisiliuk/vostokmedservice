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
  font-weight: 400;
  background: linear-gradient(0deg, #f2f2f2, #f2f2f2), #f6f6f6;

  font-size: 18px;
  line-height: 1.6;
  color: $primary-black;
  font-feature-settings: 'pnum' on, 'lnum' on;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
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

.blue-circle {
  width: 10px;
  height: 10px;
  background-color: $primary-pale-blue;
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.3s linear;
}

.breadcrumb {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 60px;
}

.blue-txt {
  color: $primary-blue;
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
.el-table {
  border-radius: 15px;
}
</style>
