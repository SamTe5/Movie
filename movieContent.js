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
                    <p class="mt-5" style="font-size: smaller; color:grey;">GENRE</p>
                    <p></p>
                    
                

                    <h6>Süresi:${value.sure}</h6>
                    <h6>Yılı:${value.yil}</h6>
                </div>
                <div class="col-4"></div>
            </div>
        `
        })

        document.querySelector(".contentMovie").innerHTML=x


        /*BG ımage*/
        document.querySelector(".bgImageId").style.backgroundImage = `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.3)),url(${gelenMovieDizi[0].img})`
        document.querySelector(".bgImageId").style.backgroundRepeat = "no-repeat"
        document.querySelector(".bgImageId").style.backgroundSize = "cover";
        document.querySelector(".bgImageId").style.backgroundPosition = "center";
    })