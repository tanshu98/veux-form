<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="text-center">
        <v-row class="mb-6">
          <v-col cols="10">
            <div v-for="(name, counter) in namelist" v-bind:key="counter">
              <v-text-field
                v-model="namelist[counter]"
                label="Name"
                :counter="10"
                :rules="nameRules"
                outlined
              >
              </v-text-field>
            </div>
            <v-text-field
                v-model="newitem"
                label="Name"
                :counter="10"
                :rules="nameRules"
                outlined
              >
              </v-text-field>
          </v-col>
          <v-col cols="2" class="d-flex">
            <v-btn class="mx-2" fab dark color="primary" @click="add_item">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
            <v-btn class="mr-2" fab dark color="indigo" @click="remove_item">
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
            @click="clear_item"
          >
            Clear
          </v-btn>
        </v-row>
      </div>
    </v-form>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Form",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["namelist"]),
  },
  data() {
    return {
      valid: true,
      newitem: "",
      nameRules: [
        // v => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
 
  methods: {
   
    ...mapMutations(["ADD_ITEM", "REMOVE_ITEM", "SUBMIT_ITEM"]),
    add_item() {
      this.ADD_ITEM(this.newitem);
      this.newitem = "";
    },
    remove_item() {
      this.REMOVE_ITEM(this.newitem);
    },
    submit_item() {
      this.SUBMIT_ITEM(this.namelist);
    },
    clear_item() {
      this.newitem = "";
    },
  },
};
</script> */}