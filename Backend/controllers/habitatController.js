// habitatController.js
import Habitat from '../models/habitatModel.js';

const getHabitats = async (req, res) => {
    try {
        const habitats = await Habitat.find();
        res.status(200).json(habitats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getHabitatById = async (req, res) => {
    try {
        const habitat = await Habitat.findById(req.params.id);
        if (habitat) {
            res.status(200).json(habitat);
        } else {
            res.status(404).json({ message: 'Habitat not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createHabitat = async (req, res) => {
    const { name, description, climate, terrain } = req.body;
    const newHabitat = new Habitat({
        name,
        description,
        climate,
        terrain
    });

    try {
        const createdHabitat = await newHabitat.save();
        res.status(201).json(createdHabitat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updateHabitat = async (req, res) => {
    try {
        const { name, description, climate, terrain } = req.body;
        const habitat = await Habitat.findById(req.params.id);

        if (habitat) {
            habitat.name = name;
            habitat.description = description;
            habitat.climate = climate;
            habitat.terrain = terrain;

            const updatedHabitat = await habitat.save();
            res.status(200).json(updatedHabitat);
        } else {
            res.status(404).json({ message: 'Habitat not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteHabitat = async (req, res) => {
    try {
        const habitat = await Habitat.findById(req.params.id);
        if (habitat) {
            await habitat.remove();
            res.status(200).json({ message: 'Habitat removed' });
        } else {
            res.status(404).json({ message: 'Habitat not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getHabitats, getHabitatById, createHabitat, updateHabitat, deleteHabitat };
