<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />

      <div class="modal__dialog">
        <div class="modal_photo">
          <img class="photo" :src="require(`@/assets/${item.imgFile}`)" />
        </div>
        <div class="modal__body">
          <div>
            <h1>{{ item.title }}</h1>
            <p>{{ item.shortDesc }}</p>
            <p>{{ item.longDesc }}</p>
            <h2>{{ item.price }} SEK</h2>
          </div>
          <div class="modal__footer">
            <button
              class="buttons"
              v-on:click="additemtoCart(item), closeModal()"
            >
              TAKE MY MONEY
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "StoreItemModal",

  data() {
    return {
      show: false,
    };
  },
  computed: {
    item() {
      return this.$store.getters.getSelectedItem;
    },
  },
  methods: {
    additemtoCart: function(item) {
      this.$store.dispatch("addToCart", item);
    },
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 40%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    flex: 1;
    background-color: #ffffff;
    position: relative;
    width: 700px;
    height: 350px;
    // min-width: 233px;
    margin: 50px auto;

    flex-direction: row;
    display: flex;

    border-radius: 5px;
    z-index: 2;
  }

  &__body {
    flex: 1;
    width: 250px;
    height: 350px;
    padding: 10px 20px 10px 20px;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
  &__footer {
    flex-direction: row;
    justify-content: center;
  }
}
.modal_photo {
  width: 250px;
  height: 350px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.photo {
  width: 100%;
  height: 100%;
}
.buttons {
  font-size: 1.2rem;
  align-items: stretch;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 15px;
  padding: 8px;
  border: none;
  margin: 0px 5px 0px 5px;

  &:hover {
    transition-timing-function: ease-in-out;
    transition: 200ms;
    font-size: 1.7rem;
    cursor: pointer;
  }
}
</style>
