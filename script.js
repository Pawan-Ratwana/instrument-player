const w = document.querySelector('.w')
const a = document.querySelector('.a')
const s = document.querySelector('.s')
const d = document.querySelector('.d')
const j = document.querySelector('.j')
const k = document.querySelector('.k')
// const l = document.querySelector('.l')

// Create eventListener to all the button
w.addEventListener('click', () => {
    playAudio(wSrc)
})
a.addEventListener('click', () => {
    playAudio(aSrc);
})
s.addEventListener('click', () => {
    playAudio(sSrc)
})
d.addEventListener('click', () => {
    playAudio(dSrc)
})
j.addEventListener('click', () => {
    playAudio(jSrc)
})
k.addEventListener('click', () => {
    playAudio(kSrc)
})


document.body.addEventListener('keypress', (event) => {
    if (event.key === 'w') {
        playAudio(wSrc);
    } else if (event.key === 'a') {
        console.log("a ", event.key);
        playAudio(aSrc)
    } else if (event.key === 's') {
        playAudio(sSrc)
    } else if (event.key === 'd') {
        playAudio(dSrc)
    } else if (event.key === 'j') {
        playAudio(jSrc)
    } else if (event.key === 'k') {
        playAudio(kSrc)
    }
})

// All button should be able to play a different sound.


wSrc = 'https://files.codingninjas.in/tom-1-28537.mp3?_ga=2.231395032.636181748.1709637521-1806417390.1708244379'
aSrc = 'https://files.codingninjas.in/tom-2-28541.mp3?_ga=2.67790294.636181748.1709637521-1806417390.1708244379'
sSrc = 'https://files.codingninjas.in/tom-3-28542.mp3?_ga=2.192577901.636181748.1709637521-1806417390.1708244379'
dSrc = 'https://files.codingninjas.in/tom-4-28543.mp3'
jSrc = 'https://files.codingninjas.in/snare-28545.mp3?_ga=2.30656120.636181748.1709637521-1806417390.1708244379'
kSrc = "https://files.codingninjas.in/crash-28546.mp3?_ga=2.205177559.636181748.1709637521-1806417390.1708244379"
// lSrc = 'https://files.codingninjas.in/kick-bass-28547.mp3?_ga=2.17026686.636181748.1709637521-1806417390.1708244379'


function playAudio(audiosrc) {
    let audio = new Audio(audiosrc);
    audio.play();
}