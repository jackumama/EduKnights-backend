const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Example API route to get users
app.get('/admin/users', (req, res) => {
    const users = [
        { name: 'John Doe', email: 'john@example.com', password: '1234' },
        { name: 'Jane Smith', email: 'jane@example.com', password: 'abcd' }
    ];
    res.json(users);
});

// Fallback for any route that doesn't match an API endpoint or file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
