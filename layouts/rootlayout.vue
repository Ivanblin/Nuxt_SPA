<template>
  <div class="flex">
    <SideBar />
    <Nuxt class="main" />
  </div>
</template>

<script>
import SideBar from '@/components/blocks/sideBar'

export default {
  components: {
    SideBar
  },
  fetch ({ redirect }) {
    redirect('/')
  }
}
</script>

<style scoped lang="scss">
.main {
  background: #EFF1F9;
  width: 100%;
  height: 100vh;
  padding: 40px 52px 0px 52px;
}
</style>
