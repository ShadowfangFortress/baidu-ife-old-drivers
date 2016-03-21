var etContent = document.querySelector('#et-content')
var btnLeftIn = document.querySelector(".left-in")
var btnLeftOut = document.querySelector(".left-out")
var btnRightOut = document.querySelector(".right-out")
var btnRightIn = document.querySelector(".right-in")
var content = document.querySelector('.content')

btnLeftIn.addEventListener("click", foo(function(div) {
    content.insertBefore(div, content.childNodes[0])
}))

btnLeftOut.addEventListener("click", function(e) {
    content.removeChild(content.childNodes[0])
})

btnRightOut.addEventListener("click", function(e) {
    content.removeChild(content.childNodes[content.childNodes.length - 1])
})

btnRightIn.addEventListener("click",foo(function (div) {
    content.appendChild(div)
}))


function foo(f) {
    return function(e) {
        if (etContent.value === "") {
            return
        }
        var div = document.createElement("div")
        div.className = "temple"
        div.innerText = etContent.value
        div.addEventListener("click",function (e) {
            content.removeChild(this)
        })
        f(div)
        etContent.value = ""
    }
}