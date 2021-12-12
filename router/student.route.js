const router = require('express').Router();
const studentController = require('../controllers/student.controller');

// get all students
router.get('/', studentController.index);

// create a new student
router.post('/create', studentController.create);

// update a student
router.get('/update/:id', studentController.edit); // get student data
router.put('/update/:id/', studentController.update); // update student data

// delete a student
router.delete('/delete/:id', studentController.delete);

module.exports = router;
