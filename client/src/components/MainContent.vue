<template>
  <div class="Main">
    <!-- <h2>MainContent</h2> -->
    <div class=" my-5 MainImages d-flex flex-row justify-space-around flex-wrap align-content-space-around">
      <!-- <div class="PhotoPost" v-for="n in PhotoData" :key="n.Title">
        <h2>Title: {{ n.Title }}</h2>
        <span>Image Taken Location{{ n.Location }}</span>
        <p>Description: {{ n.Description }}</p>
        <img :src="n.ImageURL" alt="" style="width: 300px" />
      </div> -->
      <v-card max-width="350" height="450" v-for="n in PhotoData" :key="n.Title">
        <v-img :src="n.ImageURL" height="250px"></v-img>

        <v-card-title> {{ n.Title }} </v-card-title>

        <v-card-subtitle> {{ n.Location }} </v-card-subtitle>
        <v-card-text>
          Description {{ n.Description }}
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn color="orange lighten-2" text> Detail </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ n.Description }}
            </v-card-text>
          </div>
        </v-expand-transition> -->
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MainContent",
  props: {
    changeNavStatus: Function,
  },
  data() {
    return {
      imgurl:
        "https://images.unsplash.com/photo-1518949396226-d2cd9ab6889e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      PhotoData: [],
      show: false,
    };
  },
  mounted() {
    this.changeNavStatus();
    this.GetAllPhoto();
  },
  methods: {
    GetAllPhoto() {
      axios
        .get("http://localhost:5000/api/GetAllPhoto")
        .then((response) => {
          // console.log(response)
          this.PhotoData = response.data;
          console.log(this.PhotoData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.MainImages {
  height:100vh;
  overflow-y: scroll;
}
img {
  width: 25%;
}
</style>