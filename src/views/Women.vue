<template>
  <div class="flex justify-center">
    <div class="mt-10 grid grid-cols-3 gap-y-10 w-3/4 mb-10" >
        <!-- <div v-for="women in womens" :key="women.id">{{women.name}}</div> -->
        <div v-for="(women,index) in womens"
          :key="women.id" v-on:click="toggleLikeWomen(index);" >
        <products  :product='women' ></products></div>
    </div></div>
</template>
<script>
 import Products from '../components/items/Products.vue'
export default {
  inject: ['womens'],
  // provide(){
  //   return{
  //   womens: this.womens}
  // },
  components: {
     Products
  },
   methods: {
   toggleLikeWomen(index) {
     this.$emit('btn-click-women',index)
     console.log(index)
   },
 },
 data() {
    return {}
  }
  //  data() {
  //    return {
  // //     test:[],
  // //     womens: [
  // //       {
  // //         id: 1,
  // //         name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
  // //         oldprice:'THB 5000',
  // //         price: 'THB 20',
  // //         describe: "",
  // //         src: "1.jpg",
  // //         gender:'ผู้หญิง',
  // //         size:'XS-XXL'
  // //       },
  // //       {
  // //         id: 1,
  // //         name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
  // //         oldprice:'THB 5000',
  // //         price: 'THB 20',
  // //         describe: "",
  // //         src: "1.jpg",
  // //         gender:'ผู้หญิง',
  // //         size:'XS-XXL'
  // //       },
  // //        {
  // //         id: 1,
  // //         name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
  // //         oldprice:'THB 5000',
  // //         price: 'THB 20',
  // //         describe: "",
  // //         src: "1.jpg",
  // //         gender:'ผู้หญิง',
  // //         size:'XS-XXL'
  // //       },
  // //        {
  // //         id: 1,
  // //         name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
  // //         oldprice:'THB 5000',
  // //         price: 'THB 20',
  // //         describe: "",
  // //         src: "1.jpg",
  // //         gender:'ผู้หญิง',
  // //         size:'XS-XXL'
  // //       },
  // //        {
  // //         id: 1,
  // //         name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
  // //         oldprice:'THB 5000',
  // //         price: 'THB 20',
  // //         describe: "",
  // //         src: "1.jpg",
  // //         gender:'ผู้หญิง',
  // //         size:'XS-XXL'
  // //       }

        
  // //     ]
  //    }
  // },
  
}
</script>