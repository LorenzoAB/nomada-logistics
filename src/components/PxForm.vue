<template>
    <section>
        <div class="form_content">
            <form class="contact-form" @submit.prevent="sendEmail">
                <div class="content_input">
                    <div class="inputs_height">
                        <center>
                            <input required class="input_text"  type="text" name="user_name" placeholder="Nombres del Contacto">
                        </center>
                    </div>
                </div>

                <div class="content_input">
                    <div class="inputs_height">
                        <center>
                            <input required class="input_text"  type="text" name="company" placeholder="Empresa">
                        </center>
                    </div>
                </div>

                <div class="content_input">
                    <div class="inputs_height">
                        <center>
                            <input required class="input_text"   type="email" name="user_email" placeholder="Correo Electronico">
                        </center>
                    </div>
                </div>

                <div class="content_input">
                    <div class="inputs_height">
                        <center>
                            <input required class="input_text"  type="text" name="phone" placeholder="Telefono o Celular">
                        </center>
                    </div>
                </div>
                
                <div class="content_input">
                    <div class="inputs_height">
                        <center>
                            <select required class="input_select" name="services" id="">
                                <option value="">Por cual servicio es tu consulta</option>
                                <option value="transporte">Transporte de Carga</option>
                                <option value="milla">Última Milla</option>
                                <option value="frio">Transporte en Frio</option>
                                <option value="mensajeria">Mensajeria</option>
                                <option value="trancking">Tracking de Flota</option>
                            </select>
                        </center>
                    </div>
                </div>
                
            
            <div class="content_input">
                    <div class="text_area_heigh">
                        <center>
                            <textarea name="message" class="input_textarea" placeholder="Mensaje"></textarea>
                        </center>
                    </div>
                </div>
                
                <div class="content_button">
                    <center>
                        <input type="submit" class="btn-enviar" value="Enviar Consulta">
                    </center>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_xkii09h', 'template_j8umpci', e.target, 'user_SBKNytrxh7i0ypFMyPh2D')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });

        e.target.reset();
    }
  }
}
</script>
<style scoped>

/*FORMULARIO*/
.form_content {
    width:100%;
    background: #ccc;
    padding:15px 15px;
    box-sizing:border-box;
    border-radius: 10px;
}

.content_input {
    margin-bottom: 10px
}

.form_content .inputs_height .input_text {
    width: 90%;
    font-family: ProximaNovaThin;
    outline: 0;
    height: 30px;
    color: #000;
    background-color: #fff;
    border: 3px solid #fff;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 15px;
    padding: 0 15px;
}

.form_content .inputs_height .input_select {
    width:90%;
    height:30px;
    background-color:#fff;
    box-sizing:border-box;
    border:2px solid #fff;
    border-radius:5px;
    font-size:12px;
    padding:0 15px;
    outline:0;
    position:relative;
}


.form_content .input_textarea {
    width: 90%;
    height: 50px;
    outline: 0;
    color: #000;
    border: 3px solid #fff;
    box-sizing: border-box;
    font-size: 12px;
    padding: 10px 15px;
    overflow-y: auto;
    border-radius: 5px;
}

.btn-enviar {
    height:35px;
    width:90%;
    box-sizing:border-box;
    background-color:#000;
    font-size:15px;
    color:#ccc;
    border:0;
    cursor:pointer;
    border-radius: 5px;
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