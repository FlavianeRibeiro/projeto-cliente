<template>
  <div class="home">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: 'HomeView',
  components: {
    NavBar
}
}
</script>
