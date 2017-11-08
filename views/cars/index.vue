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
              <select  v-model="car.brand"  v-on:change="loadmodels()">
                <option v-for="node in brands" :value="node._id"  >{{node.label}}</option>
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
                <select  v-model="car.year"  v-on:change="loadmodels()" >
                  <option v-for="node in years" :value="node.label">{{node.label}}</option>
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
                <select  v-model="car.model" v-on:change="loadcarvalue()">
                  <option v-for="node in models" :value="node._id">{{node.label}}</option>
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
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="car.gnc" type="text" >
              </p>
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
        </div>
      </article>
    </div>
    <div class="tile is-parent">
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
        </div>
      </article>
    </div>


    </div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Datos Del Titular del Crédito</h1>




        <div class="block">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Fecha Nacimiento</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" v-model="owner.birthdate" type="date"  placeholder="01/01/1980">
                </p>
              </div>
              <div class="control-label">
                <label class="label">Ingresos</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" v-model="owner.ingress" type="text" >
                </p>
              </div>
            </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Provincia</label>
            </div>
            <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="owner.province" v-on:change="loadcitycodes()">
                    <option v-for="node in provinces" :value="node._id">{{node.label}}</option>
                  </select>
                </div>
            </div>
            <div class="control-label">
              <label class="label">Localidad</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.citycode" >
                  <option v-for="node in citycodes" :value="node._id">{{node._id}} {{node.label}}</option>
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
              <button class="button is-primary" v-on:click="onclicksavesecondwindow()">Salvar</button>
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
import { INIT_AGENCIES, LOAD_MODELS, LOAD_YEARS, LOAD_CITYCODES } from 'vuex-store/mutation-types'
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
        workphone: '',
        localitycode:''
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
    provinces (){
      return state.app.verifyclient.provinces
    },
    citycodes (){
      return state.app.verifyclient.citycodes
    },
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
  created: function () {
    this.loadData()
  },
  stated: {},
  methods: {
    ...mapActions([
      'addCase'
    ]),
    loadData () {
    this.owner=state.app.owner
      console.log(this.owner)
      if (this.owner.province)
      {
        this.loadcitycodes()
      }
    },
    loadcitycodes () {
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/loadcitycodes',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          parameters: {
            province:this.owner.province,
          }
        }
      }).then((response) => {
        store.commit(LOAD_CITYCODES, response)
      }).catch((error) => {
        console.log(error)
      })
    },
    onclicksavesecondwindow () {
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/setsecondwindow',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          opcode:state.app.opcode,
          car:this.car,
          codia:state.app.carsoptions.codia,
          owner:this.owner,
          amount:this.amount,
          month:this.month

        }
      }).then((response) => {
        this.$router.push('/additional')
        console.log(response)

      }).catch((error) => {
        let obj2 = {
          title: 'Error',
          message: error,
          customCloseBtnText:"Cerrar",
          type: 'error'
        }
        alert(error)

        console.log(error)
      })
    },
    loadmodels () {
      if (this.car.brand && this.car.year) {
        this.$http({
          method: 'GET',
          url: '/ralfintranet/api/loadmodel',
          transformResponse: [(data) => {
            return JSON.parse(data)
          }],
          params: {
            parameters: {
              brand: this.car.brand,
              year: this.car.year,
            }
          }
        }).then((response) => {
          store.commit(LOAD_MODELS, response)
        }).catch((error) => {
          console.log(error)
        })
      }
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
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/loadloanlimit',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          parameters: {
            opcode: state.app.opcode,
            year: this.car.year,
            km0: this.car.km0,
          }
        }
      }).then((response) => {
        store.commit(LOAD_MODELS, response)
      }).catch((error) => {
        console.log(error)
      })
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
