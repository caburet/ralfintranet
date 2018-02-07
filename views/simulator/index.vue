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

            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="amount"  placeholder="" v-on:change="calculateloan()">
              </p>
            </div>

          <div class="control-label">
            <label class="label">LoanInstallments</label>
          </div>

          <div class="control">
            <div class="select is-fullwidth">
              <select  v-model="loaninstallment" v-on:change="calculateloan()">
                <option v-for="node in loaninstallments" :value="node.LoanInstall" >{{node.LoanTerm}}</option>
              </select>
            </div>
          </div>
        </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">LoanInstallAmount</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="loaninstallamount"  placeholder="" readonly="readonly">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Observaciones</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <textarea class="input" v-model="observation"  placeholder="" ></textarea>
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
            </div>
            <div class="control is-grouped">
            </div>
            <div class="control-label">

            </div>

            <div class="control">
              <button class="button is-primary" v-on:click="onclicksavefourthwindow()">Terminar</button>
            </div>
          </div>
          <div class='table-responsive' ref="table">
             <v-client-table  :data="rowtable" :columns="columns" :options="options" ></v-client-table>
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
import { LOAD_LOANLIMITVALUES,TOGGLE_MODAL,UPDATE_LOANAMOUNT } from 'vuex-store/mutation-types'
import store from './../../store'
import { Modal } from 'components/layout/'
const { state } = store
export default {
  components: {
    Modal
  },
  data () {
    return {
      loaninstallment:state.app.loaninstallment,
      amount:state.app.amount,
      loaninstallamount:0,
      loanlimit:70,
      observation:'',
      itemsperpage: 20,
      car:state.app.car,
      rowlist:[],
      paginate: ['cases'],
      columns: ['LoanTerm', 'LoanValue', 'LoanMaxAmount','LoanInstallAmount'],
      options: {
        sortable: ['LoanTerm'],
        headings: {
          LoanTerm: 'LoanTerm',
          'LoanValue': 'LoanValue',
          'LoanMaxAmount': 'LoanMaxAmount',
          'LoanInstallAmount':'LoanInstallAmount'
        }
      },
      seenconyuge: false,
      seenconcubino: false,
      seengarante: false,
      car: {
        infovalue: '111000'

      },
      campaign: '',
      brand: state.app.carvalues.brand
    }
  },
  created: function () {
    this.loadData()
  },
  stated: {},
  computed: {

    showverify() {
      return state.app.showverify
    },
    showinquiry() {
      return state.app.showinquiry
    },
    showModal() {
      return state.app.showModal
    },
    modalContain() {
      return state.app.modalContain
    },
    personname () {
      return state.app.personname
    },
    loaninstallments (){
      return state.app.loanrates
    },
    rowtable (){
      return state.app.loanrates
    },

  },
  methods: {
    ...mapActions([
      'addCase'
    ]),
    onclickcan () {

      let text='texto '
      store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':text , button1:true,button3:false} )
      //this.$router.push('/cases/basic')
    },
    onclickclosemodal () {
      store.commit(TOGGLE_MODAL, {'opened':false,'modalcontain':"vacio" ,button1:true, button3:false} )
      this.nextrule('')
    },
    onclickopeninquiry () {
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
    loadData () {
      console.log(this.$route.params)
      this.$http({
        url: '/ralfintranet/api/getSimulatorData/',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          op:state.app.opcode
        }
      }).then((response) => {
        console.log(response)

        store.commit(LOAD_LOANLIMITVALUES, response.data)
        this.loanlimit = response.data.percentage
        this.car.infovalue = response.data.infovalue
        console.log("vaaa ",state.app.loaninstallment)
        this.loaninstallment=state.app.loaninstallment
        console.log(state.app)

        this.loaninstallamount = (state.app.amount * state.app.loaninstallment).toFixed(2);
        this.rowlist =state.app.loanrates
      }).catch((error) => {
        console.log(error)
      })
    },
    calculateloan(){
      console.log(this.amount,this.car.infovalue,this.loanlimit)

      if (this.amount > (this.car.infovalue * this.loanlimit / 100))
      {
        this.amount = this.car.infovalue * this.loanlimit / 100
      }
      this.loaninstallamount = (this.amount * this.loaninstallment).toFixed(2);

      store.commit(UPDATE_LOANAMOUNT, {month:state.app.loaninstallment,amount:this.amount,infovalue:state.app.car.infovalue,loanlimit:state.app.car.loanlimit})
      this.rowlist =state.app.loanrates
      console.log(this.$refs)
      console.log(this.$refs.table)
    },
    onclicksavefourthwindow () {
      let loaninstallmentselected
      for( let li of this.rowlist) {
        if (li.LoanInstall==this.loaninstallment)
        {
          console.log(li.LoanTerm)
          loaninstallmentselected=li.LoanTerm
        }
      }
      if (true) {
        store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':'Se procede a grabar la informacion',button1:false, button3:false} )
        this.$http({
          method: 'GET',
          url: '/ralfintranet/api/setfourthwindow',
          transformResponse: [(data) => {
            return JSON.parse(data)
          }],
          params: {
            pcode: state.app.pcode,
            opcode: state.app.opcode,
            amount: this.amount,
            loaninstallment: loaninstallmentselected,
            loaninstallamount:this.loaninstallamount,
            observation:this.observation

          }
        }).then((response) => {
          console.log("Rsponse del consulta")
          console.log(response.data)
          console.log(response.data.links)
          let linkshtml=''

          Object.keys(response.data.links).forEach(function (key) {
            // do something with obj[key]
            console.log(key)
            console.log(response.data.links[key])
            linkshtml += "<a href='"+response.data.links[key]+"'>"+key+" </a> "
          });


          store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':'',button1:false, button3:false, links:response.data.links} )
          //this.$router.push('/dashboard')
          console.log(response)
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
.longlabel {
  flex-basis:1;
}
</style>
