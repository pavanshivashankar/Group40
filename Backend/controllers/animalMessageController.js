import AnimalMessage from '../models/animalMessageModel.js';

// Get all animal messages
const getAllAnimalMessages = async (req, res) => {
    try {
        const animalMessages = await AnimalMessage.find();
        res.status(200).json(animalMessages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get animal message by ID
const getAnimalMessageById = async (req, res) => {
    const { id } = req.params;
    try {
        const animalMessage = await AnimalMessage.findById(id);
        if (!animalMessage) {
            return res.status(404).json({ message: 'Animal message not found' });
        }
        res.status(200).json(animalMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new animal message
const createAnimalMessage = async (req, res) => {
    const { message, animal } = req.body;

    const user = req.userId;

    try {
        if(!message){
            return res.status(400).json({message: "Please write message"})
        }
        const newAnimalMessage = new AnimalMessage({ message, animal, user });
        const saveMessage = await newAnimalMessage.save();
        if(saveMessage){
            return res.status(200).json({message: "report sent successfully"});
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update animal message by ID
const updateAnimalMessage = async (req, res) => {
    const { id } = req.params;
    const { message, animal } = req.body;
    try {
        const animalMessage = await AnimalMessage.findById(id);
        if (!animalMessage) {
            return res.status(404).json({ message: 'Animal message not found' });
        }
        animalMessage.message = message;
        animalMessage.animal = animal;
        await animalMessage.save();
        res.status(200).json(animalMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete animal message by ID
const deleteAnimalMessage = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const animalMessage = await AnimalMessage.findByIdAndDelete(id);
        if (!animalMessage) {
            return res.status(404).json({ message: 'Animal message not found' });
        }
        res.status(200).json({ message: 'Animal message resolved successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export {getAllAnimalMessages, getAnimalMessageById, createAnimalMessage, deleteAnimalMessage}