'use strict'
let etMain = document.querySelector('#et-main')
let btnLeftIn = document.querySelector(".left-in")
let btnLeftOut = document.querySelector(".left-out")
let btnRightOut = document.querySelector(".right-out")
let btnRightIn = document.querySelector(".right-in")
let content = document.querySelector('.content')
let btnQuery = document.querySelector('#btn-query')
let etQuery = document.querySelector('#et-query')

function getText() {
    return etMain.value.trim().split(/[\n、\.。\s]+/)
}

var list = []

btnLeftIn.addEventListener("click", foo(list.unshift, 1))

btnLeftOut.addEventListener("click", foo(list.shift))

btnRightOut.addEventListener("click", foo(list.pop))

btnRightIn.addEventListener("click", foo(list.push, 1))

btnQuery.addEventListener("click", e => {
    renderChart(etQuery.value)
    etQuery.value = ""
})


function foo(f, needCheck) {
    return function(e) {
        getText().forEach(v => f.call(list, v))
        etMain.value = ""
        renderChart()
    }
}

function renderChart(text) {
    content.innerHTML = ""
    list.forEach((v, i) => {
        var div = document.createElement("div")
        div.className = "temple"
        if (text) {
            if (v.match(text)) {
                div.style.backgroundColor = "white"
            }
            div.innerHTML = v.replace(text, `<b style="color:red;">${text}</b>`)
        } else {
            div.innerText = v
        }
        div.addEventListener("click", function(e) {
            content.removeChild(this)
        })
        content.appendChild(div)
    })
}