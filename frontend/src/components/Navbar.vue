<template>
  <div class="nav">
    <img class="logo" src="@/assets/sinus-logo.svg" />

    <div class="right">
      <router-link class="routerItem" to="/">Products</router-link>

      <router-link class="routerItem" v-if="!isLoggedIn" to="/myaccount"
        >Register</router-link
      >

      <button class="LoginBtn" @click="$refs.CartHoover.openModal()">
        <img class="bag" src="@/assets/icon-bag-white.svg" />
      </button>

      <button
        class="LoginBtn"
        v-if="!isLoggedIn"
        @click="$refs.ModalLogin.openModal()"
      >
        Log in
      </button>
      <button class="LoginBtn" v-if="isLoggedIn" @click="logout">
        Log out
      </button>
    </div>
    <CartHoover ref="CartHoover">
      <template v-slot:body> </template>
      <template v-slot:footer>
        <router-link to="/Basket">
          <button @click="$refs.CartHoover.closeModal()" class="buttons">
            Checkout
          </button>
        </router-link>
      </template>
    </CartHoover>
    <form @submit.prevent="login">
      <ModalLogin ref="ModalLogin" v-if="!isLoggedIn">
        <template v-slot:body>
          <input type="email" v-model="email" placeholder="Username" />
          <input type="password" v-model="password" placeholder="Password" />
        </template>

        <template v-slot:footer>
          <div class="buttonbox">
            <button
              class="buttons"
              v-on:click="
                $refs.ModalLogin.closeModal(), $router.push('myaccount')
              "
            >
              Register
            </button>
            <button class="buttons" v-on:click="login">Login</button>
          </div>
        </template>
      </ModalLogin>
    </form>
  </div>
</template>

<script>
import CartHoover from "../components/CartHoover";
import ModalLogin from "../components/ModalLogin";

export default {
  components: {
    ModalLogin,
    CartHoover,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      let data = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("login", data);
    },
    logout: function() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    userIs() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style lang="scss" scoped>
.routerItem {
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  font-size: 2rem;
  &:hover {
    transition-timing-function: ease-in-out;
    transition: 1000ms;
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.603);
  }
}

.buttonbox {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  font-size: 1.2rem;
  margin-bottom: 10px;
  padding: 5px;
}

.buttons {
  font-size: 1.2rem;
  align-items: stretch;
  background-color: rgba(0, 0, 0, 0.692);
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
.bag {
  background-color: #f56969;
  width: 30px;
  height: 30px;
  border-radius: 30%;
  padding: 5px;
  overflow: visible;

  &:hover {
    transition-timing-function: ease-in-out;
    width: 40px;
    height: 40px;
    transition: 1000ms;
    background-color: #f56969b4;
  }
}

.logo {
  width: 150px;
  height: 150px;
  margin: 0;
  padding: 0;
}
.nav {
  display: grid;
  grid-template-columns: auto auto;
  width: 80vw;
  font-size: 1.3rem;
}

.LoginBtn {
  background-color: #e5e5e5;
  border: none;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    transition-timing-function: ease-in-out;
    font-size: 2.5rem;
    transition: 1000ms;
    color: rgba(0, 0, 0, 0.603);
  }
}

.right {
  height: 40px;
  display: flex;
  grid-column-start: 2;
  align-self: center;
  justify-self: end;
}
</style>
