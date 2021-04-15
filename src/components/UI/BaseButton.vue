<template>
  <button @click="buttonClick"   :class="[hight, width]" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ">
    <slot>{{ label }} </slot>
  </button>
</template>
<script>
export default {
  props: ['hight', 'width','label'],

  emits: ['btn-click'],

  methods: {
    // buttonClick() {
    //   this.$emit('btn-click', {
    //     label: this.label
    //   })
    // }
  }
}
</script>
