const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json()); // for POST bodies

const BASE_URL = 'https://freeapi.miniprojectideas.com/api/ClientStrive';

// ====================== ROLES ======================
app.get('/roles', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/GetAllRoles`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
});

// ====================== DESIGNATIONS ======================
app.get('/designations', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/GetAllDesignation`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch designations' });
  }
});

// ====================== EMPLOYEES ======================
// Proxy any employee-related request
app.use('/employees', async (req, res) => {
  try {
    const targetUrl = `${BASE_URL}${req.url}`; // forward subpath, e.g. /GetAllEmployee
    let response;

    if (req.method === 'GET') {
      response = await axios.get(targetUrl);
    } else if (req.method === 'POST') {
      response = await axios.post(targetUrl, req.body);
    } else if (req.method === 'DELETE') {
      response = await axios.delete(targetUrl);
    }

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to process client request' });
  }
});

// ====================== CLIENTS ======================
// Proxy any client-related request
app.use('/clients', async (req, res) => {
  try {
    const targetUrl = `${BASE_URL}${req.url}`; // forward subpath, e.g. /GetAllClients
    let response;

    if (req.method === 'GET') {
      response = await axios.get(targetUrl);
    } else if (req.method === 'POST') {
      response = await axios.post(targetUrl, req.body);
    } else if (req.method === 'DELETE') {
      response = await axios.delete(targetUrl);
    }

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to process client request' });
  }
});

// ====================== START SERVER ======================
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});