<template>
    <div class="Main">
            <NavBar/>
        <h2>MainContent</h2>
        <div class="MainImages">
        <img :src="imgurl" alt="" v-for="n in 12" :key=n >
        </div>
            <Footer/>
    </div>
</template>

<script>
import NavBar from './NavBar';
import Footer from './Footer'
export default {
    name: 'MainContent',
    components: {
    // HelloWorld,
    NavBar,
    Footer
  },
    data(){
        return{
            imgurl: 'https://images.unsplash.com/photo-1518949396226-d2cd9ab6889e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

        }
    },
}
</script>
<style scoped>
.MainImages{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
img{
    width:25%;
}
</style>