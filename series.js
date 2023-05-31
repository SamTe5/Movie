let conf= document.querySelector(".sCon")
conf.className="w-100 bgImage"
let con=document.createElement("div")
con.className="container pt-2"
conf.appendChild(con)
/*NAVBAR */
let nav=document.createElement("navbar")
nav.className="navbar navbar-expand-lg border-bottom"
con.appendChild(nav)

let a=document.createElement("a")
a.setAttribute("href","index.html")
nav.appendChild(a)

let img=document.createElement("img")
img.setAttribute("src","images/ticket.png")
img.setAttribute("href","index.html")

img.className="logo"
a.appendChild(img)

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
aItem1.className="nav-link "
aItem1.innerHTML="TOP 10"
aItem1.setAttribute("href","top10.html")
li1.appendChild(aItem1)

let aItem2=document.createElement("a")
aItem2.className="nav-link"
aItem2.setAttribute("href","movies.html")
aItem2.innerHTML="Movies"
li2.appendChild(aItem2)

let aItem3=document.createElement("a")
aItem3.className="nav-link topTenColorActive"

aItem3.innerHTML="Series"
li3.appendChild(aItem3)


/*Burada diziler sıralancak*/

let moviesDivim=document.createElement("div")
moviesDivim.className="row moviesList"
con.appendChild(moviesDivim)

fetch("movies.json")
.then(res=>res.json())
.then(value=>{
    console.log(value)

    value = value.filter((eleman) => eleman.cins === "series")

    let seriesim=value.map(element=>{


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

    document.querySelector(".moviesList").innerHTML=seriesim.join("")
})