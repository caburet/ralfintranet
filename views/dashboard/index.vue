<template>
  <div>
    <div v-if="showverify" class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Verificar Cliente</h1>
        <h1 class="title error" v-if="showerrormensage">{{errormensage}}</h1>
        <h2>Verifica los datos de tu cliente y verifica en minutos si tiene su Prestamo Carfacil Pre-Aprobado</h2>
        <div class="block">
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Agencia</label>
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select  v-model="agencie" v-on:change="cleancampaign()" name="agencie">
                <option v-for="node in agencies" :value="node._id" >{{node.label}}</option>
              </select>
            </div>
          </div>
          <div class="control-label">
            <label class="label">Campaña</label>
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="campaign"  v-on:change="cleanproduct()" name="campaign">
                 <option v-for="node in campaigns" :value="node._id">{{node.label}}</option>


              </select>
            </div>
          </div>

        </div>
          <div class="control is-horizontal">
            <div class="control-label">
            </div>
            <div class="control">

            </div>
            <div class="control-label">
              <label class="label">Producto</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="product"  name="product">
                  <option v-for="node in products" :value="node._id">{{node.label}}</option>
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
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth" >
                <select v-model="owner.IDtype" name="owner.IDtype">
                  <option v-for="node in idtypes" :value="node._id">{{node.label}}</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.ID" v-on:change="loadowner('owner')" placeholder="Numero" name="owner.ID">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Nombre</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="owner.name"  placeholder="Nombre" name="owner.name">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" v-model="owner.lastname" type="text"  placeholder="Apellido" name="owner.lastname">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth" >
                <select v-model="owner.sex" name="owner.sex">
                  <option value="1">Femenino</option>
                  <option value="0">Masculino</option>
                </select>
              </div>
            </div>
            <div class="control-label">

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
              <button class="button is-primary" v-on:click="seenconyuge = !seenconyuge" name="seenconyuge">Mostrar Conyuge</button>
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="seenconcubino = !seenconcubino" name="seenconcubino">Mostrar Concubino/a</button>
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="seengarante = !seengarante" name="seengarante">Mostrar Garante</button>
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
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="cowner.IDtype" name="cowner.IDtype">
                  <option v-for="node in idtypes" :value="node._id">{{node.label}}</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="cowner.ID" v-on:change="loadowner('cowner')" placeholder="Numero" name="cowner.ID">
              </p>
            </div>
          </div>
          <div class="control is-horizontal" >
            <div class="control-label">
              <label class="label">Nombre</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="cowner.name" placeholder="Nombre" name="cowner.name">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="cowner.lastname" placeholder="Apellido" name="cowner.lastname">
              </p>
            </div>
          </div>

          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth" >
                <select v-model="cowner.sex" name="cowner.sex">
                  <option value="1">Femenino</option>
                  <option value="0">Masculino</option>
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
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="coowner.IDtype" name="coowner.IDtype">
                  <option v-for="node in idtypes" :value="node._id" >{{node.label}}</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="coowner.ID" v-on:change="loadowner('coowner')"placeholder="Numero" name="coowner.ID">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Nombre</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="coowner.name" placeholder="Nombre" name="coowner.name">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="coowner.lastname" placeholder="Apellido" name="coowner.lastname">
              </p>
            </div>
          </div>

          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="coowner.sex" name="coowner.sex">
                  <option value="1">Femenino</option>
                  <option value="0">Masculino</option>
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
              <label class="label">Tipo de Doc.</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="gowner.IDtype" name="gowner.IDtype">
                  <option v-for="node in idtypes" :value="node._id">{{node.label}}</option>
                </select>
              </div>
            </div>
            <div class="control-label">
              <label class="label">Numero</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.ID" v-on:change="loadowner('gowner')" placeholder="Numero" name="gowner.ID">
              </p>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Nombre</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.name" placeholder="Nombre" name="gowner.name">
              </p>
            </div>
            <div class="control-label">
              <label class="label">Apellido</label>
            </div>
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="gowner.lastname" placeholder="Apellido" name="gowner.lastname">
              </p>
            </div>
          </div>

          <div class="control is-horizontal">
            <div class="control-label">
              <label class="label">Sexo</label>
            </div>
            <div class="control">
              <div class="select is-fullwidth" >
                <select v-model="gowner.sex" name="gowner.sex">
                  <option value="1">Femenino</option>
                  <option value="0">Masculino</option>
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
              <button v-if="!showModal" class="button is-primary" v-on:click="onclickfn()" name="Salvar">Salvar</button>
              <button class="button is-link" v-on:click="onclickcan()" name="Cancelar">Cancelar</button>
            </div>
          </div>
        </div>
      </article>
    </div>
    </div>
    <modal v-if="showModal" @close="onclickclosemodal" @inquiry="onclickopeninquiry" @auth="onclickauthmodal" @pend="onclickpendmodal" @rech="onclickrechmodal" >
      <p>{{modalContain}}</p>
    </modal>
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
import { INIT_AGENCIES, LOGIN, INQUIRY_DATA, INIT_PERSON, TOGGLE_SIDEBAR, TOGGLE_MODAL, OPP_DATA, TOGGLE_INQUIRY} from 'vuex-store/mutation-types'
import store from './../../store'
import { Modal } from 'components/layout/'

