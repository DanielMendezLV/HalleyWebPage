$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['white', 'white', 'white', 'white', 'white', 'white'],
		anchors: ['Inicio', 'Objetivo', 'Integrant', 'Galeria', 'Contactanos'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Inicio', 'Objetivo',  'Roles', 'Galeria', 'Contactanos'],
		scrollOverflow: true,
		scrollingSpeed: 1500
	});
});