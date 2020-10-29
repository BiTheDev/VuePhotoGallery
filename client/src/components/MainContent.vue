<template>
    <div class="Main">
        <h2>MainContent</h2>
        <div class="MainImages">
            <div class="PhotoPost" v-for="n in PhotoData" :key=n.Title>
                <h2>{{ n.Title }}, {{n.Location}}</h2>
                <p>{{ n.Description }}</p>
                <img :src =n.ImageURL alt="" style="width:300px;">


            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'MainContent',
        props:{
        changeNavStatus:Function
    },
    data(){
        return{
            imgurl: 'https://images.unsplash.com/photo-1518949396226-d2cd9ab6889e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            PhotoData: []
        }
    },
    mounted(){
        this.changeNavStatus();
        this.GetAllPhoto();
    },
    methods:{
        GetAllPhoto(){
            axios.get('http://localhost:5000/api/GetAllPhoto')
        .then((response) =>{
            // console.log(response)
            this.PhotoData = response.data
            console.log(this.PhotoData)
        })
        .catch((error)=>{
            console.log(error)
        })
        }
    }
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