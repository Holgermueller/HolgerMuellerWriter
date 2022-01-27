<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-img alt="Pic of me"></v-img>
          <div>
            <h3>Holger Mueller</h3>
          </div>
          <div>Writer | Traveller | Enthusiast</div>
          <div>He/Him/His</div>
        </v-col>
        <v-col class="bio">
          <h2 class="bio-header">Bio</h2>
          <p class="bio-piece">
            Hi, I'm Holger Mueller, a writer living in Minneapolis,MN.
          </p>

          <p class="bio-piece">
            I've had a pretty varried string of jobs. I've worked delivering
            phone books (ask your parents), as a ticket taker in a movie
            theater, assisting at a community care home for psychiatric
            outpatients from the VA hospital system, quite a few miserable years
            in retail, a clickbait writer, and as an English tutor and teacher,
            both at a community college in upstate New York and in Korea.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="bio">
          <h2 class="bio-header">Interests</h2>
          <p class="bio-piece">
            In addition to writing, I enjoy movies, with a fondness for
            comedies; reading and writing, I recently rediscovered my affection
            for sci-fi and fantasy, and Marvel comics hold a special place in my
            heart; travel, having visited Australia, Republic of Korea, Canada,
            Italy, and France, and I have a few other countries on my bucket
            list. And I enjoy exercising, kind of. To put it more clearly, I
            always regret not working out. I never regret working out.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.bio {
  text-align: left;
}
.bio-header {
  margin: 6px 0;
}
</style>
