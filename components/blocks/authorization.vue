<template>
  <div class="">
    <Logo class="mb-16" />
    <form
      id="app"
      @submit="checkFormReg"
      v-if="!userRegistration"
    >
      <Input :error='errorLogin' v-model="login" class="block mb-4" outline name="Логин"/>
      <Input :error='errorPassword' v-model="password" class="block mb-4" outline name="Пароль"/>
      <Button type="submit" v-if="!userRegistration" @click="registration" red name="Регистрация"/>
    </form>
    <form
      id="app"
      @submit="checkFormAuth"
      action="/profile"
      v-if="userRegistration"
    >
      <Input :error='errorLogin' v-model="login" class="block mb-4" outline name="Логин"/>
      <Input :error='errorPassword' v-model="password" class="block mb-4" outline name="Пароль"/>
      <Button type="submit" v-if="userRegistration" red name="Войти"/>
    </form>
  </div>
</template>

<script>
import Logo from '@/components/icons/logo'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
export default {
  components: {
    Logo,
    Button,
    Input
  },
  data () {
    return {
      userRegistration: false,
      login: '',
      password: '',
      errorLogin: false,
      errorPassword: false
    }
  },
  mounted () {
    (localStorage.userRegistration === 'true') ? this.userRegistration = true : this.userRegistration = false
  },
  methods: {
    checkFormReg (e) {
      if (this.login && this.password) {
        console.log('eeee')
        localStorage.login = this.login
        localStorage.password = this.password
        localStorage.userRegistration = true
        return true
      }
      e.preventDefault()
    },
    checkFormAuth (e) {
      if (this.login === localStorage.login && this.password === localStorage.password) {
        localStorage.userAuth = true
        return true
      } else {
        console.log('error')
      }
      e.preventDefault()
    },
    registration () {
      if (this.login.length > 4 && this.password.length > 4) {
        localStorage.userRegistration = true
      } else if (this.login.length < 4) {
        this.errorLogin = true
      }
    },
    auth () {
      console.log('auth')
    },
    change () {
      console.log('eeee')
    },
    submit (e) {
      console.log('eeee')
      e.preventDefault()
    }
  }
}
</script>
