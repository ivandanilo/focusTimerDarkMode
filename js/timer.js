export default function Timer({ displayMinutes, displaySeconds }) {
  let minutes = Number(displayMinutes.textContent)
  let timerTimeout
  let minutesUpdate

  function resetDisplayTimer() {
    minutesUpdate = Number(minutes)
    displayMinutes.textContent = String(minutesUpdate).padStart(2, '0')
  }

  function pause() {
    clearTimeout(timerTimeout)
  }

  function stop() {
    minutesUpdate = minutes
    displayMinutes.textContent = String(minutesUpdate).padStart(2, '0')
    displaySeconds.textContent = String(0).padStart(2, '0')
    pause()
  }

  function upMinutes() {
    minutesUpdate = minutesUpdate === undefined ? minutes : minutesUpdate
    displayMinutes.textContent = String(minutesUpdate + 5).padStart(2, '0')
    displaySeconds.textContent = String(0).padStart(2, '0')
    minutesUpdate = Number(displayMinutes.textContent)
    minutes = minutesUpdate
  }

  function downMinutes() {
    minutesUpdate = minutesUpdate === undefined ? minutes : minutesUpdate

    if (minutesUpdate < 5) {
      displayMinutes.textContent = String(0).padStart(2, '0')
      displaySeconds.textContent = String(0).padStart(2, '0')
    } else {
      displayMinutes.textContent = String(minutesUpdate - 5).padStart(2, '0')
      displaySeconds.textContent = String(0).padStart(2, '0')
    }
    minutesUpdate = Number(displayMinutes.textContent)
    minutes = minutesUpdate
  }

  function countdown() {
    timerTimeout = setTimeout(function () {
      let minutes = displayMinutes.textContent
      let seconds = displaySeconds.textContent

      if (minutes == 0 && seconds == 0) {
        resetDisplayTimer()

        return
      }

      if (seconds <= 0) {
        seconds = 60

        displayMinutes.textContent = String(minutes - 1).padStart(2, '0')
      }
      minutesUpdate = Number(displayMinutes.textContent)

      displaySeconds.textContent = String(seconds - 1).padStart(2, '0')

      countdown()
    }, 1000)
  }

  return {
    upMinutes,
    downMinutes,
    countdown,
    stop,
    pause
  }
}
