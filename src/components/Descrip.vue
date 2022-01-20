<template>
  <div class="main">
    <h4>Acerca de este producto</h4>
    <p class="texto_justificado">
      <span class="bold">&#8226; Estilo único:</span> Aspecto de madera, protección contra el polvo y un práctico
      salpicadero delantero vintage con controles <br />
      <span class="bold">&#8226; Conversión de vinilo MP3:</span> Transfiera música de vinilo a MP3 para
      reproducirlos en su estéreo o escucharlos en computadoras y dispositivos<br />
      móviles <br />
      <span class="bold">&#8226; Velocidad ajustable:</span> 33, 45, 78 RPM; velocidad ajustable, incluida la de
      45 rpm para que pueda escuchar todos los vinilos de su colección Altavoz
      frontal integrado: Reproducción completa de sonido para escuchar mejor la
      música tanto de vinilo como de MP3 gracias a la entrada USB para pendrive
      <br />
      <span class="bold">&#8226; Salida RCA:</span> Conexión RCA para emparejar su tocadiscos con cualquier
      sistema de reproducción de audio externo
    </p>
<div class="video">
        <video src="../assets/video.mp4"  controls poster="../assets/poster.jpg"> ></video>
</div>
    
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  height: auto;
  font-family: "Merriweather", serif;
  font-family: "Playfair Display", serif;
  font-size: 25px;
}
.main p {
  font-weight: 100;
  font-size: 15px;
  line-height: 25px;
  padding: 20px;
}
.texto_justificado{
    text-align: justify;
}
.bold{
    font-weight:bold;
}
.video{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
    max-width: 50%;
    height: auto;
    
}
</style>