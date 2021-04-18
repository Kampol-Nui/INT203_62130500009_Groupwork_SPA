<template>
  <nav class="border-b">
    <div class="nav">
        <div>
      <router-link to="/" class="flex space-x-2 mr-3 ml-3"
        ><img src="../../assets/images/logo2.svg" alt="logo" class="w-28 mt-0.5" />
        <!-- <img src="../../assets/logo.svg" alt="logo" class="w-10" /> -->
      </router-link >
      </div>
      <router-link to="women">WOMEN</router-link> 
      <router-link to="men">MEN</router-link >
      <a>KIDS</a>
      <a>BABY</a>
      <div class="flex justify-end w-full pr-20">
        <router-link to="addProd" class="mr-10">ADD PRODUCTS</router-link>
        <router-link to="fav"><img src="../../assets/images/hearth.png" alt="" /></router-link >
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