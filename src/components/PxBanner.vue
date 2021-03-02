<template>
    <section id="banner">
       <img src="@/assets/banner-service.png" alt="banner Service">
            <div class="contenedor">
            <center>
            <h2 class="txt-titulo">NUESTRAS SOLUCIONES</h2>
            <p class="txt-subtitulo">Logística a través de la innovación, dedicación y tecnología.</p>
            </center>
        </div>
    </section>
</template>

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
    height: 80%;
}

#banner .contenedor{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.txt-titulo{
    color: #000;
    font-size: 1.5em;
}

.txt-subtitulo{
    color: #000;
    text-align: center;
}
</style>