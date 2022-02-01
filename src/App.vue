<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <v-container fluid>
        <v-row>
          <v-col class="name">
            <h1>Holger Mueller</h1>
          </v-col>

          <v-col>
            <v-tabs background-color="transparent" v-model="tab">
              <v-tabs-slider color="white"></v-tabs-slider>
              <v-tab v-for="item in items" :key="item.name">
                {{ item.name }}
              </v-tab>
            </v-tabs>
          </v-col>

          <v-col class="socials">
            <v-btn icon>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon> mdi-instagram </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-card class="content-display" elevation="0" tile>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.name">
            <v-card>
              <v-card-text>
                <div v-if="item.name === 'About'">
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

                <div v-else>
                  <Contact />
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions>
          <v-footer padless>
            <v-container>
              <v-row>
                <v-col>
                  <div class="copy">
                    <h6>Copyright &copy; 2022 Holger Mueller</h6>
                  </div>
                </v-col>
                <v-col>
                  <div class="social-foot">
                    <v-btn x-small icon>
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn x-small icon>
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-footer>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import Bio from "./components/Bio.vue";
import Portfolio from "./components/Portfolio.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",

  components: {
    Bio,
    Portfolio,
    Experience,
    Education,
    Contact,
  },

  data() {
    return {
      tab: null,
      items: [
        {
          name: "About",
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
          name: "Contact",
        },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  background-color: navy;
}
.name {
  text-align: left;
}
.socials {
  text-align: right;
  margin: auto;
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
footer {
  width: 90%;
  margin: 24px auto 0;
  bottom: 0;
}
.copy {
  text-align: left;
}
.social-foot {
  text-align: right;
}
</style>
