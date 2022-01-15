<template>
  <div class="container">
    <div class="header">
      <div class="top_menu"><TopMenu /></div>
      <div class="banner"><Banner /></div>
      <div class="main_menu"><MainMenu /></div>
    </div>

    <div class="breadcrumb"><Breadcrumb /></div>
<TituloArt/>
    <div class="content-main">
    <Descrip />
    <Images />
    </div>
    <div class="compra">
<Compra/>
    </div>
    
    <div class="footer"></div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import MainMenu from "./components/MainMenu.vue";
import TopMenu from "./components/TopMenu.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Images from "./components/Images.vue";
import Descrip from "./components/Descrip.vue";
import TituloArt from "./components/TituloArt.vue";
import Compra from "./components/Compra.vue";
export default {
  name: "App",
  components: {
    MainMenu,
    Banner,
    TopMenu,
    Breadcrumb,
    Images,
    Descrip,
    TituloArt,
    Compra
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shrikhand&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,900;1,300;1,400;1,900&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
#app {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: "Shrikhand", cursive;
  text-align: center;
  background-color: rgb(252, 252, 252);
}
.container {
  max-width: 1500px;
  margin: 0px auto;
}
.content-main {
  display: flex;
  flex-direction: row;
  
  
}
.descri {
  flex-grow: 50%;
  max-width: 50%;
}
.img {
  max-width: 50%;
  width: 400px;
  height: 300px;
}
</style>
