<template>
  <div class="top_menu">
    <div class="buscar">
      <input class="placeholder" type="text" placeholder=" Buscar" value="" />
    </div>
  <div class="top_menu_link">
      <span class="tx">
        <a href="#">Mi cuenta&nbsp;<i class="fas fa-user"></i>&nbsp;</a
      ></span>

      <span class="tx">
        <a href="#">Registro &nbsp; <i class="fas fa-sign-in-alt"></i>&nbsp;</a
      ></span>

      <span class="tx">
        <a href="#">Mi carrito (0)&nbsp;<i class="fas fa-shopping-cart"></i>&nbsp;</a
      ></span>
    <div class="rrss">
      <a href="#"
        ><span class="rrss"><i class="fab fa-facebook"></i></span
      ></a>
      <a href="#">
        <span class="rrss"><i class="fab fa-twitter-square"></i></span
      ></a>
      <a href="#"
        ><span class="rrss"><i class="fab fa-instagram-square"></i></span
      ></a>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.top_menu {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #761405;
}
.top_menu_link a {
  margin-left: 15px;
}
.rrss {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  margin: 5px;
  color: white;
  margin-right: 20px;
}
.rrss a{
    display: flex;
    align-items: center;
  justify-content: center;
  font-size: 13px;

}
.rrss:hover {
    display: flex;
  align-items: center;
  font-size: 13px;
  margin: 5px;
  color: #ffbe14;
   margin-right: 20px;
}

.top_menu a {
  color: white;
  margin-left: 5px;
  text-decoration: none;
}
.top_menu a:hover {
  color: #ffbe14;
  margin-left: 5px;
  text-decoration: none;
}
.tx {
  font-size: 12px;
  margin: 10px;
 
  color: white;
  border-right: 2px solid white;
  border-left: 2px solid white;
}
.tx:hover {
  font-size: 12px;
  margin: 10px;
  color: rgb(3, 3, 3);
  border-right: 2px solid #ffbe14;
  border-left: 2px solid #ffbe14;
}
.placeholder {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
.buscar {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-left: 50px;
}
.top_menu_link{
    display: flex;
    flex-direction: row;
}
</style>