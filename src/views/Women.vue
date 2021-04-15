<template>
    <product-all-type :fav="false" :url="'http://localhost:5000/womens'"></product-all-type>
</template>
<script>
 import ProductAllType from '../components/items/ProductToAllType.vue'
export default {
    components:{
        ProductAllType
    }
}
</script>