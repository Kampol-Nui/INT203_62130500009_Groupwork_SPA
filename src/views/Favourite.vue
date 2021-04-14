<template>
    <div class="flex justify-center">
    <div class="mt-10 grid grid-cols-3 gap-y-10 w-3/4 mb-10" >
        <!-- <div v-for="women in womens" :key="women.id">{{women.name}}</div> -->
        <div v-for="(women,index) in womens"
          :key="women.id" v-on:click="toggleLikeWomen(index);" v-show="women.like" >
        <products  :product='women' ></products></div>

        <div v-for="(men,index) in men"
          :key="men.id" v-on:click="toggleLikeMan(index);" v-show="men.like" >
        <products  :product='men' ></products></div>
    </div></div>
    
    
</template>
<script>
//  import WomenProducts from '../views/Women.vue'
 import Products from '../components/items/Products.vue'
export default {
    inject:['womens','men'],
     data() {
    return {}
  },
    components:{
        //  WomenProducts
         Products
    },
    methods: {
   toggleLikeWomen(index) {
     this.$emit('btn-click-women',index)
     console.log(index)
   },

   toggleLikeMan(index) {
     this.$emit('btn-click-man',index)
     console.log(index)
   }
   }
}
</script>