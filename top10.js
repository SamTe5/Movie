let conf= document.querySelector(".tCon")
conf.className="w-100 vh-100 bgImage"
let con=document.createElement("div")
con.className="container pt-2"
conf.appendChild(con)

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
aItem2.setAttribute("href","#")
aItem2.innerHTML="Movies"
li2.appendChild(aItem2)

let aItem3=document.createElement("a")
aItem3.className="nav-link"
aItem3.setAttribute("href","#")
aItem3.innerHTML="Series"
li3.appendChild(aItem3)



