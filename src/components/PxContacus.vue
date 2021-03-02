<template>
    <section class="contenedor sobre-nosotros">
        <h2 id="Acerca" class="titulo">CONSULTA O AYUDA</h2>
        <div class="contenedor-sobre-nosotros">
            <div class="contenido-textos">
                <h6>Teléfonos</h6>
                <p>
                    <b-icon icon="telephone" aria-hidden="true"></b-icon> 957544478
                    <br>
                    <b-icon icon="telephone" aria-hidden="true"></b-icon> 969133059
                </p>
                <h6>Correos</h6>
                <p>
                    <b-icon icon="envelope" aria-hidden="true"></b-icon> martin.larosa@nomada-peru.com 
                    <br>
                    <b-icon icon="envelope" aria-hidden="true"></b-icon> daniel.larosa@nomada-peru.com
                </p>
                <h6>Redes</h6>
                <p>
                    <b-icon icon="linkedin" aria-hidden="true"></b-icon> Nomada Logistic
                    <br>
                    <b-icon icon="facebook" aria-hidden="true"></b-icon> Nomada Logistic
                </p>
                <h6>Ubicación</h6>
                <p>
                    <b-icon icon="globe" aria-hidden="true"></b-icon> Calle Rio Blanco Mz. E, LOTE 19, Urb. La Atarjea, Villa El Salvador, Lima - Perú
                </p>
            </div>
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