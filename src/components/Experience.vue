<template>
  <div id="Experience">
    <h1>Experience</h1>

    <div>
      <h3>Get full resume here => (link icon here)</h3>
    </div>

    <div v-for="job in jobs" :key="job.placeOfEmployment">
      <div>
        <h2>
          {{ job.placeOfEmployment }}
        </h2>
        <h3>
          {{ job.yearsWorked }}
        </h3>
      </div>

      <ul v-for="(duty, i) in job.duties" :key="i">
        <li>
          {{ duty }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",

  data: () => ({
    jobs: [
      {
        placeOfEmployment: "blah",
        yearsWorked: "blah",
        duties: ["blah", "blah", "blah"],
      },
    ],
  }),
};
</script>

<style scoped>
#Experience {
  text-align: left;
}
h1 {
  margin: 8px 0;
}
</style>
