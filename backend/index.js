const express = require('express');
const cors = require('cors');  // Add this line
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors());  // Use cors middleware
app.use(express.json());
app.use('/uploads', express.static('./uploads'));

const port = process.env.PORT || 3001;  // Provide a default port if not set

mongoose.connect('mongodb://127.0.0.1:27017/upload_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'upload_db',
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const fileSchema = new mongoose.Schema({
  originalName: String,
  filePath: String,
});

const File = mongoose.model('File', fileSchema);

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const newFile = new File({
      originalName: req.file.originalname,
      filePath: req.file.path,
    });

    await newFile.save();
    console.log('File uploaded and saved to MongoDB:', newFile);
    res.send('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/files', async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
