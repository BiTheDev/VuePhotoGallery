<template>
  <v-app>
      <NavBar v-if='Enter'/>
    <v-main>
      <router-view :changeNavStatus="changeNavStatus"/>
    </v-main>
    <Footer v-if='Enter'/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    NavBar,
    Footer
  },

  data(){
    return{
      Enter:false
    }
  },
  methods:{
    changeNavStatus(){
      this.Enter = true;
    }
  }
};
</script>
