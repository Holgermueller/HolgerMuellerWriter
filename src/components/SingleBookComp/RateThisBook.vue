<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="0" dark v-on="on" v-bind="attrs"
          >Rate This Book</v-btn
        >
      </template>

      <v-card>
        <v-card-title>Rate This Book:</v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-select
              v-model="rating"
              :items="items"
              filled
              label="Choose a number"
            ></v-select>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn elevation="0" @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn elevation="0" @click.prevent="submitRating">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "RateBookDialog",

  data() {
    return {
      dialog: false,

      items: [1, 2, 3, 4, 5],

      rating: "",
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    resetForm() {
      this.$refs.form.reset();
    },

    submitRating() {
      console.log(this.rating);

      this.resetForm();
      this.closeDialog();
    },
  },
};
</script>
