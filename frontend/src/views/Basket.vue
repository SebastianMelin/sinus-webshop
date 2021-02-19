<template>
  <div class="grid">
    <div class="'box1">
      <p>Your items</p>
    </div>
    <div class="Items">
      <p class="TextLine">
        <span>
          Items
        </span>
      </p>
      <Items />
    </div>

    <div class="PersonDe">
      <p class="TextLine">
        <span>
          Delivery
        </span>
      </p>
      <PersonDetails />
    </div>
    <div class="CradDe">
      <p class="TextLine">
        <span>
          PAYMENT DETAILS
        </span>
      </p>
      <CardDetails />
    </div>
    <button class="button" v-on:click="buy">
      Take my money
    </button>
  </div>
</template>

<script>
import Items from "../components/items.vue";
import PersonDetails from "../components/PersonDetails.vue";
import CardDetails from "../components/CardDetails.vue";
export default {
  components: {
    Items,
    PersonDetails,
    CardDetails,
  },
  methods: {
    async buy() {
      if (this.$store.getters.isLoggedIn) {
        await this.$store.dispatch("createOrder");
      } else {
        alert("You need to log in to log in to order");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
}
.Items {
  grid-row: 2;
  grid-column: 1;
}

.TextLine {
  position: relative;
  span {
    background-color: #e5e5e5;
    padding-right: 20px;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5em;
    border-top: 1px solid rgba(0, 0, 0, 0.61);
    z-index: -1;
  }
}

.PersonDe {
  grid-row: 2;
  grid-column: 2;
}
.CradDe {
  grid-row: 2;
  grid-column: 3;
}
.button {
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
