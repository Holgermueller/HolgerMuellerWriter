<template>
  <div id="Experience">
    <h1>Experience</h1>

    <div>
      <h3>Get full resume here => (link icon here)</h3>
    </div>

    <div v-for="job in jobs" :key="job.placeOfEmployment">
      <v-container>
        <v-row>
          <v-col>
            <h2>
              {{ job.placeOfEmployment }}
            </h2>
          </v-col>
          <v-col class="years-worked">
            <h3>
              {{ job.yearsWorked }}
            </h3>
          </v-col>
        </v-row>
      </v-container>
      <div></div>

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
        placeOfEmployment: "Freelance Content Writer, Zergnet",
        yearsWorked: "2015-2016",
        duties: [
          "Composed compelling content for Looper and Grunge websites",
          "Organized article materials for smooth reading experience",
          "Included appropriate images to accompany articles",
        ],
      },
      {
        placeOfEmployment:
          "Adjunct Professor of English, SUNY Orange, Middletown, NY",
        yearsWorked: "2013-2015",
        duties: [
          "Composed writing assignments and exercises on various topics to maximize student engagement with course materials",
          "Communicated complex, abstract concepts and technical terms to multiple students in clear, understandable terms",
          "Proofread student papers to point out areas for improvement",
          "Met with students individually to plan best approaches for improving writing skills",
        ],
      },
      {
        placeOfEmployment:
          "Faculty Writing Consultant, SUNY Orange, Middletown, NY",
        yearsWorked: "2013-2015",
        duties: [
          "Communicated directly with students to assess their skills and develop solutions to meet their needs",
          "Communicated complex, abstract concepts and technical terms  to students in clear, understandable terms",
          "Composed writing exercises to improve students’ writing skills",
          "Worked with multiple students based on individual progress and need",
          "Proofread student papers to point out areas for student improvement",
        ],
      },
      {
        placeOfEmployment: "Writing Consultant, SUNY Orange, Middletown, NY",
        yearsWorked: "2019-2015",
        duties: [
          "Communicated directly with students to assess their skills and develop solutions to meet their needs",
          "Communicated complex, abstract concepts and technical terms  to students in clear, understandable terms",
          "Composed writing exercises to improve students’ writing skills",
          "Worked with multiple students based on individual progress and need",
          "Proofread student papers to point out areas for student improvement",
        ],
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

.years-worked {
  text-align: right;
}
</style>
