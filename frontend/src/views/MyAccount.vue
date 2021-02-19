<template>
  <div class="center">
    <div class="profileBox">
      <img src="@/assets/ProfilePic.png" alt="" />
      <div class="name">
        <p>User Name:</p>
        <p>{{ User.name }}</p>
      </div>
      <div class="email">
        <p>Email:</p>
        <p>{{ User.email }}</p>
      </div>
      <div class="email">
        <p class="ordhis">Order history</p>
      </div>
      <div class="historybox">
        <div v-for="order in History" :key="order._id" class="history">
          <div>
            <p>Order ID: {{ order._id }}</p>
            <p>Status: {{ order.status }}</p>
            <p>Summa: {{ order.orderValue }} SEK</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    User: function() {
      return this.$store.getters.getUser;
    },
    History: function() {
      return this.$store.getters.getUserOrderHistory;
    },
  },
  mounted() {
    this.$store.dispatch("loadUserOrderHistory");
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70vh;
}

.profileBox {
  display: grid;

  background: #f1f1f1;
  grid-template-rows: 300px 50px 50px;

  width: 400px;
  height: 600px;
  border: 1px solid black;
  -webkit-box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.92);
  box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.92);
}
img {
  align-self: center;
  justify-self: center;
  width: 200px;
  height: 200px;
}
.name {
  display: flex;
  align-self: center;
  justify-self: center;
  p {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    &:first-child {
      font-size: 1.6rem;
    }
  }
}
.email {
  display: flex;
  align-self: center;
  justify-self: center;
  p {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    &:first-child {
      font-size: 1.6rem;
    }
  }
}
.ordhis {
  text-decoration: underline 2px solid black;
}
.historybox {
  overflow: auto;
  height: 60%;
  padding: 30px;
}
.history {
  border: 1px solid black;
  margin-bottom: 20px;
  display: flex;
  align-self: center;
  justify-self: center;

  p {
    overflow: auto;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }
}
</style>
