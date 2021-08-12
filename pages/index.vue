<template>
  <Auth />
</template>

<script>
import Auth from '@/components/blocks/authorization'
export default {
  components: {
    Auth
  },
  mounted () {
    console.log(localStorage.userAuth )
  }
}
</script>
