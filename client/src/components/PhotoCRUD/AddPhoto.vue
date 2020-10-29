<template>
  <div class="addphoto">
    <h2>Add New Photo</h2>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="pa-md-4 mx-auto formclass d-flex flex-column justify-space-around"
      enctype="multipart/form-data"
    >
      <v-text-field
        v-model="PhotoDetail.title"
        :counter="20"
        :rules="titleRules"
        label="Photo Title"
        required
        prepend-icon="mdi-pencil"
      ></v-text-field>
      <v-textarea
        v-model="PhotoDetail.description"
        :rules="descRules"
        label="Description"
        required
        auto-grow
        prepend-icon="mdi-comment"
      ></v-textarea>
      <vuetify-google-autocomplete
        id="map"
        v-model="PhotoDetail.location"
        :rules="locationRules"
        required
        classname="form-control"
        placeholder="Enter Photo Taken location"
        prepend-icon="mdi-map"
        types="(cities)"
      >
      </vuetify-google-autocomplete>

      <v-file-input
      v-model="PhotoDetail.image"
        label="Image Upload"
        filled
        prepend-icon="mdi-camera"
        @change=uploadImage
      ></v-file-input>

      <div class="btns d-flex flex-row justify-space-between">

        <v-btn color="success" @click="createNewPhoto">
            Submit
        </v-btn>
        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      </div>
    </v-form>
    <img :src="previewImage" class="uploading-image" />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    previewImage:null,
    valid: true,
    PhotoDetail:{title: "", description: "", location: "", image: null},
    titleRules: [
      (v) => !!v || "Title is required",
      (v) => (v && v.length <= 20) || "Title must be less than 20 characters",
    ],
    descRules: [
      (v) => !!v || "Description is required",
      (v) =>
        (v && v.length >= 10) ||
        "Description must be greater than 10 characters",
    ],
    locationRules: [(v) => !!v || "Location is required"],
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    createNewPhoto(){
        const formData = new FormData()
        formData.append('image', this.PhotoDetail.image)
        console.log(formData)
        try{
             axios.post('http://localhost:5000/upload', formData);
             console.log('uploaded!')
        }catch(err){
            console.log(err);
        }

        let newPhoto = {
            Title: this.PhotoDetail.title,
            Description: this.PhotoDetail.description,
            Location: this.PhotoDetail.location,
            ImageURL: '../../../uploads/'+this.PhotoDetail.image.name
        }

        axios.post('http://localhost:5000/api/NewPhoto', newPhoto)
        .then((response) =>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    uploadImage(e){
                const image = e;
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    // console.log(this.previewImage);
                };
            }
        
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
.uploading-image{
    width:600px;
    align-self: center;
}
</style>
