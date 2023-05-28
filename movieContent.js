fetch("movies.json")
    .then(res => res.json())
    .then(value => {

        let url = new URLSearchParams(window.location.search)
        let gelenId = url.get("id")

        let gelenMovie = value.find(element => element.id == gelenId)

        let gelenMovieDizi = []
        gelenMovieDizi.push(gelenMovie)

        let x = gelenMovieDizi.map(value => {
            return `
            <div class="row mt-5">
                <div class="col-8 text-white">
                    
                    <h3>${value.yil}</h3>
                    <p class="mt-5" style="font-size: 12px; color:grey;">GENRE</p>
                    <p>${value.tur} <span class="ps-5" style="font-size:1.5rem;">${value.imdb}</span><span style="font-size: 12px; color:grey;" class="ps-2">IMDB</span></p>
                    <p style="font-size:5rem">${value.adi}</p>
                    <p>${value.ozet}</p>             

                    <h6 style="font-size: 12px; color:grey;">Süresi:${value.sure}</h6>
                    <h6 style="font-size: 12px; color:grey;">Yılı:${value.yil}</h6>
                    <button class="btn bg-transparent text-white mt-3 play" style="box-shadow: none;">Watch The Movie</button>
                </div>
                <div class="col-4">
                    
                </div>
            </div>
        `
        })

        document.querySelector(".contentMovie").innerHTML=x


        /*BG ımage*/
        let bg=document.querySelector(".bgImageId")
        bg.style.backgroundImage = `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.3)),url(${gelenMovieDizi[0].img})`
        bg.style.backgroundRepeat = "no-repeat"
        bg.style.backgroundSize = "cover";
        bg.style.backgroundPosition = "center";

        //film oynatmak
        let buton= document.querySelector(".play")
        
        

        buton.addEventListener("click",function(){
            let fContainer=document.querySelector(".dsplay").style.display="none"
            let containerim=document.createElement("div")
            containerim.className="container-fluid"
            const iframe=document.createElement("iframe")
            iframe.className="run w-100 vh-100"
            iframe.setAttribute("src",gelenMovie.link)           
            document.body.appendChild(iframe)
                  
            

            

        })
    })