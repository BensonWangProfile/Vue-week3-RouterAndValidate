<template>
  <div class="products-page">
    <nav>
      <p>Home / Products</p>
      <ul class="menu">
        <!-- <li><a href="#chairs">Chairs</a></li> -->
        <li v-for="(product, key) in products" :key="key">
          <!-- <RouterLink :to="`/products/${product.item}`" class="nav-link">{{
            product.item
          }}</RouterLink> -->

          <RouterLink
            :to="{
              path: `/products/${product.item}`,
              query: {
                id: key + 1
              }
            }"
            class="nav-link"
            >{{ product.item }}</RouterLink
          >
        </li>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      products: [
        { item: 'chairs' },
        { item: 'tables' },
        { item: 'office' },
        { item: 'storage' },
        { item: 'stools-and-benches' }
      ]
    }
  },
  components: {
    RouterView,
    RouterLink
  }
}
</script>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
}
div {
  display: flex;
  flex-direction: row;
}

.products-page {
  display: flex;
  flex-direction: row;
  gap: 100px;
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
