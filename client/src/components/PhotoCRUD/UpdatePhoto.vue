<template>
  <div>
    <h1 class="text-center">Update Photo</h1>
    <v-form
      ref="form"
      class="pa-md-4 mx-auto d-flex flex-column justify-space-around"
    >
      <v-text-field
        label="Photo Title"
        required
        prepend-icon="mdi-pencil"
        :value="PhotoData.Title"
      ></v-text-field>
      <v-text-field
        label="Photo Description"
        required
        prepend-icon="mdi-pencil"
        :value="PhotoData.Description"
      ></v-text-field>
      <vuetify-google-autocomplete
        id="map"
        :value="PhotoData.Location"
        classname="form-control"
        prepend-icon="mdi-map"
        types="(cities)"
      >
      </vuetify-google-autocomplete>
    </v-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      PhotoId: this.$route.params.Photo_id,
      PhotoData: null,
    };
  },
  mounted() {
    this.getPhotoInfo();
  },
  methods: {
    getPhotoInfo() {
      axios
        .get("http://localhost:5000/api/" + this.PhotoId)
        .then((response) => {
          this.PhotoData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>