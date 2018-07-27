<template>
  <div>
  <div  v-if="showverify">
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
              <select  v-model="car.brand"  v-on:change="loadmodels()" name="car.brand">
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
                <select  v-model="car.year"  v-on:change="loadmodels()" name="car.year">
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
                <select  v-model="car.model" v-on:change="loadcarvalue()" name="car.model">
                  <option v-for="node in models" :value="node.label">{{node.label}}</option>
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
                <select v-model="car.km0"  v-on:change="loadcarvalue()" name="car.km0">
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
                <input class="input" v-model="car.gnc" type="text" name="car.gnc">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Uso</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="car.use" name="car.use">
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
                <input class="input" type="text" v-model="car.infovalue"  placeholder="" disabled name="car.infovalue">
              </p>
              </div>
            </div>
          </div>
          <div class="control is-horizontal" v-if="loanlimit>0">
            <div class="control-label" v-if="car.infovalue>0">
              <label  class="label">Monto máximo {{car.infovalue*loanlimit/100}}  (%{{loanlimit}})</label>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Monto</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="amount" type="text" name="amount">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Plazo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="month" name="month">
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
              <label class="label">Provincia</label>
            </div>
            <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="owner.province" v-on:change="loadcitycodes()" name="owner.province">
                    <option v-for="node in provinces" :value="node._id">{{node.label}}</option>
                  </select>
                </div>
            </div>
            <div class="control-label">
              <label class="label">Localidad</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="owner.citycode" name="owner.citycode">
                  <option v-for="node in citycodes" :value="node.label">{{node.label}}</option>
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
                <input class="input" type="text" v-model="owner.cellphone" placeholder="Numero" name="owner.cellphone">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Ingresos</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.ingress" type="text" name="owner.ingress">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tel. Laboral</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.workphone" type="text" name="owner.workphone">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Fecha de Nacimiento</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.birthdate" type="date" name="owner.birthdate" value="">
              </p>
            </div>

          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tel. Fijo</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.phone" type="text" name="owner.phone">
              </p>
            </div>
            <div class="control-label">
              <label class="label"></label>
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="onclicksavesecondwindow()" name="Salvar">Salvar</button>
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
  <div :id="inquiry" v-if="showinquiry">
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
                      <input  v-on:change="onInquiryChange(formItem.QuestionCode,$event.target.value)" :name="formItem.QuestionCode" class="input" v-model="formItem.QuestionCode" type="memo" >
                    </p>
                  </div>
                  <div class="control is-grouped" v-if="formItem.Type == 'multiple'">
                    <p class="control is-expanded"  v-for="itemoptions in formItem.Options">
                      <input v-on:change="onInquiryChange(formItem.QuestionCode,$event.target.value)" :name="formItem.QuestionCode" class="input"  type="checkbox" >
                    </p>
                  </div>
                  <div class="control is-grouped" v-if="formItem.Type == 'combobox'">
                    <div class="control">
                      <select v-on:change="onInquiryChange(formItem.QuestionCode,$event.target.value)" :ref="formItem.QuestionCode"  :name="formItem.QuestionCode" type="radio" id="5No">
                        <option value=""> </option>
                        <option v-for="node in formItem.Options" :value="node" >{{node}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="control is-grouped" v-if="formItem.Type == 'yesno'">
                    <div class="control is-expanded">
                      <input v-on:change="onInquiryChange(formItem.QuestionCode,$event.target.value)" value="Yes" :name="formItem.QuestionCode" type="radio" id="5Yes">
                      <label class="active" for="5Yes">Yes</label>
                      <input v-on:change="onInquiryChange(formItem.QuestionCode,$event.target.value)" value="No" :name="formItem.QuestionCode" type="radio" id="5No">
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { INIT_AGENCIES, UPDATE_LOANAMOUNT, LOAD_MODELS, LOAD_LOANLIMIT, LOAD_YEARS, LOAD_CITYCODES, SAVE_OPPCODE, TOGGLE_MODAL, TOGGLE_INQUIRY, INQUIRY_DATA, SECOND_DATA, EMPTY_INQUIRY } from 'vuex-store/mutation-types'
import store from './../../store'
import { Modal } from 'components/layout/'
const { state } = store
export default {
  components: {
    Modal
  },
  data () {
    return {
      loanlimit: 0,
      seenconyuge: false,
      seenconcubino: false,
      seengarante: false,
      owner: {
        birthdate: '',
        ingress: '',
        province: '',
        locality: '',
        cellphone: '',
        phone: '',
        workphone: '',
        localitycode: ''
      },
      car: {
        infovalue: 'A calcular',
        year: '',
        km0: '',
        use: '',
        gnc: '',
        brand: '',
        model: ''
      },
      campaign: '',

      brand: '',
      model: '',
      year: '',
      month: '',
      months: [12, 15, 18, 24, 30, 36, 48, 60],
      amount: '',
      tasa: '',
      errormensage: '',
      showerrormensage: false,
      opcode: '',
      personcode: '',
      rulenr: 0,
      continuestep2: true
    }
  },

  computed: {
    provinces () {
      return state.app.verifyclient.provinces
    },
    citycodes () {
      return state.app.verifyclient.citycodes
    },
    brands () {
      return state.app.carsoptions.brands
    },
    models () {
      return state.app.carsoptions.models
    },
    years () {
      return state.app.carsoptions.years
    },
    showModal () {
      return state.app.showModal
    },
    modalContain () {
      return state.app.modalContain
    },
    showinquiry () {
      return state.app.showinquiry
    },
    showverify () {
      return state.app.showverify
    },
    formValues () {
      return state.app.form_items_from_server
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
    onInquiryChange: function (a, b, c = '') {
      // here do what u want
      console.log('update')
      console.log(a)
      console.log(b)
      store.commit(INQUIRY_DATA, {id: a, value: b, type: c})
    },
    loadData () {
      store.commit(SECOND_DATA, '')
      store.commit(TOGGLE_INQUIRY, {'showinquiry': false, 'showverify': true})
      this.owner = state.app.owner
      console.log(this.owner)
      if (this.owner.province) {
        this.loadcitycodes()
      }
    },
    setrulestatus (params, rulestate) {
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/setrulestatus',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          opcode: state.app.opcode,
          username: params[0],
          password: params[1],
          ruleid: state.app.ruleid,
          state: rulestate
        }
      }).then((response) => {
        if (response.data.ok == true) {
          console.log(response)
          this.nextrule(response)
        } else {
          // alert(response.data.error)
          store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': 'Error:' + response.data.error, button1: true, button3: false})
        }
      }).catch((error) => {
        let obj2 = {
          title: 'Error',
          message: error,
          customCloseBtnText: 'Cerrar',
          type: 'error'
        }
        store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': error, button1: true, button3: false})
        console.log(error)
      })
    },
    onclickclosemodal () {
      store.commit(TOGGLE_MODAL, {'opened': false, 'modalcontain': 'vacio', button1: true, button3: false})
      this.nextrule('')
    },
    onclickopeninquiry () {
      console.log('openinquiry')
      store.commit(TOGGLE_MODAL, {'opened': false, 'modalcontain': 'vacio', button1: true, button3: false})
      store.commit(TOGGLE_INQUIRY, {'showinquiry': true, 'showverify': false})
    },
    onclickauthmodal (params) {
      this.setrulestatus(params, 1)
      store.commit(TOGGLE_MODAL, {'opened': false, 'modalcontain': 'vacio', button1: true, button3: false})
    },
    onclickpendmodal (params) {
      this.setrulestatus(params, 3)
      store.commit(TOGGLE_MODAL, {'opened': false, 'modalcontain': 'vacio', button1: true, button3: false})
    },
    onclickrechmodal (params) {
      this.setrulestatus(params, 2)
      store.commit(TOGGLE_MODAL, {'opened': false, 'modalcontain': 'vacio', button1: true, button3: false})
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
            province: this.owner.province
          }
        }
      }).then((response) => {
        if (response.data.ok == true) {
          store.commit(LOAD_CITYCODES, response)
        } else {
          // alert(response.data.error)
          store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': 'Error:' + response.data.error, button1: true, button3: false})
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    onclickloadopp () {
      store.commit(SAVE_OPPCODE, {opcode: this.opcode, personcode: this.personcode})
    },
    onclicksavesecondwindow () {
      if (!this.owner.birthdate || (parseInt(this.owner.birthdate.split('-')[0]) > 2010 || !this.owner.province)) {
        alert('Los campos FECHA DE NACIMIENTO y PROVINCIA son obligatorios.')
        return false
      }
      let codia
      console.log(this.car.model)
      if (this.car.model) {
        console.log(this.models)
        for (let i of this.models) {
          console.log(i)
          if (i.label == this.car.model) {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            console.log(i.codia)
            codia = i.codia
            this.car.modelname = i.modelname
            break
          }
        }
      }
      console.log('va codia')
      console.log(codia)
      if (this.amount <= this.car.infovalue * this.loanlimit / 100) {
        store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': 'Se procede a grabar la informacion', button1: false, button3: false})
        store.commit(UPDATE_LOANAMOUNT, {amount: this.amount, month: this.month, infovalue: this.car.infovalue, loanlimit: this.loanlimit })
        this.$http({
          method: 'GET',
          url: '/ralfintranet/api/setsecondwindow',
          transformResponse: [(data) => {
            return JSON.parse(data)
          }],
          params: {
            opcode: state.app.opcode,
            pcode: state.app.pcode,
            car: this.car,
            codia: codia,
            owner: this.owner,
            amount: this.amount,
            month: this.month

          }
        }).then((response) => {
          if (response.data.ok == true) {
            if (response.data.loanratevalue == 0) {
              alert('No se pudo determinar el valor de la Tasa')
              store.commit(TOGGLE_MODAL, {'opened': false, 'modalcontain': '', button1: false, button3: false})
              return false
            }

            console.log('Rsponse del consulta')

            if (response.data.quotes.length == 0 && response.data.checksmartix) {
              alert('No se pudo cotizar')
            }
            store.commit(SECOND_DATA, response.data)
            store.commit(TOGGLE_MODAL, {'opened': false, 'modalcontain': '', button1: false, button3: false})
            this.nextrule(response)
            // this.$router.push('/additional')
            console.log(response)
          } else {
            // alert(response.data.error)
            store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': 'Error:' + response.data.error, button1: true, button3: false})
          }
        }).catch((error) => {
          console.log('error')
          let obj2 = {
            title: 'Error',
            message: error,
            customCloseBtnText: 'Cerrar',
            type: 'error'
          }
          alert(error)

          console.log(error)
        })
      } else {
        alert('El monto supera el maximo permitido.')
      }
    },
    onSubmit: function () {
      // here do what u want

      this.$http.post('/inquiry/inq_process?==' + state.app.inquirystring, state.app.inquirydata)
          .then(function (response) {
            if (Object.keys(this.formValues).length == Object.keys(state.app.inquirydata).length) {
              // Success
              console.log(response.data)
              this.$http.get('/ralfintranet/api/saveinquiryscore?&opportunityId=' + state.app.opcode + '&score=' + response.data.score + '&inquirycode=' + response.data.InquiryResult.fields.InquiryCode)
                .then(function (responsescore) { console.log('Grabo el score') }
                  , function (responsescore) {
                    // Error
                    console.log(responsescore.data)
                  })
            } else {
              this.$http.get('/ralfintranet/api/saveinquiryscore?&opportunityId=' + state.app.opcode + '&score=0 &inquirycode=' + response.data.InquiryResult.fields.InquiryCode)
                .then(function (responsescore) { console.log('Grabo el score') }
                  , function (responsescore) {
                    // Error
                    console.log(responsescore.data)
                  })
            }
            store.commit(TOGGLE_INQUIRY, {'showinquiry': false, 'showverify': true})
            this.nextrule('')
            console.log(response.data)
          }.bind(this), function (response) {
            // Error
            console.log(response.data)
          })

      console.log('emitio false!')
    },
    nextrule (response) {
      console.log('Va next rule consoles logs')

      console.log(state.app.resrol.length, this.rulenr, this.continuestep2)
      console.log(this.rulenr == state.app.resrol.length)
      var self = this
      if (this.rulenr == state.app.resrol.length) {
        console.log('Termino!')
        this.continuestep2 = false
        // TODO save person
        this.$http({
          method: 'GET',
          url: '/ralfintranet/api/setrci2',
          transformResponse: [(data) => {
            return JSON.parse(data)
          }],
          params: {
            opcode: state.app.opcode

          }
        }).then((response) => {
          if (response.data.ok == true) {
            console.log('Rsponse del consulta')
            this.$router.push('/additional')
          } else {
            // alert(response.data.error)
            store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': 'Error:' + response.data.error, button1: true, button3: false})
          }
        }).catch((error) => {
          console.log('error')
          let obj2 = {
            title: 'Error',
            message: error,
            customCloseBtnText: 'Cerrar',
            type: 'error'
          }
          alert(error)

          console.log(error)
        })
      }
      let rolmessage = state.app.resrol[this.rulenr]
      this.rulenr += 1
      if (this.continuestep2) {
        console.log('rolmessage')
        console.log(rolmessage.formIfReturnFalse)
        console.log(rolmessage)
        // this.continuestep2 = false
        // this.$refs.simplert.openSimplert(obj)
        if (rolmessage.ruleActionType == 1) {
          store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': rolmessage.message, button1: true, button3: false, ruleid: rolmessage.RuleInternalId, form: rolmessage.formIfReturnFalse})
        } else {
          store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': rolmessage.message, button1: false, button3: true, ruleid: rolmessage.RuleInternalId, form: rolmessage.formIfReturnFalse})
        }
      }
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
              year: this.car.year
            }
          }
        }).then((response) => {
          if (response.data.ok == true) {
            store.commit(LOAD_MODELS, response)
          } else {
            // alert(response.data.error)
            store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': 'Error:' + response.data.error, button1: true, button3: false})
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    getyearname (element, id) {
      return element._id == id
    },
    loadcarvalue () {
      console.log(this.car.year)
      console.log(state.app.carsoptions.years)
      console.log(state.app.carsoptions.models)
      console.log(this.car)
      console.log(state.app.carsoptions.models[this.car.model])

      let yearvalue
      for (let modelspair of state.app.carsoptions.models) {
        if (modelspair.label == this.car.model) {
          yearvalue = modelspair.carvalue
        }
      }

      this.car.infovalue = yearvalue * 1000
      if (this.car.year && this.car.km0) {
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
              km0: this.car.km0
            }
          }
        }).then((response) => {
          if (response.data.ok == true) {
            this.loanlimit = response.data.percentage
            store.commit(LOAD_LOANLIMIT, {loanlimit: response.data.percentage, carvalue: this.car.infovalue})
          } else {
            // alert(response.data.error)
            store.commit(TOGGLE_MODAL, {'opened': true, 'modalcontain': 'Error:' + response.data.error, button1: true, button3: false})
          }
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
