<template>
  <b-navbar  toggleable type="dark" variant="dark" class='header'>
    <b-navbar-brand href="http://localhost:8080/#/" ><div class='navbar-logo-div'><img class='navbar-brand-logo' src='../../build/images/logo.png' /></div></b-navbar-brand>
    <div>
        <b-button variant="light" class='signUpBtn btnText'
         @click="goToAnotherPage('/sign-up')">Sign up</b-button>
        <b-button variant="outline-light" class='signInBtn btnText'
         @click="goToAnotherPage('/sign-in')">Sign in</b-button>
    </div>
    <!--  <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse  align='end' id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav   class="ml-auto">
      <b-nav-item href="#">Chats</b-nav-item>
        <b-nav-item href="#">Active Friends</b-nav-item>
        <b-nav-item href="#">Profile</b-nav-item>
      </b-navbar-nav>
    </b-collapse> -->
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goToAnotherPage (path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style scoped>
.header{
     background-image: linear-gradient(to right, #2c3e50 , black);
}
.navbar-logo-div{
    background-color:white;
    border-radius:50%;
    width:80px;
    height:80px;
}
.navbar-brand-logo{
    width:100%;
}
.signUpBtn{
    background-color:#4fc08d;
    border-color:#4fc08d;
    color:white;
}
.signUpBtn:hover{
    background-color:white;
    color:#2c3e50;
}
.signInBtn{
    border-color:#4fc08d;
}
.btnText{
    font-weight:bold;
}
</style>
