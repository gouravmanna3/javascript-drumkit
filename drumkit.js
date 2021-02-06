{
  const playingClass = 'playing',
  crashRide = document.getElementById('crash-ride'),
  hitHatTop = document.getElementById('hithat-top');

  const animateCrashRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
  };

  const animateHitHatTop = () => {
    hitHatTop.style.top = '171px';
  };

  const playSound = e => {
    const keyCode = e.keyCode,
    keyElement = document.querySelector(`div[data-key = '${keyCode}']`);

    if(!keyElement) return;

    const audioElement = document.querySelector(`audio[data-key = '${keyCode}']`);
    audioElement.currentTime = 0;
    audioElement.play();

    switch(keyCode){
      case 69:
      case 82:
        animateCrashRide();
        break;
      case 75:
        animateHitHatTop();
        break;
    }

    keyElement.classList.add(playingClass);
  }

  const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform')
    return;

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';

  }

  const removeHitHatTopTransition = e => {
    if(e.propertyName !== 'top')
    return;

    e.target.style.top = '166px';
  }

  const removeKeyTransition = e => {
    if(e.propertyName !== 'transform')
    return;

    e.target.classList.remove(playingClass);
  }

  const drumKeys = Array.from(document.querySelectorAll('.key'));

  drumKeys.forEach(key => key.addEventListener('transitionend', removeKeyTransition));

  crashRide.addEventListener('transitionend', removeCrashRideTransition);
  hitHatTop.addEventListener('transitionend', removeHitHatTopTransition);

  window.addEventListener('keydown', playSound);

}