fetch("data.json")
.then(response=>response.json())
.then(value=>{
    let sayac=0
    let yazdir=value.map(element=>{
        sayac++
        return`
        
        <span class="a" style="--i:${sayac};">
        <img class="i" src="${element.img}" alt="resim">        
        <p class="pAd">${element.adi}</p>
        <p class="pBilgi">İmdb:${element.imdb} Yılı:${element.yil}</p>
        
        
        </span>

        
        `
    })

    document.querySelector(".content").innerHTML=yazdir.join()
})