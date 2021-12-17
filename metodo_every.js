let kids = [
    {nome:'Pedro', idade:10},
    {nome:'Anita', idade:13}, 
    {nome:'Bruna', idade:14},
    {nome:'Melissa', idade:11}
];

function isTeens(kid){

    return kid.idade >= 10;

} 

kids.every(isTeens);

/* A função isTeens testará se kid.idade é maior ou igual à 10. Como esta condição é verdadeira para todos 
os elementos do Array, o método .every retornará true com essa condição. */

function isPedro(kid){

    return kid.nome === 'Pedro';

}

kids.every(isPedro);

/* Já a função isPedro testará se kid.nome é 'Pedro', o que não é verdadeiro para todos os elementos do 
Array kids. A chamada do método .every, neste caso, retornará false. */