<template>
  <nav id="banner">
    <div class="content_banner">
      <a href="#"
        ><img src="@/assets/logo.png" alt="logo.png" width="220" height="220"
      /></a>
      <div class="text">
        <h1>¡No te haces mayor,te haces Vintage!</h1>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style>
#banner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
}

.content_banner {
  display: flex;
  flex-direction: column;
  background: url("../assets/fondo_banner4.png") no-repeat fixed center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: auto;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  -webkit-animation-name: cambiarfondo ease-in-out;
  animation-name: cambiarfondo;
  -webkit-animation-duration: 6s;
  animation-duration: 60s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@keyframes cambiarfondo {
  0% {
    background-image: url("../assets/fondo_banner3.png");
  }
  33% {
    background-image: url("../assets/fondo_banner2.png");
  }
  66% {
    background-image: url("../assets/fondo_banner1.png");
  }
}
.text {
  margin: 30px 0px 30px 0px;
  padding: 3px;
  
  color: rgb(245, 243, 243);
  font-size: 25px;
  text-shadow: rgb(3, 3, 3) 0.1em 0.1em 0.2em;
}
</style>