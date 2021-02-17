<template>
<div>

    <div class="maincontainer">
    <CartItem v-for="item in cartItems" :key="item._id">
        <template v-slot:img>
            <img class="slotbox" :src="require(`@/assets/${item.imgFile}`)">
        </template>
         
        <template v-slot:title>
            <p class="slotItemName">
                {{item.title}}
            </p>
        </template>
        <template v-slot:shortDesc>
            <p class="slotItemType">
                {{item.shortDesc}}
            </p>
        </template>
        <template v-slot:sn>
            <p class="slotSN">
                sn {{item.serial}}
            </p>
        </template>
        <template v-slot:price>
            <div class="slotprice">
              {{item.amount}}:st {{item.price}}SEK
            </div>
        </template>
        <template v-slot:delete>
            <button  v-on:click="deleteFromCart(item)">Remove</button>
        </template>
    </CartItem>
    
    </div>
    <div class="TotalBox">
        <p class="Total">Total</p>         
        <p class="Cost">{{cost}} SEK</p>
    </div>
</div>
</template>

<script>
import CartItem from '../components/cartitem'
export default {
components:{
CartItem
},
computed:{
  cartItems(){
    return this.$store.getters.getuserOrder
  },
  cost(){
    return this.$store.getters.getcost
  }
},
methods: {
 deleteFromCart: function(item){
   this.$store.dispatch('removeFromOrder',item)
   
 }
},
}
</script>

<style lang="scss" scoped>
.slotItemName{
        font-size: 1.2rem;
    font-weight: bold;
    }
    .slotItemType{
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.603);
    }
    .slotSN{
        color: rgba(0, 0, 0, 0.411);
        font-size: 0.5rem;
    }

.slotprice{
    position: absolute;
    right: 0;
    top: 0px;
    font-size: 1.6rem;

}
.slotbox{
    position: absolute;
    left: 0;
    width: 70px;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.459);
}
.maincontainer{
    display: grid;
    grid-template-columns:auto ;
    grid-template-rows:80px;
    height: 40vh;
    overflow-y: scroll;
    margin-bottom: 20px;
}
.TotalBox{
    border-top: black dotted 2px;
    display: flex;
    position: relative;
    p{
        font-size: 1.5rem;
    margin:0;
    padding: 0;
    }
    .Cost{
        position: absolute;
        right: 0;
    }
}
</style>