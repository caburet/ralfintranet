<template>
  <div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Datos del Automovil</h1>
        <div class="block">
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Marca</label>
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select  v-model="brand" v-on:change="loadmodels()">
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
                <select  v-model="model" v-on:change="loadyears()">
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
                <select  v-model="year" v-on:change="loadcarvalue()">
                  <option v-for="node in years" :value="node._id">{{node.label}}</option>
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
                <select v-model="owner.sex" >
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
                  <input class="input" v-model="owner.lastname" type="text" >
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
                <select v-model="owner.sex" >
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
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
                <input class="input" v-model="owner.lastname" type="text" >
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
              <label class="label">Monto</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.lastname" type="text" >
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
    <div class="tile is-ancestor">
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
                <input class="input" type="date" v-model="year"  placeholder="">
              </p>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Ingresos</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <input class="input" type="text" v-model="car.infovalue"  placeholder="">
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
                <select v-model="owner.sex" >
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
                <select v-model="owner.sex" >
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
                <input class="input" type="text" v-model="owner.ID" placeholder="Numero">
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
                <input class="input" v-model="owner.lastname" type="text" >
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
                <input class="input" v-model="owner.lastname" type="text" >
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
import { INIT_AGENCIES, LOAD_MODELS, LOAD_YEARS } from 'vuex-store/mutation-types'
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
        sex: '',
        name: '',
        ID: '',
        IDtype: '',
        lastname: ''
      },
      gowner: {
        sex: '',
        name: '',
        ID: '',
        IDtype: '',
        lastname: ''
      },
      cowner: {
        sex: '',
        name: '',
        ID: '',
        IDtype: '',
        lastname: ''
      },
      coowner: {
        sex: '',
        name: '',
        ID: '',
        IDtype: '',
        lastname: ''
      },
      car: {
        infovalue: 'A calcular'

      },
      campaign: '',
      brand: '',
      model: '',
      year: '',
      month:'',
      months:[12, 15, 18, 24, 30, 36, 48]
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
    loadmodels () {
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/loadmodel',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          parameters: {
            brand:this.brand,
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
            brand:this.brand,
            model:this.model,
          }
        }
      }).then((response) => {
        store.commit(LOAD_YEARS, response)
      }).catch((error) => {
        console.log(error)
      })
    },
    loadcarvalue () {
      this.car.infovalue=this.year*1000
    },
    onclickfnbkp () {
      let dic = {}
      dic.tittle = this.tittle
      dic.who = this.who
      dic.tittle = this.tittle
      dic.type = this.type
      this.addCase(dic)
    },
    onclickcan () {
      this.$router.push('/cases/basic')
    },
    onclickfn () {
//      this.$http({
//        method: 'GET',
//        url: 'http://localhost:8080/ralfintranet/api/savedata',
//        transformResponse: [(data) => {
//          return JSON.parse(data)
//        }],
//        params: {
//          parameters: {
//            Normalized: false,
//            NumberOfDays: false,
//            DataPeriod: false,
//            Elements: JSON.stringify(this.owner),
//            owner: JSON.stringify(this.owner),
//            gowner: JSON.stringify(this.gowner),
//            cowner: JSON.stringify(this.cowner),
//            coowner: JSON.stringify(this.coowner)
//          }
//        }
//      }).then((response) => {
//        console.log(response)
//        console.log(response.data)
//        console.log(response.data.records)
//        var arrayLength = response.data.records.length
//        for (var i = 0; i < arrayLength; i++) {
//          let obj = JSON.parse(response.data.records[i])
//          console.log('####################################')
//          console.log(obj)
//          let dic = {}
//          dic.SerNr = obj.SerNr
//          dic.CaseTypeComment = obj.CaseTypeComment
//          dic.Asignee = obj.Asignee
//          dic.ProblemDesc = obj.ProblemDesc
//          dic.CaseComment = obj.CaseComment
//          dic.StatusName = obj.StatusName
//          dic.TransDate = obj.TransDate
//          dic.TransTime = obj.TransTime
//          this.addCase(dic)
//        }
//      }).catch((error) => {
//        console.log(error)
//      })
    },
    loadData () {
//      console.log(this.$route.params)
//      this.$http({
//        url: '/ralfintranet/api/getVerifyClientData/',
//        transformResponse: [(data) => {
//          return JSON.parse(data)
//        }],
//        params: {
//        }
//      }).then((response) => {
//        console.log('ARRANCA LOS CONSOLE')
//        console.log(response.data)
//        // console.log(response.data.records)
//        console.log('TERMINA LOS CONSOLE')
//        store.commit(INIT_AGENCIES, response)
//      }).catch((error) => {
//        console.log(error)
//      })
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
