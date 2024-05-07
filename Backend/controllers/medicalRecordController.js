// medicalRecordController.js
import MedicalRecord from '../models/medicalRecordModel.js';
import AnimalModel from '../models/animalModel.js';

const getMedicalRecords = async (req, res) => {
    try {
        const medicalRecords = await MedicalRecord.find();
        res.status(200).json(medicalRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getAllMedicalRecordById = async (req, res) => {
    try {

        const animal = req.params.id

        const medicalRecord = await MedicalRecord.find({animal})

        if (medicalRecord) {
            res.status(200).json(medicalRecord);
        } else {
            res.status(404).json({ message: 'Medical record not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCurrentMedicalRecordById = async (req, res) => {
    try {

        const animal = req.params.id

        console.log(animal)

        const medicalRecord = await MedicalRecord.find({animal}).limit(1)

        if (medicalRecord) {
            res.status(200).json(medicalRecord);
        } else {
            res.status(404).json({ message: 'Medical record not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMedicalRecordById = async (req, res) => {
    try {

        const id = req.params.id

        const medicalRecord = await MedicalRecord.findById(id)

        console.log("hello")
        if (medicalRecord) {
            res.status(200).json(medicalRecord);
        } else {
            res.status(404).json({ message: 'Medical record not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMedicalRecord = async (req, res) => {
    try {
        const animalId = req.params.id;
        const { description, medications, diagnosis, status } = req.body;

        if (!description || !medications || !diagnosis || !status) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        const animal = await AnimalModel.findById(animalId);
        if (!animal) {
            return res.status(404).json({ message: "Animal not found" });
        }

        const newMedicalRecord = new MedicalRecord({
            description,
            medications,
            diagnosis,
            status,
            animal: animalId
        });

        const createdMedicalRecord = await newMedicalRecord.save();

        if (createdMedicalRecord) {
            return res.status(200).json({ message: "Medical Record created Successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export default createMedicalRecord;



const updateMedicalRecord = async (req, res) => {
    try {
        const { description, medications, diagnosis , status} = req.body;
        const medicalRecord = await MedicalRecord.findById(req.params.id);

        const time = Date.now()
        console.log(time)
        if (medicalRecord) {
            medicalRecord.date = time;
            medicalRecord.description = description;
            medicalRecord.medications = medications;
            medicalRecord.diagnosis = diagnosis;
            medicalRecord.status = status

            const updatedMedicalRecord = await medicalRecord.save();
            if(updatedMedicalRecord){
                return res.status(200).json({message: "Medical Record updated successfully"});
            }
        } else {
            res.status(404).json({ message: 'Medical record not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteMedicalRecord = async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findByIdAndDelete(req.params.id);
        if (medicalRecord) {
            res.status(200).json({ message: 'Medical record deleted' });
        } else {
            res.status(404).json({ message: 'Medical record not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getMedicalRecords, getMedicalRecordById, getAllMedicalRecordById, createMedicalRecord, updateMedicalRecord, deleteMedicalRecord , getCurrentMedicalRecordById};
