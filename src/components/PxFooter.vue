<template>
    <section>
        <footer>
            <div class="contenedor">
            <div class="container-footer-all">
                
                    <div class="container-body">

                        <div class="colum1">
                            
                            <img class="logo-footer" src="@/assets/nomada.png" alt="">
                        </div>

                        <div class="colum2">

                            <h1>MENÚ</h1>

                            <div class="row">
                                <img src="@/assets/flecha.png">
                                <label>Inicio</label>
                            </div>
                            <div class="row">
                                <img src="@/assets/flecha.png">
                                <label>Nosotros</label>
                            </div>
                            <div class="row">
                                <img src="@/assets/flecha.png">
                                <label>Servicios</label>
                            </div>
                            <div class="row">
                                <img src="@/assets/flecha.png">
                                <label>Contactos</label>
                            </div>
                            <div class="row">
                                <img src="@/assets/flecha.png">
                                <label>Clientes</label>
                            </div>



                        </div>

                        <div class="colum3">

                            <h1>Redes Sociales</h1>

                            <div class="row2">
                                <img src="@/assets/flecha.png">
                                <label>Facebook</label>
                            </div>

                            <div class="row2">
                                <img src="@/assets/flecha.png">
                                <label>Linkedin</label>
                            </div>

                            <div class="row2">
                                <img src="@/assets/flecha.png">
                                <label>Isstagram</label>
                            </div>

                            <div class="row2">
                                <img src="@/assets/flecha.png">
                                <label>Youtube</label>
                            </div>

                            <div class="row2">
                                <img src="@/assets/flecha.png">
                                <label>Tweter</label>
                            </div>


                        </div>

                    </div>
                
            </div>
                
            <div class="container-footer">
                <center>
                    <div class="footer">
                        <div class="copyright">
                            © 2021 Todos los Derechos Reservados | <a href="">Ando Marketing</a>
                        </div>
                    </div>
                </center>
            </div>
        </div>
        </footer>
    </section>
</template>
<style scoped>

.contenedor {
    padding: 30px 0;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
}

footer{
    background-color: yellow;
}

.logo-footer{
    text-align: center;
    width: 250px;
    margin: 0 auto;
}

.container-footer-all{
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: 30px;
}

.container-body{
    display: flex;
    justify-content: space-between;
}

.colum1{
    max-width: 333px;
}


.colum1 h1{
    font-size: 22px;
}

.colum1 p{
    font-size: 14px;
    color: #000;
}

.colum2{
    max-width: 333px;
    
}

.colum2 h1{
    font-size: 22px;
}


.row{
    margin-top: 20px;
    display: flex;
}

.row img{
    width: 30px;
    height: 30px;
}

.row label{
    margin-left: 20px;
    color: #000;
}

.colum3{
    max-width: 333px;
}


.colum3 h1{
    font-size: 22px;
}

.row2{
    margin-top: 20px;
    display: flex;
}

.row2 img{
    width: 30px;
    height: 30px;
}

.row2 label{
    margin-left: 20px;
    max-width: 140px;
}

.container-footer{
    width: 100%;  
}

.footer{
    max-width: 1000px;
    margin: auto;
    justify-content: space-between;  
}

.copyright{
    color: #000;
}

.copyright a{
    text-decoration: none;
    color: 000;
    font-weight: bold;
}


@media screen and (max-width: 1100px){
    
    .container-body{
        flex-wrap: wrap;
    }
    
    .colum1{
        max-width: 190%;
    }
    
    .colum2,
    .colum3{
        margin-top: 40px;
    }
}
</style>