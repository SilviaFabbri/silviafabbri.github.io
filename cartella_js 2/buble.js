let isChrome =  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    let audio1= document.getElementById("iframeAudio")
    audio1.remove()
}
else{
    let audio2= document.getElementById("playAudio")
    audio2.remove()
}