<template>
  <div id="Education">
    <h1>Education</h1>

    <div class="school" v-for="(school, i) in schools" :key="i">
      <h2>
        {{ school.school }}
      </h2>
      <h3>
        {{ school.degree }}
      </h3>
      <h3>
        {{ school.field }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",

  data: () => ({
    schools: [
      {
        school: "SUNY New Paltz",
        degree: "Masters",
        field: "English",
      },
      {
        school: "SUNY New Paltz",
        degree: "Bachelor's",
        field: "English",
      },
    ],
  }),
};
</script>

<style scoped>
#Education {
  text-align: left;
}

.school {
  margin: 16px 8px;
}
</style>
