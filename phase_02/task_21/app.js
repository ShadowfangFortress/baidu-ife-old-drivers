'use strict'
let hobby = document.querySelector('#hobby')
let hobbyList = document.querySelector('#hobby-list')
let aihao = document.querySelector('#aihao')
let commit = document.querySelector('#commit')
let aihaoList = document.querySelector('#aihao-list')

function getText() {
    return etMain.value.trim().split(/[\n、\.。\s]+/)
}

let listener = ()=> {
    let hobbyStr = hobby.value;
    let match = hobbyStr.substr(-1).match(/[,\s]/) !== null;
    if (hobbyStr && match) {
        console.log(2);
        console.log(hobbyStr.substring(0, hobbyStr.length - 1))
        hobby.value = ""
    }
};
hobby.addEventListener("input", listener)
hobby.addEventListener("keydown", (e)=> {
    if (e.keyCode == 13) {
        hobby.value = ""
    }
})

var list = []
