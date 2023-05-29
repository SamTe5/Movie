let conf= document.querySelector(".tCon")
conf.className="w-100 vh-100 bgImage"
let con=document.createElement("div")
con.className="container pt-3"
conf.appendChild(con)

let nav=document.createElement("navbar")
nav.className="d-flex"
con.appendChild(nav)

let a=document.createElement("img")
a.setAttribute("src","images/ticket.png")
a.className="logo"
nav.appendChild(a)

let topIcerik=document.createElement("div")
nav.appendChild(topIcerik)
let topUl=document.createElement("ul")
topUl.className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center"
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




