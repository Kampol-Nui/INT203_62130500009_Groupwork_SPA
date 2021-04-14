<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <video autoplay muted loop id="myVideo" >
  <source src="../assets/video.mp4" type="video/mp4">
</video>
<div class="absolute top-1/2 left-1/2 -ml-4">
  <button id="myBtn" onclick="myFunction()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-16 w-48">See Our Products !</button>
</div>
<p>sdasdas</p>
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
