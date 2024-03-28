const persons = [
    { name: "YES", age: 30, city: "Indore" },
    { name: "Rahul", age: 28, city: "Bhopal" },
    { name: "Anjali", age: 22, city: "Ujjain" },
    { name: "Simran", age: 19, city: "Vidisha" }
  ];
  
  
  const filteredPersons = persons.filter(person => person.age >= 25);
  
  
  filteredPersons.sort((a, b) => a.city.localeCompare(b.city));
  
 
  console.log("Final list of persons:");
  filteredPersons.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
  });