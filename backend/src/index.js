import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sighting Reports
const sightings = [];

app.post('/api/sightings', (req, res) => {
  const {
    location,
    date,
    description,
    dogSize,
    dogColor,
    contactName,
    contactEmail,
    contactPhone,
    additionalInfo,
    imageUrl
  } = req.body;

  const newSighting = {
    id: Date.now().toString(),
    location,
    date,
    description,
    dogSize,
    dogColor,
    contactName,
    contactEmail,
    contactPhone,
    additionalInfo,
    imageUrl,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  sightings.push(newSighting);
  res.status(201).json(newSighting);
});

app.get('/api/sightings', (req, res) => {
  res.json(sightings);
});

app.patch('/api/sightings/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sighting = sightings.find(s => s.id === id);
  if (!sighting) {
    return res.status(404).json({ error: 'Sighting not found' });
  }

  sighting.status = status;
  res.json(sighting);
});

// Volunteer Applications
const volunteers = [];

app.post('/api/volunteers', (req, res) => {
  const newVolunteer = {
    id: Date.now().toString(),
    ...req.body,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  volunteers.push(newVolunteer);
  res.status(201).json(newVolunteer);
});

app.get('/api/volunteers', (req, res) => {
  res.json(volunteers);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});