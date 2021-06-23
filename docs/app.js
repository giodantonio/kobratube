let btnPrev = document.getElementById('preview');
let btnNext = document.getElementById('next');
let lista = document.getElementsByClassName('carousel__lista')[0];
let overOpen = false;
let showSmall = false;

window.onload = () => {

	// slider de categorias
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToScroll: 1,
		slidesToShow: 5.5,
		draggable: true,
		dots: '.dots',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente',
		},
	});

	// Muestra boton anterior cuando se ha hecho click en siguiente
	btnNext.onclick = () => {
		btnPrev.style.display = 'block';
	};

	// boton ver mas tarde
	const watchLater = document.querySelectorAll('.item1');
	// boton agregar a lista
	const addPlaylist = document.querySelectorAll('.item2');

	// open div watch_later/Add_playlist
	var elementOver = function () {
		var overOpen = this.previousElementSibling;
		overOpen.style.display = 'block';
		overOpen.style.transform = 'translateX(0)';
	};

	// close div watch_later/Add_playlist
	var elementOut = function () {
		var outClose = this.previousElementSibling;
		outClose.style.display = 'none';
		outClose.style.transform = 'translateX(145px)';
	};

	// Asignando el evento abrir y cerrar al hacer mouseover > watch_later
	watchLater.forEach((btn) => {
		btn.addEventListener('mouseover', elementOver);
		btn.addEventListener('mouseout', elementOut);
	});

	// Asignando el evento abrir y cerrar al hacer mouseover > Add_playlist
	addPlaylist.forEach((btn) => {
		btn.addEventListener('mouseover', elementOver);
		btn.addEventListener('mouseout', elementOut);
	});

	// Programando mostrar botones en video al hacer mouseover sobre la imagen
	const overVideo = document.querySelectorAll('.container-img');

	// Mostrar botones
	var videoShow = function () {
		var watchContainer = this.firstElementChild;
		watchContainer.style.display = 'block';
	};
	// ocultar botones
	var videoHide = function () {
		var hideContainer = this.firstElementChild;
		hideContainer.style.display = 'none';
	};

	// Asignando el evento abrir y cerrar al hacer mouseover > watch_later
	overVideo.forEach((video) => {
		video.addEventListener('mouseenter', videoShow);
		video.addEventListener('mouseleave', videoHide);
	});

	// Programando busqueda
	let btnSearch = document.getElementsByName('enviar')[0];

	btnSearch.addEventListener('click', function () {
		if (document.search.q.value.trim().length !== 0) {
			document.search.submit();
		}
	});


	// Programando dropdown boton apps
	let btnApps = document.getElementById('btn-apps');

	btnApps.addEventListener('click', () => {
		dropdown('dropdownApps');
	});

	// Programando dropdown boton configuracion
	let btnConf = document.getElementById('btn-config');

	btnConf.addEventListener('click', () => {
		dropdown('dropdownConf');
	});

	// boton acceder
	let btnAcceder = document.querySelectorAll('.btn-access');

	// Ir a otra url
	let changeLocation = function () {
		window.open(
			'https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Des-419%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=es-419&ec=65620'
		);
	};
	// Recorre todos los elementos con el nombre especificado escucha el click
	btnAcceder.forEach((boton) => {
		boton.addEventListener('click', changeLocation);
	});

	let btnMenu = document.querySelector('#btn-menu');

	let aside = document.querySelector('.aside');
	let menuLargerOver = document.querySelector('.aside-larger-over');

	let menuLarger = document.querySelector('.aside-larger');
	let menuSmall = document.querySelector('.aside-small');

	btnMenu.addEventListener('click', () => {
		// Mostrar / Ocultar menuOver en dispositivos de 426px a 807px
		if (overOpen == false && (document.body.offsetWidth >= 426 && document.body.offsetWidth <= 807)) {
			aside.style.display='block';
        	menuLargerOver.style.display = 'block';
        	document.querySelector('.overlay').style.display = 'block';
			overOpen = true;
		}

		// Desplegar menu-larger en dispositivos de 808px a px 1023px
		if ((document.body.offsetWidth >= 808 && document.body.offsetWidth) <=1023 && menuSmall.offsetWidth === 72){
        	menuLargerOver.style.display = 'block';
        	document.querySelector('.overlay').style.display = 'block';
		}

		// cerrar el menu over
		document.querySelector('#btn-menu2').addEventListener('click', function () {
			if(overOpen == true && (document.body.offsetWidth >= 426 && document.body.offsetWidth <= 807)) {
				aside.style.display='none';
    			menuLargerOver.style.display = 'none';
    			document.querySelector('.overlay').style.display = 'none';
    			window.location.reload();
			}
			if ((document.body.offsetWidth >= 808 && document.body.offsetWidth <=1023) && menuLargerOver.offsetWidth === 238) {
				menuLargerOver.style.display = 'none';
				document.querySelector('.overlay').style.display = 'none';
				window.location.reload();
			}
		});

		// Ocultar menu-large y mostrar small en dispositivos > 1024px
		if (document.body.offsetWidth >= 1024 && menuLarger.offsetWidth === 265) {
			menuLarger.style.display = 'none';
			menuSmall.style.display = 'block';
			document.querySelector('.grid-container').style.gridTemplateColumns="72px 1fr";
			document.querySelector('.container-videos').style.marginLeft="0";
			document.querySelector('.nav-tags').style.marginLeft="0";
		} else {
			if(document.body.offsetWidth >= 1024 && menuSmall.offsetWidth === 72){
				menuLarger.style.display = 'block';
				menuSmall.style.display = 'none';
				document.querySelector('.grid-container').style.gridTemplateColumns="260px 1fr";
				window.location.reload();
			}
		}
	});

	// abrir busqueda md
	document.querySelector('.btn-search').addEventListener('click', () => {
		if(document.body.offsetWidth >= 426 && document.body.offsetWidth <= 657)
		document.querySelector(".div-search-mb").style.display='block';

		document.querySelector('.search-mb-back').addEventListener('click', () => {
			document.querySelector(".div-search-mb").style.display='none';
		});
	});


	// abrir busqueda mobile
	document.querySelector('.btn-mobile').addEventListener('click', () => {
		if(document.body.offsetWidth <= 425){
			document.querySelector(".div-search-mb").style.display='block';
			document.querySelector(".overlay-mb").style.display='block';

			document.querySelector('.search-mb-back').addEventListener('click', () => {
				document.querySelector(".div-search-mb").style.display='none';
				document.querySelector(".overlay-mb").style.display='none';
			});
		}
	});

	// boton search mobile
	document.querySelector('.btn-s').addEventListener('click', function () {
		if (document.smobile.q.value.trim().length !== 0) {
			document.smobile.submit();
		}
	});

};

// funcion mostrar y ocultar
function dropdown(id) {
	if (open == true) {
		document.getElementById(id).style.display = 'block';
		open = false;
	} else {
		document.getElementById(id).style.display = 'none';
		open = true;
	}
}