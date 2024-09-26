const time=()=>{
    let date = new Date();
    let hours = (date.getHours()).toString()
    let min = (date.getMinutes()).toString()
    let sec = (date.getSeconds()).toString()
    if(hours < 10)
        hours = "0" + hours
    if(min < 10)
        min = "0" + min
    if(sec < 10)
        sec = "0" + sec
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

setInterval(time,1000)