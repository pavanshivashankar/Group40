import Feedback from "../models/feedbackModel.js";

const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (feedback) {
      res.status(200).json(feedback);
    } else {
      res.status(404).json({ message: "Feedback not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFeedback = async (req, res) => {
  try {
    const userId = req.userId;

    const { rating, comment, suggestion } = req.body;

    if (!rating || !comment || !suggestion) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    }
    const newFeedback = new Feedback({
      visitor: userId,
      rating,
      comment,
      suggestion,
    });

    const createdFeedback = await newFeedback.save();

    if (createdFeedback) {
      return res.status(200).json({ message: "Feedback sent successfully" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFeedback = async (req, res) => {
  try {
    const { rating, comment, suggestion } = req.body;
    const feedback = await Feedback.findById(req.params.id);

    if (feedback) {
      feedback.rating = rating;
      feedback.comment = comment;
      feedback.suggestion = suggestion;

      const updatedFeedback = await feedback.save();
      res.status(200).json(updatedFeedback);
    } else {
      res.status(404).json({ message: "Feedback not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (feedback) {
      await feedback.remove();
      res.status(200).json({ message: "Feedback removed" });
    } else {
      res.status(404).json({ message: "Feedback not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getFeedback,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
