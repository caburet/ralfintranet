<template>
  <div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Datos del titular del Credito</h1>
        <div class="block">
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Estado Civil</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.marstatus" >
                  <option value="0">Soltero</option>
                  <option value="1">Casado</option>
                  <option value="2">Divorciado</option>
                  <option value="3">Viudo</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Nacionalidad</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.nationality"  placeholder="">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Direccion Calle</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.address"  placeholder="">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.addressnr"  placeholder="">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Email</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.email"  placeholder="">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Cond. IVA</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.taxregtype" >
                  <option value="0">Responsable Inscripto</option>
                  <option value="1">Consumidor Final</option>
                  <option value="2">Iva No Resp.</option>
                  <option value="3">Exento</option>
                  <option value="4">Monotributo</option>
                  <option value="5">Exento Exterior</option>
                  <option value="6">Sujeto No Categorizado</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Situacion Laboral</label>
            </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" type="text" v-model="owner.work"  placeholder="">
                </p>
              </div>
            <div class="control-label">
              <label class="label">Puesto Laboral</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.workplace"  placeholder="">
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>

    </div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Datos Del Conyuge del Crédito</h1>




        <div class="block">
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Celular</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.cellphone"  placeholder="">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Tel. Fijo</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.phone"  placeholder="">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Email</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.email"  placeholder="">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Ingresos</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                  <input class="input" type="text" v-model="gowner.ingress"  placeholder="">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">

            </div>
            <div class="control is-grouped">
              <div class="control">
                <button class="button is-primary" v-on:click="onclicksavethirdwindow()">Salvar</button>
              </div>
            </div>
          </div>



        </div>
      </article>
    </div>
  </div>
    <modal v-if="showModal" @close="onclickclosemodal" @inquiry="onclickopeninquiry" @auth="onclickauthmodal" @pend="onclickpendmodal" @rech="onclickrechmodal" >
      <p>{{modalContain}}</p>
    </modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { INIT_AGENCIES, TOGGLE_MODAL } from 'vuex-store/mutation-types'
import store from './../../store'
import { Modal } from 'components/layout/'
const { state } = store
export default {
  components: {
    Modal
  },
  computed:{
    showModal() {
      return state.app.showModal
    },
    modalContain() {
      return state.app.modalContain
    },
  },
  data () {
    return {
      owner: {
        marstatus: '',
        nationality: '',
        address: '',
        addressnr: '',
        email: '',
        taxregtype:'',
        workplace: '',
        work: ''
      },
      gowner: {
        cellphone: '',
        phone: '',
        email: '',
        ingress: '',
      }
    }
  },
  created: function () {
  },
  stated: {},
  methods: {
    ...mapActions([
      'addCase'
    ]),
    onclickclosemodal () {
      store.commit(TOGGLE_MODAL, {'opened':false,'modalcontain':"vacio" ,button1:true, button3:false} )
      this.nextrule('')
    },
    onclickopeninquiry () {
      console.log("openinquiry")
      store.commit(TOGGLE_MODAL, {'opened':false,'modalcontain':"vacio" ,button1:true, button3:false} )
      store.commit(TOGGLE_INQUIRY,{'showinquiry':true,'showverify':false} )
    },
    onclickauthmodal (params) {
      this.setrulestatus(params,1)
      store.commit(TOGGLE_MODAL, {'opened':false,'modalcontain':"vacio" ,button1:true, button3:false} )
    },
    onclickpendmodal (params) {
      this.setrulestatus(params,3)
      store.commit(TOGGLE_MODAL, {'opened':false,'modalcontain':"vacio" ,button1:true, button3:false} )
    },
    onclickrechmodal (params) {
      this.setrulestatus(params,2)
      store.commit(TOGGLE_MODAL, {'opened':false,'modalcontain':"vacio" ,button1:true, button3:false} )
    },
    onclicksavethirdwindow () {

      if (true) {
        store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':'Se procede a grabar la informacion',button1:false, button3:false} )
         this.$http({
          method: 'GET',
          url: '/ralfintranet/api/setthirdwindow',
          transformResponse: [(data) => {
            return JSON.parse(data)
          }],
          params: {
            opcode: state.app.opcode,
            owner: Object.assign({}, state.app.owner, this.owner),
            gowner: Object.assign({}, state.app.gowner, this.gowner)

          }
        }).then((response) => {
          console.log("Rsponse del consulta")
          if (response.data.quotes.length==0)
          {
            alert("No se pudo cotizar")
          }
          store.commit(SECOND_DATA, response.data)
          store.commit(TOGGLE_MODAL, {'opened': false, 'modalcontain': '', button1: false, button3: false})
          this.nextrule(response)
          //this.$router.push('/additional')
          console.log(response)
        }).catch((error) => {
          console.log("error")
          let obj2 = {
            title: 'Error',
            message: error,
            customCloseBtnText: "Cerrar",
            type: 'error'
          }
          alert(error)

          console.log(error)
        })
      }
    }
  }
}
</script>
<style lang="scss">
.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto;
}
</style>
