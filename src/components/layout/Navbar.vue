<template>
  <nav class="border-b">
    <div class="flex justify-start space-x-6 space-y-2 bg-white ml-5 pt-5 pb-5">
        <div>
      <router-link to="/" class="flex space-x-2 mr-6"
        ><img src="../../assets/logo.svg" alt="logo" class="w-10" />
        <img src="../../assets/logo.svg" alt="logo" class="w-10" />
      </router-link >
      </div>
      <router-link to="women">WOMEN</router-link> 
      <router-link to="men">MEN</router-link >
      <a>KIDS</a>
      <a>BABY</a>
      <div class="flex justify-end w-full pr-20">
        <router-link to="addProd" class="mr-10">ADD PRODUCTS</router-link>
        <router-link to="fav"><img src="../../assets/hearth.png" alt="" /></router-link >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Footer",
  //   props: {
  //     msg: String
  //   }
};
</script>