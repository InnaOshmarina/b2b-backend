const express = require('express');
//import express from 'express';
const mongoose = require('mongoose');
//import mongoose from 'mongoose';

const users = require('./routes/api/users');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello, Inna and Sasha!'));

//Use Routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Backend running on port ${port}`));