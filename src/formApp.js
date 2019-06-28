const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.get('/', (req, resp) => {
  resp.send('testing...123')
})

app.listen(process.env.PORT || 3002)
