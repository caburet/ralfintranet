<template>
  <div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Datos del Automovil</h1>
        <h1 class="title error" v-if="showerrormensage">{{errormensage}}</h1>
        <div class="block">
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Marca</label>
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select  v-model="car.brand" v-on:change="loadmodels()">
                <option v-for="node in brands" :value="node._id"  >{{node.label}}</option>
              </select>
            </div>
          </div>


        </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Modelo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  v-model="car.model" v-on:change="loadyears()">
                  <option v-for="node in models" :value="node._id">{{node.label}}</option>
                </select>
              </div>
            </div>

          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Año</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  v-model="car.year" v-on:change="loadcarvalue()">
                  <option v-for="node in years" :value="node.label">{{node.label}}</option>
                </select>
              </div>
            </div>

          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">0km</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="car.km0"  v-on:change="loadcarvalue()">
                  <option value="0">No</option>
                  <option value="1">Si</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Valor GNC</label>
            </div>
            <div class="control">
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" v-model="car.gnc" type="text" >
                </p>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Uso</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="car.use" >
                  <option value="0">Particular</option>
                  <option value="1">Transporte de Personas</option>
                  <option value="2">Transporte de Cargas</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">

            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="onclicksavecar()">Salvar</button>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div class="tile is-parent" v-if="false">
      <article class="tile is-child box">
        <h1 class="title">Datos del Prestamo</h1>




        <div class="block">
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Valor info</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <input class="input" type="text" v-model="car.infovalue"  placeholder="" disabled>
              </p>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Monto</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="amount" type="text" >
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Plazo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="month" >
                  <option v-for="node in months" :value="node"  >{{node}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tasa</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="tasa" type="text" >
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">

            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="onclickfn()">Calcular</button>
            </div>
          </div>
        </div>
      </article>
    </div>


    </div>
    <div class="tile is-ancestor" v-if="false">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Datos Del Titular del Crédito</h1>




        <div class="block">
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Nacimiento</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <input class="input" type="date" v-model="owner.birthdate"  placeholder="">
              </p>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Ingresos</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <input class="input" type="text" v-model="owner.ingress"  placeholder="">
              </p>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Provincia</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.province" >
                  <option value="0">No</option>
                  <option value="1">Si</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Localidad</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.locality" >
                  <option value="0">No</option>
                  <option value="1">Si</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Celular</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.cellphone" placeholder="Numero">
              </p>
            </div>
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tel. Laboral</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.workphone" type="text" >
              </p>
            </div>
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="onclickfn()">Calcular</button>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tel. Fijo</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.phone" type="text" >
              </p>
            </div>
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { INIT_AGENCIES, LOAD_MODELS, LOAD_YEARS, LOAD_RATES } from 'vuex-store/mutation-types'
import store from './../../store'
const { state } = store
export default {
  components: {
  },
  data () {
    return {
      seenconyuge: false,
      seenconcubino: false,
      seengarante: false,
      owner: {
        birthdate:'',
        ingress: '',
        province: '',
        locality: '',
        cellphone: '',
        phone: '',
        phone: '',
        workphone: ''
      },
      car: {
        infovalue: 'A calcular',
        year: '',
        km0:'',
        use:'',
        gnc:'',
        brand:'',
        model:''
      },
      campaign: '',

      brand: '',
      model: '',
      year: '',
      month:'',
      months:[12, 15, 18, 24, 30, 36, 48],
      amount:'',
      tasa:'',

      errormensage:'',
      showerrormensage:false
    }
  },

  computed:{
    brands (){
      return state.app.carsoptions.brands
    },
    models () {
      return state.app.carsoptions.models
    },
    years () {
      return state.app.carsoptions.years
    }

  },
  stated: {},
  methods: {
    ...mapActions([
      'addCase'
    ]),
    onclicksavecar () {
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/setcarstatus',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          opcode:state.app.opcode,
          car:this.car,
          codia:state.app.carsoptions.codia
        }
      }).then((response) => {

        console.log(response)

      }).catch((error) => {
        let obj2 = {
          title: 'Error',
          message: error,
          customCloseBtnText:"Cerrar",
          type: 'error'
        }
        store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':error, button1:true, button3:false} )
        console.log(error)
      })
    },
    loadmodels () {
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/loadmodel',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          parameters: {
            brand:this.car.brand,
          }
        }
      }).then((response) => {
        store.commit(LOAD_MODELS, response)
      }).catch((error) => {
        console.log(error)
      })
    },
    loadyears () {
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/loadyears',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          parameters: {
            brand:this.car.brand,
            model:this.car.model,
          }
        }
      }).then((response) => {
        store.commit(LOAD_YEARS, response)
      }).catch((error) => {
        console.log(error)
      })
    },
    getyearname(element,id) {
      return element._id==id;
    },
    loadcarvalue () {
      console.log(this.car.year)
      console.log(state.app.carsoptions.years)
      let yearvalue
      for (let yearpair of state.app.carsoptions.years)
      {
        console.log(yearpair)
        if (yearpair._id==this.car.year){
          yearvalue=yearpair.label
        }
      }
      this.car.infovalue=this.car.year*1000
      if (this.car.year && this.car.km0) {
        this.$http({
          method: 'GET',
          url: '/ralfintranet/api/loadloanrates',
          transformResponse: [(data) => {
            return JSON.parse(data)
          }],
          params: {
            parameters: {
              year: yearvalue,
              km0: this.car.km0,
            }
          }
        }).then((response) => {
          store.commit(LOAD_RATES, response)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>
<style lang="scss">
  .error {
    color: red;
    align-content: center;
  }
</style>
