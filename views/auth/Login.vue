<template>
<div class="content has-text-centered">
  <h1 class="is-title is-bold">Login</h1>

  <div class="columns is-vcentered">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
        <form v-on:submit.prevent="login">
          <label class="label">Email</label>
          <p class="control">
            <input v-model="data.body.webuser" class="input" type="text" placeholder="email@example.org">
          </p>
          <label class="label">Password</label>
          <p class="control">
            <input v-model="data.body.webpassword" class="input" type="password" placeholder="password">
          </p>

          <p class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="data.rememberMe">
              Remember me
            </label>
          </p>

          <hr>
          <p class="control">
            <button type="submit" class="button is-primary">Login</button>
            <button class="button is-default">Cancel</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
import { INIT_AGENCIES } from 'vuex-store/mutation-types'
  data () {
    return {
      data: {
        body: {
          webuser: null,
          webpassword: null
        },
        rememberMe: false
      },
      error: null
    }
  },
  mounted () {
    if (this.$auth.redirect()) {
      console.log('Redirect from: ' + this.$auth.redirect().from.name)
    }
    // Can set query parameter here for auth redirect or just do it silently in login redirect.
  },
  methods: {
    login () {
      console.log('va el 1do')
      this.$http({
        url: 'http://localhost:8080/myapp/loginPerson',
        dataType: 'text',
        contentType: 'text/plain',
        params: {
          parameters: {
            Normalized: false,
            webuser: this.data.body.webuser,
            webpassword: this.data.body.webpassword
          }
        }
      }).then((res) => {
        console.log('va el 2do')
        console.log('Auth Success')

          // console.log('Token: ' + this.$auth.token())
          // console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.is-title {
    text-transform: capitalize;
}
</style>
