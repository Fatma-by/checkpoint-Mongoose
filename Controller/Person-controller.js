const Person = require("../models/Person-models");

const personservice = require("../services/personService");

//Create and Save a Record of a Model:

const createPerson = async (req, res) => {
  try {
    const data = await personservice.createPerson(req.body);

    // Respond with the saved person
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//Create Many Records with model.create()

const createPersons = async (req, res) => {
  try {
    const data = await personservice.createPersons(req.body);

    // Respond with the saved person
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//Use model.find() to Search Your Database

const findPeopleByName = async (req, res) => {
  try {
    console.log(req.params.name);
    const people = await personservice.findPeopleByName(req.params.name );

    res.status(201).json(people);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//Use model.findOne() to Return a Single Matching Document from Your Database

const findPersonByFavoriteFood = async (req, res) => {
  try {
    console.log(req.params.favoriteFoods);
    const person = await personservice.findPersonByFavoriteFood( req.params.favoriteFoods );

    res.status(201).json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


//Use model.findById() to Search Your Database By _id

const findPersonById = async (req, res) => {
  try {
    console.log(req.params.Id);
    const person = await personservice.findPersonById( req.params.Id,data);

    res.status(201).json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//Perform Classic Updates by Running Find, Edit, then Save

const updatePersonFavoriteFood = async (req, res) => {
  try {
    console.log(req.params.Id);
    const person = await personservice.updatePersonFavoriteFood(req.params.Id,req.body.food);

    res.status(201).json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//Perform New Updates on a Document Using model.findOneAndUpdate()

const updatePersonAge = async (req, res) => {
  try {
    console.log(req.params.name);
    const person = await personservice.updatePersonAge(req.params.name);

    res.status(201).json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//Delete One Document Using model.findByIdAndRemove

const deletePersonById = async (req, res) => {
  try {
    console.log(req.params.Id);
    const person = await personservice.deletePersonById (req.params.Id);

    res.status(201).json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//MongoDB and Mongoose - Delete Many Documents with model.remove()

const deletePeopleByName = async (req, res) => {
  try {
    console.log(req.params.name);
    const person = await personservice.deletePeopleByName (req.params.name);

    res.status(201).json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//Chain Search Query Helpers to Narrow Search Results

const findBurritoLovers = async (req, res) => {
  try {
    console.log(req.params.name);
    const person = await personservice.findBurritoLovers (req.params.name);

    res.status(201).json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};





module.exports = {
  createPerson,
  createPersons,
  findPeopleByName,
  findPersonByFavoriteFood,
  findPersonById,
  updatePersonFavoriteFood,
  updatePersonAge,
  deletePersonById,
  deletePeopleByName,
  findBurritoLovers
};
