<template>
  <div>
    <h4>Add an Item</h4>
    <hr />

    <CreateItem></CreateItem>
  </div>
</template>

<script>
import CreateItem from "../components/create-item/CreateItem.vue";

export default {
  components: {
    CreateItem
  }
};
</script>

<style scoped>
</style>
