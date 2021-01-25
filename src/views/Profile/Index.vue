<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData"/>
    </template>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index'
export default {
  name: 'ProfileView',
  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },
  components: { BaseLoading, MainBlock },
  mixins: [
    setError
  ],
  created () {
    this.isLoading = true
    // Desestructuración
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    fetchData (region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.isLoading = false
          this.profileData = data
        })
        .catch((err) => {
          this.isLoading = false
          this.profileData = null

          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }

          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }

          this.setAiErr(errObj)
          this.$router.push({ name: 'Error' })
        })
    }
  }
}
</script>
