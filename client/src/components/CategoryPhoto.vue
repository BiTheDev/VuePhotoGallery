<template>
    <div>Category Photos</div>
</template>

<script>
export default {
    name: 'MainContent',
        props:{
        changeNavStatus:Function
    },
    data(){
        return{

        }
    },
    mounted(){
        this.changeNavStatus();
    },
}
</script>