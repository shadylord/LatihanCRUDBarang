<template>
  <tr>
    <th scope="row">{{ itemIndex + 1 }}</th>
    <td>{{ item.nama }}</td>
    <td>{{ item.harga }}</td>
    <td>
      <button type="button" class="btn btn-warning btn-sm" v-on:click="updateItem">Update</button>
    </td>
    <td>
      <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteItem">Delete</button>
    </td>
  </tr>
</template>

<script>
import axios from "axios";

export default {
  props: ["item", "itemIndex"],
  methods: {
    updateItem() {
      this.$router.push(`/items/update/${this.item.id}`);
    },
    deleteItem() {
      axios
        .delete(
          `https://shady-barang-backend.herokuapp.com/api/barang/delete/${this.item.id}`
        )
        .then(response => {
          this.$emit("deleteItemChildMethod", this.itemIndex);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>
