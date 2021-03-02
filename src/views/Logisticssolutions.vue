<template>
    <section>
        <px-banner></px-banner>
        <div class="contenedor sobre-nosotros">
            <br>
            <div class="contenedor-sobre-nosotros">
                <img src="@/assets/SolucionesLogisticas.png" alt="" class="imagen-about-us">
                <div class="contenido-textos">
                    <h3>SOLUCIONES LOGISTICAS</h3>
                    <p>
                        Nos adaptamos a tus necesidades, proponiendo y generando soluciones a la medida.  
                    </p>
                    <p>
                        <px-button></px-button>
                    </p>
                </div>
            </div>
    </div>
    </section>
</template>
<script>
import PxBanner from "@/components/PxBanner";
import PxButton from "@/components/PxButton";

export default {
    name: "transportation",
    components: {
        PxBanner,
        PxButton
    },
}
</script>
<style scoped>

/*CONTENIDO*/
.contenedor {
    padding: 30px 0;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
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

.imagen-about-us{
    width: 48%;
}

.sobre-nosotros .contenido-textos{
    width: 38%;
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