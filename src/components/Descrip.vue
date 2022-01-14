<template>
  <div class="main">
    <h4>Acerca de este producto</h4>
    <p class="texto_justificado">
      <span class="bold">Estilo único:</span> Estilo único: aspecto de madera, protección contra el polvo y un práctico
      salpicadero delantero vintage con controles <br />
      Conversión de vinilo MP3: transfiera música de vinilo a MP3 para
      reproducirlos en su estéreo o escucharlos en computadoras y dispositivos
      móviles <br />
      <span class="bold">Velocidad ajustable:</span> 33, 45, 78 RPM; velocidad ajustable, incluida la de
      45 rpm para que pueda escuchar todos los vinilos de su colección Altavoz
      frontal integrado: Reproducción completa de sonido para escuchar mejor la
      música tanto de vinilo como de MP3 gracias a la entrada USB para pendrive
      <br />
      <span class="bold">Salida RCA:</span> conexión RCA para emparejar su tocadiscos con cualquier
      sistema de reproducción de audio externo
    </p>
     <div class="video">
         <video controls="controls" preload="auto" >
             <source src="../assets/video.mp4" type="video/mp4" />
         </video>
     </div>
    
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.main {
  max-width: 50%;
  height: auto;
  font-family: "Merriweather", serif;
  font-family: "Playfair Display", serif;
  font-size: 25px;
}
.main p {
  font-weight: 100;
  font-size: 12px;
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
    height:350px;
    
}
</style>