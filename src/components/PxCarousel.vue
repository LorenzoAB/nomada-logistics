<template>
    <section id="banner">
        <splide :options="banner">
            <splide-slide>
            <img src="@/assets/banner1.png">
             <div class="contenedor">
                 <center>
                <h2 class="txt-titulo">Verdaderos Profesionales</h2>
                <p class="txt-subtitulo">Verdaderos Profesionales</p>
                </center>
            </div>
            </splide-slide>
        </splide>
    </section>
</template>

<script>
  export default { 
    name: 'Caroucel',
    data() {
      return {
        banner: {
          rewind : true,
          perPage: 1,
          autoplay: true,
        },
      };
    },

  }
</script>
<style scoped>
section{
    width: 100%;
}
#banner{
    margin-top:50px;
    position: relative;
}
#banner img{
    width: 100%;
    height: 500px;
}
#banner .contenedor{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}


.txt-titulo{
    color: #f4f4f4;
    font-size: 1.5em;
}

.txt-subtitulo{
    color: #f4f4f4;
    text-align: center;
}
</style>