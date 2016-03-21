'use strict'

function qSort(data) {
    return cut(data)
}

function cut(array) {
    if (!array || !array.slice || !array.length)
        return array;
    var p = array[0]
    let left = array.slice(1).filter(i => i <= p)
    let right = array.slice(1).filter(i => i > p)
    let result = cut(left).concat(p).concat(cut(right))
    
    return result
}
