<template>
    <div class="Main">
        <h2>Home</h2>
        <div class="MainImages">
        <img :src="imgurl" alt="" v-for="n in 12" :key=n >
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
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