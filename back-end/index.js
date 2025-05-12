const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const userRoute = require('./routes/User');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI ||"mongodb+srv://thabangjimmy25:FWE9lnKQ8YaGWZdi@cluster0.ikttdrg.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/user', userRoute);


app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
