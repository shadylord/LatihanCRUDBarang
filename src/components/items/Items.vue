<template>
  <div class="row">
    <div class="col">
      <div class="alert alert-dismissible alert-success" v-if="success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Sukses!</strong> Data berhasil dihapus.
      </div>

      <table v-if="items.length > 0" class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Nama</th>
            <th scope="col">Harga</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <Item
            v-for="(item, index) in items"
            :key="item.id"
            v-bind:item="item"
            v-bind:itemIndex="index"
            v-on:deleteItemChildMethod="deleteItem"
          ></Item>
        </tbody>
      </table>

      <div v-else>
        <p>{{ loading }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Item from "./item/Item.vue";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      loading: "Loading ...",
      items: [],
      success: false
    };
  },
  mounted() {
    axios
      .get("https://shady-barang-backend.herokuapp.com/api/barang")
      .then(items => {
        this.items = items.data;

        if (this.items.length === 0) {
          this.loading = "There is no data yet.";
        }
      })
      .catch(error => console.log(error));
  },
  methods: {
    deleteItem(index) {
      this.items.splice(index, 1);
      this.success = true;

      setTimeout(() => (this.success = false), 3000);
    }
  },
  components: {
    Item
  }
};
</script>

<style scoped>
</style>
