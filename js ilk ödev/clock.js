// patika dev js dersleri ilk ödevi

//promt ile bilgi almak

let fullName = prompt("Lütfen İsminizi Giriniz")
let myName=document.querySelector("#myName")
myName.innerHTML = `${fullName}`

function zaman(){
    
    const tarih=new Date

    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()
    
    
    let gun =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    let gunName = gun[tarih.getDay()]
    
    let clock=document.querySelector("#myClock")
    clock.innerHTML = `${saat}:${dakika}:${saniye} ${gunName}`
}

setInterval(zaman,1000) // saatin güncellenmesini sağlıyor
