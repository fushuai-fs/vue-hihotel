<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <router-view></router-view>
    </div>
</template>

<script>
    //    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
