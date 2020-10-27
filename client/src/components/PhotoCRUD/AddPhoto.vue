<template>
  <div class="addphoto">
    <h2>Add New Photo</h2>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="pa-md-4 mx-auto formclass d-flex flex-column justify-space-around"
    >
      <v-text-field
        v-model="title"
        :counter="20"
        :rules="titleRules"
        label="Photo Title"
        required
        prepend-icon="mdi-pencil"
      ></v-text-field>
      <v-textarea
        v-model="description"
        :rules="descRules"
        label="Description"
        required
        auto-grow
        prepend-icon="mdi-comment"
      ></v-textarea>
      <vuetify-google-autocomplete
        id="map"
        v-model="location"
        :rules="locationRules"
        required
        classname="form-control"
        placeholder="Enter Photo Taken location"
        prepend-icon="mdi-map"
        types="(cities)"
      >
      </vuetify-google-autocomplete>

      <v-file-input
        label="Image Upload"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>

      <div class="btns d-flex flex-row justify-space-between">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      (v) => !!v || "Title is required",
      (v) => (v && v.length <= 20) || "Title must be less than 20 characters",
    ],
    description: "",
    descRules: [
      (v) => !!v || "Description is required",
      (v) =>
        (v && v.length >= 10) ||
        "Description must be greater than 10 characters",
    ],
    location: "",
    locationRules: [(v) => !!v || "Location is required"],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
.formclass {
  width: 650px;
  border: black 1px solid;
  min-height: 600px;
  max-height: 100vh;
}
</style>
