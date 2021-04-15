<template>
<h1 class="font-bold text-2xl ml-36 mt-6">Favourite in Womens</h1>
    <product-all-type :fav="true" :url="'http://localhost:5000/womens'"></product-all-type>
    <h1 class="font-bold text-2xl ml-36 mt-6">Favourite in Mens</h1>
    <product-all-type :fav="true" :url="'http://localhost:5000/mens'"></product-all-type>
</template>
<script>
 import ProductAllType from '../components/items/ProductToAllType.vue'
export default {
    components:{
        ProductAllType
    }
}
</script>