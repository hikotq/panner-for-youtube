let ytpLeft = document.querySelector('div.ytp-left-controls');
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const video = document.getElementsByTagName('video')[0];

if (ytpLeft && video) {
  // スライダーの追加
  let slider = document.createElement('input');
  slider.className = 'pan-slider';
  slider.type = 'range';
  slider.value = '0';
  slider.min = '-1';
  slider.max = '1';
  slider.step = '0.1';
  ytpLeft.appendChild(slider);
  
  const source = audioCtx.createMediaElementSource(video);
  const panNode = audioCtx.createStereoPanner();

  slider.oninput = function() {
    panNode.pan.setValueAtTime(slider.value, audioCtx.currentTime);
  };

  source.connect(panNode);
  panNode.connect(audioCtx.destination);
}
