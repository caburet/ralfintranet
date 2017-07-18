<template>
  <div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Simulador de Prestamo</h1>
        <div class="block">
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Monto a Simular</label>
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select  v-model="brand">
                <option v-for="node in brand" :value="node._id">{{node.label}}</option>
              </select>
            </div>
          </div>
        </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Plazo</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.name"  placeholder="">
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
import { INIT_AGENCIES } from 'vuex-store/mutation-types'
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
      car: {
        infovalue: '111000'

      },
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
      brand: state.app.carvalues.brand
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
.longlabel {
  flex-basis:1;
}
</style>
