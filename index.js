// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}


function appendCat(name){
    let temporary = [...cats]
    temporary.push(name)
    return temporary
}

function prependCat(name){
    let newCats = [...cats]
    newCats.unshift(name)
    return newCats
}

function removeLastCat(){
    let removedCats = [...cats]
    removedCats.pop()
    return removedCats
}

function removeFirstCat(){
    let deleteCat = [...cats]
    deleteCat.shift()
    return deleteCat
}





