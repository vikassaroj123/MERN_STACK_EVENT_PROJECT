const express = require('express');
const router = express.Router();
const Contact = require('../Model/contactShema');

router.post('/', async (req, res) => {
    try {
        // Assuming req.body contains the contact information
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }
        // Create a new contact instance
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });
        const savedContact = await newContact.save();
        res.status(201).json({message: "Message Send Succesfully", SendMessageDetails : savedContact});
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
