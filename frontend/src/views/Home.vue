<template>
  <div class="home">
    <store-item v-for="item in storeItems" :key="item._id">
      <template v-slot:title>
      <p class="slotname">{{item.title}}</p>
      </template>
      <template v-slot:price>
      <section class="slotprice" >{{item.price}}</section>
      </template>
      <template v-slot:img>
      <img class="slotstoreitem" :src="require(`@/assets/${item.imgFile}`)">
      </template>
      <template v-slot:shortDesc>
      <p class="slottype">{{item.shortDesc}}</p>
      </template>
      <template v-slot:button>
      <button v-on:click="additemtoCart(item)" class="slotcircle">
      <img class="bag" src="@/assets/icon-bag-black.svg">
      </button>
      </template>
    </store-item>
   
    
  </div>
</template>

<script>


import StoreItem from '../components/StoreItem.vue'

export default {
components:{
  StoreItem

},
data() {
  return {
    // itemsList: []
    
  }
},
methods: {
 additemtoCart: function(item){
   this.$store.dispatch('addToCart',item)
   
 }
},
mounted() {
  this.$store.dispatch("loadStoreItems")
},
computed:{
  storeItems(){
    return this.$store.getters.getstoreItems
  },
  
  
},
// created() {
//   this.$store.dispatch("loadStoreItems")
// },

}
</script>

<style lang="scss" scoped >
.slotcircle{
        position: absolute;
        top: 30px;
        right:60px;
        display: flex;
        width: 35px;
        height: 35px;
        background-color: #E5E5E5;
        border-radius: 50%;
         align-items: center;
        justify-content: center;
    }
.slotstoreitem{
    position: absolute;
    bottom: 0px;
    left: 15%;
    width: 70%;
    height: 70%;
}
.slotname{
    margin-left: 30px;
    font-size:2rem ;
    font-weight: bold;
}
.slottype{
    position: absolute;
    top: 60px;
    left: 30px;
    color: #000000a4;
}
.slotprice{
       margin-left:10px ;
    display: flex;
    font-size: 1.4rem;
    justify-content: center;
    align-items: center;
    }
.home{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap:10px
}
 .bag{
        display: flex;
        width: 25px;
        height: 25px;
    }

</style>