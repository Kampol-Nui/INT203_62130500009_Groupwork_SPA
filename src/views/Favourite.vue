<template>
    <div class="flex justify-center">
    <div class="mt-10 grid grid-cols-3 gap-y-10 w-3/4 mb-10" >
        <!-- <div v-for="women in womens" :key="women.id">{{women.name}}</div> -->
        <!-- <div v-for="(women,index) in womens"
          :key="women.id" v-on:click="toggleLikeWomen(index);"  >
        <products  :products='women' ></products></div> -->
<div v-for="women in womens"
          :key="women.id">
        <products  :product='women' @btn-click-women="editLike" v-show="women.like"></products>
        </div>

        <div v-for="(men,index) in men"
          :key="men.id" v-on:click="toggleLikeMan(index);" v-show="men.like" >
        <products  :product='men' ></products></div>
    </div></div>
    
    
</template>
<script>
//  import WomenProducts from '../views/Women.vue'
 import Products from '../components/items/Products.vue'
export default {
    // inject:['womens','men'],
//      data() {
//     return {}
//   },
data() {
    return {
      url:'http://localhost:5000/womens',
      womens:[]
    }
  },
    components:{
        //  WomenProducts
         Products
    },
    methods: {
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
   toggleLikeWomen(index) {
     this.$emit('btn-click-women',index)
     console.log(index)
   },

   toggleLikeMan(index) {
     this.$emit('btn-click-man',index)
     console.log(index)
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
    console.log(this.womens)
    // this.$emit('tidtur',data)
  },
}
</script>