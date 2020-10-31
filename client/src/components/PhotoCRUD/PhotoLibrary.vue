<template>
  <div>
    <h1 class="text-center">Photo Library</h1>
    <v-btn depressed class="success mx-1 my-5" to="/Admin/PhotoCreation">Upload Photo</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Location</th>
            <th class="text-left">Description</th>
            <th class="text-left">View Image</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in PhotoData" :key="item.Title">
            <td>{{ item.Title }}</td>
            <td>{{ item.Location }}</td>
            <td>{{ item.Description }}</td>
            <td>
              <v-dialog v-model="dialog[item.Title]" width="600px" :key="item.Title">
                  <v-btn color="primary" depressed dark slot="activator" @click="$set(dialog, item.Title, true)">
                    View Image
                  </v-btn>
                <v-card :id="item.Title">
                  <v-img :src="item.ImageURL"  width= "600px"></v-img>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="$set(dialog, item.Title, false)">
                      close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </td>
            <td>
              <v-btn depressed color="warning" :to="'/Admin/PhotoStudio/' + item._id">Edit</v-btn>
              <v-btn depressed color="error">Delete</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      PhotoData: [],
      dialog:{}
    };
  },
  mounted() {
    this.GetAllPhoto();
  },
  methods: {
    GetAllPhoto() {
      axios.get("http://localhost:5000/api/GetAllPhoto")
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