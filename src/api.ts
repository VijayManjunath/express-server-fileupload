import express from 'express';
import cors from 'cors';

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: true }));


// Serve static files
app.use(express.static('public'));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});

// Version the api
app.use('/api/v1', api);
