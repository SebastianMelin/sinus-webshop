<template>
 
<div class="grid">
  <div class="'box1">
    <p>Youre Items</p>
  </div>
  <div class='Items'>
    <p class="TextLine">
    <span>
    Items
    </span> 
    </p>
    <Items/>
  </div>

  <div class="PersonDe">
    <p class="TextLine">
    <span>
    Delivery
    </span> 
    </p>
  <PersonDetails/>
  </div>
  <div class="CradDe">
 <p class="TextLine">
    <span>
    PAYMENT DETAILS
    </span> 
    </p>
    <CardDetails/> 
  </div>  
  <div class="button">
    Take my money
  </div>

</div>



</template>

<script>
import Items from '../components/items.vue'
import PersonDetails from'../components/PersonDetails.vue'
import CardDetails from '../components/CardDetails.vue'
export default {

components:{
  Items,
  PersonDetails,
  CardDetails
},



}
</script>

<style lang="scss" scoped>

.grid{
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto auto auto;
  grid-gap:20px;

}
.Items{
  grid-row: 2;
  grid-column: 1;
  
}

.TextLine{
  position: relative;
  span{
        background-color: #E5E5E5;
    padding-right: 20px;
  }
  &::after{
    content:"";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5em;
    border-top: 1px solid rgba(0, 0, 0, 0.61);
    z-index: -1;
  }
}


.PersonDe{
    grid-row: 2;
    grid-column: 2;
}
.CradDe{
      grid-row: 2;
    grid-column: 3;
}
.button{
 grid-row: 3;
grid-column: 3; 
display: flex;
    background-color: black;
    color: white;
    width: 200px;
    height: 50px;
    text-align: center;
    font-size: 1.4rem;
    border-radius: 50px;
       align-items: center;
  justify-content: center;
}

</style>