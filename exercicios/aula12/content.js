const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(Element=> {
    Element.innerHTML="alterado"
    console.log(Element)
})

console.log(objs1)
console.log(objs2)