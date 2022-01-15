<template>
 <ul class="breadcrumb">
  <li><a href="#">Inicio</a></li>
  <li><a href="#">Electronica</a></li>
  <li><a href="#">Música</a></li>
  <li>Tocadiscos</li>
</ul>
</template>

<script>
export default {

}
</script>

<style>
.breadcrumb {
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  width: 100%;
  }

ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  
}


ul.breadcrumb li {
  display: inline;
  font-size: 15px;
}


ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}


ul.breadcrumb li a {
  color: #761405;
  text-decoration: none;
}


ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>