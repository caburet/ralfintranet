<template>
  <div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Verificar Cliente</h1>
        <h2>Verifica los datos de tu cliente y verifica en minutos si tiene su Prestamo Carfacil Pre-Aprobado</h2>
        <div class="block">
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Agencia</label>
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select  v-model="agencies">
                <option value="OTROS">Otros</option>
                <option v-for="node in agencies" :value="node._id">{{node.label}}</option>
              </select>
            </div>
          </div>
          <div class="control-label">
            <label class="label">Campaña</label>
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="campaign"  >
                <option value="OTROS">Otros</option>
              </select>
            </div>
          </div>

        </div>
          <div class="control is-horizontal">
            <div class="control-label">
                <p class="control">Datos del titular del credito</p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Nombre</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.name"  placeholder="Nombre">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.lastname" type="text"  placeholder="Apellido">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.IDtype" >
                  <option value="DNI">DNI</option>
                  <option value="LE">LE</option>
                  <option value="CI">CI</option>
                  <option value="LC">LC</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.ID" placeholder="Numero">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.sex" >
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control is-grouped">

            </div>
          </div>
          <!--- --------------------- -->
          <!--- Botones para mostrar y ocultar los datos -->
          <!--- --------------------- -->
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="seenconyuge = !seenconyuge">Mostrar Conyuge</button>
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="seenconcubino = !seenconcubino">Mostrar Concubino/a</button>
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="seengarante = !seengarante">Mostrar Garante</button>
            </div>

          </div>
          <!--- --------------------- -->
          <!--- FORMULARIO CONYUGE -->
          <!--- --------------------- -->
          <div v-if="seenconyuge">
          <div class="control is-horizontal" >
            <div class="control-label">
                <p class="control">Datos del Conyuge del credito</p>
            </div>
          </div>
          <div class="control is-horizontal" >
            <div class="control-label">
              <label class="label">Nombre</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="cowner.name" placeholder="Nombre">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="cowner.lastname" placeholder="Apellido">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="cowner.IDtype" >
                <option value="DNI">DNI</option>
                <option value="LE">LE</option>
                <option value="CI">CI</option>
                <option value="LC">LC</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="cowner.ID" placeholder="Numero">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="cowner.sex" >
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control is-grouped">

            </div>
          </div>
        </div>
          <!--- --------------------- -->
          <!--- FORMULARIO Concubino -->
          <!--- --------------------- -->
          <div v-if="seenconcubino">
          <div class="control is-horizontal" >
            <div class="control-label">
                <p class="control">Datos del Concubino/a del credito</p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Nombre</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="coowner.name" placeholder="Nombre">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="coowner.lastname" placeholder="Apellido">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="coowner.IDtype" >
                <option value="DNI">DNI</option>
                <option value="LE">LE</option>
                <option value="CI">CI</option>
                <option value="LC">LC</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="coowner.ID" placeholder="Numero">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="coowner.sex" >
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control is-grouped">

            </div>
          </div>
          </div>
          <!--- --------------------- -->
          <!--- FORMULARIO Garante -->
          <!--- --------------------- -->
          <div v-if="seengarante">
          <div class="control is-horizontal" >
            <div class="control-label">
                <p class="control">Datos del Garante del credito</p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Nombre</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.name" placeholder="Nombre">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.lastname" placeholder="Apellido">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="gowner.IDtype" >
                <option value="DNI">DNI</option>
                <option value="LE">LE</option>
                <option value="CI">CI</option>
                <option value="LC">LC</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.ID" placeholder="Numero">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="gowner.sex" >
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control is-grouped">

            </div>
          </div>
          </div>

          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="onclickfn()">Salvar</button>
              <button class="button is-link" v-on:click="onclickcan()">Cancelar</button>
            </div>
          </div>
        </div>
      </article>
    </div>
    </div>
  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'
import { mapActions } from 'vuex'
import { INIT_AGENCIES } from 'vuex-store/mutation-types'
import store from './../../store'
const { state } = store
export default {
  components: {
    Chart
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
      campaign: '',
      agencies: state.app.verifyclient.agencies
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
      this.$http({
        method: 'GET',
        url: 'http://localhost:8080/ralfintranet/api/savedata',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          parameters: {
            Normalized: false,
            NumberOfDays: false,
            DataPeriod: false,
            Elements: JSON.stringify(this.owner),
            owner: JSON.stringify(this.owner),
            gowner: JSON.stringify(this.gowner),
            cowner: JSON.stringify(this.cowner),
            coowner: JSON.stringify(this.coowner)
          }
        }
      }).then((response) => {
        console.log(response)
        console.log(response.data)
        console.log(response.data.records)
        var arrayLength = response.data.records.length
        for (var i = 0; i < arrayLength; i++) {
          let obj = JSON.parse(response.data.records[i])
          console.log('####################################')
          console.log(obj)
          let dic = {}
          dic.SerNr = obj.SerNr
          dic.CaseTypeComment = obj.CaseTypeComment
          dic.Asignee = obj.Asignee
          dic.ProblemDesc = obj.ProblemDesc
          dic.CaseComment = obj.CaseComment
          dic.StatusName = obj.StatusName
          dic.TransDate = obj.TransDate
          dic.TransTime = obj.TransTime
          this.addCase(dic)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    loadData () {
      console.log(this.$route.params)
      this.$http({
        url: '/ralfintranet/api/getVerifyClientData/',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
        }
      }).then((response) => {
        console.log('ARRANCA LOS CONSOLE')
        console.log(response.data)
        // console.log(response.data.records)
        console.log('TERMINA LOS CONSOLE')
        store.commit(INIT_AGENCIES, response)
      }).catch((error) => {
        console.log(error)
      })
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
