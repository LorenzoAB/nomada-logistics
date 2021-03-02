<template>
	<header>
        <div class="contenedor">
			<router-link to="/">
				<img class="icon-logo" src="@/assets/nomada.png" alt="nomada tecnologi">
			</router-link>
            <label for="menu-bar"  @click="main">
               <b-icon icon="menu-button-wide" font-scale="1"></b-icon>
            </label>
            <nav>
                <ul>
                    <li><router-link to="/">INICIO</router-link></li>
					<li class="submenu" @click="change">
                        <a class="ns">NOSOTROS
							<span>
								<b-icon icon="caret-down-fill" font-scale="1"></b-icon>
							</span>
						</a>
                        <ul class="children">
                            <li><router-link to="/about">¿Quiénes somos?</router-link></li>
                            <li><router-link to="/fleet">Flota</router-link></li>
                            <li><router-link to="/client">Clientes</router-link></li>
                        </ul>
                    </li>

                    <li class="submenu2" @click="change2">
                        <a class="ns">SERVICIOS
							<span>
								<b-icon icon="caret-down-fill" font-scale="1"></b-icon>
							</span>
						</a>
                        <ul class="children">
                            <li><router-link to="/transportation">Transporte</router-link></li>
                            <li><router-link to="/delivery">Última Milla</router-link></li>
                            <li><router-link to="/distribution">Distribución</router-link></li>
							<li><router-link to="/coldtransport">Transporte en frío</router-link></li>
							<li><router-link to="/motorized">Motorizados</router-link></li>
							<li><router-link to="/logisticssolutions">Soluciones logísticas</router-link></li>
                        </ul>
                    </li>
                    
                    <li><router-link to="/bodywork">CARROCERIA</router-link></li>
                    <li><a href="https://api.whatsapp.com/send?phone=51957544478&text=Buen%20d%C3%ADa%20quiero%20mas%20informaci%C3%B3n%20de%20los%20servicios%20de%20trasporte" target="_blank">COTIZA</a></li>
					<li><router-link to="/contactus">CONTACTANOS</router-link></li>
                </ul>
            </nav>
        </div>
	</header>
</template>
<script>
import $ from "jquery";
var contador = 1;
export default {
    name:"Header",
    methods:{
        change(){
			if(screen.width < 800){
				$('.submenu').children('.children').slideToggle();
			}
			else{
				$('.submenu');
			}
        },
		change2(){
			if(screen.width < 800){
				$('.submenu2').children('.children').slideToggle();
			}
			else{
				$('.submenu2');
			}
		},
        main(){
            if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
			} else {
				contador = 1;
				$('nav').animate({
					left: '-100%'
				});
			}
        }
    }
}
</script>
<style scoped>

 .contenedor{
    width: 98%;
    margin: auto;
    max-width: 1000px;
}

header{
    width: 100%;
    height: 50px;
    background:#fff;
    color: #000;
    /*Se quede pegado*/
    position: fixed;
    top: 0;
    left: 0;
    /*Siempre por delante*/
    z-index: 100;
}

.icon-logo{
    width: 100px;
    float: left;
    margin: 15px;
}

.ns{
	cursor: pointer;
}

.menu_bar {
	display:none;
}
 
header {
	width: 100%;
}
 
 header label{
    float: right;
    font-size: 28px;
    margin: 6px 0;
    cursor: pointer;
}

header nav {
	z-index:1000;
	max-width: 1000px;
	width:100%;
}
 
header nav ul {
	list-style:none;
}
 
header nav ul li {
	display:inline-block;
	position: relative;
}
 
header nav ul li:hover {
	background:yellow;
}
 
header nav ul li a {
	color:#000;
	display:block;
	text-decoration:none;
	padding: 15px;
	height: 50px;
}
 
header nav ul li a span {
	margin-right:10px;
}
 
header nav ul li:hover .children {
	display:block;
}
 
header nav ul li .children {
	display: none;
	background: rgba(255, 255, 255, 0.9);
	position: absolute;
	width: 150%;
	z-index:1000;
}
 
header nav ul li .children li {
	display:block;
	overflow: hidden;
	border-bottom: 1px solid rgba(255,255,255,.5);
}
 
header nav ul li .children li a {
	display: block;
}
 
header nav ul li .children li a span {
	float: right;
	position: relative;
	top:3px;
	margin-right:0;
	margin-left:10px;
}
 
header nav ul li .caret {
	position: relative;
	top:3px;
	margin-left:10px;
	margin-right:0px;
}
 
 @media(min-width:1024px){
     header nav {
        position: static;
        width: auto;
        height: auto;
         float: right;
         display: flex;
    }

    .menu a{
        border: none;
    }
    header label{
        display: none;
    }
}
@media screen and (max-width: 800px) {
 
	.menu_bar {
		display:block;
		width:100%;
		position: fixed;
		top:0;
		background:yellow;
	}
 
	header nav{
		background: rgba(255, 255, 255, 0.9);
	}
	.menu_bar .bt-menu {
		display: block;
		padding: 20px;
		color: #fff;
		overflow: hidden;
		font-size: 25px;
		font-weight: bold;
		text-decoration: none;
	}
 
	.menu_bar span {
		float: right;
		font-size: 40px;
	}
 
	header nav {
		width: 100%;
		/*height: calc(100% - 80px);*/
		position: fixed;
		right:100%;
		margin: 0;
        top: 50px;
		overflow: scroll;
		height: 100vh;
	}
 
	header nav ul li {
		display: block;
		border-bottom:1px solid rgba(255,255,255,.5);
	}
 
	header nav ul li a {
		display: block;
	}
 
	header nav ul li:hover .children {
		display: none;
	}
 
	header nav ul li .children {
		width: 100%;
		position: relative;
	}
 
	header nav ul li .children li a {
		margin-left:20px;
	}
 
	header nav ul li .caret {
		float: right;
	}
}
</style>