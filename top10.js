let conf= document.querySelector(".tCon")
conf.className="w-100 vh-100 bgImage"
let con=document.createElement("div")
con.className="container pt-2"
conf.appendChild(con)
/*NAVBAR */
let nav=document.createElement("navbar")
nav.className="navbar navbar-expand-lg "
con.appendChild(nav)

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
aItem1.className="nav-link topTenColorActive"
aItem1.innerHTML="TOP 10"
li1.appendChild(aItem1)

let aItem2=document.createElement("a")
aItem2.className="nav-link"
aItem2.setAttribute("href","movies.html")
aItem2.innerHTML="Movies"
li2.appendChild(aItem2)

let aItem3=document.createElement("a")
aItem3.className="nav-link"
aItem3.setAttribute("href","series.html")
aItem3.innerHTML="Series"
li3.appendChild(aItem3)


/*CONTENT */

let contentMain=document.createElement("div")
con.appendChild(contentMain)
contentMain.className="row text-white mt-5 text-center"


let colSira=document.createElement("div")
colSira.className="col-1"
colSira.innerHTML="NUMBER"
contentMain.appendChild(colSira)

let colIsim=document.createElement("div")
colIsim.className="col-3"
colIsim.innerHTML="NAMES"
contentMain.appendChild(colIsim)

let colYonetmen=document.createElement("div")
colYonetmen.className="col-3"
colYonetmen.innerHTML="DIRECTORS"
contentMain.appendChild(colYonetmen)

let colCins=document.createElement("div")
colCins.className="col-2"
colCins.innerHTML="TYPE"
contentMain.appendChild(colCins)

let colImdb=document.createElement("div")
colImdb.className="col-1"
colImdb.innerHTML="IMDB"
contentMain.appendChild(colImdb)

let colViews=document.createElement("div")
colViews.className="col-2"
colViews.innerHTML="VIEWS"
contentMain.appendChild(colViews)



let rowList=document.createElement("div")
rowList.className="row listeler text-white text-center"
con.appendChild(rowList)

/*FETCH */

fetch("movies.json")
    .then(res => res.json())
    .then(value => {
        /*IMDB SIRALAMA */
         
         value.sort((a, b) => parseFloat(b.imdb) - parseFloat(a.imdb))
        let count=0

        let list = value.slice(0, 10).map(element => {
            count++
            return `
            <div class="col-1">${count}</div>
            <div class="col-3">${element.adi}</div>
            <div class="col-3">${element.yonetmen}</div>
            <div class="col-2">${element.cins}</div>
            <div class="col-1">${element.imdb}</div>
            <div class="col-2">${element.sayi}</div>
            `;
        });

        document.querySelector(".listeler").innerHTML = list.join("");
    });

   