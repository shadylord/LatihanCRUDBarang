<template>
  <div>
    <h4>About</h4>
    <hr />

    <div class="card mb-5">
      <img src="../image/blooms.jpg" class="card-img-top" alt="Author" />
      <div class="card-body">
        <h5 class="card-title">About Author</h5>

        <p class="card-text mt-4 ml-4 mb-4 quote">
          <em>I rock, I roll, I bloom, I grow!</em>
        </p>

        <p class="card-text float-right">
          <small class="text-muted">Rizky Ramadhan 2019</small>
        </p>
      </div>
    </div>

    <h5>Lorem ipsum dolor sit amet</h5>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius molestiae laboriosam assumenda facilis nam, ducimus provident dolore cupiditate corrupti quia mollitia debitis ullam nobis aperiam quisquam atque libero asperiores!</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aut impedit nam rem consequatur, quasi eveniet hic in aliquid, molestiae omnis vitae fuga doloribus consequuntur a recusandae iste? Molestias, laudantium!</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aut impedit nam rem consequatur, quasi eveniet hic in aliquid, molestiae omnis vitae fuga doloribus consequuntur a recusandae iste? Molestias, laudantium!</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      imageUrl: ""
    };
  }
};
</script>

<style scoped>
.quote {
  border-left-style: solid;
  border-width: 5px;
  border-color: #4a4b46;
  padding-left: 1rem;
  padding-top: 2rem;
  height: 5rem;
}
</style>

