const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const router = require('./router/student.route');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
// connect to DB
mongoose.connect(
  process.env.MONGO_URI || 'mongodb://localhost:27017/studentManger',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//use router middleware
app.use(router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
