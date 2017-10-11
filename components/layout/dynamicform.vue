<template>
  <div class="block" >
    <div class="control is-horizontal" v-for="formItem in formValues">
      <div class="control-label">
        <label class="label">{{formItem.Question}}</label>
      </div>
      <div class="control">
        <div class="control is-grouped" v-if="formItem.Type == 'open'">
          <p class="control is-expanded">
            <input :name="formItem.QuestionCode" class="input" v-model="formItem.QuestionCode" type="memo" >
          </p>
        </div>
        <div class="control is-grouped" v-if="formItem.Type == 'multiple'">
          <p class="control is-expanded"  v-for="itemoptions in formItem.Options">
            <input :name="formItem.QuestionCode" class="input"  v-model="formItem.QuestionCode" type="checkbox" >
          </p>
        </div>
        <div class="control is-grouped" v-if="formItem.Type == 'combobox'">
          <div class="control "  v-for="node in formItem.Options">
            <input :value="node" :name="formItem.QuestionCode" type="radio" id="5No">
            <label class="active" :for="node">{{node}}</label>
            <!--<select :name="formItem.QuestionCode" vv-model="formItem.QuestionCode">-->
              <!--<option v-for="node in formItem.Options" :value="node"  >{{node}}</option>-->
            <!--</select>-->
          </div>
        </div>
        <div class="control is-grouped" v-if="formItem.Type == 'yesno'">
          <div class="control is-expanded">
            <input value="Yes" :name="formItem.QuestionCode" type="radio" id="5Yes">
            <label class="active" for="5Yes">Yes</label>
            <input value="No" :name="formItem.QuestionCode" type="radio" id="5No">
            <label class="active" for="5No">No</label>
          </div>
        </div>
        <!--<div class="select is-fullwidth" v-if="formItem.input_type == 'text'">-->
          <!--<input type="text" class="form-control" v-model="formItem.values.value">-->
        <!--</div>-->
        <!--<div class="select is-fullwidth" v-if="formItem.input_type == 'password'">-->
          <!--<input type="password" class="form-control" v-model="formItem.values.value">-->
        <!--</div>-->
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

</template>

<script>
import store from './../../store'
const { state } = store
export default {

  components: {
  },
  computed:{
    formValues (){
      return state.app.form_items_from_server
    },

  },
  props: {
  },
  methods: {
    submitForm () {
            console.log("Submit this form");
        }
  }
}
</script>
<style lang="scss">
  @import '~bulma/sass/utilities/variables';

  .app-navbar {
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

    .container {
      margin: auto 10px;
    }

    .nav-right {
      align-items: stretch;
      align-items: stretch;
      flex: 1;
      justify-content: flex-end;
      overflow: hidden;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  .hero-brand {
    .vue {
      margin-left: 10px;
      color: #36AC70;
    }
    .admin {
      color: #28374B;
    }
  }
</style>
