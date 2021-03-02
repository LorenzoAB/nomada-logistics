<template>
  <section class="contenedor sobre-nosotros">
      <div>
            <h2 id="Acerca" class="titulo">¿Quiénes somos?</h2>
            <div class="contenedor-sobre-nosotros">
                <img src="@/assets/about.png" alt="" class="imagen-about-us">
                <div class="contenido-textos">
                    <h3>HISTORIA</h3>
                    <p>
                      Los nómadas son tribus milenarias caracterizadas por trasladarse de forma 
                      permanente de un sitio a otro, sin tener un lugar fijo. Basados en los valores 
                      de dicha cultura, fundamos NOMADA Logistics, una empresa logística especializada 
                      en transporte con una amplia experiencia en diversas industrias. Estamos 
                      comprometidos con hacer crecer el negocio de nuestros clientes implementando 
                      servicios a medida que constituyan una solución integral a sus necesidades.
                      Para ello contamos con el mejor equipo de profesionales -la tribu NOMADA-, 
                      el cual empleando activos de última teconología, realiza un monitoreo permanente 
                      de todas nuestras operaciones. 
                    </p>
                </div>
            </div>
      </div>
    <br>
    <br>
       <div>
            <div class="contenedor-sobre-nosotros">
                <div class="contenido-textos">
                     <h3>VISIÓN</h3>
                    <p>Queremos estar entre las tres mejores empresas de logística y transporte de latino 
                        américa, siendo una de las empresas más admiradas del Perú por nuestra vocación 
                        emprendedora, por aportar al desarrollo del país y al progreso de nuestros trabajadores 
                        y sus familias. </p>
                </div>

                <div class="contenido-textos">
                    <h3>MISIÓN</h3>
                    <p>Generar valor para nuestros clientes, simplificando sus procesos y aportando al crecimiento 
                        de sus negocios.</p>
                </div>
            </div>
        </div>
  </section>
</template>
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

.imagen-about-us{
    width: 48%;
}

.sobre-nosotros .contenido-textos{
    width: 40%;
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