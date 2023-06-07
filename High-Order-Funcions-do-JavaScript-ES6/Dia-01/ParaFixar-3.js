
//PARA FIXAR 1

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
 return arr.some((namer) => namer === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// PARA FIXAR 2

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
    const verifyAges = (array, idade) => {
        return array.every((currentAge) => currentAge.age >= idade)
    }
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));