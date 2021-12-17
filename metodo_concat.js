let item = 3;
[1, 2].concat(item);

console.log([1, 2].concat(item))


function flat (array, nesteArray){

    return array.concat(...nesteArray)

}

flat([1, 2], [3, 4, [5, 6]]);

console.log(flat([1, 2], [3, 4, [5, 6]]));