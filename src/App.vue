<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <b-container fluid>
        <b-row>
          <b-col class="name">
            <h1>HolgerMueller</h1>
          </b-col>

          <b-collapse>
            <b-col>
              <v-tabs background-color="transparent" v-model="tab">
                <v-tabs-slider color="white"></v-tabs-slider>
                <v-tab v-for="item in items" :key="item.name">
                  {{ item.name }}
                </v-tab>
              </v-tabs>
            </b-col>
          </b-collapse>

          <b-col class="socials">
            <b-button> <b-icon icon="twitter"></b-icon></b-button>
            <b-button>
              <b-icon icon="instagram"></b-icon>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
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
                <v-footer padless>
                  <v-container>
                    <v-row>
                      <v-col>
                        <div class="copy">
                          Copyright &copy; 2022 Holger Mueller
                        </div>
                      </v-col>
                      <v-col>
                        <div class="social-foot">
                          <v-btn icon>
                            <v-icon>mdi-twitter</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>mdi-instagram</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-footer>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
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

  methods: {},
};
</script>

<style scoped>
#app {
  background-color: red;
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
  margin-top: 24px;
  bottom: 0;
}
.copy {
  text-align: left;
}
.social-foot {
  text-align: right;
}
</style>
