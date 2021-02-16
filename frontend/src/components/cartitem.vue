<template>
  
  <div class="container">
     <slot name="img" class="slotbox"/>
        <div class="text">
        <slot name="title" class="slotItemName"/>
        
        <slot name="shortDesc" class="slotItemType"/>
        
        <slot name="sn" class="slotSN"/>
        
        </div>
    <slot name="price" class="slotprice"/>

  

  </div>


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{


    height: 80px;
  position: relative;
    
}
.box{
    position: absolute;
    left: 0;
    width: 70px;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.459);
}
.text{
    position: absolute;
    top: 0px;
    left: 80px;
    p{
        margin: 0;
        margin-bottom: 2px;
        padding: 0;
    }
}
    .ItemName{
        font-size: 1.6rem;
    font-weight: bold;
    }
    .ItemType{
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.603);
    }
    .SN{
        color: rgba(0, 0, 0, 0.411);
        font-size: 0.8rem;
    }

.price{
    position: absolute;
    right: 0;
    top: 0px;
    font-size: 1.6rem;

}

</style>