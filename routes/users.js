const express = require('express');
const app = express.Router();
const {createUser, getUsers} = require('../services/userService');

app.post('/users', async (req, res) => {
    try {
        const [name, email] = req.body;
        const user = await createUser(name, email);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add user' });
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get users' });
    }
});

module.exports = app;