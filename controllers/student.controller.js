// const mongoose = require('mongoose');
const Student = require('../models/student.model');

module.exports = {
  index: (req, res) => {
    Student.find({}, (err, students) => {
      if (err) res.send(500, err);
      else {
        res.render('studentManagement', { students: students });
      }
    });
  },
  create: (req, res) => {
    if (!req.body || req.body.name === '') res.status(400).redirect('/');
    else {
      const newStudent = new Student({
        name: req.body.name,
        age: req.body.age,
      });
      newStudent.save().then(() => {
        // redirect to home page after saving
        res.redirect('/');
      });
    }
  },
  delete: (req, res) => {
    const studentId = req.params.id;
    Student.findByIdAndDelete(studentId, (err) => {
      if (err) res.status(500, err);
      else res.redirect('/');
    });
  },
  edit: (req, res) => {
    const studentId = req.params.id;
    Student.find({}, (err, student) => {
      if (err) res.status(500, err);
      else {
        res.render('editStudent', { students: student, studentId: studentId });
      }
    });
  },
  update: (req, res) => {
    const studentId = req.params.id;
    if (!req.body) res.status(500).redirect('/');
    else {
      const updateStudent = {
        name: req.body.name,
        age: req.body.age,
      };
      Student.findByIdAndUpdate(studentId, updateStudent, (err) => {
        if (err) return res.send(500, err);
        else {
          res.redirect('/');
        }
      });
    }
  },
};
