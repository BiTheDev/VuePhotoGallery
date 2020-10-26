<template>
  <div>
    <v-app-bar color="rgb(62,164,244)" dark>
      <v-img
        :src="require('../assets/Logo.gif')"
        max-height="60"
        max-width="60"
        contain
      ></v-img>

      <v-toolbar-title>Ho's space</v-toolbar-title>

      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/main">Home</v-tab>
          <v-tab to="/CategoryPhoto/sample">Sample</v-tab>
          <v-tab>YellowStone</v-tab>
          <v-tab>California</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data(){
    return{ 

    }
  }
}
</script>
