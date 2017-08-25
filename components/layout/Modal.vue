<template>
  <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
          <div class="box">
            <slot></slot>
            <button  class="button is-primary" @click="$emit('close')">Close</button>
          </div>
        </div>

    </div>
</template>

<script>
//import Tooltip from 'vue-bulma-tooltip'
//import { mapGetters, mapActions } from 'vuex'
//import {  LOGIN} from 'vuex-store/mutation-types'
import store from './../../store'
export default {

  components: {

  },

  props: {

  },

  computed:{},

  methods: {
  }
}
</script>

