<template>
  <div class="hello">
    <ul>
      <li>
        <router-link v-bind:style="'color:#4db3ff'" to="counter">Counter</router-link>
        <router-link v-bind:style="'color:#4db3ff'" to="shopping-cart">Shopping cart</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
