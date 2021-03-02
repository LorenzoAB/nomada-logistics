<template>
     <section class="portafolio">
            <div class="contenedor">
                <center>
                <h2 id="sintomas" class="titulo" >Nuestras Soluciones</h2>
                <p>Logística a través de la innovación, dedicación y tecnología.</p>
                </center>
                <div class="galeria-port">
                    <router-link class="imagen-port" to="/transportation">
                        <img src="@/assets/trasporte_carga.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="@/assets/icono1.png" alt="">
                            <p>Traseporte de carga</p>
                        </div>
                    </router-link>

                    <router-link class="imagen-port" to="/delivery">
                        <img src="@/assets/delivery.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="@/assets/icono1.png" alt="">
                            <p>Última Milla</p>
                        </div>
                    </router-link>

                    <router-link class="imagen-port" to="/distribution">
                        <img src="@/assets/Fulfillment.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="@/assets/icono1.png" alt="">
                            <p>Distribución</p>
                        </div>
                    </router-link>

                    <router-link class="imagen-port" to="/coldtransport">
                        <img src="@/assets/trasporte_frio.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="@/assets/icono1.png" alt="">
                            <p>Trasnporte en frío</p>
                        </div>
                    </router-link>
                        
                    <router-link class="imagen-port" to="/motorized">
                           <img src="@/assets/mensajeria.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="@/assets/icono1.png" alt="">
                            <p>Motorizados</p>
                        </div>
                    </router-link>
                   
                </div>
            </div>
        </section>
</template>
<script>
export default {
    name:'Services' 
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


.galeria-port{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.imagen-port{
    width: 19%;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    /*
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
    */
}

.imagen-port > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.hover-galeria{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transform: scale(0);
    background: rgba(255,255,0, 0.7);
    transition: transform .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.hover-galeria img{
    width: 50px;
}

.hover-galeria p{
    color: #000;
}

.imagen-port:hover .hover-galeria{
    transform: scale(1);
}


@media screen and (max-width:900px){
    .imagen-port{
        width: 44%;
    }
}
@media screen and (max-width:500px){
    .imagen-port{
        width: 95%;
    }
}
</style>