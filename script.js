fetch("data.json")
.then(response=>response.json())
.then(value=>{
    let sayac=0
    let yazdir=value.map(element=>{
        sayac++
        return`
        
        <span class="a" style="--i:${sayac};"><img class="i" src="${element.img}" alt="resim"></span>

        
        `
    })

    document.querySelector(".content").innerHTML=yazdir.join()
})