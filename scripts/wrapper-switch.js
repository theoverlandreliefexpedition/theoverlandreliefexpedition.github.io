document.getElementById('button-end').addEventListener('click', function () {

  document.getElementById('wrapper').style.display = 'none';
  document.getElementById('navigation').style.display = 'none';
  document.getElementById('wrapper2').style.display = 'flex';
  document.getElementById('audio-2').play();

});

document.getElementById('button-again').addEventListener('click', function () {

  document.getElementById('wrapper2').style.display = 'none';
  document.getElementById('navigation').style.display = 'fixed';
  document.getElementById('wrapper').style.display = 'flex';
  document.getElementById('audioplayer').play();

});