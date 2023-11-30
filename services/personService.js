const Person = require("../models/Person-models");

//Create and Save a Record of a Model:
const createPerson = async (personData) => {
  try {
    const newPerson = new Person(personData);

    await Person.create(newPerson);

    // Save the new person
    const savedPerson = await newPerson.save();

    // Respond with the saved person
    return savedPerson;
  } catch (err) {
    console.error(err);
  }
};

//Create Many Records with model.create()


const createPersons = async (data) => {
  let list = [];
  (data).forEach((element) => {
    list.push(new Person(element));
  });
  const r = await Person.create(list);
  return r;

}
// Use Model.find() to search for people with the given name

  const findPeopleByName = async (name) => {
    try {
      const people = await Person.find({ name  });
  
      return people;
    } catch (err) {
      console.error(err);
      throw err; 
    }
  };

 //Use model.findOne() to Return a Single Matching Document from Your Database

 const findPersonByFavoriteFood = async (food) => {
  try {
    // Use Model.findOne() to search for a person with the given favorite food
    const person = await Person.findOne({ favoriteFoods: {$in:[food]} });

    // Do something with the result (e.g., log or return)
    if (person) {
      console.log("Person with the favorite food:", person);
      return person;
    } else {
      console.log("No person found with the given favorite food.");
      return null;
    }
  } catch (err) {
    console.error(err);
    throw err; 
  }
};


//Use model.findById() to Search Your Database By _id

const findPersonById = async (personId) => {
  try {
    // Use Model.findById() to search for a person with the given _id
    const person = await Person.findById(personId);

    // Do something with the result (e.g., log or return)
    if (person) {
      console.log("Person found by _id:", person);
      return person;
    } else {
      console.log("No person found with the given _id.");
      return null;
    }
  } catch (err) {
    console.error(err);
    throw err; 
  }
};

//Perform Classic Updates by Running Find, Edit, then Save

const updatePersonFavoriteFood = async (personId,data) => {
  try {
    // Find the person by _id
    const person = await Person.findOne({_id: personId});
    console.log(data)

    // Check if the person exists
    if (!person) {
      console.log("No person found with the given _id.");
      return null;
    }

    // Add "hamburger" to the list of favoriteFoods
    person.favoriteFoods.push(data);

    // Save the updated person
    await person.save();

    console.log("Person updated successfully:", person);
    return person;
  } catch (err) {
    console.error(err);
    throw err; // You might want to handle the error in a different way based on your application's needs
  }
};

//Perform New Updates on a Document Using model.findOneAndUpdate()

async function updatePersonAge(personName) {
  try {
    
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName }, // Search criteria
      { $set: { age: 20 } }, // Update age to 20
      { new: true } // Return the updated document
    );

    if (updatedPerson) {
      console.log(`Updated ${personName}'s age to 20. Updated document:`, updatedPerson);
      return updatedPerson;
    } else {
      console.log(`${personName} not found.`);
      return null;
    }
  } catch (error) {
    console.error('Error updating person:', error);
    throw error;
  }
}

//Delete One Document Using model.findByIdAndRemove

async function deletePersonById(personId) {
  try {
    // Find the person by _id and remove them
    const deletedPerson = await Person.findByIdAndDelete(personId);

    // Check if the person was found and removed
    if (deletedPerson) {
      console.log('Deleted Person:', deletedPerson);
      return deletedPerson;
    } else {
      console.log('Person not found.');
      return null;
    }
  } catch (error) {
    console.error('Error deleting person:', error);
    throw error;
  }
}

//MongoDB and Mongoose - Delete Many Documents with model.remove()

async function deletePeopleByName(name) {
  try {
    // Use Model.remove() to delete all people with the given name
    const result = await Person.deleteMany({ name: name });

    console.log(`Deleted ${result.n} people with name ${name}.`);

    // Pass the result to the done callback
  } catch (error) {
    console.error('Error deleting people:', error);
    done(error, null);
  }
}

//Chain Search Query Helpers to Narrow Search Results


async function findBurritoLovers(done) {
  try {
    const burritoLovers = await Person.find({ likes: 'burrito' }) // Find people who like burritos
      .sort('name') // Sort them by name
      .limit(2) // Limit the results to two documents
      .select('-age') // Hide their age
      .exec(); // Execute the query

    console.log('Burrito Lovers:', burritoLovers);
    done(null, burritoLovers);
  } catch (error) {
    console.error('Error finding burrito lovers:', error);
    done(error, null);
  }
}










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
