fetch("data.json")
    .then(response => response.json())
    .then(value => {
        let sayac = 0
        let yazdir = value.map(element => {
            sayac++
            return `
        
        <span class="a" style="--i:${sayac};">
        <img class="i" src="${element.img}" alt="resim">        
        <p class="pAd">${element.adi}</p>
        <p class="pBilgi">İmdb:${element.imdb} Yılı:${element.yil}</p>        
        </span>       
        `
        })

        document.querySelector(".content").innerHTML = yazdir.join("")

        var elements = document.querySelectorAll(".i");
        elements.forEach(function (element) {
            element.addEventListener("mouseenter", function (event) {
                document.querySelector(".content").style.animationPlayState = "paused";
                element.addEventListener("click",function(){
                    
                })
            });

            element.addEventListener("mouseleave", function(event) {
                document.querySelector(".content").style.animationPlayState = "running";
              });



        });





    })

fetch("movies.json")
    .then(response => response.json())
    .then(value => {



        let movie = value.map(element => {

            return `
        <div class="col-5 mt-5 d-flex p-0 b">
        <div class="movieBox">
            <a href="movieContent.html?id=${element.id}">
                <img class="movieBoxImg" src="${element.img}" alt="resim">             
            </a>
        </div>
        <div class="icerik text-white">
            <p style="font-size: larger;">${element.adi}</p>
            <p>${element.ozet}</p>
            <p class="mt-5">İmdb:${element.imdb} Yılı:${element.yil}</p>
        </div>
        
         
        </div>      
        `
        })

        document.querySelector(".bottomRow").innerHTML = movie.join("")
    })







document.querySelector(".ara").addEventListener("click", function (event) {
    event.preventDefault()

    fetch("movies.json")
        .then(response => response.json())
        .then(value => {
            let search = document.querySelector(".search").value.toLowerCase();

            if (search == "") {
                document.querySelector(".icerikSonuc").innerHTML = "NO RESULT"
            } else {
                let sonuc = value.filter((element) => {
                    return element.adi.toLowerCase().includes(search);
                }).map(element => {
                    return `<div class="mx-2"><a href="movieContent.html?id=${element.id}" style="text-decoration:none; color:white;">${element.adi} (${element.cins})</a></div>`;
                });


                if (sonuc == "") {

                    document.querySelector(".icerikSonuc").innerHTML = "NO RESULT"
                } else {

                    document.querySelector(".icerikSonuc").innerHTML = sonuc.join("");
                }
            }





        });
});













