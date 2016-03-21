var etContent = document.getElementById('et-content')
var btnLeftIn = document.getElementsByClassName("left-in")[0]
var btnLeftOut = document.getElementsByClassName("left-out")[0]
var btnRightOut = document.getElementsByClassName("right-out")[0]
var btnRightIn = document.getElementsByClassName("right-in")[0]
var content = document.querySelector('.content')

var list = []

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
        f(div)
        etContent.value = ""
    }
}