
function displayTime(){
    let dateTime = new Date()
    let hr = dateTime.getHours()
    let min = padzoro(dateTime.getMinutes())
    let sec = padzoro(dateTime.getSeconds())
    if(hr > 12){
        hr = hr - 12
        document.getElementById('ampm').innerHTML = 'PM'
    }
    else{
        document.getElementById('ampm').innerHTML = 'AM' 
    }
    document.getElementById('hours').innerHTML = padzoro(hr)
    document.getElementById('mins').innerHTML =min
    document.getElementById('seconds').innerHTML = sec
}
function padzoro(num){
   return num<10?"0"+num:num
}
setInterval(displayTime,500)



function displayTime1(){
    let m_names = [1,2,3,4,5,6,7,8,,9,10,11,12];
    let dateTime1 = new Date()
    let hr = dateTime1.getHours()
    let min = padzoro(dateTime1.getMinutes())
    let sec = padzoro(dateTime1.getSeconds())
    let da = dateTime1.getDate()
    let mon = m_names[dateTime1.getMonth()]
    let yea = dateTime1.getFullYear()
    if(hr > 12){
        hr = hr - 12
        document.getElementById('ampm').innerHTML = 'PM'
    }
    else{
        document.getElementById('ampm').innerHTML = 'AM' 
    }
    document.getElementById('hours1').innerHTML = padzoro(hr)
    document.getElementById('mins1').innerHTML =min
    document.getElementById('seconds1').innerHTML = sec
    document.getElementById('date').innerHTML = da
    document.getElementById('month').innerHTML = mon
    document.getElementById('Year').innerHTML = yea
}
function padzoro(num){
   return num<10?"0"+num:num
}
setInterval(displayTime1,500)