let mconf= document.querySelector(".mCon")
mconf.className=" bgImage"
let mcon=document.createElement("div")
mcon.className="container pt-2"
mconf.appendChild(mcon)
/*NAVBAR */
let nav=document.createElement("navbar")
nav.className="navbar navbar-expand-lg border-bottom"
mcon.appendChild(nav)

let a=document.createElement("img")
a.setAttribute("src","images/ticket.png")

a.className="logo"
nav.appendChild(a)

let topIcerik=document.createElement("div")
topIcerik.className="collapse navbar-collapse"
nav.appendChild(topIcerik)
let topUl=document.createElement("ul")
topUl.className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center w-100 h-100"
topIcerik.appendChild(topUl)

let li1=document.createElement("li")
li1.className="nav-item"
topUl.appendChild(li1)

let li2=document.createElement("li")
li2.className="nav-item"
topUl.appendChild(li2)

let li3=document.createElement("li")
li3.className="nav-item"
topUl.appendChild(li3)

let aItem1=document.createElement("a")
aItem1.className="nav-link"
aItem1.setAttribute("href","top10.html")
aItem1.innerHTML="TOP 10"
li1.appendChild(aItem1)

let aItem2=document.createElement("a")
aItem2.className="nav-link topTenColorActive"
aItem2.innerHTML="Movies"
li2.appendChild(aItem2)

let aItem3=document.createElement("a")
aItem3.className="nav-link"
aItem3.setAttribute("href","series.html")
aItem3.innerHTML="Series"
li3.appendChild(aItem3)

/*Burada filmler sıralancak*/

let moviesDivim=document.createElement("div")
moviesDivim.className="row moviesList"
mcon.appendChild(moviesDivim)

fetch("movies.json")
.then(res=>res.json())
.then(value=>{
    console.log(value)

    value = value.filter((eleman) => eleman.cins === "movie")

    let moviesim=value.map(element=>{


        return`
            
            <div class="col-6 mt-5 d-flex p-0 b">
            <div class="movieBox me-2">
                <a href="movieContent.html?id=${element.id}">
                    <img class="movieBoxImg" src="${element.img}" alt="resim">             
                </a>
            </div>
            <div class="icerik text-white">
                <p style="font-size: larger;">${element.adi}</p>
                <p>${element.ozet}</p>
                <p class="mt-4">İmdb:${element.imdb} Yılı:${element.yil}</p>
            </div>
            
             
            </div> 
           


        `
        
    })

    document.querySelector(".moviesList").innerHTML=moviesim.join("")
})