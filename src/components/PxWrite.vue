<template>
    <section class="contenedor sobre-nosotros">
        <h2 id="Acerca" class="titulo">¡Escríbenos!</h2>
        <div class="contenedor-sobre-nosotros">
            <img src="@/assets/delivery.jpg" alt="" class="imagen-about-us">
            <div class="contenido-textos">
                 <px-form></px-form>
            </div>
        </div>
    </section>
</template>
<script>
import PxForm from '@/components/PxForm';

export default {
    name: 'Form',
    components:{
        PxForm
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
    width: 48%;
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
    .imagen-about-us{
        margin-bottom: 30px;
        width: 99%;
    }

    .sobre-nosotros .contenido-textos{
        width: 95%;
    }

}
</style>