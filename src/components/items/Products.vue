<template>
  <!-- <li class="flex flex-row items-center m-2">
    <img
      class="w-18 h-24"
      :src="require(`../../assets/${women.src}`)"
    />
   
  </li> -->

  <base-card >
    <img :src="require(`../../assets/${product.src}`)" alt="" v-on:click="toggleLikeWomen(product);" />
    <div class="ml-1 mr-1">
      <div class="flex justify-between text-gray-400">
        <div>{{ product.gender }}</div>
        <div>{{ product.size }}</div>
      </div>
      <div>{{ product.name }}</div>
      <div class="line-through">{{ product.oldprice }}</div>
      <div class="text-red-700">
        {{ product.price }}
        <img
          v-show="!product.like"
         
          src="../../assets/hearth.png"
          alt=""
          class="mt-6 transform hover:scale-110 duration-150 cursor-pointer"
        />
        <img
          v-show="product.like"
         
          src="../../assets/hearth2.png"
          alt=""
          class="mt-6 transform hover:scale-110 duration-150 cursor-pointer"
        />
      </div>
      
    </div>
  </base-card>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    // changeUsername(product) {
    //   this.$emit("btn-click", product);
    //   console.log(this.product);
    // },
    toggleLikeWomen(product) {
     this.$emit('btn-click-women',product)
     console.log(product)
   },
  },
};
</script>
