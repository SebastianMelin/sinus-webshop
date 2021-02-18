<template>
     <div class="nav">
            <img class="logo" src="@/assets/sinus-logo.svg">

 
         <div class="right">

           
     
      <router-link to="/">Products</router-link> |
      
      <router-link v-if="!isLoggedIn" to="/myaccount">Register</router-link>
      <router-link to="/Basket">
      <img class="bag" src="@/assets/icon-bag-white.svg">
      </router-link>
      <button v-if="!isLoggedIn" @click="$refs.ModalLogin.openModal()">Log in</button>
      <button v-if="isLoggedIn" @click="logout">Log out</button>


      
         </div>
      <form @submit.prevent="login">
        <ModalLogin ref="ModalLogin" v-if="!isLoggedIn">
      <!-- <template v-slot:header>
        <h1>Modal title</h1>
      </template> -->

      <template v-slot:body>
       <input type="email" v-model="email"  placeholder="Username"/>
       <input type="password" v-model="password" placeholder="Password"/>
      </template>

      <template v-slot:footer>
        <div class="buttonbox">
          <button class="buttons"  v-on:click="$refs.ModalLogin.closeModal(), $router.push('myaccount')">Register</button>
          <button class="buttons"  v-on:click="login">Login</button>
          
        </div>
      </template>
        </ModalLogin>
      </form>
      
    </div>
</template>

<script>

import ModalLogin from "../components/ModalLogin";
// import axios from 'axios';
export default {
components: {
    ModalLogin
  },
  data() {
      return {
       email:"",
       password:""   
      }
  },
  methods: {
    login: function () {
       let data = {
         
          email: this.email,
          password: this.password,
         
      }
       
        this.$store.dispatch('login',data)
        
      },
      logout: function () {
        
        this.$store.dispatch('logout')
       
        
      },
    //  async handleSubmit(){
    //    const response = await axios.post('/auth', {
    //     email:this.email,
    //     password:this.password
    //    });
    //    console.log(response)
    //    localStorage.setItem('token',response.data.token)
    //    this.$store.dispatch('saveUser',response)
    //   }
      
    //   send: function(){
    //     const dato = {email:"asdf", password:"asdf"}  
    // axios.post("https://reqres.in/api/articles", dato)
    // .then(response => this.articleId = response.data.id);

      // }
  },
  computed: {
     isLoggedIn(){ 
       return this.$store.getters.isLoggedIn
    },
     userIs(){
        return this.$store.getters.getUser
        },
  }
}
</script>

<style lang="scss" scoped >
.buttonbox{
    width: 100%;
    
    }
.buttons{
    align-items: stretch;
    background-color: black;
    color: blanchedalmond;
    border-radius: 15px;
    margin: 0px 10px 0px 10px;
    
}
.bag{
    background-color: #F56969;
    width: 20px;
    height: 20px;
    border: 5px solid #f56969;
    border-radius:50px;
    overflow:visible;
    
    
 
}

    .logo{
width: 150px;
height: 150px;
margin: 0;
padding: 0;
}
.nav{
position: relative;
display: grid;
grid-template-columns: auto auto;
width: 80vw;
font-size: 1.3rem;
}

.right{
    grid-column-start: 2;
    align-self: center;
      justify-self: end;
}
.test{
color: black;
}
</style>