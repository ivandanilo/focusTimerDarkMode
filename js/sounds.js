export default function () {
  const audioForest = new Audio('./sounds/Floresta.wav')
  const audioRain = new Audio('./sounds/Chuva.wav')
  const audioCoffee = new Audio('./sounds/Cafeteria.wav')
  const audioFireplace = new Audio('./sounds/Lareira.wav')

  const inputSoundVolume = document.querySelector('.controlsVolume')
  const inputSoundVolumeRain = document.querySelector('.controlsVolumeRain')
  const inputSoundVolumeCoffee = document.querySelector('.controlsVolumeCoffee')
  const inputSoundVolumeFireplace = document.querySelector(
    '.controlsVolumeFireplace'
  )

  audioForest.loop = true
  audioRain.loop = true
  audioCoffee.loop = true
  audioFireplace.loop = true

  function colorVolumeForest() {
    if (inputSoundVolume.classList == 'controlsVolume hide') {
      inputSoundVolume.classList.remove('hide')
      audioForest.pause()
    } else {
      audioForest.play()
      inputSoundVolume.classList.add('hide')
      inputSoundVolumeRain.classList.remove('hide')
      inputSoundVolumeFireplace.classList.remove('hide')
      inputSoundVolumeCoffee.classList.remove('hide')
    }
  }

  function colorVolumeRain() {
    if (inputSoundVolumeRain.classList == 'controlsVolumeRain hide') {
      inputSoundVolumeRain.classList.remove('hide')
      audioRain.pause()
    } else {
      audioRain.play()
      inputSoundVolumeRain.classList.add('hide')
      inputSoundVolume.classList.remove('hide')
      inputSoundVolumeFireplace.classList.remove('hide')
      inputSoundVolumeCoffee.classList.remove('hide')
    }
  }

  function colorVolumeCoffee() {
    if (inputSoundVolumeCoffee.classList == 'controlsVolumeCoffee hide') {
      inputSoundVolumeCoffee.classList.remove('hide')
      audioCoffee.pause()
    } else {
      audioCoffee.play()
      inputSoundVolumeCoffee.classList.add('hide')
      inputSoundVolume.classList.remove('hide')
      inputSoundVolumeRain.classList.remove('hide')
      inputSoundVolumeFireplace.classList.remove('hide')
    }
  }

  function colorVolumeFireplace() {
    if (inputSoundVolumeFireplace.classList == 'controlsVolumeFireplace hide') {
      inputSoundVolumeFireplace.classList.remove('hide')
      audioFireplace.pause()
    } else {
      audioFireplace.play()
      inputSoundVolumeFireplace.classList.add('hide')
      inputSoundVolumeCoffee.classList.remove('hide')
      inputSoundVolume.classList.remove('hide')
      inputSoundVolumeRain.classList.remove('hide')
    }
  }

  function volumeForestControl() {
    audioForest.volume = document.querySelector('#volume-forest').value
  }

  function volumeRainControl() {
    audioRain.volume = document.querySelector('#volume-rain').value
  }

  function volumeCoffeeControl() {
    audioCoffee.volume = document.querySelector('#volume-coffee').value
  }

  function volumeFireplaceControl() {
    audioFireplace.volume = document.querySelector('#volume-fireplace').value
  }

  return {
    colorVolumeForest,
    colorVolumeRain,
    colorVolumeCoffee,
    colorVolumeFireplace,
    volumeForestControl,
    volumeRainControl,
    volumeCoffeeControl,
    volumeFireplaceControl,
    audioForest,
    audioRain,
    audioCoffee,
    audioFireplace
  }
}
