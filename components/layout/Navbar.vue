<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand" href="http://www.openorange.com">


              <div class="is-hidden-mobile">
                <span class="vue">Power by </span>
                <img src="http://openorange.com/site/img/logo_open.png" :alt="pkginfo.description">
              </div>

          </a>
        </div>
        <div class="nav-right is-flex">
          <router-link v-if="!personname" to="/login" class="nav-item">Login</router-link>
          <a v-if="personname" @click="logout" class="nav-item">{{personname}} LOGOUT</a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import { mapGetters, mapActions } from 'vuex'
import {  LOGIN} from 'vuex-store/mutation-types'
import store from './../../store'
export default {

  components: {
    Tooltip
  },

  props: {
    show: Boolean
  },

  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar',
    personname: 'personname'
  }),

  methods: {
    ...mapActions([
      'toggleSidebar'
    ]),
    logout () {


      this.$http({
        method: 'GET',
        url: '/oo/api/logout',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
        }
      }).then((response) => {
        console.log(response)
        store.commit(LOGIN, '')
        this.$router.push('/login')

      }).catch((error) => {
        store.commit(LOGIN, '')
        this.$router.push('/login')
        console.log(error)
      })


    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}
</style>
