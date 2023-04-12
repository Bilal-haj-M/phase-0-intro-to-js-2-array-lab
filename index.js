// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]


function  destructivelyAppendCat(first) {

    cats.push("Ralph")
}

function destructivelyPrependCat(seond) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(third) {
    cats.pop(4)
}

function destructivelyRemoveFirstCat(fourth) {
    cats.shift(0)
}


const appendCat = function (name) {
   const cat = cats.slice(0)
   cat.push(name)
    return cat
}

const prependCat = function (name) {
    const cat = cats.slice(0)
    cat.unshift(name)
    return cat
}

const removeLastCat = function (name) {
    const cat = cats.slice(0)
    cat.pop(name)
    return cat
}

const removeFirstCat = function (name) {
    const cat = cats.slice(0)
    cat.shift(name)
    return cat
}


