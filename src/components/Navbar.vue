<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link tag="a" class="navbar-brand" to="/">Latihan CRUD</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/" exact-active-class="active">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/items" exact-active-class="active">Items</router-link>
          </li>

          <li class="nav-item">
            <router-link
              tag="a"
              class="nav-link"
              to="/items/add"
              exact-active-class="active"
            >Add Item</router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/about" exact-active-class="active">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
