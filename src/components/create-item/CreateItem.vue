<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-6 col-md-8">
      <form v-on:submit.prevent="addBarang">
        <div class="form-group">
          <label for="namaBarang">Nama Barang</label>
          <input
            type="text"
            class="form-control"
            id="namaBarang"
            placeholder="Masukkan nama barang"
            v-model="item.nama"
          />

          <!-- error handler untuk nama -->
          <div v-if="submitted">
            <small
              id="errorName"
              class="form-text text-danger"
              v-if="!$v.item.nama.required"
            >Nama tidak boleh kosong!</small>
          </div>
        </div>

        <div class="form-group">
          <label for="hargaBarang">Harga Barang</label>
          <input
            type="number"
            class="form-control"
            id="hargaBarang"
            placeholder="Masukkan harga barang"
            v-model="item.harga"
          />

          <!-- error handler untuk harga -->
          <div v-if="submitted">
            <small
              id="errorHarga"
              class="form-text text-danger"
              v-if="!$v.item.harga.required"
            >Harga tidak boleh kosong!</small>
          </div>
        </div>

        <button type="submit" class="btn btn-primary float-right">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { required } from "vuelidate/lib/validators";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      item: {
        nama: "",
        harga: ""
      },
      submitted: false
    };
  },
  validations: {
    item: {
      nama: {
        required
      },
      harga: {
        required
      }
    }
  },
  methods: {
    addBarang() {
      this.submitted = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      axios
        .post("https://shady-barang-backend.herokuapp.com/api/barang/add", {
          ...this.item
        })
        .then(item => {
          this.$router.push("/items");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>
