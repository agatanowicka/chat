<template>
  <div class="home">
  <img class='logo' src="../../build/images/logo.png">
    <h1 class='chatName'>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Talk More App'
    }
  }
}
</script>

<style scoped>
.logo{
  width:40%;
  margin-top:-5%
}
.chatName{
  margin-top:-8%;
  margin-bottom:100px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .logo{
  width:90%;
  margin-top:-5%
}
}
</style>
