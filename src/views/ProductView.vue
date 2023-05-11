<template>
  <div>
    <Loading
      v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
      loader="dots"
      :width="width"
    />

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
            <!-- <p class="card-text">
              {{ card.description }}
            </p> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  props: ['item'],
  data() {
    return {
      id: this.$route.query.id,
      cardList: [],

      isLoading: false,
      fullPage: true,
      width: 30
    }
  },
  components: { Loading },
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
          this.isLoading = true
          const fetchData = res.data
          return fetchData
        })
        .then((data) => {
          setTimeout(() => {
            this.isLoading = false
          }, 300)
          this.cardList = data.filter((item) => {
            return item.id === this.id * 1
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  watch: {
    '$route.query.id': {
      handler(newValue) {
        this.id = newValue
        this.fetchApiData()
      }
    }
  },
  mounted() {
    this.fetchApiData()
  }
}
</script>
<style></style>
