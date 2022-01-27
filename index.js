const express = require('express'); 
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes/v1/api.js');

app.use(cors());
app.use('/', router);

app.listen(process.env.PORT || 8000, () =>
  console.log("Example app listening on port 8000!")
);
