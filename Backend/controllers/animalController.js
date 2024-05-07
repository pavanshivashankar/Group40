import Animal from "../models/animalModel.js";

// Get all animals
const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single animal by ID
const getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (animal) {
      res.status(200).json(animal);
    } else {
      res.status(404).json({ message: "Animal not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new animal
const createAnimal = async (req, res) => {
  const {
    name,
    speciesName,
    age,
    gender,
    habitatName,
    zookeeper,
    caretaker,
    note,
  } = req.body;

  if (
    !name ||
    !speciesName ||
    !age ||
    !gender ||
    !habitatName ||
    !zookeeper ||
    !caretaker ||
    !note
  ) {
    return res.status(400).json({ message: "please fill all the fields" });
  }

  const newAnimal = new Animal({
    name,
    speciesName,
    age,
    gender,
    habitatName,
    zookeeper,
    caretaker,
    note,
  });

  try {
    const createdAnimal = await newAnimal.save();
    if (createdAnimal) {
      return res.status(200).json({ message: "Animal created successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing animal
const updateAnimal = async (req, res) => {
  try {
    const {
      name,
      speciesName,
      age,
      gender,
      habitatName,
      zookeeper,
      caretaker,
      note,
    } = req.body;
    const animal = await Animal.findById(req.params.id);

    if (animal) {
      animal.name = name;
      animal.speciesName = speciesName;
      animal.age = age;
      animal.gender = gender;
      animal.habitatName = habitatName;
      animal.zookeeper = zookeeper;
      animal.caretaker = caretaker;
      animal.note = note;

      const updatedAnimal = await animal.save();
      if (updatedAnimal) {
        return res
          .status(200)
          .json({ message: "Animal details updated successfully" });
      }
    } else {
      res.status(404).json({ message: "Animal not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an animal
const deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (animal) {
      res.status(200).json({ message: "Animal Deleted" });
    } else {
      res.status(404).json({ message: "Animal not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAnimals, getAnimalById, createAnimal, updateAnimal, deleteAnimal };
