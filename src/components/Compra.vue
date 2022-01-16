<template>
  <div class="cont_compra">
        <div class="content_pago">
      <div class="pago">
        <div class="card">
          <div class="icon">
            <i class="fas fa-lock"></i>
          </div>
          <div class="text_pago">Compra segura</div>
        </div>
        <div class="card">
          <div class="icon">
            <i class="fas fa-shipping-fast"></i>
          </div>
          <div class="text_pago">Envio 24h</div>
        </div>
        <div class="card">
          <div class="icon">
            <i class="far fa-handshake"></i>
          </div>
          <div class="text_pago">Devolucion gratis</div>
        </div>
      </div>
    </div>
    <div class="cont_contador">
      <div class="comentario">
        <div class="text_comentario">
          <h5 class="precio">Comentarios <a href="#">(5)</a> Calificación</h5>
        </div>
        <div class="stars">
          <form>
            <p class="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label for="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label for="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label for="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label for="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label for="radio5">★</label>
            </p>
          </form>
        </div>
      </div>

      <h2 class="precio">
        Precio: <span id="total">45.5€</span>
        <del class="tachado"><span id="dto">50.5€</span></del>
        <span class="iva">IVA incluido</span>
      </h2>
      <div class="contador">
        <button
          class="btn"
          @click="cambiarContador('-1'), precioTotal(), decuento()"
          type="button"
          name="button"
        >
          -
        </button>
        <input class="cantidad" type="text" name="name" :value="contador" />
        <button
          class="btn"
          @click="cambiarContador('1'), precioTotal(), decuento()"
          type="button"
          name="button"
        >
          +
        </button>
      </div>

      <br />
      <button class="button">
        <span class="icon">Agregar al carrito </span>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  Name: "Compra",
  data() {
    return {
      contador: 1,
    };
  },

  methods: {
    cambiarContador(num) {
      this.contador += +num;
      if (!isNaN(this.contador) && this.contador < 0) {
        this.contador = 0;
      }
    },

    precioTotal() {
      const precio = 45.5;
      let totalPrice = this.contador * precio;

      return (document.getElementById("total").innerHTML = `${totalPrice} €`);
    },
    decuento() {
      const precio = 45.5;
      let dto = precio * 0.1;
      let totalPrice = this.contador * precio + dto;

      return (document.getElementById("dto").innerHTML = `${totalPrice} €`);
    },
  },
};
</script>

<style>
.card {
  max-width: 25%;
  margin: 10px;
  justify-content:center;
  align-items:center;
  border: 1px solid;
  padding: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  font-weight:200px;
  }
  .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.pago {
  display: flex;
  flex-direction: row;
  max-width: 50%;
}
.cont_compra{
  display: flex;
  flex-direction: row;
  width:auto;
  padding-bottom: 20px;
}
.content_pago{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.comentario {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: auto;
  align-items: center;
  justify-content: space-around;
}
.text_comentario a {
  text-decoration: none;
}
.cantidad {
  border: none;
  width: 14px;
}
.contador {
  display: flex;
  border: 1px solid;
  max-width: 229px;
  justify-content: center;
  align-items: center;
}
.cont_contador {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  justify-content: center;
  align-items: center;
}
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #761405;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 20px;
  width: auto;
  transition: all 0.5s;
  cursor: pointer;
}
.button:hover {
  background-color: #a2773a;
}
.icon {
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.button span:after {
  content: "\00bb"; /* Entidades CSS. Para usar entidades HTML, use &#8594;*/
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
  background-color: #a2773a;
}
.button:hover span {
  padding-right: 25px;
}
.button:hover span:after {
  opacity: 1;
  right: 0;
}
.iva {
  font-size: 12px;
  font-weight: 200;
}
.precio {
  font-weight: 200;
}
.btn {
  border: none;
  width: 1.8rem;
}
.tachado {
  font-size: 15px;
  color: #636262;
}
#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: center;
}

#form label {
  font-size: 20px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover ~ label {
  color: orange;
}

input[type="radio"]:checked ~ label {
  color: orange;
}
</style>