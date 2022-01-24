<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>Holger Mueller Writer</h1>
      <v-spacer></v-spacer>
      <div>
        <v-btn x-large icon dark>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn x-large icon dark>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-card class="content-display" elevation="0" tile>
        <v-tabs v-model="tab" fixed-tabs>
          <v-tabs-slider color="blue"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item.name">
            {{ item.name }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.name">
            <v-card>
              <v-card-text>
                <div v-if="item.name === 'Bio'">
                  <Bio />
                </div>

                <div v-else-if="item.name === 'Portfolio'">
                  <Portfolio />
                </div>

                <div v-else-if="item.name === 'Experience'">
                  <Experience />
                </div>

                <div v-else-if="item.name === 'Education'">
                  <Education />
                </div>

                <div v-else-if="item.name === 'Interests'">
                  <Interests />
                </div>

                <div v-else>
                  <Contact />
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-main>

    <v-footer>&copy; 2022 Holger Mueller</v-footer>
  </v-app>
</template>

<script>
import Bio from "./components/Bio.vue";
import Portfolio from "./components/Portfolio.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Interests from "./components/Interests.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",

  components: {
    Bio,
    Portfolio,
    Experience,
    Education,
    Interests,
    Contact,
  },

  data() {
    return {
      tab: null,
      items: [
        {
          name: "Bio",
        },
        {
          name: "Portfolio",
        },
        {
          name: "Experience",
        },
        {
          name: "Education",
        },
        {
          name: "Interests",
        },
        {
          name: "Contact",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
#app {
  background-color: red;
}
.v-main {
  text-align: center;
  width: 85%;
  margin: auto;
  display: flex;
}
.content-display {
  height: 100%;
}
</style>
