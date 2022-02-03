document.addEventListener('DOMContentLoaded', function(){

var audioplayers = document.querySelectorAll('.audioplayer');

var startPlayback = function(e){
	for( audioplayer of audioplayers ) {

		// den aktuellen audioplayer nicht pausieren:
		if( audioplayer === this ) {
			return;
		}

		audioplayer.pause();
		// audioplayer.currentTime = 0; // wieder von anfang an starten, statt der aktuellen position
	}
};


for( audioplayer of audioplayers ){
	audioplayer.addEventListener( 'play', startPlayback );
}


var outerWrapper = document.getElementById('outer-wrapper');
var screen = 0;

outerWrapper.addEventListener('scroll', function(){

	var scrollPosition = outerWrapper.scrollTop;
	var screenWidth = window.innerWidth;

//  scrollPosition -= screenWidth * -1/3;
  scrollPosition += screenWidth * 1/3;
  
	var currentScreen = Math.ceil(scrollPosition/screenWidth);

	if( currentScreen != screen ) {

		// alle audioplayer stoppen:
		for( audioplayer of audioplayers ) {
			audioplayer.pause();
		}

		// nächsten Player starten:
		var nextPlayer = document.getElementById('audio-'+currentScreen);
		if( nextPlayer ) {
			nextPlayer.play();
		}

		screen = currentScreen;
	}

});



});