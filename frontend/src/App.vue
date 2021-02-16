<template>
  <div id="app">
    <Navbar/>

    <div class="viewwindow">
    <router-view/>
    </div>
  </div>
</template>
<script>

import Navbar from './components/Navbar.vue'

export default {
components:{

Navbar
},

}
</script>

<style lang="scss">
body{
  background-color: #E5E5E5;
  display: flex;
 align-items: center;
  justify-content: center;
}
.viewwindow{
  width: 80vw;
}


</style>
