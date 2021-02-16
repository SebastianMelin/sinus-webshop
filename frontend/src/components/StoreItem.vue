<template>
<div class="ProductCard">
<slot class="slotname" name="title" />
<slot name="button" class="circle"/>
<slot name="shortDesc" class="slottype"/>
<slot name="img" class="slotstoreitem"/>
<div class="button"><slot name="price" class="slotprice"/> <section class="Type">Sek</section></div>

</div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped >
.ProductCard{
    position: relative;
    display: flex;
    flex-direction: row;
    height: 60vh;
    background-color: white;
    .circle{
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
    .bag{
        display: flex;
        width: 25px;
        height: 25px;
    }
.storeitem{
    position: absolute;
    bottom: 0px;
    left: 15%;
    width: 70%;
    height: 70%;
}
.name{
    margin-left: 30px;
    font-size:2rem ;
    font-weight: bold;
}
.type{
    position: absolute;
    top: 60px;
    left: 30px;
    color: #000000a4;
}
}
.button{
    display: flex;
    border: none;
    background-color: black;
    color: white;
    width: 80px;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 20px;
    position: absolute;
    bottom: 40px;
    left: 50px;
   

    .price{
       margin-left:10px ;
    display: flex;
    font-size: 1.4rem;
    justify-content: center;
    align-items: center;
    }
    .Type{
         margin-left:3px ;
        margin-top: 5px;
        font-size: 0.9rem;

    }
}
</style>