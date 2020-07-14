// Add your functions here
function reduce(array, func, start=0) {
    let arr = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
        arr = func(array[i], arr)
    }

    return arr;
}

function map(array, func) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        newArray.push(func(el));
    }
    return newArray;
}