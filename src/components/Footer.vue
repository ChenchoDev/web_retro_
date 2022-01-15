<template>
  <div class="content_footer">
    <div class="card-footer">
      <ul>
        <li class="txt">CONTACTO</li>
        <hr class="line">
        <li class="txt">Fulgencio Marín Talavera</li>
        <li class="txt"><a href="mailto:"> pedidos@weeteighty.com</a></li>
        <li class="txt">Murcia - España</li>
      </ul>
    </div>
    <div class="card-footer">
        <ul>
        <li class="txt">QUIENES SOMOS</li>
        <hr class="line">
        <li class="txt"><a href="#">Sobre nosotros</a></li>
        <li class="txt"><a href="#">Contáctanos</a></li>
        <li class="txt"><a href="#">Términos y condiciones</a></li>
      </ul>
    </div>
    <div class="card-footer">
          <ul>
        <li class="txt">AYUDA</li>
        <hr class="line">
        <li class="txt"><a href="#">F.A.Q</a></li>
        <li class="txt"><a href="#">Envíos y entregas</a></li>
        <li class="txt"><a href="#">Politica de devoluciones</a></li>
      </ul>
    </div>
    <div class="card-footer">
      <div class="credit_cards">
        <div><i class="card fab fa-cc-visa"></i></div>
        <div><i class="card fab fa-cc-mastercard"></i></div>
        <div><i class="card fab fa-cc-paypal"></i></div>
        <div><i class="card fab fa-cc-amazon-pay"></i></div>
      </div>
      <div class="credit_cards">
        <div><a href="#"><i class="fab fa-facebook"></i></a></div>
        <div><a href="#"><i class="fab fa-twitter-square"></i></a></div>
        <div><a href="#"><i class="fab fa-instagram-square"></i></a></div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.credit_cards{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content:space-around;
    align-items:center;
    width: 100%;
    
}
.credit_cards i{
    font-size:20px;
}
.txt{
  font-weight: 200;
  font-size: 10px;
}
.card-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a27838;
  width: 25%;

}
.card-footer a {
  text-decoration: none;
  color: #a27838;
}
.card-footer a:hover {
  text-decoration: none;
  color: #faf9f9;
}
.card-footer ul > li {
  list-style: none;
}
.content_footer {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
}
</style>