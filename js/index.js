import Sound from './sounds.js'

import Controls from './controls.js'

import Timer from './timer.js'

import {
  displayMinutes, 
  displaySeconds,
  buttonPlay, 
  buttonStop, 
  buttonUpMinutes, 
  buttonDownMinutes, 
  buttonSoundForest, 
  buttonSoundRain, 
  buttonSoundCoffee, 
  buttonSoundFireplace, 
  buttondarkModeBlack, 
  buttonPause,
  volumeControl
} from './elements.js'


const timer = Timer({
  displayMinutes,
  displaySeconds,
})

const sound = Sound()

const controls = Controls({
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFireplace
})


buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  timer.countdown()
  
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  timer.pause()
})

buttonStop.addEventListener('click', function () {
  timer.stop()
})

buttonUpMinutes.addEventListener('click', function () {
  timer.upMinutes()
})

buttonDownMinutes.addEventListener('click', function () {
  timer.downMinutes()
})

buttonSoundForest.addEventListener('click', function () {

  controls.soundForest()

  sound.colorVolumeForest()
   
  sound.audioRain.pause()
  sound.audioCoffee.pause()
  sound.audioFireplace.pause()
})

buttonSoundRain.addEventListener('click', function () {
   
  controls.soundRain()

  sound.colorVolumeRain()
  
  sound.audioCoffee.pause()
  sound.audioFireplace.pause()
  sound.audioForest.pause()
})
buttonSoundCoffee.addEventListener('click', function () {
  controls.soundCoffee()

  sound.colorVolumeCoffee()

  sound.audioRain.pause()
  sound.audioFireplace.pause()
  sound.audioForest.pause()
})

buttonSoundFireplace.addEventListener('click', function () {
  
  controls.soundFireplace()

  sound.colorVolumeFireplace()

  sound.audioRain.pause()
  sound.audioCoffee.pause()
  sound.audioForest.pause()
})


buttondarkModeBlack.onclick = () => {
  document.body.classList.toggle('black')
  document.querySelector('header').classList.toggle('black')
}

// volumeControl é um Array
volumeControl.forEach(element => { // forEach -> é um método que permite executar uma função para item de um array
  element.addEventListener('input', () => {
    switch (element.id) {
      case 'volume-forest':
        sound.volumeForestControl()
      break;
      case 'volume-rain':
        sound.volumeRainControl()
      break;
      case 'volume-coffee':
        sound.volumeCoffeeControl()
      break;
      case 'volume-fireplace':
        sound.volumeFireplaceControl()
      break;
      default:
      break;
    }
  })
})
