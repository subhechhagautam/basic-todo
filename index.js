const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;
const cors = require('cors');
const taskroutes = require('./routes/taskroutes');

app.use(cors());
app.use(express.json());
app.use('/api', taskroutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
