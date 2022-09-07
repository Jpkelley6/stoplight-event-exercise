(function() {
  'use strict';


  let redOn = false
  let redLight = document.getElementById('stopLight')
  let redButton = document.getElementById('stopButton')
  function redClick() {
    if (redOn === false){
      redLight.style.background = 'red'
      console.log('Red bulb on!')
       redOn = true
    } else {
      redLight.style.background = 'black'
      console.log('Red bulb off!')
       redOn = false
  }
  }
  redButton.addEventListener('click', redClick)


let yellowOn = false
let yellowLight = document.getElementById('slowLight')
let yellowButton = document.getElementById('slowButton')
function yellowClick() {
  if (yellowOn === false){
    yellowLight.style.background = 'orange'
    console.log('Orange bulb on!')
     yellowOn = true
  } else {
    yellowLight.style.background = 'black'
    console.log('Orange bulb off!')
     yellowOn = false
}
}
yellowButton.addEventListener('click', yellowClick)


let greenOn = false
let greenLight = document.getElementById('goLight')
let greenButton = document.getElementById('goButton')
function greenClick() {
  if (greenOn === false){
    greenLight.style.background = 'green'
    console.log('Green bulb on!')
     greenOn = true
  } else {
    greenLight.style.background = 'black'
    console.log('Green bulb off!')
     greenOn = false
}
}
greenButton.addEventListener('click', greenClick)


redButton.addEventListener('mouseenter', (event) => {console.log(`Entered ${event.target.id}!`)})
redButton.addEventListener('mouseleave', () => {console.log('Left Stop Button!')})
yellowButton.addEventListener('mouseenter', () => {console.log('Entered Slow Button!')})
yellowButton.addEventListener('mouseleave', () => {console.log('Left Slow Button!')})
greenButton.addEventListener('mouseenter', () => {console.log('Entered Go Button!')})
greenButton.addEventListener('mouseleave', () => {console.log('Left Go Button!')})


})()
