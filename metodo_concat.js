let item = 3;
[1, 2].concat(item);

console.log([1, 2].concat(item))

/* Como o método .concat funciona tanto em valores como em Arrays, também podemos implementar uma 
função que se comporta como o método .flat facilmente: */

function flat(array, nesteArray){

    return array.concat(...nesteArray)

}

flat([1, 2], [3, 4, [5, 6]]);
console.log(flat([1, 2], [3, 4, [5, 6]]));

/* O operador spread usa cada um dos elementos nesteArray como argumentos para a chamada do método .concat */