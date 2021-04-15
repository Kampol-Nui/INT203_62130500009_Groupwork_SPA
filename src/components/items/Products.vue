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
        <div>{{ product.type }}</div>
        <div>{{ product.size }}</div>
      </div>
      <div>{{ product.name }}</div>
      <div class="line-through">{{ product.oldprice }}</div>
      <div>{{ product.price }}</div>
      <div class="text-red-700 w-20 inline-block">
        
        <img
          v-show="!product.like"
         v-on:click="toggleLikeWomen(product);" 
          src="../../assets/hearth.png"
          alt=""
          class="mt-6 transform hover:scale-110 duration-150 cursor-pointer"
        />
        <img
        v-on:click="toggleLikeWomen(product);" 
          v-show="product.like"
          src="../../assets/hearth2.png"
          alt=""
          class="mt-6 transform hover:scale-110 duration-150 cursor-pointer"
        />
        
      </div>
      <img 
          
         v-on:click="DeleteWomen(product);"
         
          src="../../assets/delete.png"
          alt=""
          class="inline-block mb-3.5 ml-60 transform hover:scale-110 duration-150 cursor-pointer"
        />
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
     this.$emit('fav-product',product)
     console.log(product)
   },
   DeleteWomen(product) {
     this.$emit('btn-delete-product',product)
     console.log(product)
   },
  },
};
</script>
