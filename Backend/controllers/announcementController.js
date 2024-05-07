import Announcement from '../models/announcementModel.js';

// create a new announcement
const createAnnouncement = async (req, res) => {
  try {
    
    const { topic, description, dept } = req.body;

    if(!topic || !description || !dept){
        return res.status(400).json({message: "Please fill the all required fields"})
    }
    
    const announcement = new Announcement({
      topic,
      description,
      dept,
    });

    const savedAnnouncement = await announcement.save();

    if(savedAnnouncement){
        return res.status(200).json({message: "Announcement created successfully"})
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all announcements
const getAllAnnouncements = async (req, res) => {
  try {
    
    const announcements = await Announcement.find();

    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get an announcement by ID
const getAnnouncementById = async (req, res) => {

  const { id } = req.params;

  try {
    
    const announcement = await Announcement.findById(id);

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update an announcement by ID
const updateAnnouncementById = async (req, res) => {

  const { id } = req.params;

  try {
    
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedAnnouncement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    if(updatedAnnouncement){
        return res.status(200).json({message: "Announcement updated successfully"});
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete an announcement by ID
const deleteAnnouncementById = async (req, res) => {

  const { id } = req.params;

  try {
    
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

    if (!deletedAnnouncement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.status(200).json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {createAnnouncement, getAllAnnouncements, getAnnouncementById, updateAnnouncementById, deleteAnnouncementById}