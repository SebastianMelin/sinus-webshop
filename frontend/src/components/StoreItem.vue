<template>
  <div grid>
    <div class="ProductCard">
      <slot name="slotdiv" />
      <slot name="button" class="circle" />
      <slot class="slotname" name="title" />
      <slot name="shortDesc" class="slottype" />
      <slot name="img" class="slotstoreitem" />
      <div class="button">
        <slot name="price" class="slotprice" />
        <section class="Type">Sek</section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ProductCard {
  padding-left: 10px;
  position: relative;
  border-radius: 5px;
  display: grid;
  border: 1px solid rgba(77, 76, 76, 0.658);
  grid-template-columns: 40px auto 40px;
  grid-template-rows: 60px 60px auto;
  flex-direction: row;
  height: 320px;
  width: 200px;
  background-color: white;

  -webkit-box-shadow: 12px 21px 28px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 21px 28px -13px rgba(0, 0, 0, 0.75);
  box-shadow: 12px 21px 28px -13px rgba(0, 0, 0, 0.75);
}

.button {
  display: flex;
  border: none;
  background-color: black;
  color: white;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  align-self: end;
  left: 20px;
  margin-bottom: 30px;
  position: absolute;
  grid-row: 3;
  grid-column: 1 / span 2;
}
</style>
