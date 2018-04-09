<!-- Layout Page -->

<template>
  <div id="app">
    <router-link to='/'>Home</router-link>
    <router-link to='/newmap'>New Map</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
