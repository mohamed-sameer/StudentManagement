const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const router = require('./router/student.route');
const app = express();

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
// connect to DB
mongoose.connect('mongodb://localhost:27017/studentManger', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//use router middleware
app.use(router);

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
