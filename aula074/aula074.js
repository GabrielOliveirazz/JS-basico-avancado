// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ : Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__ : objA
}

Object.setPrototypeOf(objB, objA)
console.log(objB, objA)