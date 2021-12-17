
// <audio id="audio-1" src="..."></audio>

var audioPlayer = document.getElementById('audioplayer');
var wrapper1 = document.getElementById('outer-wrapper');

var userIsScrolling = false;
var timer = false;

document.getElementById('button').addEventListener( 'click', function(){

	document.getElementById('audioplayer').play();
  });
  
window.addEventListener( 'wheel', function(){

	clearTimeout(timer);

	userIsScrolling = true;

	audioPlayer.muted = true;

//	var currentScrollPosition = window.scrollTop; // window.scrollLeft;
  var currentScrollPosition = document.getElementById('outer-wrapper').scrollTop;

  
	var scrollDistance = getScrollDistance();
	
	var scrollAlpha = currentScrollPosition/scrollDistance; // percent
    if( scrollAlpha < 0 ) {
	scrollAlpha = 0;
} else if( scrollAlpha > 1 ) {
	scrollAlpha = 1;
}
  

	var audioDuration = audioPlayer.duration;
	var newTime = audioDuration*scrollAlpha;

	audioPlayer.currentTime = newTime;

	timer = setTimeout(function(){
		audioPlayer.muted = false;
		userIsScrolling = false;
	}, 500 ); // 500ms / 0.5s

});

audioPlayer.addEventListener( 'timeupdate', function() {

	if( userIsScrolling ) {
		return;
	}

	var currentTime = audioPlayer.currentTime;
	var duration = audioPlayer.duration;
	
	var playAlpha = currentTime/duration; // percent
  if( playAlpha < 0 ) {
	playAlpha = 0;
} else if( playAlpha > 1 ) {
	playAlpha = 1;
}

	var scrollDistance = getScrollDistance();

	var currentScrollPosition = scrollDistance*playAlpha;
  
  document.getElementById('outer-wrapper').scrollTo( 0, currentScrollPosition );


	window.scrollTo( 0, currentScrollPosition ); // ..scrollTo( currentScrollPosition, 0 );
	
});

function getScrollDistance(){
//	var contentWidth = wrapper1.clientWidth;
  var contentWidth = document.getElementById('wrapper').clientWidth;
  
  
  
	var viewportWidth = window.innerWidth;
	var scrollDistance = contentWidth - viewportWidth;

	return scrollDistance;
}

