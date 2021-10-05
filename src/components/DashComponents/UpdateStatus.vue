<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="0" color="primary" dark v-bind="attrs" v-on="on">
          <v-icon left>mdi-update</v-icon>
          Update status</v-btn
        >
      </template>

      <v-card>
        <v-card-title>
          title of book here
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="currentPage"
              id="currentPage"
              label="Page"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="lastPage"
              id="lastPage"
              label="of"
              outlined
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn
            elevation="0"
            color="red"
            dark
            @click.prevent="closeDialog && clearForm"
          >
            <v-icon left>mdi-cancel</v-icon>
            cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            elevation="0"
            dark
            color="primary"
            @click.prevent="updateStatus"
          >
            Update Status
          </v-btn>
        </v-card-actions>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            elevation="0"
            color="primary"
            dark
            block
            @click.prevent="finishedReading"
            >I'm finished!!</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "UpdateStatusDialog",

  data() {
    return {
      dialog: false,
      finished: false,
      currentPage: "",
      lastPage: "",
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    clearForm() {
      this.$refs.form.reset();
    },

    updateStatus() {},

    finishedReading() {},
  },
};
</script>
