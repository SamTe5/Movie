let conf= document.querySelector(".tCon")
conf.className="w-100 vh-100 bgImage"
let con=document.createElement("div")
con.className="container pt-3"
conf.appendChild(con)

let nav=document.createElement("navbar")
con.appendChild(nav)

let a=document.createElement("img")
a.setAttribute("src","images/ticket.png")
a.className="logo"
nav.appendChild(a)


