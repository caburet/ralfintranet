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
                <select v-model="owner.marstatus" name="owner.marstatus" >
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

            <div class="control">
              <div class="select is-fullwidth">
                <select  v-model="owner.nationality" name="owner.nationality">
                  <option value="OTROS">Otros</option>
                  <option v-for="node in nationalitys" :value="node._id" >{{node._id}}</option>
                </select>
              </div>
            </div>

          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Direccion Calle</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.address"  placeholder="" name="owner.address">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.addressnr"  placeholder="" name="owner.addressnr">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Email</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.email"  placeholder="" name="owner.email">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Cond. IVA</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.taxregtype" name="owner.taxregtype">
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
            <div class="control">
              <div class="select is-fullwidth">
                <select  v-model="owner.workplace" name="owner.workplace">
                  <option v-for="node in jobpositions" :value="node._id" >{{node._id}}</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Puesto Laboral</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.work"  placeholder="" name="owner.work">
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>

    </div>
    <div class="tile is-ancestor" v-if="showConyuge">
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
                <input class="input" type="text" v-model="cyowner.cellphone"  placeholder="" name="cyowner.cellphone">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Tel. Fijo</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="cyowner.phone"  placeholder="" name="cyowner.phone">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Email</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="cyowner.email"  placeholder="" name="cyowner.email">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Ingresos</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                  <input class="input" type="text" v-model="cyowner.ingress"  placeholder="" name="cyowner.ingress">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">

            </div>
            <div class="control is-grouped">
              <div class="control">
                <button class="button is-primary" v-on:click="onclicksavethirdwindow()" name="Salvar">Salvar</button>
              </div>
            </div>
          </div>

        </div>
      </article>
    </div>
    </div>



    <div class="tile is-ancestor" >
      <div class="tile is-parent">
        <article class="tile is-child box">
             <div class="block">

            <div class="control is-horizontal">
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
    jobpositions (){
      return state.app.verifyclient.jobpositions
    },
    nationalitys (){
      return state.app.verifyclient.nationalitys
    },
    showModal() {
      return state.app.showModal
    },
    showConyuge() {
      return state.app.cyowner
    },
    modalContain() {
      return state.app.modalContain
    },
  },
  data () {
    return {
      owner:state.app.owner,
      cyowner:state.app.cyowner
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
            pcode: state.app.pcode,
            opcode: state.app.opcode,
            owner: Object.assign({}, state.app.owner, this.owner),
            cyowner: Object.assign({}, state.app.cyowner, this.cyowner)

          }
        }).then((response) => {
           if (response.data.ok==true) {
           console.log("Rsponse del consulta")
           this.$router.push('/simulator')
           console.log(response)
           }else {
             //alert(response.data.error)
             store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':"Error:"+response.data.error,button1:true, button3:false} )
           }
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
