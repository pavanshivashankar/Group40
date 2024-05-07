import Event from "../models/eventModel.js";

const createEvent = async (req, res) => {
  try {
    const {
      name,
      date,
      location,
      capacity,
      registrationRequired,
      registrationOpen,
      registrationStartDate,
      registrationEndDate,
      description,
    } = req.body;

    if (
      !name ||
      !date ||
      !location ||
      !capacity ||
      !registrationStartDate ||
      !registrationEndDate ||
      !description
    ) {
      return res.status(400).json({ message: "please fill the all fields" });
    }

    const event = new Event({
      name,
      date,
      location,
      capacity,
      registrationRequired,
      registrationOpen,
      registrationStartDate,
      registrationEndDate,
      description,
    });

    const savedEvent = await event.save();

    if(savedEvent){
        return res.status(200).json({message: "Event created successfully"})
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get all events
const getAllEvents = async (req, res) => {
  try {
    
    const events = await Event.find();

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get an event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  update an event by ID
const updateEventById = async (req, res) => {
  const { id } = req.params;

  try {

    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({message: "Event updated successfully"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete event
const deleteEventById = async (req, res) => {
  const { id } = req.params;

  try {

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export {createEvent, getAllEvents, deleteEventById, getEventById, updateEventById}
