<template>
    <section class="sobre-nosotros" :style="{'background-image': 'url(' + require('@/assets/fondo-contacto.jpg') + ')'}">
        <div class="contenedor">
            <h2 id="Acerca" class="titulo">Te contactamos</h2>
            <div class="contenedor-sobre-nosotros">
                <div class="contenido-textos">
                    <p>Call Center</p>
                    <p>Lunes a viernes 8:30a.m. a 6:00p.m.</p>
                    <p>Sábados 9:00a.m. a 13:00 p.m.</p>
                    <p>Perú: (+51) 517 1600</p>
                </div>

                <div class="contenido-textos">
                    <p class="txt-white">.</p>
                    <p>Whatsapp</p>
                    <p>Todos los días a cualquier hora</p>
                    <p>Perú: 998 140 976</p>
                </div>
            </div>
        </div>
        </section>
</template>
<script>
export default {
    name: 'Contacts'
}
</script>
<style scoped>
.contenedor {
    padding: 30px 0;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
}
/* About us */

.titulo {
    color: #000;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
}

/* About us */
section.sobre-nosotros {
    background-size: cover;
     background-size:cover;
    background-repeat:no-repeat;
}

.contenedor-sobre-nosotros{
    display: flex;
    justify-content: space-evenly;
}

.imagen-about-us{
    width: 48%;
}

.sobre-nosotros .contenido-textos{
    width: 48%;
}

.contenido-textos p{
    /*padding: 0px 0px 30px 15px;*/
}

.txt-white{
    color: #fff;
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