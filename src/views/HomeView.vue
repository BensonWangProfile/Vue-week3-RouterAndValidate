<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router' // 不是 component 組件需要額外 import

const loginClick = () => {
  router.push({ path: '/login' })
  // router.push({ path: '/login', component: () => import('../components/LoginItem.vue') })
}
</script>

<template>
  <div class="container">
    <nav class="navbar-nav">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/products">Products</RouterLink>
      <a class="nav-link" @click.prevent="loginClick">Login</a>
    </nav>
    <RouterView />
  </div>
</template>

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
