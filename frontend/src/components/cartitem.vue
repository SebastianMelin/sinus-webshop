<template>
  <div class="container">
    <slot name="img" class="slotbox" />
    <div class="text">
      <slot name="delete" />
      <slot name="title" class="slotItemName" />

      <slot name="shortDesc" class="slotItemType" />

      <slot name="sn" class="slotSN" />
    </div>
    <slot name="price" class="slotprice" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  height: 80px;
  position: relative;
}
.colectionbox {
  display: flex;
}

.text {
  margin-left: 10px;
  p {
    margin: 0;
    margin-bottom: 2px;
    padding: 0;
  }
}
</style>
