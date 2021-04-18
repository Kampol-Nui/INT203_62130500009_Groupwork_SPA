<template>
  <div class="flex justify-center">
    <div class="prod" >
        <!-- <div v-for="women in womens" :key="women.id">{{women.name}}</div> -->
        <div v-for="product in products"
          :key="product.id">
        <products  :product='product' @fav-product="editLike" @btn-delete-product="deleteProduct"></products>
        </div>
    </div></div>
    <!-- <add-products :womens="this.womens" ></add-products> -->
</template>
<script>
 import Products from './Products.vue'
// import AddProducts from './AddProducts.vue'


export default {
  // inject: ['womens'],
 
props: ["url","fav"],
 
  components: {
     Products,
    //  AddProducts
  },
   methods: {
   async deleteProduct(passingData) {
      if (confirm(`Are you sure to delete (${passingData.name})?`)) {
        //const res = 
        await fetch(`${this.url}/${passingData.id}`, {
          method: 'DELETE'
        }) }},
  //  toggleLikeWomen(index) {
  //   //  this.$emit('btn-click-women',index)
  //   //  console.log(index)
  //   this.womens[index].like = !this.womens[index].like
  //  },
  async editLike(editingData) {
    editingData.like = !editingData.like
      //const res = 
      await fetch(`${this.url}/${editingData.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
         id: editingData.id,
      name: editingData.name,
      oldprice: editingData.oldprice,
      price: editingData.price,
      describe: editingData.describe,
      src: editingData.src,
      type: editingData.type,
      size: editingData.size,
      like: editingData.like
        })
      })
      // const data = await res.json()
      // this.products = this.products.map((survey) =>
      //   survey.id === data.id
      //     ? {
      //         ...survey,
      //         id: data.id,
      // name: data.name,
      // oldprice: data.oldprice,
      // price: data.price,
      // describe: data.describe,
      // src: data.src,
      // type: data.type,
      // size: data.size,
      // like: data.like
      //       }
      //     : survey
      // )
      
    },
   async fetchProducts() {
      const res = await fetch(this.url)
      const data = await res.json()
      // parses JSON response into native JavaScript objects
      return data
    },

     
 },
 async created() {
   const data = await this.fetchProducts()
   if(this.fav==false){
     
this.products = data}else{
     var i;
      for ( i = 0; i < data.length; i++) {
  if(data[i].like == true){
    
        this.products.push(data[i]) 
  }
  }
 }
    // console.log(data)
    // this.$emit('tidtur',data)
  },
 data() {
    return {
      
      products:[]
    }
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