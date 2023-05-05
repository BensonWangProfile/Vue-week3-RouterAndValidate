<template>
  <div>
    <nav>
      <RouterLink to="/backend/products-table">後台產品頁</RouterLink>
      <RouterLink to="/backend/users-table">後台使用者頁</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>
<style scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  padding: 40px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
}
</style>
