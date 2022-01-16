<template>
  <div class="main_menu">
    <div class="link">
      <a href="#" class="home">Inicio</a>
      <a href="#" class="muebles">Muebles</a>
      <a href="#" class="ropa">Ropa</a>
      <a href="#" class="decoracion">Decoración</a>
      <a href="#" class="electronica">Electrónica</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.link a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin: 20px;
  align-items: center;
  font-size: 21px;
}

.link_menu {
  display: flex;
  align-items: center;
}
.home:hover {
  color: #f0c024;
  font-size: 25px;
}
.muebles:hover {
  color: #d25129;
  font-size: 25px;
}
.ropa:hover {
  color: #c02122;
  font-size: 25px;
}
.decoracion:hover {
  color: #d9903d;
  font-size: 25px;
}
.electronica:hover {
  color: #127694;
  font-size: 25px;
}

.main_menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: #761405;
  width: 100%;
 

}
.main_menu a {
  margin: 10px;
}
</style>