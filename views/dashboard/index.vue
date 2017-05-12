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
              <select  >
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
              <select  >
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
                <input class="input" type="text"  placeholder="Nombre">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text"  placeholder="Apellido">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  >
                  <option value="DNI">DNI</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text"  placeholder="Numero">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  >
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
                <input class="input" type="text"  placeholder="Nombre">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text"  placeholder="Apellido">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  >
                  <option value="DNI">DNI</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text"  placeholder="Numero">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  >
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
                <input class="input" type="text"  placeholder="Nombre">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text"  placeholder="Apellido">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  >
                  <option value="DNI">DNI</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text"  placeholder="Numero">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  >
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
                <input class="input" type="text"  placeholder="Nombre">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text"  placeholder="Apellido">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  >
                  <option value="DNI">DNI</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text"  placeholder="Numero">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select  >
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
              <button class="button is-primary" v-on:click="onclickfn()">Submit</button>
              <button class="button is-link" v-on:click="onclickcan()">Cancel</button>
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
export default {
  components: {
    Chart
  },
  data () {
    return {
      seenconyuge: false,
      seenconcubino: false,
      seengarante: false,
      agencies: [{_id: 1, label: 'Otra Agencia'}]
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
        url: 'http://localhost:8080/intranet/api/datafetch',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          parameters: {
            Normalized: false,
            NumberOfDays: false,
            DataPeriod: false,
            Elements: []
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
        url: 'http://localhost:8080/ralfintranet/api/getVerifyClientData/',
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
