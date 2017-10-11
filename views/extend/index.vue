<template>
  <div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Formulario Extendido</h1>
        <form class="col s12 " id="lead_form" name="inquiryForm" action="/inquiry/inq_process?==QO5IDO9QWafNWZyZSeylmb1RncvBHcP1DZy92YlJnJxATPx5Wa" method="post">
          <dynamicform></dynamicform>
        </form>
        <!--<div class="control is-horizontal">-->
          <!--<div>-->
            <!--<h1>My dynamic form: lala</h1>-->
            <!---->
          <!--</div>-->
          <!--<div class="control-label">-->
            <!--<label class="label">Nivel de Educación</label>-->
          <!--</div>-->
          <!--<div class="control">-->
            <!--<div class="select is-fullwidth">-->
              <!--<select  v-model="brand">-->
                <!--<option v-for="node in brand" :value="node._id">{{node.label}}</option>-->
              <!--</select>-->
            <!--</div>-->
          <!--</div>-->


        <!--</div>-->
          <!--<div class="control is-horizontal">-->
            <!--<div class="control-label">-->
              <!--<label class="label">Estado Civil</label>-->
            <!--</div>-->
            <!--<div class="control">-->
              <!--<div class="select is-fullwidth">-->
                <!--<select v-model="owner.IDtype" >-->
                  <!--<option value="DNI">DNI</option>-->
                  <!--<option value="LE">LE</option>-->
                  <!--<option value="CI">CI</option>-->
                  <!--<option value="LC">LC</option>-->
                <!--</select>-->
              <!--</div>-->
            <!--</div>-->

          <!--</div>-->
          <!--<div class="control is-horizontal">-->
            <!--<div class="control-label">-->
              <!--<label class="label">Tipo de Educación</label>-->
            <!--</div>-->
            <!--<div class="control">-->
              <!--<div class="select is-fullwidth">-->
                <!--<select v-model="owner.IDtype" >-->
                  <!--<option value="DNI">DNI</option>-->
                  <!--<option value="LE">LE</option>-->
                  <!--<option value="CI">CI</option>-->
                  <!--<option value="LC">LC</option>-->
                <!--</select>-->
              <!--</div>-->
            <!--</div>-->

          <!--</div>-->
          <!--<div class="control is-horizontal">-->
            <!--<div class="control-label">-->
              <!--<label class="label">Es Argentino?</label>-->
            <!--</div>-->
            <!--<div class="control">-->
              <!--<div class="select is-fullwidth">-->
                <!--<select v-model="owner.sex" >-->
                  <!--<option value="F">Femenino</option>-->
                  <!--<option value="M">Masculino</option>-->
                <!--</select>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->


      </article>
    </div>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { INIT_AGENCIES } from 'vuex-store/mutation-types'
import store from './../../store'
import { dynamicform } from './../../components/layout/'
const { state } = store

export default {
  components: {
    dynamicform
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
        url: '/inquiry/viewInquiry?===QO5IDO9QWafNWZyZibvNna9QXYtJ3bmZSeylmb1RncvBHcP1DZy92YlJnJxATPx5Wa',
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
        //store.commit(INIT_AGENCIES, response)
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
