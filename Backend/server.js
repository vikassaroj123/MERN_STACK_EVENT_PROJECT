const express = require('express');
const app = express();
require('dotenv').config();

// Use for frontend connect
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true
};

app.use(cors(corsOptions));
app.options('/send', cors(corsOptions));

// Database connection
const db = require('./db');

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Routes Use start from here
const ContactRoutes = require('./Router/contactRoutes');
app.use('/send', ContactRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
