const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const PORT = 8000;

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

app.get('/party', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      res.status(500).send("Error reading data");
    } else {
      const parsedData = JSON.parse(data);
      res.json(parsedData.party);
    }
  });
});

app.post('/party', upload.single('partySymbol'), (req, res) => {
  const partyData = {
    partyName: req.body.partyName,
    partySymbol: req.file ? `/uploads/${req.file.filename}` : '',  
    partyAbbreviation: req.body.partyAbbreviation,
    leadersName: req.body.leadersName,
    partyManifesto: req.body.partyManifesto,
    contactInformation: {
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      officialAddress: req.body.officialAddress,
    },
    partyRegistrationNumber: req.body.partyRegistrationNumber,
    foundingDate: req.body.foundingDate,
    partyColor: req.body.partyColor,
  };
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      res.status(500).send("Error reading data");
      return;
    }

    const parsedData = JSON.parse(data);
    parsedData.party.push(partyData);

    fs.writeFile('data.json', JSON.stringify(parsedData, null, 2), err => {
      if (err) {
        console.error("Error writing to data.json:", err);
        res.status(500).send("Error saving data");
        return;
      }
      res.status(201).json(partyData); 
    });
  });
});


app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
