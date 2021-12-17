let people = [
    {name: "João", friends: [{ name: "Gabriel" }, { name: "Laura" }]},
    {name: "Maria", friends: [{ name: "Bruna" }, { name: "Luiza" }]},
    {name: "Rebeca", friends: [{ name: "Gustavo" }]},
];

function getFriends(person){

    return person.friends; 

}

people.map(getFriends);
console.log(people.map(getFriends));

/* No método .flatMap, este Array retornado pela função getFriends será concatenado 
com os resultados anteriores, retornando um Array com apenas um nível de profundidade. */

people.flatMap(getFriends);
console.log(people.flatMap(getFriends));



