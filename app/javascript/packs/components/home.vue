<template>
  <body>
    <v-app>
      <v-content>

      <v-carousel
          cycle
          height="600"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-4">{{ slide }} </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-divider></v-divider>

        <v-layout wrap justify-center>
          <router-link to="/signup">
            <v-flex xs12 sm12 md12 text-center my-5>
              <v-btn x-large depressed rounded class="ma-2" outlined color="teal">Use Kanata now!</v-btn>
            </v-flex>
          </router-link>
        </v-layout>

        <v-divider></v-divider>

        <v-container fluid>
          <v-layout wrap>

            <v-flex xs12 sm6 md4 text-center my-5>

              <v-card
                class="mx-auto"
                color="#4DB6AC"
                width="480"
                outlined
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="white--text headline">XXXXXXXXXXXXXXXXXXXXX</v-list-item-title>
                    <v-list-item-subtitle class="white--text">XXXXXXXXXXXXX</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-avatar color="#E8F5E9" size="250">
                  <span class="blue-grey--text display-2">Team</span>
                </v-avatar>

                <v-card-text>
                  <v-divider></v-divider>
                </v-card-text>

                <v-card-text class="white--text">
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </v-card-text>

                <v-chip
                  class="ma-2"
                  close
                  color="teal"
                  text-color="white"
                  close-icon="mdi-delete"
                >
                  <v-avatar left>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-avatar>
                  Confirmed
                </v-chip>

              </v-card>
            </v-flex>

            <v-flex xs12 sm6 md4 text-center my-5>
              <v-card
                class="mx-auto"
                color="#E8F5E9"
                width="480"
                outlined
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="blue-grey--text headline">XXXXXXXXXXXXXXXXXXXXX</v-list-item-title>
                    <v-list-item-subtitle class="blue-grey--text">XXXXXXXXXXXXX</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-avatar color="#B2DFDB" size="250">
                  <span class="blue-grey--text display-2">Individual</span>
                </v-avatar>

                <v-card-text>
                  <v-divider></v-divider>
                </v-card-text>

                <v-card-text class="blue-grey--text">
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </v-card-text>

                <v-chip
                  class="ma-2"
                  close
                  color="teal"
                  text-color="white"
                  close-icon="mdi-delete"
                >
                  <v-avatar left>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-avatar>
                  Confirmed
                </v-chip>

              </v-card>
            </v-flex>

            <v-flex xs12 sm6 md4 text-center my-5>
              <v-card
                class="mx-auto"
                color="#80CBC4"
                width="480"
                outlined
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="white--text headline">XXXXXXXXXXXXXXXXXXXXX</v-list-item-title>
                    <v-list-item-subtitle class="white--text">XXXXXXXXXXXXX</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-avatar color="#E8F5E9" size="250">
                  <span class="blue-grey--text display-2">Budget</span>
                </v-avatar>

                <v-card-text>
                  <v-divider></v-divider>
                </v-card-text>

                <v-card-text class="white--text">
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </v-card-text>

                <v-chip
                  class="ma-2"
                  close
                  color="teal"
                  text-color="white"
                  close-icon="mdi-delete"
                >
                  <v-avatar left>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-avatar>
                  Confirmed
                </v-chip>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
      </v-content>

      <v-divider></v-divider>

      <v-card flat tile>
        <v-window v-model="onboarding" vertical>
          <v-window-item
            v-for="n in length"
            :key="`card-${n}`"
          >
            <v-card
              color="secondary"
              height="200"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
                tag="v-card-text"
              >
                <h1 style="font-size: 5rem;" class="white--text">Slide {{ n }}</h1>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
          <v-btn
            text
            @click="prev"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group
            v-model="onboarding"
            class="text-center"
            mandatory
          >
            <v-item
              v-for="n in length"
              :key="`btn-${n}`"
              v-slot:default="{ active, toggle }"
            >
              <v-btn
                :input-value="active"
                icon
                @click="toggle"
              >
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn
            text
            @click="next"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

        <v-divider></v-divider>

        <v-layout wrap justify-center>
          <router-link to="/signup">
            <v-flex xs12 sm12 md12 text-center my-5>
              <v-btn x-large depressed rounded class="ma-2" outlined color="teal">Use Kanata now!</v-btn>
            </v-flex>
          </router-link>
        </v-layout>

        <v-divider></v-divider>

    </v-app>
  </body>
</template>

<script>
  export default {
    data: () => ({
      length: 4,
      onboarding: 0,
      colors: [
        '#009688',
        '#4DB6AC',
        '#009688',
        '#4DB6AC',
      ],
      slides: [
        'Kanata',
        'Your',
        'Task',
        'Manager',
      ],
    }),
    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }
</script>

<style scoped>
a {
  text-decoration: none;
  font-family: "游ゴシック","arial unicode ms",sans-serif;
}
</style>
