const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/student-management");

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  EmployeeModel.findOne({email:email})
  .then((user) => {
    if(user) {
      if(user.password === password) {
        res.json({status : "Success", user : {name:user.name, email:user.email}});
      } else {
        res.json({status : "Error", message : "Password doesn't match."})
      }
    } else {
      res.json({status : "Error", message : "User doesn't exists."});
    }
  })
  .catch()
})

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
  .then(employees => res.json(employees))
  .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is running..!");
})