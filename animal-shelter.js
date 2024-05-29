const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50){
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    greet(greeting = 'Hi'){
        console.log(`${greeting}, I'm ${this.name} the ${this.species}`)
    }

    feed(){
        this.hunger -= 20
        console.log('Yum, I love food')
    }
 
};

class Cat extends Animal {
    constructor(name, color, hunger = 50){
        super(name, 'cat', color, hunger)//overriding the constructor
        this.food = 'fish'
    }

    greet(){
        super.greet('Meow') //overriding the greeting method
    }

    feed(){
        this.hunger -= 20
        console.log(`Yum, I love ${this.food}`);
    }
};

class Dog extends Animal {
    constructor(name, color, hunger = 50){
        super(name, 'dog', color, hunger)//overriding the constructor
        this.food = 'kibble'
    }

    greet(){
        super.greet('Woof') //overriding the greeting method
    }

    feed(){
        this.hunger -= 20
        console.log(`Yum, I love ${this.food}`);
    }
};



class AnimalShelter {
    constructor(){
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    adopt(animal) {
        const animalIndex = this.animals.indexOf(animal)
        this.animals.splice(animalIndex, 1)
    }

    getAnimalBySpecies(species){
        return this.animals.filter(a => a.species === species)
    }
};

//creating an instance of animalShelter called shelter
// const shelter = new AnimalShelter();

//looping through animalData

// for(const animals of animalData) {


//     //creating an Animal instance with the appropiate name, species, and color.
//     //If the animal has a hunger value, pass that in for hunger; otherwise pass in 50.
//     const hunger = animals.hunger ? animals.hunger : 50
//     const animal = new Animal(animals.name, animals.species, animals.color, hunger)

//     //After the loop, at the bottom of the file, print out shelter.animals to the console.
//     shelter.addAnimal(animal)
// }
// console.log(shelter.getAnimalBySpecies('dog'))

const shelter = new AnimalShelter();

for (const a of animalData) {
  let animal;
  const hunger = a.hunger ? a.hunger : 50;
  if (a.species === 'dog') {
    animal = new Dog(a.name, a.color, hunger);
  } else if (a.species === 'cat') {
    animal = new Cat(a.name, a.color, hunger);
  } else {
    animal = new Animal(a.name, a.species, a.color, hunger);
  }
  shelter.addAnimal(animal);
};


for (const animal of shelter.animals) {
    animal.greet();
    animal.feed();
  };

  console.log(animal.greet())
  console.log(animal.feed())
