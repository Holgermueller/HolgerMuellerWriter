<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-on="on" v-bind="attrs">Rate This Book</v-btn>
      </template>

      <v-card>
        <v-card-title>Rate This Book:</v-card-title>

        <v-card-text>
          <v-select :items="items" filled label="Choose a number"></v-select>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click.prevent="submitRating">Submit</v-btn>
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
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    submitRating() {},
  },
};
</script>
