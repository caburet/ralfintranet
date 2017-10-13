<template>
  <div>
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Formulario Extendido</h1>
        <form class="col s12 " id="lead_form" name="inquiryForm" v-on:submit.prevent="onSubmit">
          <div class="block" >
            <div class="control is-horizontal" v-for="formItem in formValues">
              <div class="control-label">
                <label class="label">{{formItem.Question}}</label>
              </div>
              <div class="control">
                <div class="control is-grouped" v-if="formItem.Type == 'open'">
                  <p class="control is-expanded">
                    <input  v-on:change="onChange(formItem.QuestionCode,$event.target.value)" :name="formItem.QuestionCode" class="input" v-model="formItem.QuestionCode" type="memo" >
                  </p>
                </div>
                <div class="control is-grouped" v-if="formItem.Type == 'multiple'">
                  <p class="control is-expanded"  v-for="itemoptions in formItem.Options">
                    <input v-on:change="onChange(formItem.QuestionCode,$event.target.value)" :name="formItem.QuestionCode" class="input"  type="checkbox" >
                  </p>
                </div>
                <div class="control is-grouped" v-if="formItem.Type == 'combobox'">
                  <div class="control "  v-for="node in formItem.Options">
                    <input v-on:change="onChange(formItem.QuestionCode,$event.target.value)" :ref="formItem.QuestionCode" :value="node" :name="formItem.QuestionCode" type="radio" id="5No">
                    <label class="active" :for="node">{{node}}</label>
                  </div>
                </div>
                <div class="control is-grouped" v-if="formItem.Type == 'yesno'">
                  <div class="control is-expanded">
                    <input v-on:change="onChange(formItem.QuestionCode,$event.target.value)" value="Yes" :name="formItem.QuestionCode" type="radio" id="5Yes">
                    <label class="active" for="5Yes">Yes</label>
                    <input v-on:change="onChange(formItem.QuestionCode,$event.target.value)" value="No" :name="formItem.QuestionCode" type="radio" id="5No">
                    <label class="active" for="5No">No</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="control is-horizontal">
              <div class="control-label">
              </div>
              <div class="control">
                <button class="button is-primary" type="submit">Siguiente</button>
              </div>
            </div>
          </div>
        </form>
      </article>
    </div>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { INQUIRY_DATA, OPP_DATA} from 'vuex-store/mutation-types'
import store from './../../store'
import { dynamicform } from './../../components/layout/'
const { state } = store

export default {
  computed: {
    formValues() {
      return state.app.form_items_from_server
    }
  },
  components: {
    dynamicform
  },
  data () {
    return {
      customForm:[],
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
    this.owner.sex="algo"
    console.log(this.owner.sex)
  },
  stated: {},
  methods: {
    ...mapActions([
      'addCase'
    ]),
    onChange : function (a,b,c=''){
      //here do what u want
      console.log("update")
      console.log(a)
      console.log(b)
      store.commit(INQUIRY_DATA, {id:a,value:b,type:c} )
    },
    onSubmit : function (){
      //here do what u want
      console.log("finish")
      console.log(state.app.inquirydata)
      this.$http.post('/inquiry/inq_process?==0EzM40DZp91YlJnJu92cq1Ddh1mcvZmJ5JXauVHdy9Gcw9UPkJ3bjVmcmEDMFZUPx5Wa ', state.app.inquirydata).then(function (response) {
        // Success
        console.log(response.data)
      },function (response) {
        // Error
        console.log(response.data)
      });
      console.log("emitio false!")
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
        url: '/ralfintranet/api/redirectform',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
        }
      }).then((response) => {
        console.log('ARRANCA LOS CONSOLE')
        console.log(response.data)
        store.commit(OPP_DATA, response.data )
        console.log('this.customform')
        console.log(this.customForm)
        let newobj = {}
        for (let row of state.app.form_items_from_server)
        {
          newobj[row.QuestionCode]=1
        }
        this.customForm = newobj
        console.log(this.customForm)
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
