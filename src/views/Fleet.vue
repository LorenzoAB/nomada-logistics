<template>
  <section class="contenedor sobre-nosotros">
      <div>
            <h2 id="Acerca" class="titulo">FLOTA</h2>
            <div class="contenedor-sobre-nosotros">
                <div class="contenido-textos">
                    <p>
                      Contamos con diferentes tipos de vehículos de transporte, provistos de la tecnología 
                      de seguimiento y materiales adecuados, para brindarte las mejores soluciones a medida 
                      de tus necesidades. 
                    </p>
                </div>
            </div>
      </div>
    <br>
      <div class="banner">
        <splide :options="primaryOptions" ref="primary">
            <splide-slide>
                    <img src="@/assets/vehiculo1.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo2.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo3.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo4.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo5.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo6.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo7.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo8.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo9.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo10.png">
            </splide-slide>
        </splide>

    <br>
        <splide :options="secondaryOptions" ref="secondary">
			<splide-slide>
                <img src="@/assets/vehiculo1.png">
            </splide-slide>
            <splide-slide>
                <img src="@/assets/vehiculo2.png">
            </splide-slide>
            <splide-slide>
                <img src="@/assets/vehiculo3.png">
            </splide-slide>
            <splide-slide>
                <img src="@/assets/vehiculo4.png">
            </splide-slide>
            <splide-slide>
                <img src="@/assets/vehiculo5.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo6.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo7.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo8.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo9.png">
            </splide-slide>
            <splide-slide>
                    <img src="@/assets/vehiculo10.png">
            </splide-slide>
        </splide>
    </div>
  </section>
</template>
<script>
  export default { 
    name: 'Caroucel',
    data() {
      return {
        primaryOptions: {
            type: 'fade',
            pagination: false,
            heightRatio: 0.5,
            arrows : false,
            cover : true,
            autoplay: true,
        },
        secondaryOptions:{
            rewind      : true,
            fixedWidth  : 100,
            fixedHeight : 64,
            isNavigation: true,
            gap         : 10,
            focus       : 'center',
            pagination  : false,
            cover       : true,
            autoplay: true,
            breakpoints : {
                '600': {
                    fixedWidth  : 66,
                    fixedHeight : 40,
                }
            }
        }
      };
    },
    mounted() {
       this.$refs.primary.sync( this.$refs.secondary.splide );
    }
  }
</script>
<style scoped>
/* About us */

.contenedor {
    padding: 30px 0;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
    margin-top: 50px;
}

.titulo {
    color: #000;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
}

main .sobre-nosotros{
    /*
    padding: 30px 0 60px 0;
    */
}
.contenedor-sobre-nosotros{
    display: flex;
    justify-content: space-evenly;
}

.sobre-nosotros .contenido-textos{
    width: 100%;
}

.contenido-textos h3{
    margin-bottom: 15px;
    text-align: center;
}


.contenido-textos p{
    /*
    padding: 0px 0px 30px 15px;
    */
    font-weight: 300;
    text-align: justify;
}

@media screen and (max-width:900px){
      .contenedor-sobre-nosotros{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .sobre-nosotros .contenido-textos{
        width: 90%;
    }

    .imagen-about-us{
        width: 90%;
    }
}


@media screen and (max-width:500px){
  /* ABOUT US */

    .imagen-about-us{
        margin-bottom: 60px;
        width: 99%;
    }

    .sobre-nosotros .contenido-textos{
        width: 95%;
    }
}
</style>