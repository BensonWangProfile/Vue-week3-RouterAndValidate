<template>
  <div>
    {{ item }}
    <ul class="row px-5">
      <li v-for="(card, key) in cardList" :key="key" class="col-4">
        <div class="card">
          <img :src="card.image" alt="" class="card-img-top p-5" />
          <div class="px-5">
            {{ card.id }}
            <p class="card-title">
              {{ card.title }}
            </p>
            <p>
              {{ card.price }}
            </p>
            <p class="card-text">
              {{ card.description }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['item'],
  data() {
    return {
      cardList: []
    }
  },
  methods: {
    // option api 如何用 async await
    // async fetchApiData() {
    //   try {
    //     const res = await axios.get('https://fakestoreapi.com/products?limit=5')
    //     this.cardList = res.data
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    fetchApiData() {
      axios
        .get('https://fakestoreapi.com/products?limit=5')
        .then((res) => {
          console.log(res)
          this.cardList = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    emitProductData() {
      this.$emit('ProductData', this.cardList)
    }
  },
  mounted() {
    this.fetchApiData()
  }
}
</script>
<style></style>