const { state } = store
export default {
  components: {
    Modal
  },
  data: function () {
    return {

      seenconyuge: false,
      seenconcubino: false,
      seengarante: false,
      owner: {
        sex: '',
        name: '',
        ID: '',
        IDtype: '',
        lastname: '',
        birthdate:'',
        province:'',
        citycode:''
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
      idtypes:[{_id:1,label:'CUIT'},{_id:2,label:'DNI'},{_id:3,label:'Cedula'},{_id:4,label:'Pasaporte'},{_id:5,label:'LC'},{_id:6,label:'LE'},{_id:7,label:'CUIL'}],
      agencie: '',
      product: '',
      campaign: '',
      errormensage:'',
      showerrormensage:false,
      rulenr:0,
      continuestep2:true,
     }
  },
  computed:{
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
    agencies (){
      return state.app.verifyclient.agencies
    },
    campaigns () {
        return state.app.verifyclient.campaigns.filter(x => x.custcode === this.agencie )
    },
    products () {
      console.log("PRODUCTSSS")
      console.log("campaing"+this.campaign)
      console.log("agencie" + this.agencie )
      console.log("PRODUCTSSS")
      console.log("PRODUCTSSS")
      return state.app.verifyclient.products.filter(x => x.campaign === this.campaign ).filter(x => x.custcode === this.agencie )
    },
    formValues() {
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
    onInquiryChange : function (a,b,c=''){
      //here do what u want
      console.log("update")
      console.log(a)
      console.log(b)
      store.commit(INQUIRY_DATA, {id:a,value:b,type:c} )
    },
    onSubmit : function (){
      //here do what u want

      this.$http.post('/inquiry/inq_process?==' + state.app.inquirystring, state.app.inquirydata)
        .then(function (response) {
          if (Object.keys(this.formValues).length == Object.keys(state.app.inquirydata).length) {
            // Success
            console.log(response.data)
            this.$http.get('/ralfintranet/api/saveinquiryscore?&opportunityId=' + state.app.opcode + '&score=' + response.data.score + '&inquirycode=' + response.data.InquiryResult.fields.InquiryCode)
              .then(function (responsescore) { console.log("Grabo el score") }.bind(this)
                , function (responsescore) {
                  // Error
                  console.log(responsescore.data)
                });
          }
          else {
            this.$http.get('/ralfintranet/api/saveinquiryscore?&opportunityId=' + state.app.opcode + '&score=0 &inquirycode=' + response.data.InquiryResult.fields.InquiryCode)
              .then(function (responsescore) { console.log("Grabo el score") }.bind(this)
                , function (responsescore) {
                  // Error
                  console.log(responsescore.data)
                });
          }
          store.commit(TOGGLE_INQUIRY,{'showinquiry':false,'showverify':true} )
          this.nextrule('')
          console.log(response.data)
        }.bind(this), function (response) {
          // Error
          console.log(response.data)
        });


      console.log("emitio false!")
    },
    openInNewTab(url) {
    console.log(url)
      var win = window.open(url, '_blank');
      win.focus();
    },
    cleancampaign () {
      console.log(this)
      console.log(this.data)
      this.campaign=''
      this.product=''
    },
    cleanproduct () {
      this.product=''
    },
    loadowner (type) {
      if (this[type].ID.indexOf('-') > -1)
      {
        alert("Ingrese los datos sin guiones");
        return false
      }
      this.$http({
        method: 'GET',
        url: '/ralfintranet/api/loadperson',
        transformResponse: [(data) => {
          return JSON.parse(data)
        }],
        params: {
          parameters: {
            personID:this[type].ID,
          }
        }
      }).then((response) => {
        console.log(response)
        if (response.data.person.ID)
        {
          console.log(this[type].IDtype)
          console.log(response.data.person.IDType)
          this[type].ID=response.data.person.ID
          this[type].IDtype=response.data.person.IDtype
          this[type].name=response.data.person.name
          this[type].lastname=response.data.person.lastname
          this[type].sex=response.data.person.sex
          this[type].birthdate=response.data.person.birthdate.substring(0, 10);
          this[type].province=response.data.person.province
          this[type].citycode=response.data.person.citycode
          this[type].ingress=response.data.person.ingress
          this[type].phone=response.data.person.phone
          this[type].cellphone=response.data.person.cellphone
          this[type].marstatus=response.data.person.marstatus
          this[type].nacionality=response.data.person.nacionality
          this[type].address=response.data.person.address
          this[type].email=response.data.person.email
          this[type].taxregtype=response.data.person.taxregtype
          this[type].workphone=response.data.person.workphone
          this[type].workplace=response.data.person.workplace
          this[type].work=response.data.person.work
          response.data.person['type']=type
          store.commit(INIT_PERSON, response.data.person )
        }
      }).catch((error) => {
        console.log(error)
      })
    },
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
    setrulestatus (params,rulestate) {
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
        if (response.data.ok==true) {
          console.log(response)
          this.nextrule(response)
        }
        else {
          //alert(response.data.error)
          store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':"Error:"+response.error,button1:true, button3:false} )
        }
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
    checkfn () { //TODO
      console.log("aaaaaaaaaaaa")
      console.log(this.product)
      console.log(this.product=='')
      if (this.product=='')
        { return "Falta seleccionar campaña o producto"}
      if (this.owner.ID=='' || (this.owner.sex!=0 && this.owner.sex!=1) || this.owner.name=='' || this.owner.lastname=='' )
        { return "Falta ingresar datos del titular del credito"}
      return true
    },
    nextrule(response){
    console.log("Va next rule consoles logs")

      console.log(state.app.resrol.length,this.rulenr,this.continuestep2 )
      console.log(this.rulenr == state.app.resrol.length)
      var self = this
      if (this.rulenr == state.app.resrol.length)
      {
        console.log("Termino!")
        this.continuestep2 = false
        this.loadowner ('owner')
        // TODO save person
        this.$router.push('/cars')
      }
      let rolmessage = state.app.resrol[this.rulenr]
      this.rulenr +=1
        if (this.continuestep2) {
        console.log("rolmessage")
        console.log(rolmessage.formIfReturnFalse)
        console.log(rolmessage)
          if (rolmessage.ruleActionType==1)
          {
            store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':rolmessage.message, button1:true, button3:false,ruleid:rolmessage.RuleInternalId, form:rolmessage.formIfReturnFalse} )
          }
          else{
            store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':rolmessage.message, button1:false, button3:true,ruleid:rolmessage.RuleInternalId, form:rolmessage.formIfReturnFalse} )
          }

        }

    },
    onclickfn () {
      this.rulenr=0
      this.continuestep2=true
      this.showerrormensage=false
      let checkresult=this.checkfn()
      console.log(checkresult)
      if (checkresult==true) {
        let obj = {
          title: 'Grabando',
          message: 'Se procede a grabar la informacion',
          type: 'info',
          hideAllButton: true
        }

        store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':'Se procede a grabar la informacion',button1:false, button3:false} )
        let agenciename=''
        for (let cm of this.agencies)
        {
          if (cm._id==this.agencie)
          {
            agenciename=cm.label
          }
        }
        this.$http({
          method: 'GET',
          url: '/ralfintranet/api/savedata',
          transformResponse: [(data) => {
            return JSON.parse(data)
          }],
          params: {
            parameters: {
              campaign: this.campaign,
              agencie: this.agencie,
              agenciename: agenciename,
              product: this.product,
              owner: JSON.stringify(this.owner),
              gowner: JSON.stringify(this.gowner),
              cowner: JSON.stringify(this.cowner),
              coowner: JSON.stringify(this.coowner)
            }
          }
        }).then((response) => {

          console.log(response)
          if (response.data.ok==true) {
            store.commit(OPP_DATA, response.data )
            let continuestep2 = true
            store.commit(TOGGLE_MODAL, {'opened':false,'modalcontain':'',button1:false, button3:false} )
            if (this.continuestep2) {
              this.nextrule(response)
            }
          }
          else {
            //alert(response.data.error)
              store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':"Error:"+response.data.error,button1:true, button3:false} )
          }
        }).catch((error) => {
          let obj2 = {
            title: 'Error',
            message: error,
            customCloseBtnText:"Cerrar",
            type: 'error'
          }
          store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':"Error :"+error, button1:false, button3:false} )
          console.log(error)

        })
      }
      else
      {
        let obj = {
          title: 'Error',
          message: checkresult,
          type: 'warning'
        }
        store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':checkresult, button1:true, button3:false} )
        this.showerrormensage=true
        this.errormensage=checkresult
      }
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

        console.log(response)
        if (response.data.ok==true) {
          console.log('ARRANCA LOS CONSOLE')
          //console.log(response.data)
          // console.log(response.data.records)
          console.log('TERMINA LOS CONSOLE')
          store.commit(INIT_AGENCIES, response)
          console.log('Finish')
          if (response.data.personname) {
            store.commit(LOGIN, response.data.personname)
          }
          else {
            this.$router.push('/login')
          }
        }
        else {
          //alert(response.data.error)
          store.commit(TOGGLE_MODAL, {'opened':true,'modalcontain':"Error:"+response.data.error,button1:true, button3:false} )
        }
      }).catch((error) => {
        console.log("es el catch!!!!")
        console.log(error)
        this.$router.push('/login')
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
