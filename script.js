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

    document.querySelector(".content").innerHTML=yazdir.join("")


    
})

fetch("movies.json")
.then(response=>response.json())
.then(value=>{
    
    let movie=value.map(element=>{
        
        return`
        <div class="col-5 mt-3 d-flex justify-content-center">
        <div class="movieBox border">
        <img class="movieBoxImg" src="${element.img}" alt="resim">        
        <p>${element.adi}</p>
        <p>İmdb:${element.imdb} Yılı:${element.yil}</p>
        </div>
        
         
        </div>      
        `
    })

    document.querySelector(".bottomRow").innerHTML=movie.join("")


    
})











