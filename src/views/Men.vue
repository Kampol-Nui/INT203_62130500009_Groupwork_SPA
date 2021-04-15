<template>
<product-all-type :fav="false" :url="'http://localhost:5000/mens'"></product-all-type>
    <!-- <add-products :womens="this.womens" ></add-products> -->
</template>
<script>
//  import Products from '../components/items/Products.vue'
 import ProductAllType from '../components/items/ProductToAllType.vue'
// import AddProducts from './AddProducts.vue'


export default {
  // inject: ['womens'],
 
  components: {
    //  Products,
     ProductAllType
    //  AddProducts
  },
   
//  data() {
//     return {
//       url:'http://localhost:5000/mens',
//       womens:[]
//     }
//   }
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