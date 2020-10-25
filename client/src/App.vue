<template>
  <v-app>
    <NavBar/>
    <v-main>
      <!-- <HelloWorld/>  -->
      <MainContent/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent'
import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    // HelloWorld,
    NavBar,
    MainContent,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
