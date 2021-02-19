<template>
  <div class="grid">
    <div class="Join">
      <img class="Skate" src="@/assets/skate-hero-1.jpg" />
      <p class="text">
        Join the rolling family!
      </p>
    </div>
    <div class="info">
      <h1>Cowabu</h1>
      <p>
        <b
          >Skate ipsum dolor sit amet, rip grip hip grab 540 pivot nose Tracker.
          Gnar bucket Skateboard Shuffle Casper Slide 180 boneless layback
          hardware nosebone</b
        >
      </p>
      <p>
        Vans California Daze rock and roll chicken wing pogo transfer. Pwerslide
        pivot slam Sidewalk Surfer durometer. Deck full-cab gap Old Ghosts
        ho-ho. Invert melancholy feeble rocket air. Hanger rock and roll g-turn
        ledge.50-50 Kvin Harris boardslide
      </p>
    </div>
    <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div class="name">
          <p>Name</p>
          <input type="text" v-model="name" />
        </div>
        <div class="email">
          <p>Email</p>
          <input v-model="email" type="text" />
        </div>
        <div class="password">
          <p>Password</p>
          <input v-model="password" type="password" />
        </div>
        <div class="password">
          <p>Repeat Password</p>
          <input v-model="repeatPassword" type="password" />
        </div>
        <button v-on:click="register">Registrera</button>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    register: function() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        repeatPassword: this.repeatPassword,
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    username() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  height: 70vh;
  grid-template-columns: 50% 50%;
  grid-template-rows: 60% 48vh;
  grid-column-gap: 20px;
}

.Join {
  position: relative;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  .Skate {
    width: 100%;
    height: 100%;
  }
  .text {
    position: absolute;
    font-size: 3rem;
    color: white;
  }
}

.grid .register p {
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.603);
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
}
.btn {
  margin-top: 20px;
  width: 100%;
  text-align: center;
}
.Regibtn {
  font-size: 1.2rem;
  align-items: stretch;
  background-color: rgba(0, 0, 0, 0.692);
  color: white;
  border-radius: 15px;
  padding: 8px;
  border: none;
  margin: 0px 5px 0px 5px;
  cursor: pointer;

  &:hover {
    transition-timing-function: ease-in-out;
    transition: 200ms;
    color: rgb(218, 216, 216);
  }
}
</style>
