<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-6 col-md-8">
      <div class="alert alert-dismissible alert-success mb-5" v-if="this.success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Sukses!</strong> Data berhasil diupdate. Anda akan dialihkan secara otomatis dalam 3 detik.
      </div>

      <form v-on:submit.prevent="updateItem" v-if="item.nama !== ''">
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

        <button type="submit" class="btn btn-primary float-right">Update</button>
      </form>

      <div v-else>
        <p>{{ loading }}</p>
      </div>
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
      loading: "Loading ...",
      item: {
        nama: "",
        harga: ""
      },
      submitted: false,
      success: false
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
  mounted() {
    axios
      .get(
        `https://shady-barang-backend.herokuapp.com/api/barang/${this.$route.params.id}`
      )
      .then(item => {
        this.item = item.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    updateItem() {
      this.submitted = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      axios
        .patch(
          `https://shady-barang-backend.herokuapp.com/api/barang/update/${this.item.id}`,
          { ...this.item }
        )
        .then(response => {
          this.success = true;

          setTimeout(() => {
            this.$router.push("/items");
          }, 3000);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>