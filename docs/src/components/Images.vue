<template>
  <section id="contentImages">
    <div class="imagesOrig">
      <img
        v-bind:src="fotos[0]"
        alt="Tocadiscos Estéreo de 3 velocidades con Altavoces"
      />
    </div>
    <div class="diapo">
      <a @click="cambiarFoto(1)"
        ><img
          v-bind:src="fotos[1]"
          alt="Tocadiscos Estéreo de 3 velocidades con Altavoces"
      /></a>
      <a @click="cambiarFoto(2)"
        ><img
          v-bind:src="fotos[2]"
          alt="Tocadiscos Estéreo de 3 velocidades con Altavoces"
      /></a>
      <a @click="cambiarFoto(3)"
        ><img
          v-bind:src="fotos[3]"
          alt="Tocadiscos Estéreo de 3 velocidades con Altavoces"
      /></a>
      <a @click="cambiarFoto(4)"
        ><img
          v-bind:src="fotos[4]"
          alt="Tocadiscos Estéreo de 3 velocidades con Altavoces"
      /></a>
      <a @click="cambiarFoto(5)"
        ><img
          v-bind:src="fotos[5]"
          alt="Tocadiscos Estéreo de 3 velocidades con Altavoces"
      /></a>
    </div>
  </section>
</template>

<script>
export default {
  Name: "imagen",
  data() {
    return {
      fotos: [
        require("../assets/toca1.jpg"),
        require("../assets/toca1.jpg"),
        require("../assets/toca2.jpg"),
        require("../assets/toca3.jpg"),
        require("../assets/toca4.jpg"),
        require("../assets/toca5.jpg"),
      ],
    };
  },
  methods: {
    cambiarFoto(id) {
      this.fotos[0] = this.fotos[id];
    },
  },
};
</script>

<style escoped>
#contentImages {
  display: flex;
  flex: 0 1 50%;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
#contentImages img {
    
  max-width: 100%;
  max-height: 450px;
}
.diapo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.diapo img {
  max-width: 100%;
  margin: 5px;
  height: 50px;
  border: 1px solid #080808;
}
</style>