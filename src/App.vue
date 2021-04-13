<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" > -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Navbar></Navbar>
<div class="flex justify-center">
  <div class=" mt-10  grid  grid-cols-3   gap-y-10 w-3/4 ">
    <ul v-for="result in items" :key="result.id" >
      <base-card >
        <img :src="require(`${result.pic}`)" alt="" /><div class="ml-1 mr-1 ">
        <div class="flex justify-between "><div>{{ result.gender}}</div><div>{{ result.size}}</div></div>
        <div>{{ result.name }}</div>
        <div class="line-through">{{ result.oldprice }}</div>
         <div class="text-red-700">
          {{result.price}}</div>
          </div>
      </base-card>
    </ul>
  </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from "./components/layout/Navbar.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    Navbar,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
          oldprice:'THB 5000',
          price: 'THB 20',
          describe: "",
          pic: "./assets/1.jpg",
          gender:'ผู้หญิง',
          size:'XS-XXL'
        },
        {
          id: 1,
          name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
          oldprice:'THB 5000',
          price: 'THB 20',
          describe: "",
          pic: "./assets/1.jpg",
          gender:'ผู้หญิง',
          size:'XS-XXL'
        },
         {
          id: 1,
          name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
          oldprice:'THB 5000',
          price: 'THB 20',
          describe: "",
          pic: "./assets/1.jpg",
          gender:'ผู้หญิง',
          size:'XS-XXL'
        },
         {
          id: 1,
          name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
          oldprice:'THB 5000',
          price: 'THB 20',
          describe: "",
          pic: "./assets/1.jpg",
          gender:'ผู้หญิง',
          size:'XS-XXL'
        },
         {
          id: 1,
          name: "WOMEN กางเกง Smart ขา 5 ส่วน ผ้าซาติน",
          oldprice:'THB 5000',
          price: 'THB 20',
          describe: "",
          pic: "./assets/1.jpg",
          gender:'ผู้หญิง',
          size:'XS-XXL'
        },
      ],
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
