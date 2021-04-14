<template>
  <div class="flex justify-center">
    <div class="mt-10 grid grid-cols-3 gap-y-10 w-3/4 mb-10" >
        <!-- <div v-for="women in womens" :key="women.id">{{women.name}}</div> -->
        <div v-for="product in womens"
          :key="product.id">
        <products  :product='product' @btn-click-women="editLike"></products>
        </div>
    </div></div>
</template>
<script>
 import Products from '../components/items/Products.vue'
export default {
  // inject: ['womens'],
 
  components: {
     Products
  },
   methods: {
  //  toggleLikeWomen(index) {
  //   //  this.$emit('btn-click-women',index)
  //   //  console.log(index)
  //   this.womens[index].like = !this.womens[index].like
  //  },
  async editLike(editingData) {
    editingData.like = !editingData.like
      const res = await fetch(`${this.url}/${editingData.id}`, {
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
      gender: editingData.gender,
      size: editingData.size,
      like: editingData.like
        })
      })
      const data = await res.json()
      this.womens = this.womens.map((survey) =>
        survey.id === data.id
          ? {
              ...survey,
              id: data.id,
      name: data.name,
      oldprice: data.oldprice,
      price: data.price,
      describe: data.describe,
      src: data.src,
      gender: data.gender,
      size: data.size,
      like: data.like
            }
          : survey
      )
      
    },
   async fetchSurveyResult() {
      const res = await fetch(this.url)
      const data = await res.json()
      // parses JSON response into native JavaScript objects
      return data
    },

     
 },
 async created() {
     this.womens = await this.fetchSurveyResult()
    // console.log(data)
    // this.$emit('tidtur',data)
  },
 data() {
    return {
      url:'http://localhost:5000/womens',
      womens:[]
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