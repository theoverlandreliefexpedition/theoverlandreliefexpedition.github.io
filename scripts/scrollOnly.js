/*
<div id="button"></div>
<audio id="audioplayer"></audio>
*/

document.getElementById('button').addEventListener( 'click', function(){

	document.getElementById('audioplayer').play();

	var numberOfScreens = 15;
	var pxToScrollLeft = window.innerWidth*numberOfScreens;
	var targetTimePerScreen = 60*1000; // in ms
	var timeout = 100; // in ms, je kleiner desto flüssiger

	var targetTime = targetTimePerScreen*15;

	var scrollPxPerTimeout = pxToScrollLeft / targetTime * timeout;
	
	var animation = function(){
		
		pxToScrollLeft = pxToScrollLeft - scrollPxPerTimeout;

		if( pxToScrollLeft <= 0 ) {
			return;
		}

		window.scrollBy( scrollPxPerTimeout, 0 ); // ...scrollBy( 0, scrollPxPerTimeout ); // ...scrollBy( -scrollPxPerTimeout, 0 );

		setTimeout( animation, timeout );
	};

});

