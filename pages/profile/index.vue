<template>
  <div class="">
    <h1 class="mb-8">Мой профиль</h1>
    <wrapper-block class="flex justify-between flex-wrap">
      <div class="w-1/2 pr-20">
        <Input v-model="firstName" class="block mb-4 w-full" line name="Имя"/>
        <Input v-model="lastName" class="block mb-4 w-full" line name="Фамилия"/>
      </div>
      <div class="w-1/2">
        <Input v-model="newLogin" class="block mb-4 w-full" line name="Сменить пароль"/>
        <Input v-model="newPassword" class="block mb-4 w-full" line name="Сменить логин"/>
      </div>
      <Button @click="click" red name="Сохранить" class="btn-profile"/>
    </wrapper-block>
  </div>
</template>

<script>
import WrapperBlock from '@/components/blocks/wrapperContent'
import Input from '@/components/ui/input'
import Button from '@/components/ui/button'

export default {
  layout: 'rootlayout',
  components: {
    WrapperBlock,
    Input,
    Button
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      newLogin: '',
      newPassword: ''
    }
  },
  mounted () {
    this.firstName = localStorage.firstName
    this.lastName = localStorage.lastName
  },
  methods: {
    click () {
      localStorage.firstName = this.firstName
      localStorage.lastName = this.lastName
      if (this.newLogin.length > 4 && this.newPassword.length) {
        localStorage.login = this.newLogin
        localStorage.password = this.newPassword
      }
      console.log('eeee', this.firstName)
      console.log('eee', this.lastName)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-profile {
  width: 200px;
  margin-left: auto;
}
</style>