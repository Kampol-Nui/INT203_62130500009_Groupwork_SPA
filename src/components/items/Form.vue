<template>
  <form @submit.prevent="submitForm">
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Add Products</h1>
          <div class="flex justify-between mb-3">
            <span>Please select category :</span>
            <select v-model="selected" class="border">
              <option disabled value="">Please select one</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Baby</option>
            </select>
          </div>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="productname"
            placeholder="Product Name"
            v-model="name"
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="oldprice"
            placeholder="Oldprice"
            v-model="oldprice"
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="price"
            placeholder="price"
            v-model="price"
          />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="src"
            placeholder="src file"
            v-model="src"
          />
          

          <div class="flex justify-between mb-3">
            <span>Please select size :</span>
            <select v-model="size" class="border">
              <option disabled value="">Please select one</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
              <option>XS-XXL</option>
            </select>
          </div>
          <base-button 
            hight="h-10"
            width="w-20"
            label="Submit"
          ></base-button>

          
        </div>

        
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      
      selected: "",
      name: "",
      oldprice: "",
      price: "",
      src: "",
      gender: "",
      size: "",
    };
  },
  methods: {
    submitForm() {
      const DataSubmitted = {
        type: this.selected,

        name: this.name,
        oldprice: this.oldprice,
        price: this.price,
        describe: "",
        src: this.src,
        // gender: this.gender,
        size: this.size,
        like: false,
      };
      this.$emit("add-product", DataSubmitted);
    },
  },
};
</script>