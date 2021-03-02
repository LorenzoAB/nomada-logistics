<template>
    <section class="contenedor portafolio">
        <div>
                <h2 id="sintomas" class="titulo">Clientes</h2>
                <div class="galeria-port">
                    <div class="imagen-port">
                        <img class="imagen" src="@/assets/Falabella.png" alt="">
                    </div>
                    <div class="imagen-port">
                        <img class="imagen" src="@/assets/Oechsle.png" alt="">
                    </div>
                    <div class="imagen-port">
                        <img class="imagen" src="@/assets/Tottus.png" alt="">
                    </div>
                    <div class="imagen-port">
                        <img class="imagen" src="@/assets/Ripley.png" alt="">
                    </div>
                    
                    <div class="imagen-port">
                        <img class="imagen" src="@/assets/GrupoEfe.png" alt="">
                    </div>
                </div>
         </div>
        </section>
</template>
<script>
export default {
    name:'Client' 
}
</script>
<style scoped>
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

.galeria-port{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.imagen-port{
    width: 30%;
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

/*
Animacion
*/
.imagen{
    animation-duration: 3s;
    animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 200%
  }

  to {
    margin-left: 0%;
    width: 90%;
  }
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