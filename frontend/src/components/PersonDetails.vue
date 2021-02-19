<template>
  <div>
    <div class="grid">
      <div class="Name">
        <p>
          Name
        </p>
        <input type="text" />
      </div>
      <div class="Adress">
        <p>
          Street adress
        </p>
        <input type="text" />
      </div>
      <div class="City">
        <p>
          City
        </p>
        <input type="text" />
      </div>
      <div class="ZipCode">
        <p>Zip Code</p>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;

  grid-row-gap: 10px;
  grid-column-gap: 10px;
  position: relative;
}

p {
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.603);
  padding: 0;
  margin: 0;
}
input {
  width: calc(100% - 20px);
  padding: 5px;
  font-size: 1.5rem;
}
.Name {
  width: 100%;
  grid-column: 1 / span 2;
}
.Adress {
  grid-column: 1 / span 2;
}
</style>
