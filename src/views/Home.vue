<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <video autoplay muted loop id="myVideo" class="fixed">
  <source src="../assets/video.mp4" type="video/mp4">
</video>
<div class="absolute top-1/2 left-1/2 -ml-4">
  <router-link to="women"><base-button 
            hight="h-16"
            width="w-48"
            label="See Our Products !"
          ></base-button></router-link>
</div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
