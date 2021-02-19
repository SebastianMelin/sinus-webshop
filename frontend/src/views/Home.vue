<template>
  <div class="home">
    <StoreItem
      class="storeItem"
      v-for="item in storeItems"
      v-on:click.native="
        $refs.StoreItemModal.openModal(), setSelectedItem(item)
      "
      :key="item._id"
    >
      <template v-slot:title>
        <p class="slotname">{{ item.title }}</p>
      </template>
      <template v-slot:price>
        <section class="slotprice">{{ item.price }}</section>
      </template>
      <template v-slot:img>
        <img class="slotstoreitem" :src="require(`@/assets/${item.imgFile}`)" />
      </template>
      <template v-slot:shortDesc>
        <p class="slottype">{{ item.shortDesc }}</p>
      </template>
      <template v-slot:button>
        <button v-on:click="additemtoCart(item)" class="slotcircle">
          <img class="bag" src="@/assets/icon-bag-white.svg" />
        </button>
      </template>
    </StoreItem>
    <StoreItemModal ref="StoreItemModal" />
  </div>
</template>
<script>
import StoreItem from "../components/StoreItem.vue";
import StoreItemModal from "../components/StoreItemModal.vue";
export default {
  components: {
    StoreItem,
    StoreItemModal,
  },

  methods: {
    additemtoCart: function(item) {
      this.$store.dispatch("addToCart", item);
    },
    setSelectedItem: function(item) {
      this.$store.dispatch("setSelectedItem", item);
    },
  },
  mounted() {
    this.$store.dispatch("loadStoreItems");
  },
  computed: {
    storeItems() {
      return this.$store.getters.getstoreItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.storeItem {
  z-index: 1;
  position: relative;
}
.slotcircle {
  outline: none;
  position: relative;
  z-index: 9;
  border: none;
  grid-row: 1;
  grid-column: 3;
  display: flex;
  width: 35px;
  height: 35px;
  background-color: #000000b9;
  border-radius: 50%;
  align-self: center;
  justify-items: center;
  padding: 5px;
  margin-right: 20px;

  cursor: pointer;
  &:hover {
    transition: 200ms;
    background-color: #00000093;
  }

  &:active {
    transition: 0s;
    width: 37px;
    height: 37px;
  }
}
.slotstoreitem {
  align-self: end;
  justify-self: end;
  grid-row: 3;
  grid-column: 2;
  width: 100%;
  height: 100%;
}
.slotname {
  grid-column: 1 / span 2;
  grid-row: 1;
  align-self: end;
  justify-self: start;
  font-size: 1.5rem;
  font-weight: bold;
}
.slottype {
  grid-row: 2;
  grid-column: 1 / span 2;
  align-self: top;
  justify-items: center;
  color: #000000a4;
}
.slotprice {
  margin-left: 10px;
  display: flex;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
  grid-row: 3;
  grid-column: 1;
}
.home {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  grid-row-gap: 30px;
}
.bag {
  display: flex;
  width: 25px;
  height: 25px;
}
</style>
