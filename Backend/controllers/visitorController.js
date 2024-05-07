// visitorController.js
import Visitor from '../models/visitorModel.js';

// @desc    Get all visitors
// @route   GET /api/visitors
// @access  Admin
const getVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find();
        res.status(200).json(visitors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single visitor by ID
// @route   GET /api/visitors/:id
// @access  Admin
const getVisitorById = async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);
        if (visitor) {
            res.status(200).json(visitor);
        } else {
            res.status(404).json({ message: 'Visitor not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new visitor
// @route   POST /api/visitors
// @access  Public
const createVisitor = async (req, res) => {
    const { name, email, phoneNumber, ticketType } = req.body;
    const newVisitor = new Visitor({
        name,
        email,
        phoneNumber,
        ticketType
    });

    try {
        const createdVisitor = await newVisitor.save();
        res.status(201).json(createdVisitor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update an existing visitor
// @route   PUT /api/visitors/:id
// @access  Admin
const updateVisitor = async (req, res) => {
    try {
        const { name, email, phoneNumber, ticketType } = req.body;
        const visitor = await Visitor.findById(req.params.id);

        if (visitor) {
            visitor.name = name;
            visitor.email = email;
            visitor.phoneNumber = phoneNumber;
            visitor.ticketType = ticketType;

            const updatedVisitor = await visitor.save();
            res.status(200).json(updatedVisitor);
        } else {
            res.status(404).json({ message: 'Visitor not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a visitor
// @route   DELETE /api/visitors/:id
// @access  Admin
const deleteVisitor = async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);
        if (visitor) {
            await visitor.remove();
            res.status(200).json({ message: 'Visitor removed' });
        } else {
            res.status(404).json({ message: 'Visitor not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getVisitors, getVisitorById, createVisitor, updateVisitor, deleteVisitor };
