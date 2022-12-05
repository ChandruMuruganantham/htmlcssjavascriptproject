var change = document.getElementById("change")
const selectMenu = document.querySelectorAll("select"),
currentTime = document.querySelector("h1"),
setAlaramBtn = document.querySelector("button");
let alaramTime,
isAlaramset = false;
ringtone = new Audio("./ringtone.mp3");
for (let i = 12; i > 0; i--) {
    i= i<10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
    
}
for (let i = 60; i >= 0; i--) {
    i= i<10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
    
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM":"PM"
    let option = `<option value="${ampm}">${ampm}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
    
}
setInterval(() =>
{
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM"
    if (h >=12)
    {
        h= h-12;
        ampm = "PM";
    }
    h = h==0 ? h=12 : h;
    h = h <10 ? "0" + h : h;
    m = m <10 ? "0" + m : m;
    s = s <10 ? "0" + s : s;
    currentTime.innerText=(`${h}:${m}:${s} ${ampm}`)
    if(alaramTime == `${h}:${m} ${ampm}`)
    {
        console.log("alram ringing")
        ringtone.play()
        ringtone.loop=true;
    }

},1000)
function setAlaram()
{
    if (isAlaramset)
    {
        console.log(alaramTime)
        alaramTime = "";
        ringtone.pause();
        change.classList.remove("disable");;
        setAlaramBtn.innerText = "Set Alaram"
        return isAlaramset = false
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    console.log(time)
    if (time.includes("Hours")||time.includes("Minute")||time.includes("AM/PM"))
    {
        return alert("Please, select a valid time to set Alaram !");
    }
    isAlaramset=true
    console.log(isAlaramset)
    alaramTime=time;
    change.classList.add("disable")
    setAlaramBtn.innerText = "Stop Alram";
}
setAlaramBtn.addEventListener("click",setAlaram);
