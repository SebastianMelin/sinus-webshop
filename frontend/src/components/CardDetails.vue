<template>
  <div>
    <div class="grid">

      
            
        <div class="CardOwner">
            <p>
             Card Owner
            </p>
            <input type="text">
        </div>
        <div class="CardNumber">
            <p>
                Card Number
            </p>
            <input type="text" >
        </div>
        <div  class="City">
            <p>
              Valid until
            </p>
            <input type="text">
        </div>
        <div class="CCV">
            <p>CCV</p>
            <input type="text" >
        </div>
           


    



    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.grid{
    display: grid;
    width: 90%;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-row-gap: 10px;
    grid-column-gap:40px ;
}

  p{
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.603);
      padding: 0;
      margin: 0;
  }
  input{
      width: 100%;
    padding: 10px;
     font-size: 1.5rem;
  }
.CardOwner{
  grid-column-start:1 ;
  grid-column-end:3 ;
}
.CardNumber{
      grid-column-start:1 ;
  grid-column-end:3 ;
}

</style>