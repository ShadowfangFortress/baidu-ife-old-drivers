'use strict'
var etContent = document.querySelector('#et-content')
var btnLeftIn = document.querySelector(".left-in")
var btnLeftOut = document.querySelector(".left-out")
var btnRightOut = document.querySelector(".right-out")
var btnRightIn = document.querySelector(".right-in")
var content = document.querySelector('.content')
var btnSort = document.querySelector('.btn-sort')

var list = []

btnLeftIn.addEventListener("click", foo(list.unshift, 1))

btnLeftOut.addEventListener("click", foo(list.shift))

btnRightOut.addEventListener("click", foo(list.pop))

btnRightIn.addEventListener("click", foo(list.push, 1))

btnSort.addEventListener("click", function() {
    list = qSort(list)
    renderChart()
})

function foo(f, needCheck) {
    return function(e) {
        let number = etContent.value
        if (needCheck) {
            if (number === "" || number.match(/^\d+$/)===null) {
                alert("参数不合法")
                return
            }
            if (number < 10 || number > 100) {
                alert("数字必须小于100，大于10")
                return
            }
        }
        f.call(list, number)
        etContent.value = ""
        renderChart()
    }
}

function renderChart() {
    content.innerHTML = ""
    list.forEach((v, i) => {
        var div = document.createElement("div")
        div.className = "temple"
        div.addEventListener("click", e => content.remove(div))
        div.style.height = v
        content.appendChild(div)
    })
}