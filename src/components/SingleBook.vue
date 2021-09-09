<template>
  <div>
    <v-card>
      <v-card-title>
        Single book here.
      </v-card-title>

      <v-card-text>
        {{ book }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SingleBookPage",

  props: ["id"],

  computed: {
    book() {
      return this.$store.getters.book(this.id);
    },
  },
};
</script>
