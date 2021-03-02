<template>
     <a 
        class="whatsapp-button" 
        href="https://api.whatsapp.com/send?phone=51957544478&text=Buen%20d%C3%ADa%20quiero%20mas%20informaci%C3%B3n%20de%20los%20servicios%20de%20trasporte"
        target="_blank"
        >
        <img class="whatsapp-logo" src="@/assets/logo-whatsapp.png" alt="whatsapp">
        Cotiza ahora
     </a>
</template>
<script>
export default {
    name:"Button"
}
</script>
<style scoped>
/*BOTON*/
.whatsapp-button {
    background-color: #FFFF00;
    font-size: 1em;
    color: #000;
    display: inline-block;
    border-radius: 10px;
    padding: 5px;
}
a:hover{
    text-decoration: none;
}
.whatsapp-logo{
    width: 25%;
}      
</style>