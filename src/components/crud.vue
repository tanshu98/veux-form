<template>
   <v-container>
    <v-form
     ref="form"
    v-model="valid"
    lazy-validation
    >
      <div class="text-center">    
        <v-row class="mb-6">
          <v-col cols="10">
            <div v-for="(namelist,counter) in namelist"
      v-bind:key="counter">
            <v-text-field v-model="newitem" label="Name"
             :counter="10"
            :rules="nameRules"
            outlined>
            </v-text-field>
            </div>
          </v-col>
          <v-col cols="2" class="d-flex">
            <v-btn class="mx-2" fab dark color="primary"
             @click="add_item"
             >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
            <v-btn class="mr-2" fab dark color="indigo"
             @click="remove_item">
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-btn
            :disabled="!valid"
            class="ma-2"
            color="success"
            @click="submit_item"
          >
            Submit
          </v-btn>
          <v-btn
            color="purple lighten-1"
            class="ma-2 white--text"
             @click="clear"
          >
            Clear
          </v-btn>
        </v-row>
      </div>
    </v-form>
  </v-container> 
  <!-- <div>
    <h1>{{name}}</h1>
    <h2>{{namelist}}</h2>
  <form @submit.prevent="add_item">
   <input class="link-input" type="text" placeholder="Name" v-model="newitem" />
</form>
  </div> -->
</template>
<script>
import { mapState, mapMutations } from "vuex"
export default {
  name: "Form",
  props: {
    msg: String
  },
  computed:{
    ...mapState([
      "name",
      "namelist"
      ]),
  },
  data() {
    return {
      valid: true,
      newitem:"",
      nameRules: [
        // v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    }
  },
  // },
//   methods: {
//       submit() {
//         console.log(this.namelist);
//       },
// //       clear() {
// //         this.$refs.form.clear()
// //       },
// //     add() {
// //         this.namelist.push()
// //         console.log(this.namelist.push());
// //     },
// //     remove_item() {
// //     this.namelist.pop()
// //     console.log(this.namelist.splice());
// // }
//     add(){
//     this.namelist.push({
//     name: ""
//     })
//     },
//     remove_item(counter){
//         this.namelist.splice(counter,1);
//     },
//     clear(){
//          this.namelist.name= "";
//     }
//     // this.name.pop()
//     },
 methods: {                                   // Add this:
    ...mapMutations([
      'ADD_ITEM',
      'REMOVE_ITEM',
      'SUBMIT_ITEM'
    ]),
    add_item(){
      this.ADD_ITEM(this.newitem)
      this.newitem = ''
    },
    remove_item(){
      this.REMOVE_ITEM(this.newitem)
    },
    submit_item(){
        this.SUBMIT_ITEM(this.newitem)
      }
  }
};
</script> */}