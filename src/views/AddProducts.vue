<template>
    <form-input @add-product="AddProduct"></form-input>
</template>
<script>
import FormInput from '../components/items/Form.vue'
export default {
    
        // props: ["womens"],
    
    data(){
        return{
            url:'http://localhost:5000/womens'
        }
    },
    components:{
        FormInput
    },
    methods:{
        
        async AddProduct(prodData){
                if(prodData.type=='Men'){
                    console.log('yess')
                    this.url = 'http://localhost:5000/mens'
                }
                if(prodData.type=='Kids' || prodData.type=='Baby'){
                    alert(`adding ${prodData.type} is not support now`)
                    return
                }
                if(prodData.type==""){
                    alert('plase insert data')
                    return
                }
                //const res = 
                await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          
      name: prodData.name,
      oldprice: prodData.oldprice,
      price: prodData.price,
      describe: prodData.describe,
      src: prodData.src,
      type: prodData.type,
      size: prodData.size,
      like: prodData.like
        })
      })
       //const data = await res.json()
      //spread array
    //   this.womens = [...this.womens, data]
      //or add new item to the end of array
    //    this.womens.push(data)
       //this.$emit('pass-data',data)
       alert(`Added (${prodData.name})`)
    },
        },

    //     async addNewSurvey(newSurvey) {
      
    // }
}
</script>