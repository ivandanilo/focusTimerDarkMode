export default function Controls({
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFireplace
}) {
  function soundForest() {
    if (buttonSoundForest.classList == 'sound-forest hide') {
      buttonSoundForest.classList.remove('hide')
    } else {
      buttonSoundForest.classList.add('hide')
      buttonSoundRain.classList.remove('hide')
      buttonSoundCoffee.classList.remove('hide')
      buttonSoundFireplace.classList.remove('hide')
    }
  }

  function soundRain() {
    if (buttonSoundRain.classList == 'sound-rain hide') {
      buttonSoundRain.classList.remove('hide')
    } else {
      buttonSoundRain.classList.add('hide')
      buttonSoundForest.classList.remove('hide')
      buttonSoundCoffee.classList.remove('hide')
      buttonSoundFireplace.classList.remove('hide')
    }
  }

  function soundCoffee() {
    if (buttonSoundCoffee.classList == 'sound-coffee hide') {
      buttonSoundCoffee.classList.remove('hide')
    } else {
      buttonSoundCoffee.classList.add('hide')
      buttonSoundRain.classList.remove('hide')
      buttonSoundForest.classList.remove('hide')
      buttonSoundFireplace.classList.remove('hide')
    }
  }

  function soundFireplace() {
    if (buttonSoundFireplace.classList == 'sound-fireplace hide') {
      buttonSoundFireplace.classList.remove('hide')
    } else {
      buttonSoundFireplace.classList.add('hide')
      buttonSoundRain.classList.remove('hide')
      buttonSoundForest.classList.remove('hide')
      buttonSoundCoffee.classList.remove('hide')
    }
  }

  return {
    /* reset, */
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace
  }
}
