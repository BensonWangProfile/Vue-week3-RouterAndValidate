<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  mounted() {
    console.log('route', this.$route) // 路由的屬性
    console.log('route', this.$router) // 路由方法
  }
}
</script>

<template>
  <div class="about">
    <VForm v-slot="{ errors, meta }" @submit="onSubmit">
      <label for="email">Email</label>
      <VField
        id="email"
        v-model.trim="email"
        name="email"
        type="email"
        label="信箱"
        rules="required|email"
        :class="{ error: errors.email }"
      />
      <ErrorMessage name="email" />
      <button type="submit" :disabled="!meta.valid">送出</button>
      {{ errors }}
    </VForm>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
