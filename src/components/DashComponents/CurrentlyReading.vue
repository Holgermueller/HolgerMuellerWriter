<template>
  <div>
    <v-card class="currently-reading-display">
      <v-card-title>
        <h1>Currently reading: title here</h1>
      </v-card-title>

      <v-card-subtitle>
        <h3>Began reading: date here | calc days</h3>
      </v-card-subtitle>
      <v-card-text> </v-card-text>
      <v-card-actions>
        <UpdateStatusDialog />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import UpdateStatusDialog from "./UpdateStatus.vue";

export default {
  name: "CurrentlyReadingDisplay",

  components: {
    UpdateStatusDialog,
  },
};
</script>

<style scoped>
.currently-reading-display {
  width: 65%;
  margin: 7px auto;
}
</style>
