function setCookie(key, value, days){
    const d = new Date()
    d.setTime(d.getTime()+ (days*86400000))
    document.cookie = key + '='+ encodeURI(value) + ';expires='+ d.toUTCString()+ ';'
}

function getCookie(key) {
    if(document.cookie)
    {
        const pairs = decodeURI(document.cookie).split(';')
        let i,name,value
        for(i = 0; i < pairs.length; i++)
        {
            name = (pairs[i].split('=')[0]).trim()
            if( name === key){ value = pairs[i].split('=')[1]}
        }
        return value
    }
}

let isChrome =  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    let audio1= document.getElementById("iframeAudio")
    audio1.remove()
}
else{
    let audio2= document.getElementById("playAudio")
    audio2.remove()
}