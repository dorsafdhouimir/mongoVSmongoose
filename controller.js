const mongoose = require('mongoose');
const Person = require('../data-base-mongoVSmongoose/dataVS'); 

mongoose.connect('mongodb://localhost:27017/mongoVSmongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
console.log('Database connected');


async function createPerson() {
    try {
      const person = await Person.create({
        name: 'bachra"',
        age: 30,
        favoriteFoods: ['Pizza', 'Burger']
      });
      console.log('Person created successfully:', person);
    } catch (err) {
      console.error('Error creating person:', err);
    }
  }
//----------------------------------------------
const arrayOfPeople = [
  { name: 'dorsaf', age: 30, favoriteFoods: ['Pizza', 'Burger'] },
  { name: 'majd', age: 25, favoriteFoods: ['Sushi', 'Tacos'] },
];

async function initialize() {
    try{
        const people = await Person.create(arrayOfPeople);
        console.log('People created successfully:', people);
    }catch(err){
    console.log('error:', people);
    }
}
initialize();
//------------------------------------------------
async function findPeopleByName(name) {
    try {
      await mongoose.connect('mongodb://localhost:27017/mongoVSmongoose', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Database connected');
  
      
      const people = await Person.find({ name: name });
      console.log('People found:', people);
    } catch (err) {
      console.error('Error:', err);
    }
  }
  findPeopleByName('dorsaf');
//------------------------------------------------
async function findPeopleByfavoriteFoods(food) {
    try {
      await mongoose.connect('mongodb://localhost:27017/mongoVSmongoose', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Database connected');
  
      
      const people = await Person.find({ favoriteFoods: food});
      console.log('People found:', people);
    } catch (err) {
      console.error('Error:', err);
    }
  }
  findPeopleByfavoriteFoods('dorsaf');
  //-------------------------------------------------------
async function findPersonById(personId) {
    try {
      await mongoose.connect('mongodb://localhost:27017/mongoVSmongoose', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Database connected');
      const person = await Person.findById(personId);
      console.log('Person found:', person);
    } catch (err) {
      console.error('Error:', err);
    }
  }
  
  
findPersonById();
//------------------------------
async function updateFavoriteFoods(personId) {
  try {
    await mongoose.connect('mongodb://localhost:27017/mongoVSmongoose', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected');
    const person = await Person.findById(personId);
    if (person) {
      person.favoriteFoods.push('hamburger');
      await person.save();
      console.log('Updated person:', person);
    } else {
      console.log('Person not found');
    }
  } catch (err) {
    console.error('Error:', err);
  }
}
updateFavoriteFoods();
//----------------------------------------


  



