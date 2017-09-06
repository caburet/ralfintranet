<template>
  <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
          <div class="box">
            <slot></slot>
            <br v-if="buttons3">
            <strong bold v-if="buttons3"> Ingrese sus datos para continuar.</strong>
            <input v-if="buttons3" v-model="username" name="username" class="input" type="text" placeholder="email@example.org">
            <input v-if="buttons3" v-model="password" name="password" class="input" type="password" placeholder="password">
            <br/><br/>
            <button  v-if="buttons3" class="button is-primary" @click="$emit('auth',[username,password])">Autorizar</button>
            <button  v-if="buttons3" class="button is-primary" @click="$emit('pend',[username,password])">Pendiente</button>
            <button  v-if="buttons3" class="button is-primary" @click="$emit('rech',[username,password])">Rechazar</button>
            <button  v-if="buttons1" class="button is-primary" @click="$emit('close')">Continuar</button>
            <button  v-if="form" class="button is-primary" @click="openInNewTab()">Encuesta</button>
            <img v-if="!buttons1 && !buttons3"src="spinner.gif">
          </div>
          </div>
        </div>
    </div>
</template>

<script>
import store from './../../store'
const { state } = store
export default {
  components: {},
  props: {},
  computed:{},
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods: {
    openInNewTab() {
    console.log(state.app.form)
    let url = 'http://develop-ralfprueba.oppen.io/inquiry/viewInquiry?inq=' + state.app.form
      var win = window.open(url, '_blank');
      win.focus();
    }
  },
  computed: {
    buttons3() {
      return state.app.buttons3
    },
    form() {
      return state.app.form
    },
    buttons1() {
      return state.app.buttons1
    }
  }
}
</script>
